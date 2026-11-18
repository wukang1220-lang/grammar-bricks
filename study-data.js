const roundLength = 10;

function parseItems(text, hint) {
  return text.trim().split('\n').map((line) => {
    const [key, prompt, answer, ...fields] = line.trim().split('|');
    const reason = fields.pop();
    const question = key.startsWith('b')
      ? build(prompt, answer.split(' / '), hint, reason)
      : pick(prompt, [answer, ...fields], answer, hint, reason);
    return { ...question, key };
  });
}

const bankText = { ...coreBank, ...moreBank, ...reviewBank };
for (const unit of lessons) {
  unit.pool = [
    ...unit.tasks.map((task, index) => ({ ...task, key: `base-${index + 1}` })),
    ...parseItems(bankText[unit.id], unit.tip)
  ].map((task) => ({ ...task, source: unit.id, id: `${unit.id}:${task.key}` }));
  const trapsByLabel = new Map(unit.shapes.map(({ label }) => [label, []]));
  for (const line of trapText[unit.id].trim().split('\n')) {
    const [label, wrong, right, note] = line.split('|');
    trapsByLabel.get(label).push(trap(wrong, right, note));
  }
  unit.traps = unit.shapes.map(({ label }) => trapsByLabel.get(label));
}

for (const set of examSets) {
  for (const passage of set.passages) {
    const context = { id: `${set.id}:${passage.id}`, title: passage.title, text: passage.text };
    passage.pool = parseItems(passage.rows, '先回到這段文章，找空格附近的時間、指代或句子結構。').map((task) => ({
      ...task, context, source: set.id, id: `${set.id}:${passage.id}:${task.key}`
    }));
  }
  set.pool = set.passages.flatMap((passage) => passage.pool);
  set.art = { slot: set.slot, sheet: 'stories', alt: set.alt };
}

const studySources = new Map([...lessons, ...examSets].map((unit) => [unit.id, unit]));
const questionsById = new Map([...studySources.values()].flatMap((unit) => unit.pool.map((task) => [task.id, task])));
const catCollection = [
  ['be',1,'開學橘橘'], ['present-continuous',3,'雨天橘橘'], ['can',6,'泳圈橘橘'],
  ['nouns',10,'野餐橘橘'], ['future',15,'攝影橘橘'], ['verb-forms',21,'畫家橘橘'],
  ['linking',28,'主廚橘橘'], ['present-perfect',36,'相簿橘橘'], ['noun-clauses',45,'偵探橘橘'],
  ['reflexives',55,'木工橘橘'], ['mixed-library',66,'圖書館橘橘'], ['mixed-trail',80,'探險橘橘']
];

function shuffled(items) {
  const copy = [...items];
  for (let end = copy.length - 1; end > 0; end--) {
    const choice = Math.floor(Math.random() * (end + 1));
    [copy[end], copy[choice]] = [copy[choice], copy[end]];
  }
  return copy;
}

function drawUnit(unit) {
  if (unit.passages) return shuffled(unit.passages).slice(0, 2).flatMap((passage) => shuffled(passage.pool));
  const [builder] = shuffled(unit.pool.filter((task) => task.type === 'build'));
  return shuffled([builder, ...shuffled(unit.pool.filter((task) => task !== builder)).slice(0, roundLength - 1)]);
}

function studyStars(score) {
  if (score >= 10) return 3;
  if (score >= 8) return 2;
  if (score >= 6) return 1;
  return 0;
}

const dayFormatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' });

function studyDate(now = new Date()) {
  const { year, month, day } = Object.fromEntries(dayFormatter.formatToParts(now).map(({type,value}) => [type,value]));
  return `${year}-${month}-${day}`;
}

function emptyDay() {
  return { rounds: 0, right: [], extra: false, plan: [] };
}

function dailyStars(day) {
  return Number(day.rounds >= 1) + Number(day.right.length >= 5) + Number(day.extra);
}

function sumStars(state) {
  return Object.values(state.best).reduce((sum, score) => sum + studyStars(score), 0)
    + Object.values(state.daily).reduce((sum, day) => sum + dailyStars(day), 0);
}

function pendingMistakes(state) {
  return Object.entries(state.mistakes)
    .filter(([, entry]) => !entry.clearedAt)
    .sort(([, left], [, right]) => right.lastAt - left.lastAt);
}

function readStudyRecords(saved) {
  const entries = (value) => value && typeof value === 'object' ? Object.entries(value) : [];
  const ids = (value) => Array.isArray(value) ? [...new Set(value.filter((id) => questionsById.has(id)))] : [];
  const best = Object.fromEntries(entries(saved.best).filter(([id, score]) => studySources.has(id) && Number.isInteger(score) && score >= 0 && score <= roundLength));
  const mistakes = Object.fromEntries(entries(saved.mistakes).filter(([id, entry]) => questionsById.has(id) && entry && Number.isFinite(entry.lastAt) && Number.isInteger(entry.count) && entry.count > 0));
  const daily = Object.fromEntries(entries(saved.daily).filter(([date, day]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && day && typeof day === 'object').map(([date, day]) => [date, {
    rounds: Number.isInteger(day.rounds) && day.rounds >= 0 ? day.rounds : 0,
    right: ids(day.right),
    extra: day.extra === true,
    plan: ids(day.plan).slice(0, 3)
  }]));
  return { best, mistakes, daily };
}
