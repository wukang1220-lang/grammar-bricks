const hubPages = [
  ['today','flag','今日任務'], ['review','reset','錯題本'], ['collection','star','橘橘圖鑑'],
  ['mixed','book','會考題組'], ['syllabus','grid','三版進度']
];
let syllabusTerm = 0;
let syllabusPublisher = -1;
let showReviewed = false;

function artMarkup(unit, className) {
  const { slot, alt, sheet = `grade-${unit.grade + 7}` } = unit.art;
  const twoColumns = ['stories','bridge','review'].includes(sheet);
  const cols = twoColumns ? 2 : 3;
  const position = `--art-x:${(slot % cols) * (100 / (cols - 1))}%;--art-y:${Math.floor(slot / cols) * 100}%`;
  return `<div class="cat-art ${className} sheet-${sheet}${twoColumns ? ' square-sheet' : ''}" style="${position}" role="img" aria-label="${esc(alt)}"></div>`;
}

function starsMarkup(count) {
  return `<span class="star-rating" role="img" aria-label="${count} 顆星，滿分 3 顆"><span aria-hidden="true">${'★'.repeat(count)}${'☆'.repeat(3 - count)}</span></span>`;
}

function renderStudyNavigation() {
  const missed = pendingMistakes(settings).length;
  const total = sumStars(settings);
  const today = settings.daily[studyDate()] || emptyDay();
  const counts = { today: `${dailyStars(today)}/3`, review: missed || '', collection: total ? `${total} ★` : '' };
  $('#hub-nav').innerHTML = hubPages.map(([id,symbol,name]) => {
    const active = route === id || (id === 'mixed' && examSets.some((set) => set.id === route));
    return `<a href="#${id}" ${active ? 'aria-current="page"' : ''}>${icon(symbol)} <span>${name}</span>${counts[id] !== undefined && counts[id] !== '' ? `<small>${counts[id]}</small>` : ''}</a>`;
  }).join('');
}

function hubHeader(title, subtitle, pose = '') {
  return `<header class="hub-header"><div><h1>${title}</h1><p>${subtitle}</p></div><span class="cat-face" ${pose ? `data-pose="${pose}"` : ''} aria-hidden="true"></span></header>`;
}

function practicePanel(title, tag) {
  return `<section class="panel practice" id="practice" tabindex="-1">${sectionHeading(title, 'flag', '', tag)}<div id="quiz"></div></section>`;
}

function renderToday() {
  const date = studyDate();
  const day = settings.daily[date] || emptyDay();
  const goals = [ ['完成一回課程或混合題組', Math.min(day.rounds,1),1], ['首次作答答對 5 道不同題目',Math.min(day.right.length,5),5], ['完成今日加練 3 題',Number(day.extra),1] ];
  main.innerHTML = `${hubHeader('今日任務', `${date}・台灣時間每日更新`, day.extra ? 'correct' : '')}
    <section class="panel"><div class="mission-summary"><strong>今日已得 ${dailyStars(day)} / 3 星</strong><span>每項任務獎勵 1 星</span></div>
      ${goals.map(([label,value,max]) => `<div class="mission"><span class="mission-mark" aria-hidden="true">${value >= max ? '✓' : '☆'}</span><div><strong>${label}</strong><progress aria-label="${label}" value="${value}" max="${max}"></progress></div><b>${value >= max ? '完成' : `${value}/${max}`}</b></div>`).join('')}
      <div class="quiz-controls"><button type="button" class="button" data-action="daily-start">${day.extra ? '再練今日 3 題' : '開始今日加練'} ${icon('arrow')}</button><a class="button secondary" href="#${lesson.id}">到課程練習</a></div>
      <p class="local-note">加練優先複習錯題，題目不足時由目前年級補足。</p>
    </section>${quiz?.kind === 'daily' ? practicePanel('今日加練','3 題') : ''}`;
  if (quiz?.kind === 'daily') renderQuiz();
}

function renderReview() {
  const pending = pendingMistakes(settings);
  const archived = Object.entries(settings.mistakes).filter(([, entry]) => entry.clearedAt).sort(([, a], [, b]) => b.clearedAt - a.clearedAt);
  const list = showReviewed ? archived : pending;
  main.innerHTML = `${hubHeader('錯題本', '首次答錯的題目會記在這裡。複習時首次答對，即可移入已訂正。','retry')}
    <section class="panel">
      <div class="list-controls">
        <div class="modes" role="group" aria-label="錯題列表">
          <button type="button" data-action="pending" aria-pressed="${!showReviewed}">待複習（${pending.length}）</button>
          <button type="button" data-action="archived" aria-pressed="${showReviewed}">已訂正（${archived.length}）</button>
        </div>
        ${pending.length && !showReviewed ? '<button type="button" class="button" data-action="review-start">開始錯題複習（最多 10 題）</button>' : ''}
      </div>
      ${list.length ? `<ul class="review-list">${list.map(([id, entry]) => {
        const task = questionsById.get(id);
        const source = studySources.get(task.source);
        return `<li><div><a class="question-source" href="#${source.id}">${esc(source.title)}</a><p>${quizPrompt(task.prompt)}</p><small>答錯 ${entry.count} 次${showReviewed ? ' · 已訂正' : ''}</small></div><button type="button" class="button secondary" data-review-id="${esc(id)}">${showReviewed ? '再練' : '複習'}</button></li>`;
      }).join('')}</ul>` : `<p>${showReviewed ? '目前還沒有訂正紀錄。' : '目前沒有待複習的題目。做完課程或混合題組再來看看。'}</p>`}
    </section>${quiz?.kind === 'review' ? practicePanel('錯題複習', `${quiz.tasks.length} 題`) : ''}`;
  if (quiz?.kind === 'review') renderQuiz();
}

function renderCollection() {
  const total = sumStars(settings);
  const unlocked = catCollection.filter(([, need]) => total >= need).length;
  main.innerHTML = `${hubHeader('橘橘圖鑑', `累積 ${total} 星・已解鎖 ${unlocked} / ${catCollection.length} 張`, 'finish')}
    <section class="panel"><p>每回首次答對 6／8／10 題可得 1／2／3 星。同一課或題組只採最佳星等。今日任務每完成一項也可獲得 1 星。</p>
    <div class="collection-grid">${catCollection.map(([id,need,name]) => {
      const owned = total >= need;
      return `<article class="collect-card${owned ? '' : ' locked'}">${owned ? artMarkup(studySources.get(id), 'collect-art') : `<div class="collect-art locked-art" aria-hidden="true">${icon('lock')}</div>`}<h2>${name}</h2><p>${owned ? '已解鎖' : `累積 ${need} 星解鎖`}</p></article>`;
    }).join('')}</div></section>`;
}

function renderExamIndex() {
  main.innerHTML = `${hubHeader('會考式混合題組', '每回從三篇原創素材中抽兩篇，共 10 題。維持文章分組，選項隨機排列。')}
    <div class="exam-grid">${examSets.map((set) => `<article class="panel exam-card">${artMarkup(set,'exam-art')}<h2>${set.title}</h2><p>${set.description}</p><div class="exam-controls">${starsMarkup(studyStars(settings.best[set.id] || 0))}<a class="button" href="#${set.id}">進入題組 ${icon('arrow')}</a></div></article>`).join('')}</div>
    ${renderExamWeights()}`;
}

function renderExam(set) {
  main.innerHTML = `<header class="hero"><div class="hero-copy"><a class="hub-back" href="#mixed">回混合題組</a><h1>${set.title}</h1><p class="summary">${set.description} 每回作答 10 題。</p><button type="button" class="button" data-jump="practice">${icon('flag')} 開始答題 ${icon('arrow')}</button></div>${artMarkup(set,'hero-art')}</header>${practicePanel('會考式練習', '10 題')}`;
  renderQuiz();
}

function renderExamWeights() {
  return `<section class="panel">${sectionHeading('106–115 年閱讀卷文法單題', 'book')}
    <p>採用本次提供的正式會考單題分類，共 90 題。106–109 年每次約 7–8 題，110 年起每次約 9–12 題。這份統計計入文法選擇單題；上方原創練習另外加入克漏字與閱讀理解。</p>
    <div class="weight-list">${examWeights.map(([name,count,details]) => `<div><div class="weight-label"><strong>${name}</strong><span>${count} 題 · ${Math.round(count / 90 * 100)}%</span></div><progress value="${count}" max="90" aria-label="${name} ${count} 題"></progress><p>${details}</p></div>`).join('')}</div>
    <p class="local-note"><a href="https://cap.rcpet.edu.tw/test5-3.html" target="_blank" rel="noopener">國中教育會考英語科說明</a></p></section>
    <section class="panel">${sectionHeading('歷屆單題句型索引', 'grid', 'blue')}
      <p>依這份統計曾出現的句型整理，可點名稱回到教學與單元題庫。</p>
      <div class="tense-list">${examPatterns.map(([id,name,example]) => `<article><a href="#${id}">${name}</a><div class="utterance"><span class="example" lang="en">${esc(example)}</span>${speakButton(example)}</div></article>`).join('')}</div>
    </section>`;
}

function renderSyllabus() {
  const term = curriculum[syllabusTerm];
  const columns = syllabusPublisher < 0 ? [0,1,2] : [syllabusPublisher];
  main.innerHTML = `${hubHeader('三版課程進度', '選擇冊次與版本，再從對應課次進入文法單元。')}
    <section class="panel">
      <div class="modes" role="group" aria-label="冊次">${curriculum.map((volume,index) => `<button type="button" data-term="${index}" aria-pressed="${index === syllabusTerm}">${volume.label}</button>`).join('')}</div>
      <div class="modes" role="group" aria-label="版本">${['三版並排', ...publishers].map((name,index) => `<button type="button" data-publisher="${index - 1}" aria-pressed="${index - 1 === syllabusPublisher}">${name}</button>`).join('')}</div>
      <p>${term.label}・${term.book}。${term.note}</p>
      <div class="table-scroll" tabindex="0" aria-label="${term.label}課次對照"><table class="curriculum-table${columns.length > 1 ? ' compare' : ''}">
        <thead><tr><th scope="col">課次</th>${columns.map((index) => `<th scope="col">${publishers[index]}</th>`).join('')}</tr></thead>
        <tbody>${term.rows.map(([label,...entries]) => `<tr><th scope="row">${label}</th>${columns.map((index) => {
          const [topic, ids] = entries[index].split('~');
          return `<td>${esc(topic)}<div class="curriculum-links">${ids.split(',').map((id) => `<a href="#${id}">${esc(studySources.get(id).title)}</a>`).join('')}</div></td>`;
        }).join('')}</tr>`).join('')}</tbody>
      </table></div>
      <p class="local-note">課次依本次提供的三版資料整理。補充的感嘆句可在<a href="#imperatives">祈使句與感嘆句</a>練習。</p>
    </section>
    <section class="panel">${sectionHeading('累積時態總表', 'grid', 'blue', `截至${term.label}`)}<p>先圈出時間詞，再判斷動作是否進行中、已結束，或持續到現在。</p>
      <div class="tense-list">${tenseRows.filter(([start]) => start <= syllabusTerm).map(([,name,cue,example,id]) => `<article><a href="#${id}">${name}</a><p>${cue}</p><div class="utterance"><span class="example" lang="en">${esc(example)}</span>${speakButton(example)}</div></article>`).join('')}</div>
      <p class="local-note"><a href="https://stv.naer.edu.tw/data/course_outline/pta_18518_3555074_59836.pdf#page=70" target="_blank" rel="noopener">英語文課綱附錄六</a></p>
    </section>`;
}

function renderHub() {
  switch (route) {
    case 'today': renderToday(); break;
    case 'review': renderReview(); break;
    case 'collection': renderCollection(); break;
    case 'mixed': renderExamIndex(); break;
    case 'syllabus': renderSyllabus(); break;
    default: renderExam(studySources.get(route));
  }
}
