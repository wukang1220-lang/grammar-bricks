const publishers = ['翰林','康軒','南一'];
const curriculum = [
  { label:'七上', book:'第一冊', note:'暖身先熟悉代名詞與自我介紹。南一七上課次依本次提供的對照資料。',
    rows:`
暖身|主格／所有格、姓名和年齡~pronouns,wh|主格／所有格~pronouns|複習人稱代名詞和所有格~pronouns
1|Be 動詞 Yes/No 問句、Who、形容詞、and~be,wh,conjunctions|Be 動詞 Yes/No 問句、Who、形容詞~be,wh|this/that、a/an、What~articles,wh
2|指示詞、複數、a/an/the、Where＋地方介系詞~articles,nouns,place-time,wh|What are these?、複數~articles,nouns|Where…from?、Who／How old~wh,be
3|祈使句、or、can、受格~imperatives,conjunctions,can,pronouns|Where is/are、地方介系詞、祈使句~wh,place-time,imperatives|祈使句~imperatives
4|星期與時間問答、時間介系詞、現在進行式~calendar,place-time,present-continuous|can 肯定／否定／問句~can|There is/are、名詞複數~there-is,nouns
5|日期、序數、When~calendar,wh|現在進行式、What time／What day~present-continuous,calendar|現在進行式~present-continuous
6|There is/are、some/any~there-is,quantity|There is/are~there-is|can~can` },
  { label:'七下', book:'第二冊', note:'翰林、康軒在本冊教過去式。南一在八上才進入過去式，七下末可以選做 was/were 銜接。',
    rows:`
1|一般動詞現在式、do/does、第三人稱單數~present-simple|現在簡單式~present-simple|一般動詞現在式、do 問句~present-simple
2|頻率副詞、How often~adverbs,wh|頻率副詞、How often~adverbs,wh|第三人稱單數~present-simple
3|Which、one/ones、可數／不可數~wh,indefinites,nouns|日期、序數、Whose、所有格代名詞~calendar,wh,pronouns|How 問句（節慶）~wh,calendar
4|How much/many、數量詞~quantity|How much/many~quantity|How much/many、可數／不可數~quantity,nouns
5|Be 過去式、There was/were~basic-past|Be 與規則動詞過去式、Did 問句~basic-past,past-simple|頻率副詞~adverbs
6|不規則動詞過去式~past-simple|不規則動詞過去式~past-simple|交通方式 by/take~getting-around` },
  { label:'八上', book:'第三冊', note:'翰林、康軒在八上先教授與動詞，南一到八下。南一八上先補 Be、規則與不規則動詞過去式。',
    rows:`
1|天氣問答、授與動詞~getting-around,giving|天氣問答與詞性變化~getting-around|Be 與規則動詞過去式~basic-past,past-simple
2|before/after/when/because/so、所有格代名詞~time-reason,conjunctions,pronouns|授與動詞、Why…? because/so~giving,wh,time-reason,conjunctions|不規則過去式~past-simple
3|過去進行式、when/while~past-continuous,time-reason|when/before/after、過去進行式~time-reason,past-continuous|過去進行式~past-continuous
4|不定詞、動名詞當受詞／主詞、It 虛主詞~verb-forms|不定詞、動名詞、It 虛主詞~verb-forms|不定詞~verb-forms
5|問路、地方介系詞片語~getting-around,place-time|未來式、花費動詞~future,costs|動名詞當主詞、spend~verb-forms,costs
6|未來式、spend/cost/take/pay~future,costs|問路、交通方式~getting-around,place-time|未來式~future` },
  { label:'八下', book:'第四冊', note:'used to 是康軒八下的單課重點；翰林在此冊教附加問句。南一計畫另列使役、感官、連綴動詞和不定代名詞，未標出課次。',
    rows:`
1|連綴動詞、比較級、as…as~linking,comparisons|as…as、比較級、one/ones 與 it/they~comparisons,indefinites|比較級、所有格代名詞~comparisons,pronouns
2|最高級、反身代名詞~comparisons,reflexives|最高級、used to~comparisons,used-to|最高級~comparisons
3|情態副詞、副詞比較／最高級、使役動詞~adverbs,causatives|連綴動詞、使役動詞~linking,causatives|副詞比較級~adverbs
4|感官動詞、must/should/have to、if~perception,modals,real-if|情態副詞、副詞比較／最高級~adverbs|授與動詞~giving
5|all/most/some of…、although/though~indefinites,quantity,real-if,adv-clauses|感官動詞、反身代名詞、not only…but also~perception,reflexives,correlatives|some of…、最高級~quantity,comparisons
6|附加問句、that 名詞子句~tag,noun-clauses|不定代名詞、if、although/though~indefinites,real-if,adv-clauses|if 條件句、that 名詞子句~real-if,noun-clauses` },
  { label:'九上', book:'第五冊', note:'三版都從現在完成式開始，後段共同練關係子句。康軒此冊安排附加問句；翰林此冊安排 too…to／so…that。',
    rows:`
1|現在完成式~present-perfect|現在完成式~present-perfect|現在完成式~present-perfect
2|分詞形容詞、too…to、so…that~participles,too-enough|分詞形容詞、that 名詞子句~participles,noun-clauses|被動語態~passive
3|被動語態~passive|被動語態、附加問句~passive,tag|分詞形容詞~participles
4|名詞子句、間接問句、wh＋to V、whether/if~noun-clauses|間接問句、wh＋to V~noun-clauses|名詞子句（how＋形容詞＋S＋V）~noun-clauses
5|主格關係代名詞~relatives|主格關係代名詞~relatives|主格 that~relatives
6|受格關係代名詞~relatives|受格關係代名詞、whose~relatives|受格關代省略~relatives` },
  { label:'九下', book:'第六冊', note:'南一在本冊教附加問句；康軒、南一都在本冊練 too…to／so…that。以時態、句子結構、指代、被動與動狀詞、連接詞語意做總複習。',
    rows:`
1|附和句 so/too/either/neither~agreement|as soon as／as long as／when／while~adv-clauses,time-reason|附加問句、both…and、either…or、neither…nor~tag,correlatives
2|either…or、neither…nor、not only…but also~correlatives|too…to、so…that、either/neither、附和句~too-enough,correlatives,agreement|too…to、so…that、附和句、when/while~too-enough,agreement,time-reason
3|while/until/since/though 副詞子句~adv-clauses|複習名詞子句、動狀詞、片語動詞~noun-clauses,verb-forms,getting-around|複習現在完成式、比較、被動~present-perfect,comparisons,passive
4|總複習形容詞子句、名詞子句~relatives,noun-clauses|複習使役／感官／連綴、被動~causatives,perception,linking,passive|複習形容詞子句、名詞子句與副詞子句~relatives,noun-clauses,adv-clauses` }
].map((volume) => ({ ...volume, rows: volume.rows.trim().split('\n').map((row) => row.split('|')) }));

const tenseRows = [
  [0,'be 動詞','現在的人、地點或狀態','I am new here.','be'],
  [0,'現在進行式','now、Look!、Listen!','Look! The cat is running.','present-continuous'],
  [1,'現在簡單式','every day、usually、固定時刻表','Leo takes the bus every Monday.','present-simple'],
  [1,'過去 Be／存在句','yesterday、last night、原本的狀態','There were three people here yesterday.','basic-past'],
  [1,'過去簡單式','yesterday、last week、ago、已結束的敘事','We saw the film last Saturday.','past-simple'],
  [2,'過去進行式','at that time、when/while 提供時間背景','I was studying when you called.','past-continuous'],
  [2,'未來式與未來安排','tomorrow、next week、已約定的計畫','We are meeting Mia tomorrow.','future'],
  [2,'未來時間／條件子句','before/when/if 內用現在式，主句可用 will','I’ll call you when I get home.','time-reason'],
  [3,'過去習慣','used to；常帶出與 now 的對照','I used to walk, but now I take the bus.','used-to'],
  [4,'現在完成式','since 起點、for 期間、already/yet','I have lived here since 2020.','present-perfect'],
  [4,'被動語態的時態','先判斷時間改 Be，再保留過去分詞','The window was broken by the wind.','passive'],
  [5,'時間／條件再複習','as soon as/until/as long as 加現在式','I’ll wait until the rain stops.','adv-clauses']
];

const examWeights = [
  ['時態判斷',28,'過去簡單／進行式、現在進行式與未來安排、現在完成式、未來式、時間／條件子句。'],
  ['動詞句型',20,'被動、不定詞與動名詞、祈使句、感官動詞、used to、have to、代動詞與附和句。'],
  ['連接詞與子句',19,'對等連接詞與 although、關係子句、wh- 名詞子句。'],
  ['代名詞與數量詞',16,'it／they／her、mine、one／the other、both／any、all／few、反身代名詞。'],
  ['其他',7,'比較級與最高級、介系詞、附加問句、There be。']
];

const examPatterns = [
  ['present-perfect','for/since、already/yet','I have lived here since 2020.'],
  ['past-continuous','過去某時正在做','He was singing when I arrived.'],
  ['time-reason','時間子句用現在式','I’ll call you when I get home.'],
  ['passive','Be + 過去分詞','The window was broken by the wind.'],
  ['noun-clauses','名詞子句與 wh＋to V','I don’t know what to say.'],
  ['relatives','關係子句與主句動詞','The girl who is wearing a red hat is our class leader.'],
  ['verb-forms','動名詞片語當主詞','Reading comics is fun.'],
  ['costs','It takes 人＋時間＋to V','It takes me ten minutes to walk to school.'],
  ['perception','感官動詞＋受詞＋V／V-ing','I heard the dog barking.'],
  ['used-to','used to＋原形','I used to walk, but now I take the bus.'],
  ['imperatives','祈使句、and/or 接結果','Don’t run.'],
  ['indefinites','one／the other 與指代','One is white, and the other is black.'],
  ['comparisons','比較級與最高級','This bag is bigger than that one.'],
  ['agreement','附和句','So do I.'],
  ['tag','附加問句','The game starts at three, doesn’t it?']
];
