// In each row, the first choice is the key. The player shuffles choices.
const coreBank = {
  be: `
01|My cousins ___ at the library today.|are|is|am|cousins 是複數，搭配 are。
02|I’m Leo. ___ you new here, too?|Are|Is|Am|you 搭配 are，疑問句移到句首。
03|Mia and I ___ in the same class.|are|am|is|Mia and I 等於 we。
04|The soup ___ hot now. You can eat it.|isn’t|aren’t|amn’t|soup 搭 is，is not 可縮寫為 isn’t。
05|___ your little brother at home?|Is|Are|Am|your little brother 是單數。
06|The books ___ heavy, so I can carry them.|aren’t|isn’t|am not|books 是複數，搭配 aren’t。
07|Which reply matches: Are you OK? |Yes, I am.|Yes, I is.|Yes, you are.|用 I 回答別人問自己的問題。
08|I ___ not from Tainan. I’m from Hualien.|am|are|is|I 用 am，否定寫 am not。
09|哪句能問「你們是同學嗎？」|Are you classmates?|You classmates are?|Is you classmates?|疑問句把 Are 放在 you 前。
10|This ___ my seat. My name is on it.|is|are|am|this 作單數主詞。
11|Our new teacher and our coach ___ both here.|are|am|is|and 連起兩個人，主詞是複數。
b12|拼出「那個房間不冷。」|That room / is / not / cold.|把 not 放在 is 後。`,
  'present-simple': `
01|Judy ___ the bus on Mondays.|takes|take|taking|Judy 是第三人稱單數，take 加 s。
02|My parents ___ near the station.|work|works|working|parents 是複數，肯定句用原形。
03|___ your aunt cook dinner every day?|Does|Do|Is|問 aunt 的一般動詞習慣，用 Does。
04|My dog doesn’t ___ dry food.|eat|eats|eating|doesn’t 已表示單數，eat 回原形。
05|Mia ___ English after dinner.|studies|studys|study|study 的 y 前是子音，改成 ies。
06|A bus ___ here at seven every weekday.|stops|stop|stopping|固定時間表可用現在簡單式。
07|Which response fits: Do the twins play chess?|No, they don’t.|No, they doesn’t.|No, they aren’t.|Do 的否定短答用 don’t。
08|Kevin ___ two sisters.|has|have|haves|have 的第三人稱單數是 has。
09|I ___ coffee. I drink tea instead.|don’t like|doesn’t like|don’t likes|I 用 don’t + 原形。
10|The library ___ at six on Fridays.|closes|close|closing|固定作息用現在式，library 是單數。
11|哪句表示「你爸平常開車嗎？」|Does your dad drive?|Does your dad drives?|Is your dad drive?|Does 後面接原形 drive。
b12|拼出「Tom 不打籃球。」|Tom / doesn’t / play / basketball.|doesn’t 後用原形。`,
  'present-continuous': `
01|Shh! Dad ___ in the next room.|is sleeping|sleeps|sleeping|Shh 暗示動作正在進行，Dad 搭 is。
02|Listen. The students ___ a new song.|are singing|is singing|sing every day|Listen 引出當下，students 搭 are。
03|I’m using the computer, but I ___ a game.|am not playing|do not playing|not play|現在進行式否定是 am not + V-ing。
04|What ___ Mia doing in the kitchen now?|is|does|are|Mia 搭 is，疑問詞後接 is。
05|Look! A child ___ across the street.|is running|is runing|running|run 要雙寫 n 再加 ing，也要有 is。
06|___ you waiting for the bus right now?|Are|Do|Is|you 搭 are，進行疑問句用 Be 開頭。
07|Which describes an arranged plan for tomorrow?|I’m meeting Ben at ten tomorrow.|I meeted Ben tomorrow.|I am meet Ben tomorrow.|已安排的近期計畫可用現在進行式。
08|Our team ___ a game this Friday. We already booked the court.|is playing|is play|played yesterday|已確定的未來安排可用現在進行式。
09|The door is open. Someone ___ inside right now.|is coming|comes every night|are coming|right now 配進行式，someone 搭 is。
10|Which is a short reply to: Is Leo studying?|Yes, he is.|Yes, he does.|Yes, he studies.|用問句中的 Be 動詞回答。
11|The children ___ now. They are reading quietly.|aren’t talking|isn’t talking|don’t talking|children 是複數，否定用 aren’t talking。
b12|拼出「你現在正在寫信嗎？」|Are / you / writing / a letter / now?|Be 動詞移到主詞前。`,
  can: `
01|My dog can ___ very fast.|run|runs|running|can 後用原形 run。
02|___ Leo ride a bike?|Can|Does can|Is can|用 Can 開頭詢問能力。
03|Mia can sing, but she ___ dance.|can’t|doesn’t can|don’t can|can 直接加 not 變成 can’t。
04|The sign says no photos. You ___ take pictures here.|can’t|can|are can|can’t 在這裡表示不允許。
05|Which short answer fits: Can the twins cook?|Yes, they can.|Yes, they do.|Yes, they are.|用 they can 回答 Can 問句。
06|想有禮貌地借筆，要說哪一句？|Can I borrow your pen?|Can I borrowing your pen?|Do I can borrow your pen?|Can I + 原形可用來請求許可。
07|___ you help me carry this box, please?|Can|Are|Do can|Can you + 原形可以提出請求。
08|The door is locked, so we can’t ___ it.|open|opens|opened|否定的 can’t 也要接原形。
09|選出表示「我能游泳，但我弟弟不能」的答句。|I can swim, but my brother can’t.|I can swims, but my brother can’t.|I can swim, but my brother doesn’t can.|can’t 後可省略前面提過的 swim。
10|Where can we ___ some water?|get|gets|getting|can 後的動詞保持原形。
11|The team can ___ only on Fridays.|practice|practices|practicing|主詞為單數也不改 can 後的原形。
b12|拼出「Mia 會彈鋼琴嗎？」|Can / Mia / play / the piano?|把 Can 放在句首。`,
  wh: `
01|___ is the station? — Near the park.|Where|When|Why|Near the park 是地點。
02|___ is calling? — My brother.|Who|How old|Where|問哪個人，用 Who。
03|___ do you take the bus? — Because it’s cheap.|Why|When|Which|because 給出原因，用 Why。
04|___ club do you want, art or science?|Which|How|Where|在已知選項中選擇，用 Which。
05|___ is your sister? — She is twelve.|How old|What time|How many|詢問年齡用 How old。
06|___ color is your new bag? — Blue.|What|How old|Who|What color 用來問顏色。
07|___ takes care of the cat? — Leo does.|Who|What time|Whose|Who 是問句主詞，直接接 takes。
08|___ book is this? — It’s Mia’s.|Whose|Who|When|問所有者用 Whose。
09|How ___ do you play tennis? — Twice a week.|often|old|long ago|twice a week 表頻率，用 How often。
10|___ did you get here? — By bus.|How|Why|When|By bus 是交通方式，用 How。
11|___ does school start? — At eight.|What time|What day|Whose|具體時刻可用 What time 提問。
b12|拼出「你想要哪一個？」|Which one / do / you / want?|先放疑問詞片語，再放 do。`,
  nouns: `
01|The pet shop has three ___.|rabbits|rabbit|rabbites|three 後放可數複數。
02|I bought two ___ of bread.|loaves|breads|bread|bread 不可數，loaves 是可數單位。
03|Those ___ are from Canada.|children|childs|child|child 的不規則複數是 children。
04|We need some ___ for the soup.|salt|salts one|a salts|salt 在此指食材，作不可數名詞。
05|Which sentence is correct?|I have two boxes.|I have two box.|I have two boxs.|box 的複數加 es。
06|I can see two ___ in the park.|men|mans|man|man 的複數是 men。
07|May I have a ___ of water?|glass|glasses|many|glass 是一個可數的容器。
08|Please give me some ___ about the club.|information|an information|informations|information 通常不可數。
09|I bought ___ for lunch. 〔一顆蛋〕|an egg|an eggs|some egges|一顆蛋是 an egg。
10|We have four ___ between us.|sandwiches|sandwich|sandwichs|sandwich 的複數加 es。
11|Which uses a proper name correctly?|We live in Taiwan.|We live in taiwan.|We live in taiwans.|地名 Taiwan 是專有名詞，字首大寫。
b12|拼出「我需要三瓶牛奶。」|I / need / three bottles / of milk.|數瓶子用 three bottles。`,
  'past-simple': `
01|Last Saturday, Mia ___ a gift for Dad.|bought|buys|buy|last Saturday 是已結束時間，buy 的過去式是 bought。
02|Did the bus ___ ten minutes ago?|leave|left|leaves|did 表過去，leave 用原形。
03|I ___ you yesterday, but you didn’t answer.|called|call|will call|yesterday 是過去線索。
04|The movie ended at nine. We ___ home after that.|went|go|were go|ended 確立過去時間，go 的過去式是 went。
05|Leo didn’t ___ his keys, so he could not get in.|find|found|finds|didn’t 後面用原形。
06|When I was seven, I ___ my first bike.|got|get|have got now|was seven 是過去時段，got 是 get 的過去式。
07|Which reply fits: Did Mia call you?|Yes, she did.|Yes, she does.|Yes, she was.|Did 問句的短答用 did。
08|We ___ the picnic on Monday because it rained on Sunday.|had|have|having|rained 和敘事都在過去，have 變成 had。
09|My brother ___ his homework and went out.|finished|finishes|will finish|went 和 finished 是相連的過去動作。
10|Who ___ this cake yesterday? — Emma did.|made|make|does make|Who 在這裡是主詞，後接過去式 made。
11|The bottle fell and ___ into two pieces.|broke|breaks|breaking|break 的不規則過去式是 broke。
b12|拼出「你昨天看到 Mia 了嗎？」|Did / you / see / Mia / yesterday?|Did 加動詞原形 see。`,
  future: `
01|I think it ___ cold tomorrow.|will be|was|been|tomorrow 談未來，will 後接 be。
02|We bought the tickets. We ___ the movie on Sunday.|are going to see|is going to see|went to see|已做安排，we 搭 are going to。
03|The phone is ringing. — Don’t worry, I ___ it.|will answer|answered|answers|當下決定用 will。
04|___ your brother going to join us?|Is|Will|Does|be going to 問句由 Is 開頭。
05|Mia ___ take the train tomorrow. She has a ride.|won’t|didn’t|doesn’t to|won’t 表示未來不會。
06|Who ___ bring snacks to the meeting next week?|will|is|did to|will 後接原形 bring。
07|The sky is very dark. It ___ rain soon.|is going to|went to|will to|眼前跡象可用 be going to 預測。
08|I will tell her when she ___ here.|gets|will getting|got yesterday|未來時間子句用現在式 gets。
09|We’re ___ Grandma tonight. We agreed to meet at six.|visiting|visit|visited|已安排的未來也可用現在進行式。
10|Which means「我們不打算參加」?|We aren’t going to join.|We don’t going to join.|We aren’t going to joining.|在 Be 後加 not，to 後用原形。
11|If the bus is late, I ___ you.|will call|will calls|called yesterday|if 子句給條件，主句用 will + 原形。
b12|拼出「他們打算帶一台相機。」|They / are going to / bring / a camera.|they 配 are，to 後用原形。`,
  'past-continuous': `
01|At seven last night, my parents ___ dinner.|were making|make|was making|過去某刻正在做，parents 搭 were。
02|While I ___ home, it started to rain.|was walking|walked every day|was walk|while 提供另一動作發生時的背景。
03|What ___ you doing when the lights went out?|were|was|are|過去背景用 were，主詞是 you。
04|Mia ___ when I saw her. She was reading.|wasn’t sleeping|weren’t sleeping|doesn’t sleeping|Mia 搭 was，否定為 wasn’t。
05|At that time, everyone ___ for the bus.|was waiting|were waiting|waiting|everyone 在文法上當單數。
06|The dog was barking ___ I opened the door.|when|or|so that|when 表示開門當下。
07|The phone rang while we ___ lunch.|were eating|have been eat|are eat|rang 是短動作，were eating 是進行中背景。
08|Which is a reply to: Were they playing at four?|No, they weren’t.|No, they didn’t.|No, they wasn’t.|沿用 were 做過去進行式短答。
09|At eight yesterday morning, I ___ for my exam.|was studying|study now|was study|was 後要加 V-ing。
10|I found a coin while I ___ the floor.|was cleaning|clean every day|am cleaning now|found 是過去，while 子句說當時背景。
11|The twins ___ online at nine when Dad came in.|were chatting|was chatting|chat now|the twins 是複數，用 were。
b12|拼出「我到達時，他正在唱歌。」|He / was singing / when / I arrived.|用進行式當背景，過去簡單式說到達。`,
  'verb-forms': `
01|___ comic books is fun.|Reading|Read|Reads|動名詞片語 Reading comic books 可當主詞。
02|It is easy ___ this app.|to use|use|uses|It 是虛主詞，to use 是內容。
03|It takes us ten minutes ___ to school.|to walk|walking|walks|It takes + 人 + 時間 + to V。
04|I finished ___ my room before dinner.|cleaning|to clean|clean|finish 後接 V-ing。
05|They decided ___ a bike ride.|to take|taking|took|decide 後用 to V。
06|Mia keeps ___ the same mistake.|making|to make|make|keep 在這裡接 V-ing。
07|Playing two sports ___ hard for me.|is|are|be|動名詞片語作單一主詞時用 is。
08|It is kind of you ___ me.|to help|helping|helps|It is + 形容詞 + of 人 + to V。
09|We plan ___ next week.|to leave|leaving|left|plan 後接 to V。
10|Leo enjoys ___ and drawing.|singing|sing|to singing|enjoy 後接 V-ing，並與 drawing 平行。
11|After ___ breakfast, I took the bus.|eating|to eat|ate|此處 after 為介系詞，後接 V-ing。
b12|拼出「讀漫畫很有趣。」|Reading comics / is / fun.|Reading comics 是主詞。`,
  comparisons: `
01|This hill is ___ than that one.|higher|highest|high|than 前用比較級。
02|Ben is as ___ as Mia.|tall|taller|tallest|as…as 中間用原級 tall。
03|This bag isn’t as heavy ___ mine.|as|than|that|否定的同級比較仍用第二個 as。
04|It’s the ___ place in town on a summer day.|coolest|cooler|more cool|in town 給整個比較範圍，用最高級。
05|My new glasses are ___ than my old pair.|better|gooder|best|good 的不規則比較級是 better。
06|The green bag is a little ___ than the blue bag.|cheaper|cheapest|cheap|a little 可以修飾比較級。
07|Which is cheaper than $100?|A bag for $80.|A bag for $100.|A bag for $120.|cheaper than 表示價格更低。
08|This chair is ___ comfortable than that one.|more|most|the more|較長形容詞 comfortable 常用 more 形成比較級。
09|Anna is one of the ___ runners at school.|fastest|faster|fast|one of the + 最高級 + 複數名詞。
10|This is the ___ of the three tests.|hardest|harder|most hardest|三者範圍用 the + 最高級，hardest 不再加 most。
11|My suitcase is not ___ those large ones.|as heavy as|as heavier as|heavier as|as…as 之間放原級。
b12|拼出「這本書跟那本一樣有趣。」|This book / is / as interesting / as that one.|as…as 中間用原級 interesting。`,
  adverbs: `
01|Mia ___ takes the bus. She does it almost every day.|usually|never|slowly|almost every day 表示高頻率。
02|Our dog is ___ hungry after a walk.|always|angry|quick|always 是頻率副詞，一般放 Be 之後。
03|Tom works ___. He never wastes time.|hard|hardly|harder than|work hard 表示努力，hardly 表示幾乎不。
04|She sings ___ than her brother.|better|best|gooder|well 的不規則比較級是 better。
05|Of the three, Leo ran the ___.|fastest|faster|more fast|of the three 設定比較範圍，使用最高級。
06|Could you speak ___? I couldn’t hear the last word.|more clearly|clearerly|most clearly than|用比較級 more clearly 表示比剛才更清楚。
07|___ do you see your cousins? — Once a month.|How often|How long|What day|once a month 是頻率。
08|Ben carefully opened the box. Which word tells how?|carefully|opened|box|carefully 修飾 opened。
09|Yesterday they went home ___. 〔很早〕|early|earlily|earliest of all|early 可作副詞說明時間。
10|Leo never gets wet because he ___ takes an umbrella if it rains.|always|never|hardly|依上下文，他每次下雨都帶傘。
11|Mia ran more ___ than I did.|slowly|slow|slowest|多音節副詞比較級常用 more + 副詞。
b12|拼出「她上學從不遲到。」|She / is / never / late / for school.|頻率副詞 never 通常放在 Be 後。`,
  'present-perfect': `
01|I have lived here ___ 2020.|since|for|ago|2020 是起始時間點，前面用 since。
02|We have been friends ___ three years.|for|since|last|three years 是一段期間。
03|Have you finished the report ___?|yet|already yesterday|ago|問是否已完成常在句尾用 yet。
04|You don’t need to call. I have ___ told Mia.|already|ago|last|already 表在此之前已做。
05|I ___ the movie last Saturday.|saw|have seen|have saw|last Saturday 是已結束時間，選過去簡單式。
06|Tom has ___ his key, so he can’t get in.|lost|lose|losing|has 後接過去分詞 lost。
07|Mia has ___ to the store. She isn’t home now.|gone|went|goes|has gone to 表示人已離開前往某處。
08|I have ___ to Japan twice. I’d like to visit again.|been|gone away|went|have been to 可描述去過的經驗。
09|How long ___ you lived here?|have|did last week|are|現在完成式以 have 問持續多久。
10|They haven’t replied ___, so I’ll wait.|yet|last night|already ago|yet 表截至目前還沒。
11|We’ve known Mia since she ___ here.|moved|will move|moves tomorrow|since 子句以過去式指出起點。
b12|拼出「他還沒完成作業。」|He / hasn’t finished / his homework / yet.|hasn’t 加過去分詞，yet 放在句尾。`,
  passive: `
01|The door was ___ by a strong wind.|broken|broke|break|was + 過去分詞形成過去被動式。
02|These letters ___ every Friday.|are mailed|is mailed|are mailing themselves|主詞 letters 是複數，且信被寄出。
03|The song ___ by our class last year.|was written|is writing|wrote|song 是被寫出的，last year 用過去式。
04|Was the window ___ this morning?|cleaned|clean|cleaning by itself|被動疑問句使用 Was + 主詞 + 過去分詞。
05|這張票必須在週五前使用。The ticket must ___ by Friday.|be used|use|be using|助動詞後的被動是 be + 過去分詞。
06|Dinner ___ at six every evening in the hotel dining room.|is served|serves itself|are served|dinner 是被供應的，由現在式 is + 過去分詞構成。
07|The park ___ next week if repairs finish.|will be opened|will open by the workers|was opened next week|will be + 過去分詞可表示未來被動。
08|The bikes ___ at the shop on Tuesday. 〔已修好，過去〕|were fixed|was fixed|fixed themselves|bikes 是複數，而且是被修好。
09|Which means「這本書是由 Mia 寫的」?|This book was written by Mia.|This book wrote Mia.|Mia was written by this book.|被動的主詞是 book，by 引出作者。
10|The classroom ___ yesterday, so it is still messy.|wasn’t cleaned|didn’t be cleaned|doesn’t cleaned|過去被動否定用 wasn’t + 過去分詞。
11|Which is the main verb phrase: The bike that I found was painted blue?|was painted|I found|that I|that I found 修飾 bike，主句動詞是 was painted。
b12|拼出「這扇窗是被風吹破的。」|The window / was / broken / by the wind.|用 was + 過去分詞 broken。`,
  relatives: `
01|The girl who is singing ___ my sister.|is|sing|are|who is singing 修飾 girl，主句動詞 is。
02|The books that we bought ___ on that shelf.|are|is|bought|先略去關係子句，主詞 books 搭 are。
03|The bus ___ takes us to school is late.|that|where|who for|that 在子句中代替 the bus 並作主詞。
04|The boy ___ dog ran away is looking for it.|whose|whom|which|whose + dog 表示男孩的狗。
05|Which can omit the relative pronoun?|The book that I found is mine.|The book that fell is mine.|The dog that barks is mine.|第一句的 that 是 found 的受詞，可省略。
06|The shirt I bought yesterday ___ too small.|was|bought|were|I bought yesterday 修飾 shirt，was 是主句動詞。
07|My friend met the singer ___ we saw on TV.|whom|which|whose|關代在 we saw 的後面當受詞，指人可用 whom。
08|The student who won the race ___ from our class.|is|are|won|who won the race 是關係子句；刪掉後填 is。
09|Which sentence is correct?|The bike that I fixed is blue.|The bike that I fixed it is blue.|The bike who I fixed is blue.|that 代替 bike 當 fixed 的受詞，不再加 it。
10|Which sentence needs its relative pronoun?|The girl who runs fast is Mia.|The girl who I met is Mia.|The girl that I called is Mia.|who 當 runs 的主詞時不能省略。
11|Leo knows the woman ___ car is red.|whose|which|whom|whose 表所有格，後接 car。
b12|拼出「我昨天買的書在桌上。」|The book / I bought yesterday / is / on the desk.|受詞關代可省略，is 是主句動詞。`,
  'noun-clauses': `
01|I don’t know ___ to say.|what|what do I|that what|what + to say 表示要說什麼。
02|Can you tell me where ___?|she lives|does she live|lives she|用間接問句語序，主詞在動詞前。
03|I’m not sure ___ he will come or not.|whether|that|what|whether…or not 表示是否。
04|Do you know how old ___?|Mia is|is Mia|does Mia|疑問詞組 how old 後接主詞 Mia 和 is。
05|Mia believes ___ the club will win.|that|what to|if not|that 引出信念的內容。
06|I wonder ___ the store is open today.|if|what to|where to|此處 if 表「是否」，是名詞子句。
07|I don’t know how ___ this door.|to open|open I|do I open|how to open 表不知道打開的方法。
08|Tell me when ___ last night.|you got home|did you get home|got you home|間接問句用 you got home。
09|Which is the direct question?|Where is the park?|I know where the park is.|Can you tell me where the park is?|直接問地點時，is 放在主詞前。
10|I can’t decide ___ to take to the party, the red bag or the blue one.|which bag|that bag does|which does bag|which bag + to take 表要帶哪一個包包。
11|Do you remember why ___ early yesterday?|we left|did we leave|left we|why 子句使用主詞 we 再接過去式 left。
b12|拼出「我不知道往哪裡走。」|I / don’t know / where / to go.|where + to go 當 know 的受詞。`
};
