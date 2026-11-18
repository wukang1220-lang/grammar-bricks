const gradeNames = ['七年級', '八年級', '九年級'];
const gradeGoals = ['基礎建立', '時態與語態擴展', '複雜句構'];

const part = (id, role, text) => ({ id, role, text });
const s = (text) => part('subject', 'S 主詞', text);
const v = (text) => part('verb', 'V 動詞', text);
const o = (text) => part('object', 'O 受詞', text);
const c = (text) => part('complement', 'C 補語', text);
const a = (text) => part('aux', '助動詞', text);
const x = (text, role = '補充資訊') => part('extra', role, text);
const q = (text) => part('question', '疑問詞', text);
const shape = (label, punctuation, ...blocks) => ({ label, punctuation, blocks });
const trap = (wrong, right, note) => ({ wrong, right, note });
const pick = (prompt, choices, answer, hint, reason) => ({ type: 'pick', prompt, choices, answer, hint, reason });
const build = (prompt, answer, hint, reason) => ({ type: 'build', prompt, answer, hint, reason });

const lessons = [
  {
    id: 'be', grade: 0, title: 'Be 動詞', english: 'The Verb Be', summary: '介紹自己、描述狀態，用 am、is、are 串起句子。',
    art: { slot: 0, alt: '橘橘背著書包，帶著有點害羞的笑容，在教室門口揮手打招呼。' },
    scene: '開學第一天，橘橘想知道新同學是不是準備好了。',
    dialogue: [['橘橘', 'Are you ready?', '你準備好了嗎？'], ['新同學', 'I am ready.', '我準備好了。']],
    tip: '先找主詞！I 搭 am，you、we、they 搭 are，he、she、it 搭 is。',
    rule: '要把肯定句變問句，把 Be 動詞移到主詞前面。',
    shapes: [shape('肯定句', '.', s('You'), v('are'), c('ready')), shape('疑問句', '?', v('Are'), s('you'), c('ready')), shape('否定句', '.', s('You'), v('are'), x('not', '否定詞'), c('ready'))],
    traps: [trap('She are my friend.', 'She is my friend.', 'She 是單數，搭配 is。'), trap('Are hungry you?', 'Are you hungry?', '一般疑問句的順序是 Be 動詞、主詞、補語。')],
    tasks: [pick('I ___ a student.', ['is', 'am', 'are'], 'am', '先找空格前面的主詞。', '主詞是 I，要用 am。'), build('拼出「你準備好了嗎？」', ['Are', 'you', 'ready?'], '一般疑問句先放 Be 動詞。', 'Are 到句首，後面接 you 和 ready。'), pick('社團點名時，想說「他們今天有來」：They ___ here today.', ['am', 'is', 'are'], 'are', 'They 指的是複數。', 'They 搭配 are。')]
  },
  {
    id: 'present-simple', grade: 0, title: '一般動詞現在式', english: 'Simple Present', summary: '說出習慣、喜好和經常發生的事。', scene: '午休時，橘橘和同學聊到平常喜歡的活動。',
    art: { slot: 1, alt: '穿球衣的橘橘抱著籃球，笑著準備去打球。' },
    dialogue: [['橘橘', 'Does Leo play basketball?', 'Leo 會打籃球嗎？'], ['同學', 'Yes, he plays every Friday.', '對，他每個星期五都打球。']],
    tip: 'he、she、it 的肯定句，記得檢查動詞末尾。', rule: 'does 已經負責表示第三人稱單數，後面的動詞回到原形。',
    shapes: [shape('肯定句', '.', s('Leo'), v('plays'), o('basketball')), shape('疑問句', '?', a('Does'), s('Leo'), v('play'), o('basketball')), shape('否定句', '.', s('Leo'), a('does not'), v('play'), o('basketball'))],
    traps: [trap('He doesn’t likes milk.', 'He doesn’t like milk.', 'doesn’t 後用原形 like。'), trap('My sister walk to school.', 'My sister walks to school.', '主詞是第三人稱單數，walk 加 s。')],
    tasks: [pick('Mia ___ her bike to school every day.', ['ride', 'rides', 'riding'], 'rides', '看看 Mia 是第幾人稱。', 'Mia 是第三人稱單數，ride 加 s。'), build('拼出「Leo 打籃球嗎？」', ['Does', 'Leo', 'play', 'basketball?'], 'Does 先站到句首。', 'Does 後接主詞 Leo，再接原形動詞 play。'), pick('橘橘不喝咖啡。He ___ coffee.', ['doesn’t drink', 'doesn’t drinks', 'don’t drink'], 'doesn’t drink', '找出和 he 搭配的助動詞。', 'He 搭配 doesn’t，後面接原形 drink。')]
  },
  {
    id: 'present-continuous', grade: 0, title: '現在進行式', english: 'Present Continuous', summary: '描述此刻正在發生的動作。', scene: '體育課結束後，橘橘隔著窗看見有人還在跑。',
    art: { slot: 2, alt: '橘橘穿著黃色雨衣，睜大眼睛看向有雨滴的窗戶。' },
    dialogue: [['橘橘', 'Is Amy running?', 'Amy 正在跑步嗎？'], ['同學', 'Yes, she is running in the rain.', '對，她正在雨中跑步。']],
    tip: '看到 right now，就想想這是不是正在發生的動作。', rule: '進行式由 Be 動詞和 V-ing 組成。變問句時把 Be 動詞移到主詞前。',
    shapes: [shape('肯定句', '.', s('Amy'), a('is'), v('running')), shape('疑問句', '?', a('Is'), s('Amy'), v('running')), shape('否定句', '.', s('Amy'), a('is not'), v('running'))],
    traps: [trap('She running now.', 'She is running now.', 'running 前面要有 is。'), trap('We are danceing.', 'We are dancing.', 'dance 去掉字尾不發音的 e，再加 ing。')],
    tasks: [pick('Look! The boys ___ soccer.', ['plays', 'are playing', 'is playing'], 'are playing', '主詞是複數，而且動作正在發生。', 'The boys 搭配 are，再接 playing。'), build('拼出「Amy 正在跑步嗎？」', ['Is', 'Amy', 'running?'], '先移動 Be 動詞。', 'Is 移到主詞前面，running 留在後面。'), pick('朋友打電話來，你正在吃飯。你會說？', ['I am eating now.', 'I eat every day.', 'I eating now.'], 'I am eating now.', '此刻正在做的事，用 Be 動詞加 V-ing。', 'am eating 表示說話當下的動作。')]
  },
  {
    id: 'can', grade: 0, title: '助動詞 can', english: 'Can for Ability', summary: '用 can 說自己會做什麼，也能詢問別人的能力。', scene: '泳池邊，橘橘想知道朋友會不會游泳。',
    art: { slot: 3, alt: '戴著泳鏡的橘橘坐在游泳圈裡，開心瞇起眼睛。' },
    dialogue: [['橘橘', 'Can you swim?', '你會游泳嗎？'], ['朋友', 'Yes, I can swim.', '會，我會游泳。']],
    tip: 'can 後面的動詞用原形，主詞換成 he 或 she 也一樣。', rule: '把 can 移到主詞前就能提問。can 的否定形式是 cannot 或 can’t。',
    shapes: [shape('肯定句', '.', s('You'), a('can'), v('swim')), shape('疑問句', '?', a('Can'), s('you'), v('swim')), shape('否定句', '.', s('You'), a('can’t'), v('swim'))],
    traps: [trap('She can sings.', 'She can sing.', 'can 後面用原形 sing。'), trap('Do you can swim?', 'Can you swim?', '用 Can 直接開頭。')],
    tasks: [pick('My brother can ___ well.', ['dances', 'dancing', 'dance'], 'dance', 'can 後的動詞用什麼形式？', 'can 後接原形 dance。'), build('拼出「你會游泳嗎？」', ['Can', 'you', 'swim?'], '問能力，把 Can 放在句首。', 'Can + 主詞 + 原形動詞，就能問能力。'), pick('看見告示「此處不能停車」，哪個句子最合適？', ['You can park here.', 'You can’t park here.', 'You can’t parking here.'], 'You can’t park here.', 'can’t 表示不能。', 'can’t 加原形 park，表示此地不能停車。')]
  },
  {
    id: 'wh', grade: 0, title: 'Wh- 疑問句', english: 'Wh- Questions', summary: '用疑問詞問出想知道的人、事、時間與地點。', scene: '橘橘放學要搭車，想問公車站在哪裡。',
    art: { slot: 4, alt: '橘橘一臉疑惑地搔頭，旁邊立著一根公車站牌。' },
    dialogue: [['橘橘', 'Where is the bus stop?', '公車站在哪裡？'], ['同學', 'It is near the park.', '它在公園附近。']],
    tip: '問地點用 where，問時間用 when，問原因用 why。', rule: '問地點時，把地點換成 Where 放句首，接著放 Be 動詞和主詞。',
    shapes: [shape('陳述句', '.', s('The bus stop'), v('is'), x('near the park', '地點')), shape('地點問句', '?', q('Where'), v('is'), s('the bus stop'))],
    traps: [trap('Where the bus stop is?', 'Where is the bus stop?', '直接問句把 is 放在主詞前。'), trap('When is your pencil?（想問地點）', 'Where is your pencil?', '問地點用 where，when 用來問時間。')],
    tasks: [pick('想問時間：___ is the game? — At three.', ['Where', 'When', 'Who'], 'When', 'At three 是時間。', 'When 用來問「什麼時候」。'), build('拼出「公車站在哪裡？」', ['Where', 'is', 'the bus stop?'], '先放疑問詞 Where。', 'Where 後接 is，再接主詞 the bus stop。'), pick('朋友回答「Because it’s fun.」你剛剛問的是？', ['Where do you play?', 'Why do you play?', 'When do you play?'], 'Why do you play?', 'Because 開頭是在說明原因。', 'Why 問原因，常用 because 回答。')]
  },
  {
    id: 'nouns', grade: 0, title: '可數／不可數名詞', english: 'Countable and Uncountable Nouns', summary: '買東西或點餐時，用對數量詞和名詞。', scene: '班上野餐，橘橘正在幫大家準備蘋果和水。',
    art: { slot: 5, alt: '橘橘帶著野餐籃，一手拿著蘋果，一手拿著水瓶。' },
    dialogue: [['橘橘', 'I need two apples.', '我需要兩顆蘋果。'], ['同學', 'I need some water.', '我需要一些水。']],
    tip: '蘋果可以一顆一顆數。要數水，可以改數瓶子或杯子。', rule: '可數複數可直接接數字。不可數名詞可以用 some，或用容器單位表示數量。',
    shapes: [shape('可數名詞', '.', s('I'), v('need'), o('two apples')), shape('不可數名詞', '.', s('I'), v('need'), o('some water')), shape('加上單位', '.', s('I'), v('need'), o('two bottles of water'))],
    traps: [trap('I need two water.', 'I need two bottles of water.', '用 bottles 當可數單位，再加 of water。'), trap('I bought three apple.', 'I bought three apples.', 'three 後用複數 apples。')],
    tasks: [pick('Can I have ___ rice?', ['a', 'some', 'two'], 'some', 'rice 在這裡是不可數名詞。', 'some 可以修飾不可數名詞 rice。'), build('拼出「我需要兩顆蘋果。」', ['I', 'need', 'two apples.'], '先找主詞，再找「需要」和「需要的東西」。', 'two 修飾可數複數名詞 apples。'), pick('手上有三瓶水，要怎麼和同學說？', ['I have three water.', 'I have three bottles of water.', 'I have three bottle of water.'], 'I have three bottles of water.', '這次數的是瓶子。', 'three 後的 bottles 要用複數，of water 說明瓶裡裝的是水。')]
  },
  {
    id: 'past-simple', grade: 1, title: '過去簡單式', english: 'Simple Past', summary: '說出已經發生並結束的事。', scene: '週一早上，橘橘和同學聊昨天做了什麼。',
    art: { slot: 0, alt: '橘橘戴著探險帽，開心地攤開動物園地圖。' },
    dialogue: [['橘橘', 'Did you visit the zoo yesterday?', '你昨天有去動物園嗎？'], ['同學', 'Yes, I visited the zoo.', '有，我去了動物園。']],
    tip: 'yesterday 和 last night 常提示事情發生在過去。', rule: '肯定句用過去式。用 did 提問時，後面的動詞換回原形。',
    shapes: [shape('肯定句', '.', s('You'), v('visited'), o('the zoo'), x('yesterday', '時間')), shape('疑問句', '?', a('Did'), s('you'), v('visit'), o('the zoo'), x('yesterday', '時間')), shape('否定句', '.', s('You'), a('did not'), v('visit'), o('the zoo'), x('yesterday', '時間'))],
    traps: [trap('Did you went home?', 'Did you go home?', 'did 後接原形 go。'), trap('I meet Ben yesterday.', 'I met Ben yesterday.', 'meet 的不規則過去式是 met。')],
    tasks: [pick('We ___ a movie last night.', ['see', 'saw', 'seeing'], 'saw', 'last night 把你帶到過去。', 'see 的過去式是 saw。'), build('拼出「你去動物園了嗎？」', ['Did', 'you', 'visit', 'the zoo?'], '用 Did 開頭，再用原形動詞。', 'Did 先表示過去，後面的動詞用原形 visit。'), pick('日記寫著「昨天雨太大，我們沒打球。」哪一句合適？', ['We didn’t play basketball.', 'We didn’t played basketball.', 'We don’t play basketball.'], 'We didn’t play basketball.', '過去的否定用 didn’t。', 'didn’t 已表示過去，play 保持原形。')]
  },
  {
    id: 'future', grade: 1, title: '未來式', english: 'Future Forms', summary: '談還沒發生的事，或說自己已經有的安排。', scene: '班級園遊會快到了，橘橘在討論攤位分工。',
    art: { slot: 1, alt: '橘橘拿著相機，興奮地站在園遊會攤位前。' },
    dialogue: [['橘橘', 'Will you bring a camera?', '你會帶相機嗎？'], ['同學', 'Yes, I’m going to take pictures.', '會，我打算拍照。']],
    tip: 'will 和 be going to 都常用來談未來。已經有的打算常用 be going to。', rule: 'will 後接原形動詞。be going to 裡的 Be 動詞要跟主詞配對，to 後也接原形。',
    shapes: [shape('will 肯定句', '.', s('You'), a('will'), v('bring'), o('a camera')), shape('will 問句', '?', a('Will'), s('you'), v('bring'), o('a camera')), shape('be going to', '.', s('You'), a('are going to'), v('bring'), o('a camera'))],
    traps: [trap('She will brings a camera.', 'She will bring a camera.', 'will 後接原形 bring。'), trap('They going to take pictures.', 'They are going to take pictures.', '要補上與 they 搭配的 are。')],
    tasks: [pick('I will ___ you after class.', ['calls', 'call', 'calling'], 'call', 'will 後用哪種動詞形式？', 'call 是原形，能直接接在 will 後。'), build('拼出「你會帶相機嗎？」', ['Will', 'you', 'bring', 'a camera?'], '把 Will 放到句首。', 'Will 後接主詞，再接原形動詞 bring。'), pick('行程已經安排好了：Mia ___ her grandma this Saturday.', ['is going to visit', 'going to visit', 'is going to visits'], 'is going to visit', 'Mia 搭 is，to 後接原形。', '完整句型是 is going to + visit。')]
  },
  {
    id: 'past-continuous', grade: 1, title: '過去進行式', english: 'Past Continuous', summary: '描述過去某個時間點正在發生的動作。', scene: '橘橘沒聽到昨天晚上的電話，朋友想問牠當時在做什麼。',
    art: { slot: 2, alt: '橘橘戴著圓框眼鏡，坐在檯燈和時鐘旁專心寫字。' },
    dialogue: [['朋友', 'Were you studying at eight?', '你八點時正在讀書嗎？'], ['橘橘', 'Yes, I was studying then.', '對，我那時正在讀書。']],
    tip: '把時間想成相片快門。那一刻，大家正在做什麼？', rule: '過去進行式用 was 或 were 加 V-ing。疑問句把 was 或 were 移到最前面。',
    shapes: [shape('肯定句', '.', s('You'), a('were'), v('studying'), x('at eight', '時間')), shape('疑問句', '?', a('Were'), s('you'), v('studying'), x('at eight', '時間')), shape('否定句', '.', s('You'), a('were not'), v('studying'), x('at eight', '時間'))],
    traps: [trap('We was studying then.', 'We were studying then.', 'we 搭配 were。'), trap('She was study when I called.', 'She was studying when I called.', 'was 後接 studying，描述當時正在進行的動作。')],
    tasks: [pick('At nine last night, I ___ dinner.', ['was eating', 'were eating', 'am eating'], 'was eating', '過去某一刻，主詞是 I。', 'I 搭配 was，再接 eating。'), build('拼出「你八點時正在讀書嗎？」', ['Were', 'you', 'studying', 'at eight?'], 'Were 先放在句首。', 'Were + you + studying + 時間，就能問過去某刻正在做的事。'), pick('電話響起時，Ben 正在洗澡。Ben ___ a shower when the phone rang.', ['is taking', 'was taking', 'were taking'], 'was taking', '電話響起是過去發生的事，Ben 是單數。', 'was taking 描述當時進行中的動作。')]
  },
  {
    id: 'verb-forms', grade: 1, title: '不定詞與動名詞', english: 'Infinitives and Gerunds', summary: '學會在動詞後面接 to V 或 V-ing。', scene: '橘橘在社團教室聽同學分享課後的興趣。',
    art: { slot: 3, alt: '穿著畫畫圍裙的橘橘，笑著在畫板上畫一隻貓。' },
    dialogue: [['同學', 'I want to draw cats.', '我想畫貓。'], ['橘橘', 'I enjoy drawing cats, too.', '我也喜歡畫貓。']],
    tip: '把動詞和它的搭檔一起記，例如 want to draw、enjoy drawing。', rule: 'want 後接 to + 原形動詞。enjoy 後接 V-ing。',
    shapes: [shape('want + to V', '.', s('I'), v('want'), o('to draw cats')), shape('enjoy + V-ing', '.', s('I'), v('enjoy'), o('drawing cats'))],
    traps: [trap('I enjoy to sing.', 'I enjoy singing.', 'enjoy 後面接動名詞 singing。'), trap('I want going home.', 'I want to go home.', 'want 後面接 to go。')],
    tasks: [pick('Ben hopes ___ the game.', ['win', 'winning', 'to win'], 'to win', 'hope 和 want 都能搭配 to V。', 'hope to win 表示希望獲勝。'), build('拼出「我喜歡畫貓。」', ['I', 'enjoy', 'drawing cats.'], 'enjoy 後面放 V-ing。', 'drawing cats 是 enjoy 的受詞。'), pick('橘橘打算讀這本書。I plan ___ this book.', ['reading', 'to read', 'reads'], 'to read', 'plan 表達計畫，常跟 to V 搭配。', 'plan 後接 to read，表示計畫去讀。')]
  },
  {
    id: 'comparisons', grade: 1, title: '比較級與最高級', english: 'Comparatives and Superlatives', summary: '比較兩個對象，也能說出一群之中最突出的。', scene: '用品店裡，橘橘挑裝課本剛剛好的背包。',
    art: { slot: 4, alt: '橘橘托著下巴，認真比較一大一小的兩個背包。' },
    dialogue: [['橘橘', 'This bag is bigger than that one.', '這個包包比那個大。'], ['店員', 'This is the biggest bag here.', '這是這裡最大的包包。']],
    tip: '看到 than，就找找哪兩個東西在比較。', rule: 'big 變比較級是 bigger，最高級用 the biggest。較長的形容詞常用 more 或 most。',
    shapes: [shape('比較級', '.', s('This bag'), v('is'), c('bigger'), x('than that one', '比較對象')), shape('最高級', '.', s('This bag'), v('is'), c('the biggest'), x('in the store', '比較範圍'))],
    traps: [trap('This bag is more bigger.', 'This bag is bigger.', 'bigger 已經是比較級。'), trap('Amy is the most tallest in her class.', 'Amy is the tallest in her class.', 'tallest 已經是最高級，這裡用 the tallest。')],
    tasks: [pick('This book is ___ than that one.', ['more interesting', 'most interesting', 'interestinger'], 'more interesting', 'than 前面需要比較級。', 'interesting 的比較級是 more interesting。'), build('拼出「這個包包比那個大。」', ['This bag', 'is', 'bigger', 'than that one.'], '比較對象接在 than 後。', 'bigger 後接 than that one，指出在跟哪個包包比較。'), pick('橘橘最快。JuJu is ___ runner on the team.', ['faster', 'the fastest', 'more fast'], 'the fastest', 'on the team 提供整個比較範圍。', '在整隊中最快，用最高級 the fastest。')]
  },
  {
    id: 'adverbs', grade: 1, title: '副詞', english: 'Adverbs', summary: '用副詞補充動作怎麼做、多久做一次。', scene: '英語社試演時，橘橘請同學說慢一點。',
    art: { slot: 5, alt: '橘橘戴著耳麥，微笑抬起一隻手，示意把話說慢一點。' },
    dialogue: [['橘橘', 'Please speak slowly.', '請慢慢說。'], ['同學', 'Sorry! I usually speak quickly.', '抱歉！我平常說得很快。']],
    tip: '問「怎麼做」找方式副詞。問「多常做」找頻率副詞。', rule: '方式副詞常放在動詞或受詞後。頻率副詞通常放在一般動詞前、Be 動詞後。',
    shapes: [shape('方式副詞', '.', s('You'), v('speak'), x('quickly', '方式')), shape('頻率副詞', '.', s('You'), part('frequency', '頻率', 'usually'), v('speak'), x('quickly', '方式')), shape('Be 動詞後', '.', s('You'), v('are'), part('frequency', '頻率', 'usually'), c('quiet'))],
    traps: [trap('She sings beautiful.', 'She sings beautifully.', '修飾動作 sings，用副詞 beautifully。'), trap('He is a good player. He plays good.', 'He is a good player. He plays well.', 'good 修飾名詞 player，well 修飾動詞 plays。')],
    tasks: [pick('Please listen ___.', ['careful', 'carefully', 'care'], 'carefully', '空格在說明「怎麼聽」。', 'carefully 是方式副詞，可修飾 listen。'), build('拼出「你通常說得很快。」', ['You', 'usually', 'speak', 'quickly.'], '頻率副詞通常在一般動詞前。', 'usually 說明頻率，quickly 說明說話的方式。'), pick('想說「他上課從不遲到」，哪個常見語序最合適？', ['He is never late for class.', 'He never late is for class.', 'He is late never for class.'], 'He is never late for class.', 'never 是頻率副詞。', 'never 放在 Be 動詞 is 後面。')]
  },
  {
    id: 'present-perfect', grade: 2, title: '現在完成式', english: 'Present Perfect', summary: '用過去發生的事，談現在的結果或到目前為止的經驗。', scene: '校外教學前，橘橘想知道誰以前去過動物園。',
    art: { slot: 0, alt: '橘橘笑著翻開相簿，分享以前在動物園拍的長頸鹿照片。' },
    dialogue: [['橘橘', 'Have you ever been to the zoo?', '你曾經去過那間動物園嗎？'], ['同學', 'Yes, I have been there twice.', '有，我去過那裡兩次。']],
    tip: '談截至現在的經驗時，先找 have 或 has，再找過去分詞。', rule: '用 have／has + 過去分詞。提問時把 Have／Has 移到主詞前。',
    shapes: [shape('肯定句', '.', s('You'), a('have'), v('been'), x('to the zoo', '地點')), shape('經驗問句', '?', a('Have'), s('you'), part('frequency', '頻率', 'ever'), v('been'), x('to the zoo', '地點')), shape('否定句', '.', s('You'), a('have not'), v('been'), x('to the zoo', '地點'))],
    traps: [trap('She has went to Japan.', 'She has gone to Japan.', 'has 後接過去分詞 gone。has gone to 常表示已前往，說話時人還沒回來。'), trap('I have seen him yesterday.', 'I saw him yesterday.', 'yesterday 表示明確且已結束的過去時間，這裡用過去簡單式。')],
    tasks: [pick('Mia has already ___ her homework.', ['finish', 'finished', 'finishing'], 'finished', 'has 後面需要過去分詞。', 'finished 是 finish 的過去分詞。'), build('拼出「你去過那間動物園嗎？」', ['Have', 'you', 'been', 'to the zoo?'], '先把 Have 移到主詞前。', 'Have 後接主詞 you，再接過去分詞 been。'), pick('想說「我從 2023 年就住在這裡，而且現在仍住這裡」。', ['I lived here in 2023.', 'I have lived here since 2023.', 'I have live here since 2023.'], 'I have lived here since 2023.', 'since 表示開始的時間點。', 'have lived 搭配 since，表示從 2023 年延續到現在。')]
  },
  {
    id: 'passive', grade: 2, title: '被動語態', english: 'Passive Voice', summary: '把故事重點放在受到動作影響的人或物。', scene: '美術課巡展，橘橘想介紹牆上那幅畫。',
    art: { slot: 1, alt: '戴貝雷帽的橘橘像美術導覽員一樣，開心介紹畫架上的山景。' },
    dialogue: [['橘橘', 'Who painted this picture?', '誰畫了這幅畫？'], ['同學', 'It was painted by Amy.', '它是 Amy 畫的。']],
    tip: '先問自己：這句話想把哪個人或物放在句首？', rule: '把主動句的受詞移成被動句主詞，再用 Be 動詞加過去分詞。需要交代誰做的，再加 by。',
    shapes: [shape('主動句', '.', s('Amy'), v('painted'), part('picture', 'O 受詞', 'this picture')), shape('被動句', '.', part('picture', 'S 主詞', 'This picture'), a('was'), v('painted'), x('by Amy', '動作者')), shape('被動問句', '?', a('Was'), part('picture', 'S 主詞', 'this picture'), v('painted'), x('by Amy', '動作者'))],
    traps: [trap('The window was break.', 'The window was broken.', '被動語態的 Be 動詞後接過去分詞 broken。'), trap('These books is read by many students.', 'These books are read by many students.', 'These books 是複數，Be 動詞用 are。')],
    tasks: [pick('The cake was ___ by Leo.', ['make', 'made', 'making'], 'made', '用 make 的過去分詞。', 'made 是 make 的過去分詞。'), build('用被動句拼出「這幅畫是 Amy 畫的。」', ['This picture', 'was', 'painted', 'by Amy.'], '先把畫放在句首。', '主詞是畫，接 was painted，最後用 by Amy 交代動作者。'), pick('你在校刊介紹去年種下的樹。The trees ___ last year.', ['were planted', 'are planted', 'was planted'], 'were planted', '樹是複數，last year 指過去。', '複數過去用 were，後接過去分詞 planted。')]
  },
  {
    id: 'relatives', grade: 2, title: '關係代名詞', english: 'Relative Pronouns', summary: '用 who、which 或 that 補充，說清楚你指的是誰或哪一個。', scene: '橘橘在校慶人群中想指出哪一位女生是班長。',
    art: { slot: 2, alt: '校慶中的橘橘指向一頂紅帽子，表示牠找到辨認對象的線索。' },
    dialogue: [['橘橘', 'Which girl is your class leader?', '哪一位女生是你們的班長？'], ['同學', 'The girl who is wearing a red hat is our class leader.', '戴著紅帽子的女生就是我們的班長。']],
    tip: '先找要補充的名詞。這課的限定用法裡，人可用 who 或 that，事物可用 which 或 that。',
    rule: '關係子句放在它修飾的名詞後。who 在這裡已經是子句主詞。',
    shapes: [shape('基本句', '.', s('The girl'), v('is'), c('our class leader')), shape('補充人物特徵', '.', s('The girl'), x('who is wearing a red hat', '關係子句'), v('is'), c('our class leader')), shape('補充事物特徵', '.', s('The hat'), x('that is on the desk', '關係子句'), v('is'), c('mine'))],
    traps: [trap('The girl which won is my friend.', 'The girl who won is my friend.', 'girl 指人，這裡用 who 或 that。'), trap('The boy who he won is my brother.', 'The boy who won is my brother.', 'who 已是關係子句的主詞。')],
    tasks: [pick('The book ___ is on the desk is mine.', ['who', 'where', 'which'], 'which', 'book 指事物。', 'which 在關係子句中指 the book。'), build('拼出「戴著紅帽子的女生是我們的班長。」', ['The girl', 'who is wearing a red hat', 'is', 'our class leader.'], '人物資訊跟在 The girl 後面。', 'who is wearing a red hat 緊跟 The girl，指出是哪位女生。'), pick('要指出「住我隔壁的老師」，哪一句合適？', ['The teacher who lives next door is Mr. Lee.', 'The teacher which lives next door is Mr. Lee.', 'The teacher who he lives next door is Mr. Lee.'], 'The teacher who lives next door is Mr. Lee.', 'teacher 是人，句中不需要再加 he。', 'who 代替 the teacher，直接接 lives。')]
  },
  {
    id: 'noun-clauses', grade: 2, title: '名詞子句', english: 'Noun Clauses', summary: '把一個想法或問題放進另一個句子。', scene: '橘橘想去圖書館，卻不知道它在哪裡。',
    art: { slot: 3, alt: '橘橘像小偵探一樣，拿著放大鏡和書在書堆旁找線索。' },
    dialogue: [['橘橘', 'Where is the library?', '圖書館在哪裡？'], ['同學', 'I know where the library is.', '我知道圖書館在哪裡。']],
    tip: '當問題放進另一個句子，子句裡用主詞在前、動詞在後。', rule: 'I know 後可以接疑問詞子句，也能用 that 引出一個事實或想法。',
    shapes: [shape('直接問句', '?', q('Where'), part('inner-verb', 'V 動詞', 'is'), part('inner-subject', 'S 主詞', 'the library')), shape('疑問詞子句', '.', s('I'), v('know'), q('where'), part('inner-subject', '子句主詞', 'the library'), part('inner-verb', '子句動詞', 'is')), shape('that 子句', '.', s('I'), v('know'), o('that the library is closed'))],
    traps: [trap('I know where is the library.', 'I know where the library is.', 'where 後用直述語序 the library is。'), trap('Tell me what did you buy.', 'Tell me what you bought.', '用 you bought 表示過去，子句不用 did 倒裝。')],
    tasks: [pick('Do you know ___?', ['where she lives', 'where does she live', 'where lives she'], 'where she lives', 'where 後面找「主詞 + 動詞」。', '名詞子句內用 she lives。'), build('拼出「我知道圖書館在哪裡。」', ['I', 'know', 'where', 'the library', 'is.'], 'where 後先放主詞。', 'where the library is 是 know 的受詞，內部用直述語序。'), pick('班群在討論新政策：I think ___ a good idea.', ['that it is', 'that is it', 'that it'], 'that it is', 'that 後面放一個完整的子句。', 'it 是子句主詞，is 是子句動詞。')]
  },
  {
    id: 'conditionals', grade: 2, title: '假設語氣基礎', english: 'Second Conditional', extension: true, summary: '用 if 想像一個與現在不同、或不太可能的情況。', scene: '同學聊到時間旅行，橘橘也說出自己的想像。',
    art: { slot: 4, alt: '戴護目鏡的橘橘驚喜地看著有大時鐘的迷你時光機。' },
    dialogue: [['同學', 'What would you do if you had a time machine?', '如果你有時光機，你會做什麼？'], ['橘橘', 'If I had a time machine, I would visit the future.', '如果我有時光機，我就會去未來看看。']],
    tip: '例如 If I were you，是在想像「如果我是你」，可以用來委婉地給建議。',
    rule: '這種假設常用 if + 過去式，搭配 would + 原形動詞。',
    shapes: [shape('條件在前', '.', x('If I had a time machine,', '假設條件'), s('I'), a('would'), v('visit'), o('the future')), shape('結果在前', '.', s('I'), a('would'), v('visit'), o('the future'), x('if I had a time machine', '假設條件'))],
    traps: [trap('If I would have a time machine, I would visit the future.', 'If I had a time machine, I would visit the future.', '這個假設句的 if 子句用 had，would 放在結果子句。'), trap('If I were you, I would studied today.', 'If I were you, I would study today.', 'would 後接原形 study。')],
    tasks: [pick('If I ___ more free time, I would learn to cook.', ['have', 'would have', 'had'], 'had', '這裡在想像目前沒有的空閒時間。', '結果用了 would，這個 if 子句用過去式 had。'), build('拼出「如果我有翅膀，我就會飛。」', ['If I had wings,', 'I', 'would', 'fly.'], '把 if 條件和 would 結果排在一起。', 'if 子句用 had，結果用 would + fly。'), pick('想委婉建議朋友道歉，哪句最合適？', ['If I were you, I would say sorry.', 'If I would be you, I say sorry.', 'If I were you, I would said sorry.'], 'If I were you, I would say sorry.', '常用開頭是 If I were you。', 'If I were you 表示換位思考，would 後接原形 say。')]
  }
];
