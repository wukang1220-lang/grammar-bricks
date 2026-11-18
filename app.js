'use strict';

const $ = (selector) => document.querySelector(selector);
const main = $('#main');
const sizeSelect = $('#size');
const rateSelect = $('#rate');
const progressDialog = $('#progress-dialog');
const confettiLayer = $('#confetti-layer');
const player = $('#speech-player');
const audioStatus = $('#audio-status');
const stateKey = 'grammar-bricks-v1';
const defaultState = { rate: '1', size: 'large', completed: [] };
const settings = readSettings();
const voices = window.speechSynthesis;
const clipLibrary = { ...speechClips, ...practiceClips };
let playback = null;
let audioNotice;
let confettiCleanup;
let lesson = lessons[0];
let route;
let mode = 0;
let quiz;

function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey)) || {};
    return {
      rate: ['0.6', '0.8', '1', '1.2', '1.4'].includes(saved.rate) ? saved.rate : defaultState.rate,
      size: ['small', 'large', 'xlarge'].includes(saved.size) ? saved.size : defaultState.size,
      completed: Array.isArray(saved.completed) ? saved.completed.filter((id) => lessons.some((item) => item.id === id)) : [],
      ...readStudyRecords(saved)
    };
  } catch {
    return { ...defaultState, completed: [], ...readStudyRecords({}) };
  }
}

function saveSettings() {
  try { localStorage.setItem(stateKey, JSON.stringify(settings)); } catch { /* Settings still work for this visit. */ }
}

function esc(text) {
  return String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function englishOnly(text) {
  const plain = text.replace(/\[\d+\]|_{3,}/g, ' blank ').replace(/\$(\d+)/g, '$1 dollars');
  return (plain.match(/[A-Za-z0-9_][A-Za-z0-9’' ,.!?_:;()/-]*/g) || []).join(' ').replace(/ +/g, ' ').trim();
}

function speakButton(text, label = '聽英文', sequence = null) {
  const words = englishOnly(text);
  if (!words) return '';
  const title = `${label}：${words}`;
  const pieces = sequence ? ` data-audio-pieces="${esc(JSON.stringify(sequence.map(englishOnly)))}"` : '';
  return `<button type="button" class="icon-button" data-say="${esc(words)}"${pieces} data-audio-label="${esc(title)}" aria-label="${esc(title)}" title="${esc(title)}">${icon('volume')}</button>`;
}

function showAudioNotice(message) {
  clearTimeout(audioNotice);
  audioStatus.hidden = false;
  audioStatus.textContent = message;
  audioNotice = setTimeout(() => { audioStatus.hidden = true; }, 5200);
}

function setPlaying(button, active) {
  button.toggleAttribute('data-playing', active);
  if (button.classList.contains('icon-button')) button.innerHTML = icon(active ? 'stop' : 'volume');
  button.setAttribute('aria-label', active ? '停止朗讀' : button.dataset.audioLabel);
}

function stopAudio() {
  if (!playback) return;
  const previous = playback;
  playback = null;
  if (previous.clips) player.pause();
  else voices?.cancel();
  setPlaying(previous.button, false);
}

function playRecorded(current, index = 0) {
  const fail = () => {
    if (playback !== current) return;
    stopAudio();
    speakWithBrowser(current.button);
  };
  player.onended = () => {
    if (playback !== current) return;
    if (index + 1 === current.clips.length) stopAudio();
    else playRecorded(current, index + 1);
  };
  player.onerror = fail;
  player.src = `assets/voice/${current.clips[index]}`;
  player.playbackRate = Number(settings.rate);
  player.play().catch(fail);
}

function speak(button) {
  const sameButton = playback?.button === button;
  stopAudio();
  if (sameButton) return;
  audioStatus.hidden = true;
  const recorded = Object.hasOwn(clipLibrary, button.dataset.say) ? clipLibrary[button.dataset.say] : null;
  const pieces = button.dataset.audioPieces ? JSON.parse(button.dataset.audioPieces) : [];
  const clips = recorded ? [recorded] : pieces.map((piece) => Object.hasOwn(clipLibrary, piece) ? clipLibrary[piece] : null);
  if (!clips.length || clips.some((clip) => !clip)) {
    speakWithBrowser(button);
    return;
  }
  playback = { button, clips };
  setPlaying(button, true);
  playRecorded(playback);
}

function speakWithBrowser(button) {
  if (!voices || !window.SpeechSynthesisUtterance) {
    showAudioNotice('目前無法朗讀這段英文，請再試一次。');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(button.dataset.say);
  const available = voices.getVoices();
  const voice = available.find((item) => item.lang === 'en-US' && item.localService)
    || available.find((item) => item.lang === 'en-US')
    || available.find((item) => /^en(?:-|_)/i.test(item.lang));
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || 'en-US';
  utterance.rate = Number(settings.rate);
  playback = { button, utterance };
  setPlaying(button, true);
  const end = (event) => {
    if (playback?.utterance !== utterance) return;
    setPlaying(button, false);
    playback = null;
    if (event.type === 'error') showAudioNotice('無法播放英文語音。請確認裝置已安裝英文語音，或試試其他瀏覽器。');
  };
  utterance.onend = end;
  utterance.onerror = end;
  voices.speak(utterance);
}

function byGrade(grade) { return lessons.filter((item) => item.grade === grade); }
function isDone(item) { return settings.completed.includes(item.id); }
function currentIndex(item) { return byGrade(item.grade).indexOf(item) + 1; }
function twoDigits(number) { return String(number).padStart(2, '0'); }

function renderSidebar() {
  const units = byGrade(lesson.grade);
  const completed = units.filter(isDone).length;
  $('#grades').innerHTML = gradeNames.map((name, index) => `<button type="button" data-grade="${index}" aria-pressed="${index === lesson.grade}">${name}</button>`).join('');
  $('#grade-label').textContent = `${gradeGoals[lesson.grade]} · ${units.length} 堂課`;
  $('#lesson-nav').innerHTML = units.map((item, index) => `
    <a href="#${item.id}" class="lesson-link" ${route === item.id ? 'aria-current="page"' : ''} ${isDone(item) ? `aria-label="${esc(item.title)}，已通關"` : ''}>
      <span class="number" aria-hidden="true">${twoDigits(index + 1)}</span><span>${esc(item.title)}</span>
      ${isDone(item) ? icon('check') : icon('chevron')}
    </a>`).join('');
  $('#side-count').textContent = `${completed} / ${units.length}`;
  const progress = $('#side-bar');
  progress.max = units.length;
  progress.value = completed;
  const nav = $('#lesson-nav');
  const current = nav.querySelector('[aria-current]');
  if (current && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = current.offsetLeft - nav.firstElementChild.offsetLeft;
}

function sectionHeading(title, symbol, theme = '', tag = '') {
  return `<div class="section-head"><span class="section-icon ${theme}">${icon(symbol)}</span><h2>${title}</h2>${tag ? `<span class="section-tag">${tag}</span>` : ''}</div>`;
}

function modeButtons(target) {
  return lesson.shapes.map(({ label }, index) => `<button type="button" data-mode="${index}" aria-pressed="${index === mode}" aria-controls="${target}">${esc(label)}</button>`).join('');
}

function renderLesson() {
  const position = currentIndex(lesson);
  const title = esc(lesson.title);
  document.title = `${lesson.title}｜英文文法積木`;
  main.innerHTML = `
    <div class="crumb"><span>課程地圖</span>${icon('chevron')}<span>${gradeNames[lesson.grade]}</span>${icon('chevron')}<span>第 ${position} 課</span></div>
    <header class="hero">
      <div class="hero-copy">
        <div class="hero-kicker">${icon('book')}${gradeNames[lesson.grade]} · ${lesson.extension ? '延伸學習' : gradeGoals[lesson.grade]}</div>
        <h1>${title}</h1>
        <div class="english-name"><span lang="en">${esc(lesson.english)}</span> ${speakButton(lesson.english, '聽課名')}</div>
        <p class="summary">${esc(lesson.summary)}</p>
        <button type="button" class="button" data-jump="practice">${icon('flag')} 開始闖關 ${icon('arrow')}</button>
      </div>
      ${artMarkup(lesson, 'hero-art')}
    </header>
    <nav class="jump" aria-label="本課段落">
      <a href="#warmup" data-jump="warmup">${icon('chat')} 情境暖身</a>
      <a href="#formula" data-jump="formula">${icon('brick')} 句型積木</a>
      <a href="#traps" data-jump="traps">${icon('warning')} 易錯地雷</a>
    </nav>
    <section class="panel" id="warmup" tabindex="-1">
      ${sectionHeading('情境暖身', 'chat', '', '20 秒看懂')}
      <p>${esc(lesson.scene)}</p>
      <div class="dialogue">
        ${lesson.dialogue.map(([speaker, english, translation]) => `<div class="speech-card"><strong>${esc(speaker)}</strong><div class="utterance"><span class="example" lang="en">${esc(english)}</span>${speakButton(english)}</div><p class="translation">${esc(translation)}</p></div>`).join('')}
      </div>
    </section>
    <section class="panel" id="formula" tabindex="-1">
      ${sectionHeading('句型公式積木', 'brick', 'blue')}
      <p>${esc(lesson.rule)}</p>
      <div id="modes" class="modes" role="group" aria-label="切換句型">
        ${modeButtons('formula-display')}
      </div>
      <div class="formula-display" id="formula-display"></div>
      <div class="coach"><span class="cat-face" aria-hidden="true"></span><p><b>橘橘提示</b>${esc(lesson.tip)}</p></div>
    </section>
    <section class="panel" id="traps" tabindex="-1">
      ${sectionHeading('易錯地雷區', 'warning', 'amber')}
      <div class="modes" role="group" aria-label="切換易錯句型">${modeButtons('trap-list')}</div>
      <div class="trap-list" id="trap-list" role="region"></div>
    </section>
    ${practicePanel('闖關練習', `題庫 ${lesson.pool.length} 題 · 每回 10 題`)}
    <footer class="footer"><span>英文文法積木</span><span>依文法主題編排 · 各版本授課順序可能不同</span></footer>`;
  renderFormula(false);
  renderTraps();
  renderQuiz();
}

function renderTraps() {
  const list = $('#trap-list');
  list.setAttribute('aria-label', `${lesson.shapes[mode].label}的易錯例句`);
  list.innerHTML = lesson.traps[mode].map(({ wrong, right, note }) => `<article class="trap">
    <div class="trap-pair">
      <div class="trap-line wrong"><div><small>✕ 錯誤</small><span class="example" lang="en">${esc(wrong)}</span></div>${speakButton(wrong, '聽錯誤例句')}</div>
      <div class="trap-line"><div><small>✓ 正確</small><span class="example" lang="en">${esc(right)}</span></div>${speakButton(right, '聽正確例句')}</div>
    </div><p>${esc(note)}</p>
  </article>`).join('');
}

function blockColor(role) {
  const colors = { 'S 主詞': 'subject', '子句主詞': 'subject', 'V 動詞': 'verb', '子句動詞': 'verb', 'O 受詞': 'object', 'C 補語': 'complement', '助動詞': 'aux', '疑問詞': 'question' };
  return colors[role] || '';
}

function renderFormula(animate) {
  const display = $('#formula-display');
  const pastPositions = new Map([...display.querySelectorAll('[data-block]')].map((block) => [block.dataset.block, block.getBoundingClientRect()]));
  const { label, punctuation, blocks } = lesson.shapes[mode];
  const sentence = blocks.map((block) => block.text).join(' ') + punctuation;
  display.innerHTML = `<div class="bricks" role="group" aria-label="${esc(label)}句型積木">
    ${blocks.map((block) => {
      const description = esc(`聽積木：${block.text}，${block.role}`);
      return `<button type="button" class="brick ${blockColor(block.role)}" data-block="${block.id}" data-say="${esc(block.text)}" data-audio-label="${description}" title="聽這塊積木" aria-label="${description}"><span class="role">${esc(block.role)}</span><span class="word" lang="en">${esc(block.text)}</span></button>`;
    }).join('<span class="join" aria-hidden="true">+</span>')}
    <span class="join" aria-hidden="true">${punctuation}</span></div>${speakButton(sentence, '聽完整句子')}`;
  if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (const block of display.querySelectorAll('[data-block]')) {
    const from = pastPositions.get(block.dataset.block);
    const to = block.getBoundingClientRect();
    const start = from ? { transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)` } : { opacity: 0, transform: 'translateY(-8px)' };
    block.animate([start, { transform: 'none', opacity: 1 }], { duration: 290, easing: 'cubic-bezier(.2,.72,.33,1)' });
  }
}

function scramble(length) {
  const order = Array.from({ length }, (_, index) => index);
  for (let end = length - 1; end > 0; end--) {
    const position = Math.floor(Math.random() * (end + 1));
    [order[end], order[position]] = [order[position], order[end]];
  }
  if (order.every((value, index) => value === index)) order.push(order.shift());
  return order;
}

function startQuiz(kind, tasks, unit = null) {
  const prepared = tasks.map((task) => task.type === 'pick' ? { ...task, choices: shuffled(task.choices) } : task);
  quiz = { kind, unit, day: studyDate(), tasks: prepared, answers: [], index: 0, initialStars: sumStars(settings), finished: false };
  resetQuestion();
}

function resetQuestion() {
  const task = quiz.tasks[quiz.index];
  Object.assign(quiz, { selected: null, ordered: [], pieces: task?.type === 'build' ? scramble(task.answer.length) : [], status: '' });
}

function quizPrompt(text) {
  return esc(text).replace(/[A-Za-z_][A-Za-z0-9_ .!?&;#,’'/-]*/g, (match) => `<span lang="en">${match}</span>`);
}

function celebrate(completed = false) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#ff537a', '#ff9d24', '#f7cc18', '#21ba8b', '#3d9fff', '#9a65ed'];
  const particles = document.createDocumentFragment();
  const count = completed ? 240 : 160;
  for (let index = 0; index < count; index++) {
    const particle = document.createElement('span');
    particle.className = 'confetti-particle';
    if (index % 5 === 0) {
      particle.classList.add('flower');
      particle.textContent = '🌸';
    } else if (index % 3 === 0) {
      particle.classList.add('petal');
    }
    particle.style.setProperty('--x', `${Math.random() * 100}%`);
    particle.style.setProperty('--size', `${6 + Math.random() * 9}px`);
    particle.style.setProperty('--color', colors[index % colors.length]);
    particle.style.setProperty('--drift', `${Math.random() * 150 - 75}px`);
    particle.style.setProperty('--spin', `${Math.random() * 1440 - 720}deg`);
    particle.style.setProperty('--delay', `${Math.random() * 310}ms`);
    particle.style.setProperty('--duration', `${(completed ? 1750 : 1350) + Math.random() * 1000}ms`);
    particles.append(particle);
  }
  confettiLayer.replaceChildren(particles);
  clearTimeout(confettiCleanup);
  confettiCleanup = setTimeout(() => confettiLayer.replaceChildren(), 3200);
}

const stillFlowers = '<span class="still-flowers" aria-hidden="true">🌸 🌼 🌸 🌼 🌸</span>';

function renderQuiz() {
  const container = $('#quiz');
  const { index, tasks, selected, ordered, pieces, status, finished, kind, unit } = quiz;
  if (finished) {
    const score = quiz.answers.filter(Boolean).length;
    const ranked = kind === 'lesson' || kind === 'exam';
    const totalStars = sumStars(settings);
    const unlocked = catCollection.filter(([, need]) => quiz.initialStars < need && need <= totalStars).map(([, , name]) => name);
    const next = kind === 'lesson' && lessons[lessons.indexOf(unit) + 1];
    const details = ranked ? `本回星等 ${starsMarkup(studyStars(score))} · 最佳 ${settings.best[unit.id]} / ${roundLength} 題`
      : kind === 'review' ? `本回訂正 ${quiz.answers.filter((right, slot) => right && settings.mistakes[tasks[slot].id]?.clearedAt).length} 題`
      : '今日加練已完成';
    container.innerHTML = `<div class="finish">
      <span class="cat-face" data-pose="finish" aria-hidden="true"></span><h3 id="quiz-title" tabindex="-1">這回練習完成！</h3>
      <p><strong>首次答對 ${score} / ${tasks.length} 題</strong></p><p>${details}</p>
      ${unlocked.length ? `<p class="unlocks">新解鎖 ${unlocked.join('、')} · <a href="#collection">看圖鑑</a></p>` : ''}
      ${stillFlowers}
      <div class="quiz-controls">${ranked ? `<button type="button" class="button secondary" data-action="again">${icon('reset')} 再抽 10 題</button>` : ''}
      ${next ? `<a class="button" href="#${next.id}">下一課 ${icon('arrow')}</a>` : `<a class="button secondary" href="#${kind === 'daily' ? 'review' : 'today'}">${kind === 'daily' ? '錯題本' : '今日任務'}</a>`}
      ${ranked ? '<a class="button secondary" href="#review">查看錯題</a>' : ''}</div>
    </div>`;
    return;
  }
  const task = tasks[index];
  const done = status === 'correct';
  const label = task.type === 'build' ? '點選積木來拼句，點上方積木可撤回。' : '點選答案，看看橘橘怎麼解釋。';
  const choices = task.type === 'pick' && task.choices.map((choice, index) => {
    const active = selected === index;
    return `<div class="choice"><button type="button" data-choice="${index}" class="${active ? (done ? 'right' : 'incorrect') : ''}" ${done ? 'disabled' : ''} aria-pressed="${active}" ${active && !done ? 'aria-describedby="feedback"' : ''}><span lang="en">${esc(choice)}</span>${active ? (done ? ' ✓' : ' ✕') : ''}</button>${speakButton(choice, '聽選項')}</div>`;
  }).join('');
  const tiles = task.type === 'build' && pieces.map((index) => {
    const word = esc(task.answer[index]);
    return `<span class="tile-wrap"><button type="button" class="tile" data-add="${index}" ${ordered.includes(index) || done ? 'disabled' : ''}><span lang="en">${word}</span></button>${speakButton(task.answer[index], '聽積木')}</span>`;
  }).join('');
  const context = task.context ? `<details class="reading-context" open><summary>${esc(task.context.title)}</summary><div class="utterance"><p lang="en">${esc(task.context.text)}</p>${speakButton(task.context.text, '聽閱讀素材')}</div></details>` : '';
  const answer = task.type === 'build' ? task.answer.join(' ') : task.answer;
  container.innerHTML = `
    <div class="round-progress"><strong>第 ${index + 1} / ${tasks.length} 題</strong><progress aria-label="作答進度" max="${tasks.length}" value="${quiz.answers.length}"></progress>${unit && settings.best[unit.id] !== undefined ? `<span>最佳 ${starsMarkup(studyStars(settings.best[unit.id]))}</span>` : ''}</div>
    ${kind === 'review' || kind === 'daily' ? `<p class="question-source">${esc(studySources.get(task.source).title)}</p>` : ''}
    ${context}
    <div class="quiz-text"><h3 id="quiz-title" tabindex="-1">${quizPrompt(task.prompt)}</h3>${speakButton(task.prompt, '聽題目英文')}</div>
    <p class="translation" style="margin-bottom: .55rem">${label}</p>
    ${choices ? `<div class="choices">${choices}</div>` : `
    <div class="answer-line" role="group" aria-label="你的拼句">
      ${ordered.length ? ordered.map((index) => `<button type="button" class="tile" data-remove="${index}" ${done ? 'disabled' : ''} title="移除這塊積木"><span lang="en">${esc(task.answer[index])}</span></button>`).join('') + speakButton(ordered.map((index) => task.answer[index]).join(' '), '聽目前拼句', ordered.map((index) => task.answer[index])) : '<p>句子會出現在這裡。</p>'}
    </div><div class="tiles" role="group" aria-label="可選的句型積木">${tiles}</div>
    ${!done ? `<div class="quiz-controls"><button type="button" class="button" data-action="check-order" ${ordered.length !== task.answer.length ? 'disabled' : ''}>檢查句型</button><button type="button" class="button secondary" data-action="reset-order" ${ordered.length ? '' : 'disabled'}>${icon('reset')} 重排</button></div>` : ''}`}
    <div id="feedback" class="feedback ${done ? 'good' : ''}" role="status" tabindex="-1">${status ? `
      <div class="feedback-copy"><span class="cat-face" data-pose="${done ? 'correct' : 'retry'}" aria-hidden="true"></span><p><b>${done ? '✓ 答對了！' : '再試一次！'}</b> ${esc(done ? task.reason : task.hint)}</p></div>
      ${done ? stillFlowers : `<details class="answer-key"><summary>看正解</summary><div class="utterance"><strong lang="en">${esc(answer)}</strong>${speakButton(answer,'聽正解')}</div><p>${esc(task.reason)}</p></details>`}` : ''}</div>
    ${quiz.answers.length > index ? `<div class="quiz-controls"><button type="button" class="button" data-action="next">${index === tasks.length - 1 ? '完成這回' : '下一題'} ${icon('arrow')}</button></div>` : ''}`;
}

function updateQuiz(focusSelector) {
  stopAudio();
  renderQuiz();
  (focusSelector && $(focusSelector) || $('#quiz-title')).focus({ preventScroll: true });
}

function checkAnswer(correct) {
  const task = quiz.tasks[quiz.index];
  if (quiz.answers.length === quiz.index) {
    quiz.answers.push(correct);
    const dayKey = quiz.kind === 'daily' ? quiz.day : studyDate();
    const day = settings.daily[dayKey] ||= emptyDay();
    const previous = settings.mistakes[task.id];
    if (correct) {
      if (!day.right.includes(task.id)) day.right.push(task.id);
      if (previous && !previous.clearedAt && (quiz.kind === 'review' || quiz.kind === 'daily')) previous.clearedAt = Date.now();
    } else {
      settings.mistakes[task.id] = { count: (previous?.count || 0) + 1, lastAt: Date.now(), clearedAt: null };
    }
    saveSettings();
    renderStudyNavigation();
  }
  quiz.status = correct ? 'correct' : 'incorrect';
  updateQuiz('#feedback');
  $('#feedback').scrollIntoView({ block: 'nearest' });
  if (correct) celebrate();
}

function jumpTo(id) {
  const target = document.getElementById(id);
  target.focus({ preventScroll: true });
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}

function showProgress() {
  $('#progress-content').innerHTML = `<p class="mission-summary"><strong>累積 ${sumStars(settings)} 星</strong><a href="#collection" data-action="close-progress">橘橘圖鑑</a></p>` + gradeNames.map((name, index) => {
    const units = byGrade(index);
    const done = units.filter(isDone);
    return `<div class="progress-row"><div><strong>${name}</strong><b>${done.length} / ${units.length} 堂</b></div><progress aria-label="${name}完成進度" max="${units.length}" value="${done.length}"></progress><p>${done.length ? `已通關：${done.map((item) => esc(item.title)).join('、')}` : '還沒有通關紀錄'}</p></div>`;
  }).join('') + '<p class="local-note">完成一回並首次答對至少 6 題，即記為通關。進度、星等與錯題保存在這個瀏覽器。</p>';
  progressDialog.showModal();
}

function openLesson(moveFocus = true) {
  const requested = location.hash.slice(1);
  const id = requested === 'conditionals' ? 'real-if' : requested;
  if (id !== requested) history.replaceState(null, '', `#${id}`);
  const source = studySources.get(id);
  const knownHub = hubPages.some(([key]) => key === id);
  const target = source?.grade !== undefined ? source : source || knownHub ? null : lessons[0];
  const nextRoute = target?.id || id;
  if (route === nextRoute && moveFocus) {
    jumpTo('main');
    return;
  }
  stopAudio();
  route = nextRoute;
  mode = 0;
  quiz = null;
  if (target) {
    lesson = target;
    startQuiz('lesson', drawUnit(target), target);
    renderLesson();
  } else {
    if (source) startQuiz('exam', drawUnit(source), source);
    document.title = `${source?.title || hubPages.find(([key]) => key === route)[2]}｜英文文法積木`;
    renderHub();
  }
  renderSidebar();
  renderStudyNavigation();
  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function openReview(tasks) {
  if (!tasks.length) return;
  startQuiz('review', tasks);
  renderReview();
  jumpTo('practice');
}

function openDaily() {
  const date = studyDate();
  const day = settings.daily[date] ||= emptyDay();
  if (day.plan.length < 3) {
    const missed = shuffled(pendingMistakes(settings).map(([id]) => id)).slice(0, 3);
    const gradeBank = byGrade(lesson.grade).flatMap((unit) => unit.pool.map((task) => task.id));
    day.plan = [...missed, ...shuffled(gradeBank.filter((id) => !missed.includes(id))).slice(0, 3 - missed.length)];
    saveSettings();
  }
  startQuiz('daily', day.plan.map((id) => questionsById.get(id)));
  renderToday();
  jumpTo('practice');
}

function finishQuiz() {
  const score = quiz.answers.filter(Boolean).length;
  quiz.finished = true;
  if (quiz.unit) {
    const id = quiz.unit.id;
    settings.best[id] = Math.max(settings.best[id] || 0, score);
    const day = settings.daily[studyDate()] ||= emptyDay();
    day.rounds += 1;
    if (quiz.kind === 'lesson' && studyStars(score) > 0 && !isDone(quiz.unit)) settings.completed.push(id);
  }
  if (quiz.kind === 'daily') settings.daily[quiz.day].extra = true;
  saveSettings();
  renderStudyNavigation();
  renderSidebar();
  if (quiz.kind === 'daily' || quiz.kind === 'review') renderHub();
}

function handleAction(action) {
  switch (action) {
    case 'progress': showProgress(); break;
    case 'close-progress': progressDialog.close(); break;
    case 'pending':
    case 'archived':
      showReviewed = action === 'archived';
      renderReview();
      $(`[data-action="${action}"]`).focus();
      break;
    case 'review-start': openReview(pendingMistakes(settings).slice(0, roundLength).map(([id]) => questionsById.get(id))); break;
    case 'daily-start': openDaily(); break;
    case 'check-order': {
      const answer = quiz.tasks[quiz.index].answer;
      checkAnswer(quiz.ordered.length === answer.length && quiz.ordered.every((value, index) => value === index));
      break;
    }
    case 'reset-order': quiz.ordered = []; quiz.status = ''; updateQuiz('[data-add]:enabled'); break;
    case 'again': startQuiz(quiz.kind, drawUnit(quiz.unit), quiz.unit); updateQuiz('#quiz-title'); jumpTo('practice'); break;
    case 'next': {
      if (quiz.answers.length <= quiz.index || quiz.finished) return;
      if (quiz.index === quiz.tasks.length - 1) {
        finishQuiz();
      } else {
        quiz.index += 1;
        resetQuestion();
      }
      updateQuiz('#quiz-title');
      $('#quiz-title').scrollIntoView({ block: 'nearest' });
      if (quiz.finished) celebrate(true);
      break;
    }
  }
}

document.addEventListener('click', (event) => {
  const control = event.target.closest('button, a');
  if (!control) return;
  const data = control.dataset;
  if (data.say) { speak(control); return; }
  if (data.jump) { event.preventDefault(); jumpTo(data.jump); return; }
  if (data.grade !== undefined) {
    const grade = Number(data.grade);
    if (grade !== lesson.grade || route !== lesson.id) location.hash = byGrade(grade)[0].id;
    return;
  }
  if (data.term !== undefined || data.publisher !== undefined) {
    if (data.term !== undefined) syllabusTerm = Number(data.term);
    else syllabusPublisher = Number(data.publisher);
    renderSyllabus();
    $(data.term !== undefined ? `[data-term="${syllabusTerm}"]` : `[data-publisher="${syllabusPublisher}"]`).focus({ preventScroll: true });
    return;
  }
  if (data.reviewId) { openReview([questionsById.get(data.reviewId)]); return; }
  if (data.mode !== undefined) {
    const target = Number(data.mode);
    if (mode === target) return;
    stopAudio();
    mode = target;
    for (const button of main.querySelectorAll('[data-mode]')) {
      button.setAttribute('aria-pressed', String(Number(button.dataset.mode) === mode));
    }
    renderFormula(true);
    renderTraps();
    return;
  }
  if (data.choice !== undefined) {
    const task = quiz.tasks[quiz.index];
    quiz.selected = Number(data.choice);
    checkAnswer(task.choices[quiz.selected] === task.answer);
    return;
  }
  if (data.add !== undefined) {
    quiz.ordered.push(Number(data.add));
    quiz.status = '';
    updateQuiz(quiz.ordered.length === quiz.pieces.length ? '[data-action="check-order"]' : '[data-add]:enabled');
    return;
  }
  if (data.remove !== undefined) {
    quiz.ordered = quiz.ordered.filter((index) => index !== Number(data.remove));
    quiz.status = '';
    updateQuiz(`[data-add="${data.remove}"]`);
    return;
  }
  if (data.action) handleAction(data.action);
});

sizeSelect.value = settings.size;
rateSelect.value = settings.rate;
document.documentElement.dataset.size = settings.size;
sizeSelect.addEventListener('change', () => {
  settings.size = sizeSelect.value;
  document.documentElement.dataset.size = settings.size;
  saveSettings();
});
rateSelect.addEventListener('change', () => {
  settings.rate = rateSelect.value;
  saveSettings();
  if (playback?.clips) {
    player.playbackRate = Number(settings.rate);
  } else if (playback) {
    const button = playback.button;
    stopAudio();
    speak(button);
  }
});
window.addEventListener('hashchange', () => openLesson());
window.addEventListener('pagehide', stopAudio);
openLesson(false);
