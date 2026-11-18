'use strict';

const $ = (selector) => document.querySelector(selector);
const main = $('#main');
const sizeSelect = $('#size');
const rateSelect = $('#rate');
const progressDialog = $('#progress-dialog');
const player = $('#speech-player');
const audioStatus = $('#audio-status');
const stateKey = 'grammar-bricks-v1';
const defaultState = { rate: '1', size: 'large', completed: [] };
const settings = readSettings();
const steps = ['找線索', '拼句型', '用在生活'];
const voices = window.speechSynthesis;
let playback = null;
let audioNotice;
let lesson;
let mode = 0;
let quiz;

function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey)) || {};
    return {
      rate: ['0.6', '0.8', '1', '1.2', '1.4'].includes(saved.rate) ? saved.rate : defaultState.rate,
      size: ['small', 'large', 'xlarge'].includes(saved.size) ? saved.size : defaultState.size,
      completed: Array.isArray(saved.completed) ? saved.completed.filter((id) => lessons.some((item) => item.id === id)) : []
    };
  } catch {
    return { ...defaultState, completed: [] };
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
  return (text.match(/[A-Za-z_][A-Za-z0-9’' ,.!?_:;()/-]*/g) || []).join(' ')
    .replaceAll('___', 'blank').trim();
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
  const recorded = Object.hasOwn(speechClips, button.dataset.say) ? speechClips[button.dataset.say] : null;
  const pieces = button.dataset.audioPieces ? JSON.parse(button.dataset.audioPieces) : [];
  const clips = recorded ? [recorded] : pieces.map((piece) => speechClips[piece]);
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
    <a href="#${item.id}" class="lesson-link" ${item === lesson ? 'aria-current="page"' : ''} ${isDone(item) ? `aria-label="${esc(item.title)}，已通關"` : ''}>
      <span class="number" aria-hidden="true">${twoDigits(index + 1)}</span><span>${esc(item.title)}</span>
      ${isDone(item) ? icon('check') : icon('chevron')}
    </a>`).join('');
  $('#side-count').textContent = `${completed} / ${units.length}`;
  const progress = $('#side-bar');
  progress.max = units.length;
  progress.value = completed;
  const nav = $('#lesson-nav');
  const current = nav.querySelector('[aria-current]');
  if (nav.scrollWidth > nav.clientWidth) nav.scrollLeft = current.offsetLeft - nav.firstElementChild.offsetLeft;
}

function sectionHeading(title, symbol, theme = '', tag = '') {
  return `<div class="section-head"><span class="section-icon ${theme}">${icon(symbol)}</span><h2>${title}</h2>${tag ? `<span class="section-tag">${tag}</span>` : ''}</div>`;
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
      <div class="hero-art"><img src="assets/juju.jpg" width="1536" height="1024" alt="橘貓嚮導橘橘捧著書，身旁放著彩色積木"></div>
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
        ${lesson.shapes.map((form, index) => `<button type="button" data-mode="${index}" aria-pressed="${index === 0}">${esc(form.label)}</button>`).join('')}
      </div>
      <div class="formula-display" id="formula-display"></div>
      <div class="coach"><img class="cat-face" src="assets/juju.jpg" alt="" width="38" height="38"><p><b>橘橘提示</b>${esc(lesson.tip)}</p></div>
    </section>
    <section class="panel" id="traps" tabindex="-1">
      ${sectionHeading('易錯地雷區', 'warning', 'amber')}
      <div class="trap-list">
        ${lesson.traps.map(({ wrong, right, note }) => `<article class="trap">
          <div class="trap-pair">
            <div class="trap-line wrong"><div><small>✕ 錯誤</small><span class="example" lang="en">${esc(wrong)}</span></div>${speakButton(wrong, '聽錯誤例句')}</div>
            <div class="trap-line"><div><small>✓ 正確</small><span class="example" lang="en">${esc(right)}</span></div>${speakButton(right, '聽正確例句')}</div>
          </div><p>${esc(note)}</p>
        </article>`).join('')}
      </div>
    </section>
    <section class="panel practice" id="practice" tabindex="-1">
      ${sectionHeading('闖關練習', 'flag', '', '3 關')}
      <div id="quiz"></div>
    </section>
    <footer class="footer"><span>英文文法積木</span><span>依文法主題編排 · 各版本授課順序可能不同</span></footer>`;
  renderFormula(false);
  renderQuiz();
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

function resetQuiz(step = 0) {
  const task = lesson.tasks[step];
  quiz = { step, selected: null, ordered: [], pieces: task?.type === 'build' ? scramble(task.answer.length) : [], status: '', finished: false };
}

function quizPrompt(text) {
  return esc(text).replace(/[A-Za-z_][A-Za-z0-9_ .!?&;#,’'/-]*/g, (match) => `<span lang="en">${match}</span>`);
}

function renderQuiz() {
  const container = $('#quiz');
  const { step, selected, ordered, pieces, status, finished } = quiz;
  if (finished) {
    const next = lessons[lessons.indexOf(lesson) + 1];
    container.innerHTML = `<div class="finish">
      <span class="star">${icon('star')}</span><h3 id="quiz-title" tabindex="-1">三關全過！</h3>
      <p>橘橘說：「你會看線索，也會把這個句型用在生活裡了！」</p>
      <div class="quiz-controls"><button type="button" class="button secondary" data-action="again">${icon('reset')} 再玩一次</button>
      ${next ? `<a class="button" href="#${next.id}">下一課 ${icon('arrow')}</a>` : '<button type="button" class="button" data-action="progress">查看學習進度</button>'}</div>
    </div>`;
    return;
  }
  const task = lesson.tasks[step];
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
  container.innerHTML = `
    <div class="quest-track" aria-label="闖關進度">${steps.map((name, index) => `<span ${index === step ? 'aria-current="step"' : ''} class="${index < step || (index === step && done) ? 'passed' : ''}"><b>${index < step || (index === step && done) ? '✓' : index + 1}</b>${name}</span>`).join('')}</div>
    <div class="quiz-text"><h3 id="quiz-title" tabindex="-1">${quizPrompt(task.prompt)}</h3>${speakButton(task.prompt, '聽題目英文')}</div>
    <p class="translation" style="margin-bottom: .55rem">${label}</p>
    ${choices ? `<div class="choices">${choices}</div>` : `
    <div class="answer-line" role="group" aria-label="你的拼句">
      ${ordered.length ? ordered.map((index) => `<button type="button" class="tile" data-remove="${index}" ${done ? 'disabled' : ''} title="移除這塊積木"><span lang="en">${esc(task.answer[index])}</span></button>`).join('') + speakButton(ordered.map((index) => task.answer[index]).join(' '), '聽目前拼句', ordered.map((index) => task.answer[index])) : '<p>句子會出現在這裡。</p>'}
    </div><div class="tiles" role="group" aria-label="可選的句型積木">${tiles}</div>
    ${!done ? `<div class="quiz-controls"><button type="button" class="button" data-action="check-order" ${ordered.length !== task.answer.length ? 'disabled' : ''}>檢查句型</button><button type="button" class="button secondary" data-action="reset-order" ${ordered.length ? '' : 'disabled'}>${icon('reset')} 重排</button></div>` : ''}`}
    <div id="feedback" class="feedback ${done ? 'good' : ''}" role="status" tabindex="-1">${status ? `
      <div class="feedback-copy"><img class="cat-face" src="assets/juju.jpg" alt="" width="38" height="38"><p><b>${done ? '✓ 答對了！' : '再試一次！'}</b> ${esc(done ? task.reason : task.hint)}</p></div>
      ${done ? `<button type="button" class="button next" data-action="next">${step === steps.length - 1 ? '完成闖關' : '下一關'} ${icon('arrow')}</button>` : ''}` : ''}</div>`;
}

function updateQuiz(focusSelector) {
  stopAudio();
  renderQuiz();
  (focusSelector && $(focusSelector) || $('#quiz-title')).focus({ preventScroll: true });
}

function jumpTo(id) {
  const target = document.getElementById(id);
  target.focus({ preventScroll: true });
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}

function showProgress() {
  $('#progress-content').innerHTML = gradeNames.map((name, index) => {
    const units = byGrade(index);
    const done = units.filter(isDone);
    return `<div class="progress-row"><div><strong>${name}</strong><b>${done.length} / ${units.length} 堂</b></div><progress aria-label="${name}完成進度" max="${units.length}" value="${done.length}"></progress><p>${done.length ? `已通關：${done.map((item) => esc(item.title)).join('、')}` : '還沒有通關紀錄'}</p></div>`;
  }).join('') + '<p class="local-note">完成一課的三關後，進度會儲存在這個瀏覽器。</p>';
  progressDialog.showModal();
}

function openLesson(moveFocus = true) {
  const id = location.hash.slice(1);
  const target = lessons.find((item) => item.id === id) || lessons[0];
  if (target === lesson && moveFocus) {
    jumpTo('main');
    return;
  }
  stopAudio();
  lesson = target;
  mode = 0;
  resetQuiz();
  renderSidebar();
  renderLesson();
  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function handleAction(action) {
  switch (action) {
    case 'progress': showProgress(); break;
    case 'check-order': {
      const answer = lesson.tasks[quiz.step].answer;
      quiz.status = quiz.ordered.length === answer.length && quiz.ordered.every((value, index) => value === index) ? 'correct' : 'incorrect';
      updateQuiz('#feedback');
      break;
    }
    case 'reset-order': quiz.ordered = []; quiz.status = ''; updateQuiz('[data-add]:enabled'); break;
    case 'again': resetQuiz(); updateQuiz('#quiz-title'); break;
    case 'next': {
      if (quiz.status !== 'correct') return;
      if (quiz.step === steps.length - 1) {
        quiz.finished = true;
        if (!isDone(lesson)) {
          settings.completed.push(lesson.id);
          saveSettings();
          renderSidebar();
        }
      } else {
        resetQuiz(quiz.step + 1);
      }
      updateQuiz('#quiz-title');
      $('#quiz-title').scrollIntoView({ block: 'nearest' });
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
    if (grade !== lesson.grade) location.hash = byGrade(grade)[0].id;
    return;
  }
  if (data.mode !== undefined) {
    const target = Number(data.mode);
    if (mode === target) return;
    stopAudio();
    $('#modes [aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    control.setAttribute('aria-pressed', 'true');
    mode = target;
    renderFormula(true);
    return;
  }
  if (data.choice !== undefined) {
    const task = lesson.tasks[quiz.step];
    quiz.selected = Number(data.choice);
    quiz.status = task.choices[quiz.selected] === task.answer ? 'correct' : 'incorrect';
    updateQuiz('#feedback');
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
