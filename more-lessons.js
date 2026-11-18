function extraLesson(id, grade, slot, title, english, summary, scene, art, dialogue, rule, tip, shapes, tasks, sheet = '') {
  return { id, grade, title, english, summary, scene, art: { slot, alt: art, sheet: sheet || `more-${grade + 7}` }, dialogue, rule, tip, shapes, tasks };
}

lessons.push(
  extraLesson('pronouns', 0, 0, '人稱與所有格代名詞', 'Personal and Possessive Pronouns', '說清楚「誰」「對誰」和「是誰的」。', '橘橘和同學一起看班級合照。', '橘橘笑著指向朋友們的合照。',
    [['橘橘','Is this your picture?','這是你的照片嗎？'],['同學','Yes, it is mine.','是，那是我的。']],
    '主詞用 I、she、they 等，動詞或介系詞後用 me、her、them 等。所有格形容詞後面接名詞，mine、hers、theirs 可單獨用。', '找空格前後：___ book 要用 my，句尾等於 my book 時用 mine。',
    [shape('主格與受格','.',s('She'),v('knows'),o('me')),shape('所有格形容詞','.',s('This'),v('is'),c('my picture')),shape('所有格代名詞','.',s('This picture'),v('is'),c('mine'))],
    [pick('Is this ___ pencil? — Yes, it is mine.', ['your','yours','you'],'your','後面有 pencil。','your 後接名詞 pencil。'),build('拼出「我認識他們。」',['I','know','them.'],'動詞後用受格。','them 是 they 的受格。'),pick('I like Mia. I always sit next to ___.',['her','she','hers'],'her','next to 後面用受格。','her 是 she 的受格。')]),

  extraLesson('articles', 0, 1, '冠詞與指示詞', 'Articles and Demonstratives', '用 a、an、the 指人事物，也用 this、those 表示遠近和單複數。', '橘橘整理桌上的蘋果和遠處的積木。', '橘橘拿著紅蘋果，指向積木。',
    [['橘橘','What is this?','這是什麼？'],['同學','It is an apple. Those are toy bricks.','這是一顆蘋果。那些是玩具積木。']],
    '初次提到的單數可數名詞可用 a/an，依下一個字的開頭發音選。談雙方知道的東西用 the。this/that 是單數，these/those 是複數。', 'an hour 的 h 不發音，a uniform 的開頭是 /y/ 音。先聽開頭的音。',
    [shape('近處單數','.',s('This'),v('is'),c('an apple')),shape('遠處複數','.',s('Those'),v('are'),c('toy bricks')),shape('特定對象','.',s('The apple'),v('is'),c('red'))],
    [pick('It took me ___ hour to get here.',['a','an','these'],'an','hour 的 h 不發音。','hour 以母音開頭，用 an。'),build('拼出「那些是我的鞋子。」',['Those','are','my shoes.'],'遠處複數用 those。','Those 與 are 搭配。'),pick('I bought a book yesterday. ___ book is about space.',['A','An','The'],'The','第二句在說同一本書。','雙方知道是哪一本，用 the。')]),

  extraLesson('place-time', 0, 2, '時間與地點介系詞', 'Prepositions of Time and Place', '說明在哪裡、幾點、哪一天或哪一年。', '橘橘在教室幫朋友找桌子底下的球。', '橘橘站在桌邊，桌下有一顆球，旁邊有時鐘。',
    [['同學','Where is my ball?','我的球在哪裡？'],['橘橘','It is under the desk. Practice starts at four.','它在桌子下面。四點開始練習。']],
    '常用 at + 時刻、on + 特定日或日期、in + 月份／年份。地點可用 under、next to、between 等說明位置。', '先看看後面是時刻、日期，還是較長的時間範圍。',
    [shape('時刻','.',s('Practice'),v('starts'),x('at four','時間')),shape('位置疑問','?',v('Is'),s('the ball'),x('under the desk','地點')),shape('日期','.',s('The game'),v('is'),x('on Saturday','時間'))],
    [pick('The meeting starts ___ noon.',['at','on','in'],'at','noon 是正午這個時間點。','用 at noon 表示在正午。'),build('拼出「球在書桌下。」',['The ball','is','under the desk.'],'under 表示在下面。','under the desk 用來說明球的位置。'),pick('The party is ___ July 10.',['on','at','in'],'on','July 10 是特定日期。','特定日期前用 on。')]),

  extraLesson('there-is', 0, 3, 'There is／are 存在句', 'There Is and There Are', '用 There is／are 描述某處有什麼。', '橘橘打開書包，和朋友確認裡面裝了哪些東西。', '橘橘驚訝地看向裝著書的打開書包。',
    [['橘橘','Are there two books in the bag?','書包裡有兩本書嗎？'],['同學','Yes. There is a pen, too.','有。還有一枝筆。']],
    'There is 接單數或不可數名詞，There are 接複數。存在問句把 Be 動詞移到 there 前。', '先找在介紹的東西。如果是 two books，就用 are。',
    [shape('肯定句','.',q('There'),v('are'),s('two books'),x('in the bag','地點')),shape('疑問句','?',v('Are'),q('there'),s('two books'),x('in the bag','地點')),shape('否定句','.',q('There'),v('are not'),s('any books'),x('in the bag','地點'))],
    [pick('There ___ some milk in the fridge.',['are','is','have'],'is','milk 是不可數名詞。','用 There is 接 some milk。'),build('拼出「書包裡有兩本書嗎？」',['Are','there','two books','in the bag?'],'先放 Are。','存在疑問句把 Are 放到 there 前。'),pick('看見門口有一個箱子，怎麼說？',['There is a box by the door.','There are a box by the door.','It has a box by the door.'],'There is a box by the door.','要介紹某處有東西。','There is 接單數 a box。')]),

  extraLesson('imperatives', 0, 4, '祈使句與感嘆句', 'Imperatives and Exclamations', '用原形動詞給指示、用 Let’s 邀約，也能用 What／How 表達驚喜。', '橘橘在校門口當小志工，提醒大家排隊。', '穿志工背心的橘橘在校門口抬起手提醒同學。',
    [['橘橘','Please wait here. Don’t run.','請在這裡等。不要跑。'],['同學','What a busy morning!','多忙碌的一個早晨啊！']],
    '祈使句用原形動詞開頭，否定用 Don’t + 原形。Let’s + 原形表示一起做。What 後可接名詞片語，How 後可接形容詞或副詞。', '看到請求或指示時先找動詞。看到強烈感受時注意 What 或 How 後的成分。',
    [shape('肯定祈使','.',v('Wait'),x('here','地點')),shape('否定祈使','.',a('Don’t'),v('run')),shape('感嘆句','!',q('What'),c('a busy morning'))],
    [pick('___ careful on the stairs, please.',['Be','Are','Being'],'Be','請求要用原形開頭。','Be careful 是請人小心的祈使句。'),build('拼出「不要碰那扇門。」',['Don’t','touch','that door.'],'Don’t 後放原形。','用 Don’t + touch 形成否定祈使句。'),pick('想感嘆這朵花真漂亮，選哪句？',['How beautiful it is!','What beautiful it is!','How a beautiful flower!'],'How beautiful it is!','beautiful 是形容詞。','How + 形容詞 + 主詞 + 動詞。')]),

  extraLesson('quantity', 0, 5, '數量詞與 How many／much', 'Quantifiers and Questions of Quantity', '問多少、說有一些，或描述數量的多寡。', '橘橘在水果攤準備蘋果和果汁。', '橘橘在水果攤笑著拿著蘋果。',
    [['同學','How many apples do we need?','我們需要多少顆蘋果？'],['橘橘','Six. We also need some juice.','六顆。我們也需要一些果汁。']],
    'many、a few 接可數複數，much、a little 接不可數。some、any 和 a lot of 可搭兩類。問數量時用 How many／How much。', '如果能一顆顆數，用 many。問水或時間的量，用 much。',
    [shape('肯定句','.',s('We'),v('need'),o('some juice')),shape('疑問句','?',q('How many apples'),a('do'),s('we'),v('need')),shape('否定句','.',s('We'),a('don’t'),v('need'),o('any juice'))],
    [pick('How ___ students are in your class?',['much','many','little'],'many','students 是可數複數。','How many 後接可數複數。'),build('拼出「我們需要多少水？」',['How much water','do','we','need?'],'water 是不可數名詞。','How much water 放在問句前。'),pick('There is ___ juice left, so you can have a glass.',['a little','a few','many'],'a little','juice 是不可數，且句子表示有剩。','a little 表示還有一些。')]),

  extraLesson('modals', 1, 0, '情態助動詞與 have to', 'Modals and Have To', '說建議、規定、可能性或是否有必要。', '同學生病了，橘橘提醒他休息、多喝水。', '橘橘穿著小幫手圍裙，指向水和毯子。',
    [['橘橘','You should rest.','你應該休息。'],['同學','Do I have to stay home tomorrow?','我明天必須待在家嗎？']],
    'should、must、may 後接原形。have to 表示有必要，疑問可用 Do／Does，否定 don’t have to 表示不必。must not 表示禁止。', '先分辨句意是在講建議、禁止，還是不用做。',
    [shape('給建議','.',s('You'),a('should'),v('rest')),shape('問是否必要','?',a('Do'),s('I'),part('need','必要','have to'),v('stay'),x('home','地點')),shape('表示不必','.',s('I'),a('don’t have to'),v('stay'),x('home','地點'))],
    [pick('You look tired. You ___ take a break.',['should','should to','should taking'],'should','should 後直接接原形。','You should take a break 是建議。'),build('拼出「我得待在家嗎？」',['Do','I','have to','stay home?'],'have to 的問句用 Do。','Do 放在 I 前，保留 have to。'),pick('今天不用帶課本，選哪一句？',['You don’t have to bring a textbook.','You must not bring a textbook.','You should brings a textbook.'],'You don’t have to bring a textbook.','「不用」表示沒有必要。','don’t have to 表示不必。')]),

  extraLesson('conjunctions', 1, 1, '對等連接詞', 'Coordinating Conjunctions', '用 and、or、but、so 把兩個想法接起來。', '社團時間，橘橘和朋友在桌遊之間做選擇。', '橘橘思考該選哪一盒桌遊。',
    [['同學','Do you want chess or cards?','你想玩西洋棋還是紙牌？'],['橘橘','I like chess, but we only have ten minutes.','我喜歡西洋棋，但我們只有十分鐘。']],
    'and 補充，or 提供選擇，but 表轉折，so 接結果。', '先看兩邊的意思。如果後一句是前一句造成的結果，考慮用 so。',
    [shape('補充','.',s('Mia'),v('likes'),o('chess and cards')),shape('選擇','?',a('Do'),s('you'),v('want'),o('chess or cards')),shape('轉折','.',s('I'),v('like'),o('chess'),x('but I don’t play it often','轉折'))],
    [pick('It was late, ___ we went home.',['but','so','or'],'so','後半是時間太晚的結果。','so 接結果。'),build('拼出「你要茶還是牛奶？」',['Do','you','want','tea or milk?'],'兩種選擇用 or。','tea or milk 提供選擇。'),pick('I wanted to play, ___ I had too much homework.',['but','and so','or'],'but','後半有轉折。','用 but 表示想玩卻有很多作業。')]),

  extraLesson('time-reason', 1, 2, '時間與原因子句', 'Time and Reason Clauses', '用 before、after、when、while 或 because 交代時間和原因。', '外面下雨了，橘橘和同學改在室內等。', '橘橘拿著傘，在雨窗和時鐘旁等候。',
    [['橘橘','We stayed inside because it was raining.','因為下雨，我們留在室內。'],['同學','We can leave after the rain stops.','雨停後我們就能走。']],
    'before/after 說先後，when 說時間，while 常描述同時進行，because 說原因。表未來的時間子句常用現在式。', '畫一條時間線，看哪件事先發生，或問「所以呢」與「為什麼」。',
    [shape('原因','.',s('We'),v('stayed'),x('inside','地點'),part('clause','原因子句','because it was raining')),shape('時間','.',s('We'),a('can'),v('leave'),part('clause','時間子句','after the rain stops'))],
    [pick('I brushed my teeth ___ I went to bed.',['before','because','or'],'before','刷牙發生在上床前。','before 引出較晚發生的動作。'),build('拼出「因為下雨，我們留下來。」',['We','stayed','because it was raining.'],'because 後放原因。','because it was raining 說明為什麼留下。'),pick('I’ll call you when I ___ home.',['get','will get','getting'],'get','when 在這裡引導時間子句。','未來的時間子句常用現在式 get。')]),

  extraLesson('linking', 1, 3, '連綴動詞與感官描述', 'Linking Verbs', '用 look、sound、smell、taste、feel 或 get 描述狀態。', '橘橘在家政課聞到剛煮好的湯。', '戴廚師帽的橘橘聞著熱湯，露出開心表情。',
    [['橘橘','The soup smells good.','這碗湯聞起來很香。'],['同學','Does it taste good, too?','它嚐起來也很好喝嗎？']],
    '連綴動詞把主詞與描述它的補語連起來。look、sound、smell、taste、feel 或 get 後常接形容詞。', '描述湯的味道用 tastes sweet；描述「動作怎麼做」才找方式副詞。',
    [shape('肯定句','.',s('The soup'),v('smells'),c('good')),shape('疑問句','?',a('Does'),s('it'),v('smell'),c('good')),shape('否定句','.',s('It'),a('doesn’t'),v('smell'),c('good'))],
    [pick('This blanket feels ___.',['soft','softly','softness'],'soft','描述毯子摸起來的狀態。','feel 在這裡是連綴動詞，後接形容詞。'),build('拼出「這道湯聞起來很香。」',['The soup','smells','good.'],'good 描述湯的狀態。','smells 接形容詞 good。'),pick('It is getting ___. Let’s go inside.',['cold','coldly','a coldly'],'cold','這是在描述天氣的變化。','get + 形容詞可以表示變得如何。')]),

  extraLesson('giving', 1, 4, '授與動詞與雙受詞', 'Giving Verbs and Double Objects', '說誰給了誰什麼，也能用 to 或 for 改寫。', '生日到了，橘橘拿出替朋友準備的禮物。', '橘橘害羞地遞出包好的生日禮物。',
    [['橘橘','I bought you a gift.','我買了一份禮物給你。'],['朋友','Thank you for giving me this card, too!','也謝謝你給我這張卡片！']],
    'give/send/show 可用「動詞＋人＋物」或「動詞＋物＋to 人」。buy/make 常用 for 表示替某人準備。', '兩個受詞時，找收到東西的人和被送出的物品。把物品提前時記得選 to 或 for。',
    [shape('人再物','.',s('I'),v('gave'),part('receiver','收件人','Mia'),o('a card')),shape('物＋to 人','.',s('I'),v('gave'),o('a card'),x('to Mia','對象')),shape('物＋for 人','.',s('I'),v('bought'),o('a gift'),x('for Mia','對象'))],
    [pick('I sent a photo ___ Leo.',['to','at','with'],'to','照片的收件人是 Leo。','send + 物 + to + 人。'),build('拼出「我買了一份禮物給你。」',['I','bought','you','a gift.'],'先放人，再放物。','bought you a gift 是雙受詞用法。'),pick('Dad made a sandwich ___ me.',['for','at','under'],'for','爸爸是替我做好。','make + 物 + for + 人。')]),

  extraLesson('too-enough', 1, 5, 'too、enough 與 so…that', 'Too, Enough and So That', '描述過於、不夠，以及程度造成的結果。', '橘橘伸長爪子，還是不到架子上方的盒子。', '橘橘伸手想碰高處架子上的盒子。',
    [['橘橘','The shelf is too high for me to reach.','這個架子高得我摸不到。'],['同學','This stool is high enough to help.','這張凳子夠高，可以幫上忙。']],
    'too + 形容詞 + to V 表示太……而無法。形容詞 + enough + to V 表示足夠。so + 形容詞 + that 接完整結果子句。', 'enough 放在 tall 後面，但放在 time 前面。',
    [shape('太……而不能','.',s('The box'),v('is'),c('too heavy'),x('to lift','動作')),shape('夠……可以','.',s('The stool'),v('is'),c('high enough'),x('to help','動作')),shape('程度和結果','.',s('The shelf'),v('is'),c('so high'),x('that I can’t reach it','結果子句'))],
    [pick('This soup is too hot ___ right now.',['to drink','drink','that drink'],'to drink','too hot 後說無法做的動作。','too + 形容詞 + to V。'),build('拼出「這個箱子太重，抬不動。」',['The box','is','too heavy','to lift.'],'把 too 放在 heavy 前。','too heavy to lift 表示太重而抬不動。'),pick('The room was ___ dark that I couldn’t see.',['so','enough','too'],'so','後半是 that 引導的完整子句。','so dark that 引出程度造成的結果。')]),

  extraLesson('real-if', 2, 0, '條件與讓步子句', 'Real Conditionals and Concession', '用 if、unless 或 although 討論條件、例外和讓步。', '橘橘一邊看天空，一邊和朋友商量野餐備案。', '橘橘拿著傘和野餐籃，抬頭看灰雲。',
    [['橘橘','If it rains, we’ll eat inside.','如果下雨，我們就在室內吃。'],['同學','Although it’s cloudy, it may stay dry.','雖然天色陰陰的，也可能不會下雨。']],
    '真實未來條件常用 if + 現在式，主句可用 will。unless 相當於 if…not。although 表示雖然，主句不用另加 but。', '先找「條件」和「結果」。不要把「可能下雨」和「下雨時就吃室內」混成同一件事。',
    [shape('符合條件','.',x('If it rains,','條件'),s('we'),a('will'),v('eat'),part('place','地點','inside')),shape('例外','.',s('We'),a('will'),v('eat'),x('outside unless it rains','地點與例外')),shape('讓步','.',x('Although it’s cloudy,','讓步'),s('it'),a('may'),v('stay'),c('dry'))],
    [pick('If it ___ later, we will take the bus.',['rains','will rain','rained'],'rains','if 引導真實未來條件。','這裡 if 子句用現在式。'),build('拼出「如果下雨，我們就在室內吃。」',['If it rains,','we','will eat','inside.'],'if 子句先說天氣條件。','If it rains 用現在式，主句用 will eat。'),pick('I will go to the game ___ I have to work.',['unless','because of','but if not'],'unless','工作會是不能去的例外。','unless 表示「除非」。')]),

  extraLesson('causatives', 2, 1, '使役動詞', 'Causative Verbs', '說某人讓、叫或要求另一個人做某事。', '工作坊裡，橘橘請同學幫忙整理積木。', '橘橘戴著青色圍裙，示意如何整理玩具積木。',
    [['橘橘','I’ll let you choose a color.','我會讓你選一個顏色。'],['同學','Our teacher has us clean the table later.','老師之後會請我們清理桌子。']],
    '主動式常見句型為 make、let、have + 人 + 原形動詞。make 偏向使或要求，let 表允許，have 可表示交代。', '先找被叫去做事的人，再放原形動詞。',
    [shape('允許','.',s('I'),v('let'),o('you'),c('choose a color')),shape('要求','.',s('The teacher'),v('made'),o('us'),c('clean the table')),shape('交代','.',s('The teacher'),v('had'),o('us'),c('move the chairs'))],
    [pick('The joke made me ___.',['laugh','to laugh','laughed'],'laugh','make + 人之後用原形。','made me laugh 表示使我笑出來。'),build('拼出「他讓我選一個顏色。」',['He','let','me','choose a color.'],'me 後接原形。','let + 人 + choose。'),pick('The teacher had us ___ the chairs.',['move','moves','to move'],'move','has or had + 人 + 原形。','使役 had 後的人再接原形 move。')]),

  extraLesson('perception', 2, 2, '感官動詞＋受詞＋動作', 'Perception Verbs', '用 see、hear、watch 等說看見或聽見的人事物正在做什麼。', '橘橘在活動教室看著玩具火車駛過。', '橘橘側耳聽，睜大眼睛看小火車。',
    [['同學','Did you see the train pass the bridge?','你有看到火車通過那座橋嗎？'],['橘橘','Yes, and I heard it moving.','有，我還聽到它正在移動。']],
    '感官動詞 + 受詞 + 原形可強調看到整個動作，+ V-ing 可強調當時正在進行。', '如果情境說「從頭到尾」，試想原形；若只看見當下片段，試想 V-ing。',
    [shape('完整動作','.',s('I'),v('saw'),o('the train'),c('pass the bridge')),shape('進行中的片段','.',s('I'),v('saw'),o('the train'),c('moving across the bridge'))],
    [pick('I watched the bird ___ from the tree to the roof. I saw the whole flight.',['fly','to fly','flew'],'fly','句子強調整段飛行。','watch + 受詞 + 原形可表完整過程。'),build('拼出「我聽見它正在移動。」',['I','heard','it','moving.'],'正在進行的動作可用 V-ing。','moving 描述聽見的活動片段。'),pick('半夜醒來聽見外頭正在下雨，選哪句？',['I heard rain falling outside.','I heard rain to fall outside.','I heard rain fell outside.'],'I heard rain falling outside.','hear + 受詞 + V-ing。','falling 表示當時正在下的雨。')]),

  extraLesson('tag', 2, 3, '附加問句', 'Tag Questions', '把簡短問句加在句尾，和對方確認想法。', '橘橘練球前跟同學確認比賽時間。', '橘橘戴運動圍巾，帶著想確認事情的表情。',
    [['橘橘','The game starts at three, doesn’t it?','比賽三點開始，對吧？'],['同學','Yes, it does.','對，三點開始。']],
    '一般情況下，肯定句配否定附加問句，否定句配肯定附加問句。尾端使用對應的 Be／助動詞和主格代名詞。', '先看前面用的動詞和主詞，最後檢查肯定與否定。',
    [shape('肯定＋否定尾句','?',s('Mia'),v('plays'),o('soccer,'),x('doesn’t she','附加問句')),shape('否定＋肯定尾句','?',s('Mia'),a('doesn’t'),v('play'),o('soccer,'),x('does she','附加問句'))],
    [pick('You are ready, ___?',['aren’t you','are you','don’t you'],'aren’t you','前半肯定，助動成分是 are。','尾句用 aren’t you。'),build('拼出「他會游泳，對吧？」',['He','can swim,','can’t he?'],'尾句沿用 can。','肯定的 can 配否定的 can’t he。'),pick('The bus didn’t come, ___?',['did it','didn’t it','is it'],'did it','前半使用否定 didn’t。','否定過去式配肯定 did it。')]),

  extraLesson('indefinites', 2, 4, '不定代名詞', 'Indefinite Pronouns', '用 one、ones、another 或 the other 避免一直重複名詞。', '橘橘在商店比較兩個水壺。', '橘橘瞇起眼比較紅色和藍色的水壺。',
    [['橘橘','Which bottle do you like?','你喜歡哪一個水壺？'],['同學','I like the blue one.','我喜歡藍色的那個。']],
    'one/ones 可代替前面提到的可數名詞。another 代表再一個，the other 是已知兩個中的另一個。', '如果是兩個中剩下那個，選 the other。還要一個同類的，選 another。',
    [shape('單數替代','.',s('I'),v('like'),o('the blue one')),shape('複數替代','.',s('I'),v('like'),o('the blue ones')),shape('兩個中的另一個','.',s('The other'),v('is'),c('red'))],
    [pick('I need clean socks. Where are the white ___?',['one','ones','them'],'ones','socks 是複數。','用 ones 代替 socks。'),build('拼出「我想要藍色那個。」',['I','want','the blue one.'],'用 one 代替一個已知名詞。','the blue one 指藍色的那個。'),pick('I have two cups. One is red, and ___ is blue.',['the other','others','both'],'the other','只有兩個，另一個是特定的。','the other 指兩個當中剩下的那一個。')]),

  extraLesson('reflexives', 2, 5, '反身與相互代名詞', 'Reflexives and Each Other', '區別「自己」「獨力做」和「彼此」。', '橘橘和同學各自組裝鳥屋，完成後互相幫忙收拾。', '戴護目鏡的橘橘獨力做完木製小鳥屋。',
    [['橘橘','I made this birdhouse myself.','這個鳥屋是我親手做的。'],['同學','Let’s help each other clean up.','我們互相幫忙收拾吧。']],
    '受詞和主詞是同一人時可用反身代名詞。myself 放在句尾可強調親自，by myself 表獨自。each other 表彼此。', '先想動作回到自己身上，還是兩人互相做。',
    [shape('反身受詞','.',s('He'),v('hurt'),o('himself')),shape('強調親自','.',s('I'),v('made'),o('this birdhouse'),x('myself','強調')),shape('互相','.',s('They'),v('help'),o('each other'))],
    [pick('Leo fell and hurt ___.',['himself','him','herself'],'himself','受傷的人就是 Leo。','Leo 的反身代名詞是 himself。'),build('拼出「他們互相幫助。」',['They','help','each other.'],'「彼此」用 each other。','each other 是 help 的受詞。'),pick('沒有別人幫忙。我自己完成了。I did it by ___.',['myself','me','my'],'myself','by + 反身代名詞表示獨自。','by myself 表示我獨力完成。')]),

  extraLesson('used-to', 2, 0, 'used to 過去的習慣', 'Used To for Past Habits', '描述以前常做的事或曾經的狀態，帶出今昔差別。', '橘橘翻看舊照片，想起以前騎有輔助輪的腳踏車。', '橘橘笑著看舊腳踏車照片，旁邊停著現在的車。',
    [['橘橘','I used to ride a small bike.','我以前常騎一輛小腳踏車。'],['同學','Did you use to ride to school?','你以前常騎車去上學嗎？']],
    '肯定用 used to + 原形。疑問 Did…use to、否定 didn’t use to 中，did 已表示過去，因此用 use to。', '重點是以前常做或曾經是那樣，通常暗示現在不同。',
    [shape('肯定句','.',s('You'),a('used to'),v('ride'),o('a small bike')),shape('疑問句','?',a('Did'),s('you'),part('pattern','過去習慣','use to'),v('ride'),o('a small bike')),shape('否定句','.',s('You'),a('didn’t use to'),v('ride'),o('a small bike'))],
    [pick('I ___ walk to school, but now I take the bus.',['used to','use to','am used to walk'],'used to','but now 提醒你在對比今昔。','肯定句用 used to + 原形。'),build('拼出「你以前常走路上學嗎？」',['Did','you','use to','walk to school?'],'Did 已表示過去。','Did you use to 加原形 walk。'),pick('Mia didn’t ___ like carrots, but now she loves them.',['use to','used to','using to'],'use to','didn’t 後回到原形。','didn’t use to 表示過去沒有這個習慣或狀態。')], 'stories')
);
