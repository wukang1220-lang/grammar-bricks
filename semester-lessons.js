lessons.splice(lessons.findIndex((unit) => unit.id === 'conditionals'), 1);

lessons.push(
  extraLesson('calendar',0,0,'星期、日期與時間問答','Days, Dates and Time','會問幾點、星期幾與幾月幾日，也能說序數。','橘橘和同學把校慶時間記在行事曆上。','橘橘指向標了活動日期的月曆。',
    [['橘橘','What day is the school fair?','校慶是星期幾？'],['同學','It’s on Saturday, May third, at nine.','是星期六，五月三日，九點。']],
    'What time 問時刻，What day 通常問星期，What’s the date 問日期。用序數 first、second、third 等說日期。','on Saturday、on May third、at nine 分別標示星期、日期和時刻。',
    [shape('問星期','?',q('What day'),v('is'),s('the fair')),shape('問時刻','?',q('What time'),a('does'),s('the fair'),v('start')),shape('說日期','.',s('It'),v('is'),x('on May third','日期'))],
    [pick('___ is it today? — It’s Tuesday.',['What day','What time','How often'],'What day','Tuesday 是星期。','What day 可以問星期幾。'),build('拼出「你幾點起床？」',['What time','do','you','get up?'],'What time 放在句首。','問時刻，正常問句用 do + you。'),pick('五月二日怎麼讀？',['May second','May two weeks','May twenty'],'May second','日期用序數。','second 是二的序數。')],'bridge'),

  extraLesson('basic-past',0,1,'was／were 與過去存在句','Was, Were and There Was','描述以前的狀態，或某處原本有什麼。','橘橘翻看以前野餐的照片。','橘橘拿著以前在樹下野餐的合照。',
    [['橘橘','Was the park busy yesterday?','昨天公園很熱鬧嗎？'],['同學','Yes. There were many people around the tree.','是的，那棵樹附近有很多人。']],
    'I/he/she/it 用 was，you/we/they 用 were。There was 接單數或不可數；There were 接複數。','昨天在某處或是某種狀態，先從 was、were 挑，不用 did 來提問。',
    [shape('肯定句','.',s('The park'),v('was'),c('busy')),shape('疑問句','?',v('Was'),s('the park'),c('busy')),shape('過去存在','.',q('There'),v('were'),s('many people'))],
    [pick('We ___ at the park last Sunday.',['were','was','are now'],'were','last Sunday 是過去，主詞是 we。','we 的過去 Be 動詞是 were。'),build('拼出「昨天有三隻狗。」',['There','were','three dogs','yesterday.'],'three dogs 是複數。','過去存在句用 There were。'),pick('The store ___ open last night. I could not buy milk.',['wasn’t','weren’t','didn’t be'],'wasn’t','商店是單數，且昨晚未營業。','wasn’t 是 was not。')],'bridge'),

  extraLesson('getting-around',1,2,'天氣、交通與問路','Weather, Transport and Directions','用 How 問天氣或交通方式，並能指路。','橘橘查地圖，告訴同學如何搭車到車站。','橘橘指著車站地圖，旁邊停著公車。',
    [['同學','How do we get to the station?','我們要怎麼去車站？'],['橘橘','Take Bus 5 and get off next to the park.','搭五號公車，在公園旁下車。']],
    'How’s the weather? 等於 What’s the weather like? 搭交通工具可說 by bus 或 take a bus；指路可用 go straight 和 turn left。','by 後面通常直接接交通工具，on foot 表步行。',
    [shape('交通方式','.',s('We'),v('go'),x('by bus','方式')),shape('搭車','.',s('We'),v('take'),o('Bus 5')),shape('問路','?',q('How'),a('do'),s('we'),v('get'),x('to the station','地點'))],
    [pick('What is the weather ___ today?',['like','likes','look'],'like','weather 問句要說「像什麼樣」。','What’s the weather like? 問天氣。'),build('拼出「我們搭公車去學校。」',['We','go to school','by bus.'],'方式片語放在末尾。','by bus 直接接 bus。'),pick('你要請同學在第二個路口左轉，選哪句？',['Turn left at the second corner.','Take left to the second number.','Turn to second bus.'],'Turn left at the second corner.','turn left 表示左轉。','at the second corner 指第二個路口。')],'bridge'),

  extraLesson('costs',1,3,'花費動詞與 It takes','Spend, Cost, Take and Pay','用適當主詞說花了多少錢、多久，或付了多少。','橘橘買點心並估算走到會場要多久。','橘橘在攤位數硬幣，旁邊有小計時器。',
    [['橘橘','This drink costs fifty dollars.','這杯飲料五十元。'],['同學','It takes me ten minutes to walk here.','我走來這裡要十分鐘。']],
    '人 spend 時間／金錢 on 名詞或 V-ing；物 cost 人金錢；人 pay 金錢 for 物；It takes 人時間 to V。','先找主詞是誰，再看空格後是錢、時間、物，還是動作。',
    [shape('人花錢','.',s('Mia'),v('paid'),o('fifty dollars'),x('for the drink','物品')),shape('東西值多少','.',s('The drink'),v('costs'),o('fifty dollars')),shape('It takes','.',s('It'),v('takes'),o('me ten minutes'),x('to walk here','動作'))],
    [pick('It takes me ten minutes ___ to school.',['to walk','walk','walks'],'to walk','找 It takes + 人 + 時間。','後面的動作用 to V。'),build('拼出「這張票要五十元。」',['The ticket','costs','fifty dollars.'],'主詞是物品。','物品當主詞，使用 costs。'),pick('I paid fifty dollars ___ this ticket.',['for','at','to it'],'for','pay 說的是花錢買某物。','pay + 金額 + for + 物。')],'bridge'),

  extraLesson('participles',2,0,'分詞形容詞','Participial Adjectives','用 -ed 形容感受，用 -ing 描述帶來那種感受的原因。','橘橘在科展看到會轉的行星模型。','橘橘驚喜地看著轉動的行星模型。',
    [['橘橘','The model is exciting.','這個模型很令人興奮。'],['同學','I’m excited about the next show, too.','我也很期待下一場展示。']],
    '在 excited/exciting、bored/boring 等這類情緒詞中，-ed 常說感受；-ing 常描述讓人產生感受的特徵。','不是一律「人加 -ed、物加 -ing」。人也可以 be interesting，表示他讓別人感興趣。',
    [shape('刺激來源','.',s('The show'),v('is'),c('exciting')),shape('人的感受','.',s('I'),v('am'),c('excited')),shape('問感受','?',v('Are'),s('you'),c('excited'))],
    [pick('I’m ___ about the trip tomorrow.',['excited','exciting','excitement'],'excited','主語正在說自己的感受。','excited 描述期待興奮的感受。'),build('拼出「這一場演出很有趣。」',['The show','is','interesting.'],'演出引起興趣。','interesting 描述讓別人感興趣的特徵。'),pick('The long wait was ___. Everyone wanted to leave.',['boring','bored','bore'],'boring','等候這件事讓人覺得無聊。','boring 描述原因。')],'review'),

  extraLesson('agreement',2,1,'附和句','Agreement with So, Too, Either and Neither','用簡短答句表達「我也是」或「我也不」。','橘橘和朋友發現彼此都喜歡同一本漫畫。','橘橘和朋友一起開心地分享漫畫。',
    [['同學','I like comic books.','我喜歡漫畫。'],['橘橘','So do I.','我也是。']],
    '肯定可用 so＋助動詞＋主詞，或主詞＋助動詞＋too。否定可用 neither＋助動詞＋主詞，或主詞＋否定助動詞＋either。','問自己：前一句肯定還是否定？原句是哪個 Be 或助動詞？',
    [shape('肯定附和','.',q('So'),a('do'),s('I')),shape('肯定句尾','.',s('I'),a('do'),x('too','也')),shape('否定附和','.',q('Neither'),a('do'),s('I')),shape('否定句尾','.',s('I'),a('don’t'),x('either','也不'))],
    [pick('I can swim. — ___.',['So can I','So do I','Neither can I'],'So can I','前句肯定，而且用 can。','so + can + I 表肯定附和。'),build('拼出「我也沒有。」〔對方說 I didn’t buy it.〕',['Neither','did','I.'],'neither 已表示否定。','搭配肯定的助動詞 did。'),pick('I don’t eat meat. — I don’t ___.',['either','too','also do'],'either','句尾否定附和。','not…either 表示也不。')],'review'),

  extraLesson('correlatives',2,2,'成對連接詞','Correlative Conjunctions','用 both…and、either…or、neither…nor 和 not only…but also 連接想法。','橘橘在飲料攤選一種飲料，或是兩種都要。','橘橘在兩杯不同顏色的飲料之間做選擇。',
    [['同學','You can have either tea or juice.','你可以喝茶或果汁其中一種。'],['橘橘','Can I have both tea and juice?','我可以茶和果汁都要嗎？']],
    'both…and 是兩者皆，either…or 是二選一，neither…nor 是兩者皆不，not only…but also 強調不只一項。兩端成分應平行。','看到前半，找成對的後半，再看兩邊連接的是名詞、動詞或子句。',
    [shape('兩者都','.',s('I'),v('like'),o('both tea and juice')),shape('兩者擇一','.',s('You'),a('can'),v('have'),o('either tea or juice')),shape('兩者都不','.',s('I'),v('like'),o('neither tea nor juice'))],
    [pick('You can pick either the blue bag ___ the red bag.',['or','nor','and'],'or','either 的搭檔。','either…or 表示二選一。'),build('拼出「我喜歡茶和果汁這兩種。」',['I','like','both tea','and juice.'],'both 搭配 and。','兩端連接兩個名詞。'),pick('She can not only sing ___ dance.',['but also','nor','or also'],'but also','看到 not only。','not only…but also 連起 sing 和 dance。')],'review'),

  extraLesson('adv-clauses',2,3,'副詞子句進階複習','Adverb Clauses in Context','用 until、since、as soon as、as long as 和 though 串起時間、條件及讓步。','橘橘在屋簷下等雨停，打算一停雨就出發。','橘橘在入口旁看時鐘，手中拿著雨傘。',
    [['橘橘','I’ll wait here until the rain stops.','我會在這裡等到雨停。'],['同學','Call me as soon as you get home.','你一到家就打給我。']],
    'until 表直到，since 可帶出起點，as soon as 表一……就，as long as 表只要，though 表雖然。表未來的時間／條件子句通常用現在式。','注意 as soon as 只談先後，as long as 則提出一個條件。',
    [shape('等待直到','.',s('I'),a('will'),v('wait'),x('until the rain stops','時間')),shape('一……就','.',s('I'),a('will'),v('call'),x('as soon as I get home','時間')),shape('只要','.',s('You'),a('can'),v('join'),x('as long as you bring a ticket','條件'))],
    [pick('Stay here ___ I come back.',['until','although','or'],'until','留在這裡一直到我回來。','until 表示一個動作持續到某時。'),build('拼出「我一到家就會打給你。」',['I’ll call you','as soon as','I get home.'],'as soon as 標出緊接著發生的時間。','表未來的時間子句用 get。'),pick('You can use my pen ___ you give it back later.',['as long as','since yesterday','until then'],'as long as','歸還是可以借筆的條件。','as long as 表示只要。')],'review')
);

function reviewUnit(id, updates) {
  const unit = lessons.find((item) => item.id === id);
  Object.assign(unit, updates);
  return unit;
}

for (const id of ['real-if','causatives','perception','tag','indefinites','reflexives','used-to']) {
  reviewUnit(id, { grade: 1 });
}
reviewUnit('too-enough', { grade: 2 });
const pastUnit = lessons.find((item) => item.id === 'past-simple');
pastUnit.grade = 0;
pastUnit.art.sheet = 'grade-8';

const levelComparisons = reviewUnit('comparisons', {
  rule: '兩者不同用比較級 + than；群體中最突出用 the + 最高級；兩者相同用 as + 原級 + as。',
  tip: '看到兩個 as，中間放原級。例如 as tall as。更高才用 taller than。'
});
levelComparisons.shapes.push(shape('同級比較','.',s('This bag'),v('is'),c('as big as that one')));

const verbForms = reviewUnit('verb-forms', {
  rule: 'want/plan 後接 to V，enjoy/finish 後接 V-ing。動名詞片語可當主詞；It is + 形容詞 + to V 把動作放在句尾。'
});
verbForms.shapes.push(shape('動名詞當主詞','.',s('Reading comics'),v('is'),c('fun')),shape('It 虛主詞','.',s('It'),v('is'),c('easy'),x('to use this app','真正主詞')));

const relativeReview = reviewUnit('relatives', {
  rule: '關係子句緊跟被修飾的名詞。關代在子句中作主詞時保留，作受詞時可省略；whose 加名詞表所有。找主句動詞時，先把關係子句圈起來。',
  tip: 'The book I bought is blue. 先圈 I bought，剩 The book is blue，is 才是主句動詞。'
});
relativeReview.shapes.push(shape('受格省略','.',s('The book'),x('I bought yesterday','關係子句'),v('is'),c('mine')),shape('所有格 whose','.',s('The girl'),x('whose bag is red','關係子句'),v('is'),c('Mia')));

const nounReview = reviewUnit('noun-clauses', {
  rule: 'that 子句說內容；間接問句用疑問詞 + 主詞 + 動詞；whether/if 表是否。疑問詞 + to V 可簡化像 I don’t know what to say 的句子。'
});
nounReview.shapes.push(shape('是否','.',s('I'),v('wonder'),o('whether the store is open')),shape('疑問詞＋to V','.',s('I'),v('don’t know'),o('what to say')));

const adverbReview = reviewUnit('adverbs', {
  rule: '頻率副詞常放一般動詞前、Be 後。方式副詞說「怎麼做」，可用 faster、more slowly 或 the fastest 比較。',
  tip: 'How often 問頻率。good 是形容詞；well 是副詞，比較級用 better。'
});
adverbReview.shapes.push(shape('副詞比較級','.',s('You'),v('speak'),x('more slowly than I do','方式比較')));

reviewUnit('real-if', {
  title: '真實條件與讓步子句',
  summary: '用 if 或 although 討論可能發生的條件和讓步。',
  rule: '真實未來條件常用 if + 現在式，主句可用 will。although 表示雖然，主句不再搭配 but。',
  shapes: [shape('真實條件','.',x('If it rains,','條件'),s('we'),a('will'),v('eat'),part('place','地點','inside')),shape('否定條件','.',x('If it doesn’t rain,','條件'),s('we'),a('will'),v('eat'),part('place','地點','outside')),shape('讓步','.',x('Although it’s cloudy,','讓步'),s('it'),a('may'),v('stay'),c('dry'))]
});
const realIf = lessons.find((unit) => unit.id === 'real-if');
realIf.tasks[2] = pick('If the library ___ open tomorrow, we will study there.',['is','will be','was yesterday'],'is','這是可能發生的未來條件。','if 子句用現在式 is，主句使用 will。');

const teachingOrder = [
  'be pronouns articles place-time wh imperatives can calendar present-continuous there-is present-simple nouns quantity basic-past past-simple',
  'getting-around giving conjunctions time-reason past-continuous verb-forms costs future comparisons adverbs linking reflexives used-to causatives perception modals indefinites real-if tag',
  'present-perfect participles passive noun-clauses relatives agreement correlatives too-enough adv-clauses'
].flatMap((grade) => grade.split(' '));
lessons.sort((left, right) => teachingOrder.indexOf(left.id) - teachingOrder.indexOf(right.id));
