const moreBank = {
  pronouns: `
01|Mia is in my class. ___ sits by the window.|She|Her|Hers|空格當主詞，用 She。
02|Ben is my cousin. I see ___ every week.|him|he|his|see 後接受格 him。
03|My parents are doctors. ___ work at a hospital.|They|Them|Their|空格在句首當主詞，用 They。
04|Which belongs to Tom: his pencil or mine? — The blue pencil is ___.|his|him|he|his 可單獨表示 Tom 的東西。
05|We lost ___ map during the trip.|our|ours|us|map 前面用所有格 our。
06|The cat follows Mia and me. It follows ___.|us|we|ours|Mia and me 包含說話者，受格是 us。
07|This chair is not mine. Is it ___?|yours|your|you|yours 等於你的椅子。
08|The team found its ball. What does its refer to?|The team.|The ball.|The reader.|its 指球隊的所有物。
09|Leo and I have new bags. ___ bags are green.|Our|Ours|Us|bags 前用 Our。
10|Mia brought these shoes. They are ___.|hers|her|she|hers 代替 her shoes。
11|Who gave the cards to the twins? — Ben gave them to ___.|them|they|theirs|to 後用 twins 的受格 them。
b12|拼出「這頂帽子是她的。」|This hat / is / hers.|hers 可獨立使用。`,
  articles: `
01|Leo wears ___ uniform at school.|a|an|these|uniform 開頭是 /y/ 聲，不是母音聲音。
02|___ are my keys here on the table.|These|This|That|靠近的複數用 These。
03|Look at the building far away. ___ is our library.|That|These|Those|遠的單數用 That。
04|I saw a cat and a dog. ___ cat was orange.|The|A|An|前面已提及的貓用 The。
05|She wants ___ orange from the basket.|an|a|these|orange 以母音開頭，單數用 an。
06|___ are those near the gate? — They are bikes.|What|Who|What time|問物品用 What。
07|I bought ___ useful book yesterday.|a|an|those|useful 的開頭是 /y/，用 a。
08|___ picture here is beautiful.|This|These|Those|靠近的單數用 This。
09|What are ___ mountains over there?|those|this|that|over there 指遠處，mountains 是複數。
10|Which request means 「請把我們眼前那扇門關上」?|Please close the door.|Please close an door.|Please close these door.|指特定的門可用 the。
11|He is ___ honest person.|an|a|those|honest 開頭 h 不發音，用 an。
b12|拼出「這些是我的書。」|These / are / my books.|These 指近處複數，配 are。`,
  'place-time': `
01|The club meets ___ Friday afternoons.|on|in|at|特定星期的某時段用 on。
02|Mia was born ___ 2012.|in|on|at|年份前用 in。
03|He gets up ___ six thirty.|at|on|in|時刻前用 at。
04|The bus stop is ___ the bank and the store.|between|under|through|兩處之間用 between。
05|The cat hid ___ the bed, so we couldn’t see it at first.|under|at noon|on time|under the bed 表示在床底。
06|The library is ___ the street from the school.|across|in at|during|across the street from 表在街對面。
07|We often play outside ___ the afternoon.|in|on|at|泛指下午用 in the afternoon。
08|Dad works ___ night this week.|at|on|in|at night 是常見固定搭配。
09|The ball is not in the box. It is on top of it. Where is the ball?|On the box.|Under the box.|Between two boxes.|on top of 表在上方表面。
10|The picture hangs ___ the wall.|on|at time|between|在牆面上用 on。
11|The lesson begins ___ Monday, April first.|on|at|in|特定日與日期搭配 on。
b12|拼出「比賽在週六九點開始。」|The game / starts / at nine on Saturday.|時刻用 at，星期用 on。`,
  'there-is': `
01|There ___ five people in the room.|are|is|be|five people 是複數。
02|___ there a bus stop nearby?|Is|Are|Has|a bus stop 是單數，問句用 Is there。
03|There ___ any chairs left.|aren’t|isn’t|don’t have|chairs 搭 are，否定 are not。
04|There is ___ in the glass.|some water|two cups|some books|water 不可數，用 There is。
05|Are there two windows? — Yes, there ___.|are|is|have|問句和短答都用 are。
06|哪句是「桌上沒有筆」?|There isn’t a pen on the desk.|There aren’t a pen on the desk.|There doesn’t a pen on the desk.|a pen 是單數，用 isn’t。
07|How many posters ___ in the room?|are there|there are|is there|直接問句把 are 放在 there 前。
08|There ___ a school near my house.|is|are|have|a school 是單數。
09|Which question asks if milk is available?|Is there any milk?|Are there any milk?|Do there have milk?|milk 不可數，因此用 Is there。
10|Under the trees, there ___ many flowers.|are|is|have|依後面的 many flowers 用 are。
11|There ___ any bread in the kitchen.|isn’t|aren’t|doesn’t have|bread 是不可數。
b12|拼出「附近有兩座公園嗎？」|Are / there / two parks / nearby?|Be 動詞放去 there 前。`,
  imperatives: `
01|___ the window, please.|Open|Opens|Opening|請求用原形 Open 開頭。
02|___ touch the wet paint.|Don’t|Doesn’t|Not to|否定祈使句用 Don’t。
03|Let’s ___ for the bus here.|wait|waits|waiting|Let’s 後接原形 wait。
04|Hurry up, ___ you’ll miss the train.|or|when|although|or 表示不然會錯過車。
05|Follow this path, ___ you’ll find the gate.|and|but if not|although|and 引出照指示做之後的結果。
06|___ a wonderful day!|What|How|Which is|What 接 a wonderful day 這個名詞片語。
07|___ fast that dog runs!|How|What|Whose|How 引出副詞 fast。
08|What ___ interesting story!|an|a|those|單數 story 前要冠詞，interesting 用 an。
09|選出邀約「我們不要在這裡停下來吧」。|Let’s not stop here.|Let’s don’t stop here.|Let’s not stopping here.|否定邀約常用 Let’s not + 原形。
10|___ quiet in the library.|Be|Are|Being|Be 是原形，可作祈使句。
11|哪句可詢問能否關門？|Could you close the door?|Close you the door?|How close the door!|Could you 加原形可禮貌請求。
b12|拼出「多漂亮的一幅畫啊！」|What / a beautiful / picture!|What + 單數名詞片語。`,
  quantity: `
01|I didn’t drink ___ water this morning.|any|many|a few|一般否定句中可用 any 搭配水。
02|We need ___ minutes to finish this.|a few|much|a little|minutes 可數，a few 表還要幾分鐘。
03|There isn’t ___ time left.|much|many|a few|time 不可數，否定時常用 much。
04|Would you like ___ tea?|some|many|a few|提供東西時，常用 some。
05|___ is this ticket? — Fifty dollars.|How much|How many|How often|How much 可以問價錢。
06|The store has ___ books for children.|a lot of|much|a little|a lot of 可接可數複數。
07|Both of my two brothers ___ soccer.|play|plays|is playing it|both 表兩個都，作複數主詞。
08|Most of the rice ___ gone.|is|are|have|後面是不可數 rice，因此搭 is。
09|How ___ rice should I cook?|much|many|few|rice 不可數，用 How much。
10|There are ___ eggs left. We should buy more. 〔幾乎沒有〕|few|a few|a little|few 不帶 a，語氣偏少或不足。
11|All of the chairs ___ taken.|are|is|has|chairs 是複數，用 are。
b12|拼出「你有幾枝筆？」|How many pens / do / you / have?|用 How many + 可數複數。`,
  calendar: `
01|___ does the concert start? — At six.|What time|What day|What date|At six 是時刻。
02|___ is it today? — It’s May fifth.|What’s the date|What day of the week|How long|May fifth 提供日期。
03|September 3 can be read September ___.|third|three days|thirteenth|序數 third 表第三。
04|Today is Monday. Tomorrow is ___.|Tuesday|Sunday|Wednesday|星期一的下一天是 Tuesday。
05|Her birthday is on the ___ of June. 〔第十二日〕|twelfth|twelve|twentieth|twelve 的序數是 twelfth。
06|The game is ___ Wednesday.|on|in|at|星期用 on。
07|Our meeting is at seven thirty. What time is it?|7:30|7:13|7:03|thirty 表三十。
08|Which is first in a Monday-to-Friday school week?|Monday|Wednesday|Friday|Monday 是這個上課週第一天。
09|We meet every Friday. Which replies to How often?|Once a week.|At five.|Last Friday.|每週一次表示頻率。
10|Today is the ___ of May. 〔五月二十日〕|twentieth|twelfth|twenty|日期要序數 twentieth。
11|The second runner finished after ___.|the first runner|the third runner|the fourth runner|second 順序在 first 之後。
b12|拼出「活動是在七月一日。」|The event / is / on July first.|日期用 on，one 的序數是 first。`,
  'basic-past': `
01|Mia ___ at home yesterday.|was|were|is now|Mia 是單數，昨天用 was。
02|___ you at school last Friday?|Were|Was|Did be|you 的過去 Be 是 were。
03|There ___ three dogs outside a minute ago.|were|was|is|three dogs 是複數，過去用 were。
04|There ___ some soup on the table earlier.|was|were|be|soup 是不可數，過去用 was。
05|The stores ___ open last night, so we couldn’t shop.|weren’t|wasn’t|didn’t open are|stores 複數用 weren’t。
06|Was Leo sick yesterday? — No, he ___.|wasn’t|weren’t|didn’t|Was 的否定短答用 wasn’t。
07|Where ___ the children after lunch yesterday?|were|was|are now|children 是複數，時間在過去。
08|The classroom ___ bright when I got there.|was|were|be|got 表過去，classroom 是單數。
09|There ___ any people at the station last night.|weren’t|wasn’t|aren’t now|people 是複數，過去否定用 weren’t。
10|___ there a clock in the old room?|Was|Were|Did be|a clock 是單數，問曾經有某物用 Was there。
11|My brother and I ___ in different classes last year.|were|was|am now|my brother and I 等於 we。
b12|拼出「昨天店沒開。」|The store / wasn’t / open / yesterday.|store 用過去否定 wasn’t。`,
  modals: `
01|You ___ eat more vegetables if you want a balanced diet.|should|should to|should eating|建議用 should + 原形。
02|This is a library. You must ___ quiet.|be|are|being|must 後接原形 be。
03|The sign says NO ENTRY. You ___ go in.|must not|don’t have to|should going|must not 表示禁止。
04|Today’s homework is optional. You ___ do it.|don’t have to|must not|have to|optional 代表不必做，並非禁止做。
05|___ Leo have to work on Saturdays?|Does|Is|Has only|have to 的一般現在問句用 Does。
06|Mia ___ to wear a uniform at her school.|has|have|must|第三人稱單數用 has to。
07|It is cloudy. It ___ rain later.|may|mays|may to|may + 原形表示可能。
08|May I come in? — Yes, you ___.|may|are|have|用 may 回應許可問句。
09|What should we ___ to the picnic?|bring|brings|to bring|should 後接原形。
10|Mia had a fever yesterday, so she ___ stay in bed.|had to|has to now|must to|已結束的過去用 had to。
11|I missed the train. What ___ I do now?|should|should to|do should|What should I do? 用來問建議。
b12|拼出「他今天不必帶午餐。」|He / doesn’t have to / bring / lunch today.|doesn’t have to 表沒有必要。`,
  conjunctions: `
01|I brought a pencil ___ an eraser.|and|but if|so it|and 補充另一件物品。
02|We can walk ___ take a bus. Which do you prefer?|or|so|because|or 提供替代選擇。
03|Mia is tired, ___ she still wants to play.|but|or|so that|想玩和疲倦形成轉折。
04|My phone was dead, ___ I used Mia’s.|so|but although|or|用 Mia 的手機是前面情況的結果。
05|The soup is hot ___ delicious.|and|so that|because it|and 並列兩個形容詞。
06|Which connects two alternatives?|Do you want tea or water?|Do you want tea so water?|Do you want tea because water?|or 連接兩個選擇。
07|We missed the bus, ___ we took the next one.|so|although if|but because|改搭下一班是結果。
08|I wrote the number down, ___ I lost the paper.|but|and because|or else|遺失紙條和寫下來形成轉折。
09|You can read outside ___ stay here to draw.|or|because|until|用 or 列出兩種活動。
10|Which completes the contrast: It was sunny, ___ it was cold.|but|or|so that|晴朗卻冷，是轉折。
11|Close the window ___ turn off the light before you leave.|and|so that|because of|兩項指示並列用 and。
b12|拼出「雨很大，所以我們留在室內。」|It rained hard, / so / we stayed / inside.|so 接結果。`,
  'time-reason': `
01|We stayed home ___ it was raining.|because|or|until then|because 引出不出門的原因。
02|Wash your hands ___ you eat.|before|while already|or|洗手是先做的動作。
03|I did my homework ___ I came home.|after|but until|although after|先到家，後做作業。
04|Dad called ___ I was studying.|while|so that if|or|while 提供電話響起時進行中的背景。
05|Mia smiled ___ she saw her friend again.|when|therefore|or|when 說明發生的時間。
06|I’ll let you know before the lesson ___.|starts|will starts|started yesterday|表未來的時間子句用現在式。
07|Why did you leave? — ___ I felt sick.|Because|After only|Although|Why 問原因，Because 回答。
08|We couldn’t cycle ___ the heavy rain.|because of|because|while|because of 後接名詞片語。
09|Turn off the lamp ___ you go to bed. 〔先關燈〕|before|after|because of|before 表明在睡覺前先做。
10|I’ll text you when I ___ the answer.|know|will know tomorrow|knowing|未來時間子句用 know。
11|I play a little music ___ I clean my room. 〔同時〕|while|because of|after that|while 表兩件事同時發生。
b12|拼出「下課後我會打給你。」|I’ll call you / after / class ends.|after 帶出時間子句，ends 用現在式。`,
  linking: `
01|These cookies taste ___.|sweet|sweetly|sweetness|sweet 描述餅乾的味道。
02|Does your knee feel ___ today?|better|wellness|more better|feel 後可用形容詞比較級 better。
03|The music sounds ___.|great|greatly|greatness|sound 後用形容詞描述主詞。
04|The sky got ___ before the storm.|dark|darkly|darkness|get + 形容詞表示變暗。
05|Her face became ___ when she heard the news.|red|redly|redness|became 後用形容詞 red。
06|The soup doesn’t ___ good anymore.|smell|smells|smelling|doesn’t 後恢復原形。
07|The towels feel ___. We can use them now.|dry|dryly|dryness|feel 後形容毛巾乾了。
08|Which describes how the soup tastes?|It tastes good.|It tastes well by running.|It tastes the cook quickly.|good 作補語形容湯的味道。
09|This plan ___ interesting. Can you tell me more?|sounds|sounds likely|sound are|plan 是單數，sounds + 形容詞。
10|You look ___. Did something happen?|worried|worriedly|worries like|look + 形容詞形容人的狀態。
11|Does the box look ___ to you?|empty|emptily|emptiness|empty 描述 box 的狀態。
b12|拼出「天氣逐漸變冷。」|It / is getting / cold.|cold 是描述狀態的形容詞。`,
  giving: `
01|She showed me ___ after class.|a photo|to a photo|for a photo|show + 人 + 物。
02|I gave these books ___ my cousin.|to|for at|with|give + 物 + to + 人。
03|Mom cooked dinner ___ us.|for|to|at|cook + 物 + for + 人表示替人做。
04|Can you send me ___ today?|the address|to the address|for the address|send me the address 是雙受詞。
05|He bought his sister ___.|a hat|to a hat|for a hat|buy + 人 + 物。
06|Please pass the ball ___ Leo.|to|at for|with on|pass + 物 + to + 人。
07|I wrote a postcard ___ my friend.|to|into|until|寫給對方可用 write + 物 + to + 人。
08|Which can replace: I gave Mia a card.|I gave a card to Mia.|I gave Mia to a card.|I gave a card at Mia.|把物提前用 to 引出收件人。
09|Dad made the cake ___ my sister.|for|with to|until|make for 表替某人做。
10|Who got the notebook in: Mia gave Leo a notebook?|Leo|Mia|The notebook|gave 後第一個受詞 Leo 是收件人。
11|Which means「她替我們準備餐點」?|She made us a meal.|She made a meal to us.|She made us to a meal.|made us a meal 是 make + 人 + 物。
b12|拼出「請把那封信寄給 Mia。」|Please send / the letter / to Mia.|send + 物 + to 人。`,
  'too-enough': `
01|The child is tall ___ to ride the bike.|enough|too|so that|enough 放形容詞後。
02|We don’t have ___ time to finish now.|enough|too|so|enough 放名詞 time 前。
03|This box is ___ heavy to carry alone.|too|so that|enough to|too + heavy + to carry。
04|Mia was so tired ___ she fell asleep on the bus.|that|to|than|so…that 接完整結果子句。
05|The coffee was too hot for Leo ___.|to drink|to drink it|drinking|coffee 是 drink 的受詞，不重複加 it。
06|The box isn’t light ___ for me to lift.|enough|too to|so that|isn’t light enough 表不夠輕。
07|Which means the notes were impossible to read?|The notes were too small to read.|The notes were small enough to read.|The notes were so small that I read them easily.|too…to 帶出無法做到的動作。
08|She is strong enough ___ this bag.|to carry|carrying|carried|形容詞 + enough + to V。
09|He spoke so quietly that I ___ hear him.|couldn’t|don’t yesterday|won’t yesterday|說得太小聲的結果是聽不見，時態與 spoke 呼應。
10|Is there ___ room for one more person?|enough|too to|so that|enough 修飾不可數 room。
11|This chair is too low ___ my little brother to reach the table.|for|by|after|for + 人指出誰做不到。
b12|拼出「她夠高，可以拿到那本書。」|She / is / tall enough / to reach the book.|enough 放在 tall 後。`
};
