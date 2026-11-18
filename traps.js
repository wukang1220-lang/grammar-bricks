// Match the first column to a sentence-block label. A label can have more than one example.
const trapText = {
  'be': `肯定句|She are my friend.|She is my friend.|She 是第三人稱單數，用 is。
疑問句|Are hungry you?|Are you hungry?|一般疑問句用 Be 動詞＋主詞＋補語。you 要放在 hungry 前面。
否定句|I not am ready.|I am not ready.|否定的 not 放在 am 後面。`,
  'pronouns': `主格與受格|Her knows I.|She knows me.|動詞前的主詞用主格 She；knows 後的受詞用 me。
所有格形容詞|Is this yours bag?|Is this your bag?|後面有名詞 bag，要用所有格形容詞 your。
所有格代名詞|This picture is my.|This picture is mine.|句尾沒有再接名詞，用 mine 代替 my picture。`,
  'articles': `近處單數|These is an apple.|This is an apple.|近處的一個物品用 This，動詞搭配 is。
遠處複數|That are toy bricks.|Those are toy bricks.|遠處的複數物品用 Those，動詞搭配 are。
特定對象|I saw a cat. An cat was orange.|I saw a cat. The cat was orange.|第二句說的是前面已提過的同一隻貓，所以用 The cat。`,
  'place-time': `時刻|Practice starts on four.|Practice starts at four.|four 是明確時刻，前面用 at。
位置疑問|Is the ball under of the desk?|Is the ball under the desk?|under 後面直接接位置的參照物 the desk，不加 of。
日期|The game is in Saturday.|The game is on Saturday.|星期或指定日期前用 on。`,
  'wh': `陳述句|The bus stop near the park is. 〔直接陳述〕|The bus stop is near the park.|陳述地點時，順序是主詞＋Be 動詞＋地點片語。
地點問句|Where the bus stop is?|Where is the bus stop?|直接問地點時，Where 後先放 is，再放主詞。
地點問句|When are my keys? 〔想問在哪裡〕|Where are my keys?|問地點用 Where；my keys 是複數，搭配 are。`,
  'imperatives': `肯定祈使|Opens the door, please.|Open the door, please.|請對方做某事時，用原形動詞 Open 開頭。
否定祈使|Don’t to run in the hall.|Don’t run in the hall.|否定指示用 Don’t＋原形動詞，不加 to。
感嘆句|How a busy morning!|What a busy morning!|a busy morning 是名詞片語，前面要用 What。How 後通常直接接形容詞或副詞。`,
  'can': `肯定句|She can sings.|She can sing.|can 後接原形 sing，即使主詞是 she 也一樣。
疑問句|Do you can swim?|Can you swim?|can 直接移到主詞前形成問句，不加 Do。
否定句|He doesn’t can run.|He can’t run.|can 加 not 變成 cannot 或 can’t，後面仍接原形。`,
  'calendar': `問星期|What time is it today? 〔想問星期幾〕|What day is it today?|What day 用來問星期幾；What time 問具體時刻。
問時刻|What time does the fair starts?|What time does the fair start?|問時刻用 What time；does 後接原形 start。
說日期|The fair is on April two.|The fair is on April second.|口說日期要用序數。四月二日讀 April second。`,
  'present-continuous': `肯定句|She running now.|She is running now.|現在進行式需要 Be 動詞＋V-ing。
疑問句|Do you waiting now?|Are you waiting now?|現在進行式的疑問句把 Be 動詞移到主詞前。
否定句|He doesn’t playing soccer.|He isn’t playing soccer.|進行式的否定用 Be 動詞＋not＋V-ing。`,
  'there-is': `肯定句|There is two pens on the table.|There are two pens on the table.|two pens 是複數，因此用 There are。
疑問句|Is there two books in the bag?|Are there two books in the bag?|疑問句先放 Be 動詞；two books 是複數，所以用 Are。
否定句|There aren’t any milk left.|There isn’t any milk left.|milk 是不可數名詞，搭配 isn’t。`,
  'present-simple': `肯定句|My sister walk to school.|My sister walks to school.|My sister 是第三人稱單數，肯定句用 walks。
疑問句|Does Leo plays basketball?|Does Leo play basketball?|Does 已標示第三人稱單數，主要動詞回原形 play。
否定句|He doesn’t likes milk.|He doesn’t like milk.|doesn’t 後用原形 like。`,
  'nouns': `可數名詞|I bought three apple.|I bought three apples.|apple 可以一顆顆數，three 後用複數 apples。
不可數名詞|I need a water for the soup.|I need some water for the soup.|water 在此指食材，當不可數名詞，可用 some，不能直接加 a。
加上單位|Can I have two bottle of water?|Can I have two bottles of water?|以 bottle 計量，two 修飾可數的 bottles，water 保留原形。`,
  'quantity': `肯定句|We bought a little apples.|We bought a few apples.|apples 是可數複數，少量可用 a few。
疑問句|How much students are here?|How many students are here?|問可數複數的數量用 How many。How much 可問不可數的量。
否定句|There isn’t many water left.|There isn’t much water left.|water 不可數，否定句可用 not much。`,
  'basic-past': `肯定句|We was at the park yesterday.|We were at the park yesterday.|主詞 we 的過去 Be 動詞是 were。
疑問句|Did you were at the beach yesterday?|Were you at the beach yesterday?|問以前的狀態時直接把 Were 放到主詞前，不加 Did。
過去存在|There was two maps here.|There were two maps here.|two maps 是複數，描述以前存在的東西用 There were。`,
  'past-simple': `肯定句|I meet Ben yesterday.|I met Ben yesterday.|yesterday 是已結束的時間，meet 要改成不規則過去式 met。
疑問句|Did you went home?|Did you go home?|Did 已表示過去，後面的 go 用原形。
否定句|Mia didn’t bought the tickets.|Mia didn’t buy the tickets.|didn’t 已表示過去，buy 回原形。`,
  'getting-around': `交通方式|We go to school by a bus.|We go to school by bus.|用 by 說一般交通方式時，後面直接接交通工具。
搭車|We take by bus to school.|We take a bus to school.|take 是搭乘，直接接交通工具當受詞。by bus 則是表示方式的片語。
問路|How do we get the station? 〔想問怎麼到車站〕|How do we get to the station?|get to＋地點表示到達；問路時用 How do we get to…?`,
  'giving': `人再物|I gave Mia to a card.|I gave Mia a card.|雙受詞語序是 give＋人＋物，兩個受詞間不加介系詞。
物＋to 人|Did you give the card Leo?|Did you give the card to Leo?|物品放前時，用 to 引出收到卡片的人。
物＋for 人|I bought a gift to Leo.|I bought a gift for Leo.|替某人買東西用 buy＋物＋for＋人。`,
  'conjunctions': `補充|Mia likes chess so cards. 〔兩種都喜歡〕|Mia likes chess and cards.|and 用來並列兩個物品；so 用來接結果。
選擇|Do you want tea so juice?|Do you want tea or juice?|提供兩種選擇時用 or。
轉折|I like chess, so I don’t play it often. 〔想說喜歡卻不常玩〕|I like chess, but I don’t play it often.|後半和前半形成轉折，要用 but。`,
  'time-reason': `原因|I didn’t go out because of it rained.|I didn’t go out because it rained.|it rained 是有主詞與動詞的完整子句，用 because；because of 後接名詞片語。
時間|I’ll text you after I will get home.|I’ll text you after I get home.|主句講未來可用 will；after 引導的時間子句用現在式。
時間|Wash your hands after you eat. 〔要提醒先洗手〕|Wash your hands before you eat.|先洗手再吃飯，要用 before 引出後發生的動作。`,
  'past-continuous': `肯定句|We was studying then.|We were studying then.|主詞 we 用 were，再接 V-ing 說當時正在做的事。
疑問句|Did you studying when I called?|Were you studying when I called?|問過去某刻正在做什麼，用 Were＋主詞＋V-ing。
否定句|She wasn’t study when I called.|She wasn’t studying when I called.|wasn’t 後仍需 V-ing，才能表達進行中的動作。`,
  'verb-forms': `want + to V|I want going home now.|I want to go home now.|want 後接 to＋原形動詞。
enjoy + V-ing|I enjoy to sing.|I enjoy singing.|enjoy 後用動名詞 singing。
動名詞當主詞|Reading comics are fun.|Reading comics is fun.|Reading comics 整個動名詞片語是主詞，描述一項活動，用單數 is。
It 虛主詞|Is easy to use this app.|It is easy to use this app.|把真正要說的動作 to use this app 放在句尾，句首用虛主詞 It。`,
  'costs': `人花錢|Mia paid fifty dollars to the drink.|Mia paid fifty dollars for the drink.|pay＋金額＋for＋物品。若接收錢的人，才可以用 pay money to someone。
東西值多少|The drink spends fifty dollars.|The drink costs fifty dollars.|物品當主詞、說明價格時用 cost；spend 的主詞是花錢或花時間的人。
It takes|It takes me ten minutes walking here.|It takes me ten minutes to walk here.|It takes＋人＋時間＋to V，用 to walk 說明做哪件事。`,
  'future': `will 肯定句|She will brings a camera.|She will bring a camera.|will 後接原形 bring。
will 問句|Will you to help me?|Will you help me?|will 移到句首，後面接主詞和原形動詞，不加 to。
be going to|They going to take pictures.|They are going to take pictures.|be going to 需要 Be 動詞，they 搭配 are。to 後接原形 take。`,
  'comparisons': `比較級|This bag is more bigger than that one.|This bag is bigger than that one.|bigger 已經是比較級，不能再加 more。
最高級|He is the most tallest student here.|He is the tallest student here.|tallest 已是最高級，使用 the tallest，不再加 most。
同級比較|Is this book as thicker as that one?|Is this book as thick as that one?|as…as 之間用原級 thick。`,
  'adverbs': `方式副詞|She sings beautiful.|She sings beautifully.|beautiful 是形容詞；描述如何唱歌用方式副詞 beautifully。
頻率副詞|We usually goes to school by bus.|We usually go to school by bus.|usually 放一般動詞前，但動詞還是要和主詞配合。we 用 go。
Be 動詞後|You usually quiet in class.|You are usually quiet in class.|形容詞 quiet 前需要 Be 動詞；頻率副詞 usually 通常放在 are 後、quiet 前。
副詞比較級|She runs more fast than I do.|She runs faster than I do.|fast 的比較級用 faster。than 後的 do 代替前面說過的 run。`,
  'linking': `肯定句|The soup smells nicely.|The soup smells nice.|描述湯聞起來的狀態時，用形容詞 nice。
疑問句|Does your bag looks heavy?|Does your bag look heavy?|Does 後的連綴動詞要用原形 look，heavy 形容包包。
否定句|The weather didn’t get coldly.|The weather didn’t get cold.|get 後的 cold 是描述狀態的形容詞；否定使用 didn’t＋原形 get。`,
  'reflexives': `反身受詞|Mia hurt himself.|Mia hurt herself.|受傷的人和主詞是同一人，Mia 搭配 herself。
強調親自|I made these cookies myselves.|I made these cookies myself.|I 的反身代名詞是 myself，放句尾可強調親手完成。
互相|They help itself. 〔互相幫忙〕|They help each other.|each other 表彼此；itself 只指某個單一事物本身。`,
  'used-to': `肯定句|I use to walk to school. 〔說過去的習慣〕|I used to walk to school.|肯定句未用 did，使用 used to＋原形。
疑問句|Did you used to live here?|Did you use to live here?|Did 已表示過去，接主詞後用 use to。
否定句|Mia didn’t used to like tea.|Mia didn’t use to like tea.|didn’t 已表示過去，後接 use to＋原形。`,
  'causatives': `允許|Will you let her to choose?|Will you let her choose?|let 表允許，後面接人＋原形 choose。
要求|Mom made me to clean my room.|Mom made me clean my room.|主動使役 make＋人＋原形動詞；clean 前不加 to。
交代|The teacher had us to move the chairs.|The teacher had us move the chairs.|使役 have 的受詞 us 後面接原形 move。`,
  'perception': `完整動作|I saw the dog ran across the road.|I saw the dog run across the road.|用 see＋受詞＋原形 run，表示看到完整過程。過去時間已由 saw 表示。
進行中的片段|I heard the baby to crying when I walked in.|I heard the baby crying when I walked in.|進門時聽到正在哭，用 hear＋受詞＋V-ing，不加 to。
進行中的片段|When I looked up, I saw she walking across the bridge.|When I looked up, I saw her walking across the bridge.|saw 後用受格 her，再接 walking 表示抬頭時看見的片段。`,
  'modals': `給建議|Mia should to rest.|Mia should rest.|should 表建議，後面接原形 rest，不加 to。
問是否必要|Does Leo has to wear a uniform?|Does Leo have to wear a uniform?|Does 後的 has 恢復成 have，保留 have to。
表示不必|You must not bring lunch today. 〔想說不必帶〕|You don’t have to bring lunch today.|don’t have to 是不必；must not 表示明令禁止。`,
  'indefinites': `單數替代|I lost my pen. I need a new it.|I lost my pen. I need a new one.|one 可以代替任意一枝同類的單數筆；it 指前面那枝特定的筆。
複數替代|These shoes are dirty. I need clean one.|These shoes are dirty. I need clean ones.|此處要替代複數 shoes，所以用 ones。
兩個中的另一個|I have two cups. One is red, and other is blue.|I have two cups. One is red, and the other is blue.|已知只有兩個，另一個是特定的，用 the other。`,
  'real-if': `真實條件|If it will rain, we’ll stay home.|If it rains, we’ll stay home.|表可能發生的未來條件時，if 子句用現在式 rains。
否定條件|If it won’t rain, we’ll eat outside. 〔意思是如果沒下雨〕|If it doesn’t rain, we’ll eat outside.|if 子句的否定條件用 doesn’t＋原形，主句才用 will。
讓步|Although it was sunny, but we didn’t go out.|Although it was sunny, we didn’t go out.|Although 已經表示讓步，主句不用另加 but。`,
  'tag': `肯定＋否定尾句|Mia plays tennis, isn’t she?|Mia plays tennis, doesn’t she?|前半是現在簡單式的一般動詞 plays，尾句用 doesn’t she。
肯定＋否定尾句|You can swim, don’t you?|You can swim, can’t you?|前半用助動詞 can，尾句也沿用 can。肯定主句的一般附加問句用 can’t you。
否定＋肯定尾句|Mia didn’t play, didn’t she?|Mia didn’t play, did she?|前半已是否定，尾句改用肯定 did she。`,
  'present-perfect': `肯定句|She has went to Japan.|She has gone to Japan.|完成式是 have 或 has＋過去分詞，go 的過去分詞是 gone。
經驗問句|Did you ever been to the zoo?|Have you ever been to the zoo?|問到目前為止的經驗時，用 Have＋主詞＋ever＋過去分詞。
否定句|He hasn’t finish the report yet.|He hasn’t finished the report yet.|hasn’t 後仍接過去分詞 finished，yet 放句尾表示截至目前還沒。`,
  'participles': `刺激來源|The trip was excited. 〔旅遊讓人興奮〕|The trip was exciting.|描述讓人興奮的來源用 exciting。
人的感受|I am boring. 〔想說我覺得無聊〕|I am bored.|bored 表自己感到無聊；I am boring 表自己讓別人感到無聊。
問感受|Are you interesting in art?|Are you interested in art?|問對方的感受，用 interested in。`,
  'passive': `主動句|Amy was painted this picture. 〔Amy 親手畫的〕|Amy painted this picture.|Amy 是做動作的人，放主詞位置，用主動的過去式 painted。
被動句|The window was break.|The window was broken.|主詞承受動作時，用 Be 動詞＋過去分詞 broken。
被動問句|Was these books written here?|Were these books written here?|複數主詞 books 搭 were，問句把 Were 放句首，並保留 written。`,
  'noun-clauses': `直接問句|Where the library is?|Where is the library?|直接問地點時，Where 後放 is，再放主詞。
疑問詞子句|I know where is the library.|I know where the library is.|where 子句作 know 的受詞，用主詞＋動詞的語序。
that 子句|I know that is the library closed.|I know that the library is closed.|that 引出陳述內容，子句的主詞 the library 在動詞 is 前。
是否|I wonder that the store is open or not.|I wonder whether the store is open or not.|whether…or not 表「是否」，可當 wonder 的受詞內容。
疑問詞＋to V|I don’t know what I to say.|I don’t know what to say.|用 wh＋to V 時，中間不再加主詞。`,
  'relatives': `基本句|The girl our class leader.|The girl is our class leader.|基本句先留好主詞和主要動詞。這裡的 The girl 搭配 is。
補充人物特徵|The boy who he won is my brother.|The boy who won is my brother.|who 已經是關係子句的主詞，不另加 he；is 才是主句動詞。
補充事物特徵|The hat who is on the desk is mine.|The hat that is on the desk is mine.|hat 指事物，主格關係代名詞用 that 或 which。
受格省略|The book I bought it yesterday is mine.|The book I bought yesterday is mine.|關代當 bought 的受詞可以省略，不用在子句裡另加 it。
所有格 whose|The girl who bag is red is Mia.|The girl whose bag is red is Mia.|whose＋名詞表所有；whose bag 表「她的包包」。`,
  'agreement': `肯定附和|I like tea. — So I do. 〔我也是〕|I like tea. — So do I.|換成另一人附和時，用 So＋適當助動詞＋主詞。
肯定句尾|Leo likes comics. — Mia do, too.|Leo likes comics. — Mia does, too.|用 too 放句尾附和。Mia 是第三人稱單數，助動詞用 does。
否定附和|I can’t go. — Neither can’t I.|I can’t go. — Neither can I.|Neither 已含否定，後面接肯定形式 can，再接主詞。
否定句尾|I don’t drink coffee. — I don’t, too.|I don’t drink coffee. — I don’t, either.|否定句尾用 either 表「也不」。`,
  'correlatives': `兩者都|She likes both tea or juice.|She likes both tea and juice.|both 和 and 搭配，表示兩者都。
兩者擇一|Can I have either tea nor water?|Can I have either tea or water?|either 和 or 搭配，表示在兩者中擇一。
兩者都不|I like neither tea or juice.|I like neither tea nor juice.|neither 和 nor 搭配，本身已表示兩者都不。`,
  'too-enough': `太……而不能|The box is too heavy carry.|The box is too heavy to carry.|too＋形容詞＋to V 表示程度太高而做不到。
夠……可以|She is enough tall to join.|She is tall enough to join.|enough 修飾形容詞時，放在形容詞 tall 後面。
程度和結果|The shelf is so high to I can’t reach it.|The shelf is so high that I can’t reach it.|so＋形容詞＋that 後接完整結果子句。`,
  'adv-clauses': `等待直到|I’ll wait until the rain will stop.|I’ll wait until the rain stops.|until 表示等到某時間點。即使說未來，時間子句仍用現在式 stops。
一……就|I’ll call as soon as I will arrive.|I’ll call as soon as I arrive.|as soon as 表示一到就會做另一件事，時間子句用現在式 arrive。
只要|You can join as long as you will bring a ticket.|You can join as long as you bring a ticket.|as long as 表「只要」，引出的真實條件用現在式 bring。`
};
