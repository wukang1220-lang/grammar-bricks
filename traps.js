// Every lesson has one worked correction for each sentence form, in this order.
const trapForms = ['肯定句','疑問句','否定句'];
const trapText = {
  be: `She are my friend.|She is my friend.|She 是第三人稱單數，用 is。
Are hungry you?|Are you hungry?|一般疑問句是 Be 動詞＋主詞＋補語。
I not am ready.|I am not ready.|否定的 not 放在 am 後。`,
  'present-simple': `My sister walk to school.|My sister walks to school.|第三人稱單數的肯定句用 walks。
Does Leo plays basketball?|Does Leo play basketball?|Does 已標示單數，主要動詞回原形。
He doesn’t likes milk.|He doesn’t like milk.|doesn’t 後的 like 不再加 s。`,
  'present-continuous': `She running now.|She is running now.|現在進行式要有 Be 動詞和 V-ing。
Do you waiting now?|Are you waiting now?|進行式問句把 Be 動詞移到主詞前。
He doesn’t playing soccer.|He isn’t playing soccer.|進行式的否定用 isn’t + V-ing。`,
  can: `She can sings.|She can sing.|can 後接原形 sing。
Do you can swim?|Can you swim?|can 可直接移到主詞前，不加 Do。
He doesn’t can run.|He can’t run.|can 否定用 cannot 或 can’t。`,
  wh: `I live on Taipei.|I live in Taipei.|回答 Where 時可用 in ＋城市。
Where the bus stop is?|Where is the bus stop?|直接問句用 Where + is + 主詞。
I don’t lives near the station.|I don’t live near the station.|用否定句回答地點時，don’t 後接原形 live，再補充地點。`,
  nouns: `I bought three apple.|I bought three apples.|數字 three 後的 apple 要變複數。
Can I have two water?|Can I have two bottles of water?|water 不可數，要把數字接到容器單位上。
I don’t need an information.|I don’t need any information.|information 不可數，可用 any。`,
  'past-simple': `I meet Ben yesterday.|I met Ben yesterday.|動作已發生，meet 的過去式是 met。
Did you went home?|Did you go home?|did 後接原形 go。
Mia didn’t bought the tickets.|Mia didn’t buy the tickets.|didn’t 已表示過去，buy 用原形。`,
  future: `She will brings a camera.|She will bring a camera.|will 後接原形 bring。
Will you to help me?|Will you help me?|will 的問句直接接主詞和原形動詞。
They aren’t going to taking pictures.|They aren’t going to take pictures.|be going to 的否定位於 Be 後，to 後用原形。`,
  'past-continuous': `We was studying then.|We were studying then.|we 要搭配 were。
Did you studying when I called?|Were you studying when I called?|問過去當下的動作，用 Were＋主詞＋V-ing。
She wasn’t study when I called.|She wasn’t studying when I called.|wasn’t 後以 studying 表示進行中的動作。`,
  'verb-forms': `I enjoy to sing.|I enjoy singing.|enjoy 後用動名詞 singing。
Do you plan leaving later?|Do you plan to leave later?|plan 後接 to V。
I don’t want going home yet.|I don’t want to go home yet.|否定不改變 want 和 to V 的搭配。`,
  comparisons: `This bag is more bigger.|This bag is bigger.|bigger 已經是比較級，不再加 more。
Is this book as thicker as that one?|Is this book as thick as that one?|as…as 中間使用原級 thick。
He isn’t the most tallest student here.|He isn’t the tallest student here.|tallest 已是最高級，不用再加 most。`,
  adverbs: `She sings beautiful.|She sings beautifully.|描述如何唱歌用副詞 beautifully。
How often do she walk to school?|How often does she walk to school?|問 she 的頻率，用 does 和 walk 原形。
He doesn’t play good.|He doesn’t play well.|good 是形容詞，修飾動詞 plays／play 時用 well。`,
  'present-perfect': `She has went to Japan.|She has gone to Japan.|has 後用過去分詞 gone。
Have you finish the report yet?|Have you finished the report yet?|完成式問句仍需過去分詞 finished。
He hasn’t sent the letter last Friday.|He didn’t send the letter last Friday.|last Friday 是明確已結束的時間，用過去簡單式。`,
  passive: `The window was break.|The window was broken.|Be 後用過去分詞 broken。
Was these books written here?|Were these books written here?|複數主詞 books 的過去被動配 were。
The bag wasn’t make in Japan.|The bag wasn’t made in Japan.|被動否定保留過去分詞 made。`,
  relatives: `The boy who he won is my brother.|The boy who won is my brother.|who 已經是子句的主詞，不另加 he。
Is the book you bought it new?|Is the book you bought new?|受詞關代已省略，不用多補 it。
The books that I ordered isn’t here.|The books that I ordered aren’t here.|that I ordered 是修飾語，books 才是主句主詞。`,
  'noun-clauses': `I know where is the library.|I know where the library is.|where 子句用主詞＋動詞的語序。
Do you know what did Mia buy?|Do you know what Mia bought?|間接問句不用 did 倒裝，子句用 Mia bought。
I don’t know what I to say.|I don’t know what to say.|選用 wh＋to V 時，不在中間再加主詞。`,
  pronouns: `Her is my classmate.|She is my classmate.|空格當主詞，用 She。
Is this yours bag?|Is this your bag?|bag 前是所有格形容詞 your。
The blue bag isn’t my.|The blue bag isn’t mine.|句尾獨立表示我的包包，用 mine。`,
  articles: `That is a orange.|That is an orange.|orange 以母音開頭，用 an。
What is these?|What are these?|these 指複數，用 are。
This is not an uniform.|This is not a uniform.|uniform 的開頭聲音是 /y/，用 a。`,
  'place-time': `The class starts on eight.|The class starts at eight.|時刻八點前用 at。
Is your birthday at May tenth?|Is your birthday on May tenth?|特定日期前用 on。
The ball isn’t in the bottom of the desk. 〔在桌子下方〕|The ball isn’t under the desk.|桌子下方用 under，in 表在裡面。`,
  'there-is': `There is two pens on the table.|There are two pens on the table.|two pens 是複數，用 are。
There is a bank nearby?|Is there a bank nearby?|一般疑問句把 Is 放到 there 前。
There aren’t any milk left.|There isn’t any milk left.|milk 不可數，用 isn’t。`,
  imperatives: `Opens the door, please.|Open the door, please.|祈使句從原形 Open 開始。
Could you closes the window?|Could you close the window?|如果要用問句請求，Could you 後接原形。
Don’t to run in the hall.|Don’t run in the hall.|否定指示用 Don’t＋原形。`,
  quantity: `We bought a little apples.|We bought a few apples.|apples 可數複數，用 a few。
How much students are here?|How many students are here?|問可數複數的數量用 many。
There isn’t many water left.|There isn’t much water left.|water 不可數，使用 much。`,
  calendar: `The party is in May third.|The party is on May third.|特定日期前用 on。
What day time does the train leave?|What time does the train leave?|問出發時刻用 What time。
The fair isn’t on April two.|The fair isn’t on April second.|讀日期用序數 second。`,
  'basic-past': `There was two maps here.|There were two maps here.|two maps 是複數，過去用 were。
Did you were at the beach yesterday?|Were you at the beach yesterday?|過去 Be 動詞直接移到主詞前。
My friends wasn’t home last night.|My friends weren’t home last night.|friends 是複數，使用 weren’t。`,
  modals: `Mia should to rest.|Mia should rest.|should 後面接原形，不加 to。
Does Leo has to wear a uniform?|Does Leo have to wear a uniform?|Does 後的 has 恢復 have。
You must not bring lunch today. 〔不必帶〕|You don’t have to bring lunch today.|must not 是禁止，不必用 don’t have to。`,
  conjunctions: `It was late, because so we left.|It was late, so we left.|so 把原因後面的結果接進來，不重疊用 because。
Do you want tea so juice?|Do you want tea or juice?|兩項選擇用 or。
I don’t eat meat but fish. 〔兩種都不吃〕|I don’t eat meat or fish.|否定範圍裡的兩個選項可用 or。`,
  'time-reason': `I’ll text you after I will get home.|I’ll text you after I get home.|表未來的時間子句用現在式 get。
Why did you stay home because?|Why did you stay home?|問句用 Why，在答句再用 Because 說原因。
I didn’t go out because of it rained.|I didn’t go out because it rained.|it rained 是完整子句，用 because。`,
  linking: `The soup smells nicely.|The soup smells nice.|描述湯的味道用形容詞 nice。
Does your bag looks heavy?|Does your bag look heavy?|Does 後的連綴動詞用原形 look。
The weather didn’t get coldly.|The weather didn’t get cold.|描述變化後的狀態，get 後用形容詞 cold。`,
  giving: `I bought a gift to Leo.|I bought a gift for Leo.|買東西給人可用 buy + 物 + for + 人。
Did you give the card Leo?|Did you give the card to Leo?|東西在前時，give 用 to 引出接收者。
I didn’t sent her a card.|I didn’t send her a card.|didn’t 後用原形 send；受詞順序人再物。`,
  'too-enough': `She is enough tall to join.|She is tall enough to join.|enough 修飾形容詞時放在形容詞之後。
Is the box too heavy carry?|Is the box too heavy to carry?|too + 形容詞 + to V 要補 to。
The room isn’t enough bright to read in.|The room isn’t bright enough to read in.|即使是否定，形容詞仍放在 enough 前。`,
  'getting-around': `We go to school by a bus.|We go to school by bus.|by 表一般交通方式時，通常直接接交通工具。
What is the weather likes?|What is the weather like?|like 在問句中是介系詞，沒有 likes 變化。
We don’t go there by foot.|We don’t go there on foot.|步行固定用 on foot。`,
  costs: `I spent an hour to fixing my bike.|I spent an hour fixing my bike.|spend 時間後可接 V-ing。
How much did you paid for lunch?|How much did you pay for lunch?|did 後用原形 pay。
It doesn’t take me long walking to school.|It doesn’t take me long to walk to school.|It takes＋人＋時間＋to V。`,
  'real-if': `If it will rain, we’ll stay home.|If it rains, we’ll stay home.|未來的真實條件用現在式 rains。
Will we play outside if the rain will stop?|Will we play outside if the rain stops?|if 子句仍用現在式 stops。
Although it was sunny, but we didn’t go out.|Although it was sunny, we didn’t go out.|Although 已表示讓步，不再加 but。`,
  causatives: `Mom made me to clean my room.|Mom made me clean my room.|主動句 make＋人＋原形。
Will you let her to choose?|Will you let her choose?|let＋人＋原形 choose。
The teacher didn’t have us to move the chairs.|The teacher didn’t have us move the chairs.|使役 have 的受詞後接原形。`,
  perception: `I heard the baby to cry.|I heard the baby cry.|hear＋受詞＋原形可指聽見完整動作。
Did you see the dog ran across the road?|Did you see the dog run across the road?|see 的受詞後原形 run 表看見跑過去。
I didn’t hear them to sing.|I didn’t hear them sing.|hear 的受詞 them 後可用原形 sing。`,
  tag: `Mia play tennis. 〔一般現在式〕|Mia plays tennis.|先確認主句動詞。Mia 是第三人稱單數。
Mia plays tennis, isn’t she?|Mia plays tennis, doesn’t she?|plays 是一般動詞，用 doesn’t 構成附加問句。
Mia didn’t play, didn’t she?|Mia didn’t play, did she?|前句已是否定，尾句用肯定 did she。`,
  indefinites: `These shoes are dirty. I need clean one.|These shoes are dirty. I need clean ones.|shoes 是複數，使用 ones 作替代。
There are two cups. Where is another one? 〔已知兩個中的剩餘一個〕|There are two cups. Where is the other one?|兩個中尚未找到的特定杯子用 the other one。
I can’t find the key I dropped. I can’t find one anywhere. 〔同一把鑰匙〕|I can’t find the key I dropped. I can’t find it anywhere.|指回特定的同一把鑰匙用 it。`,
  reflexives: `I made these cookies myselves.|I made these cookies myself.|I 的反身代名詞是 myself。
Did Mia hurt himself?|Did Mia hurt herself?|反身代名詞和主詞 Mia 一致，用 herself。
They don’t trust itself. 〔彼此不信任〕|They don’t trust each other.|互相的動作用 each other。`,
  'used-to': `I use to walk to school. 〔肯定的過去習慣〕|I used to walk to school.|肯定句沒有 did，用 used to。
Did you used to live here?|Did you use to live here?|Did 後用 use。
Mia didn’t used to like tea.|Mia didn’t use to like tea.|didn’t 已表示過去，後接 use to。`,
  participles: `The trip was excited. 〔旅遊讓人興奮〕|The trip was exciting.|exciting 描述引起感受的事物。
Are you interesting in art?|Are you interested in art?|問本人的感受用 interested in。
The audience wasn’t boring at all. 〔觀眾不覺得無聊〕|The audience wasn’t bored at all.|觀眾的感受用 bored。`,
  agreement: `I like tea. — So I do. 〔我也是〕|I like tea. — So do I.|表示另一人也一樣，用 so + 助動詞 + 主詞。
Can Mia swim, either? 〔也會游泳嗎〕|Can Mia swim, too?|想問也會不會游泳，肯定形式可在尾端加 too。
I can’t go. — Neither can’t I.|I can’t go. — Neither can I.|Neither 已含否定，後面使用 can。`,
  correlatives: `She likes both tea or juice.|She likes both tea and juice.|both 和 and 搭配，表示兩者都。
Can I have either tea nor water?|Can I have either tea or water?|either 和 or 搭配，表示二選一。
I like neither tea or juice.|I like neither tea nor juice.|neither…nor 本身表示兩項皆否定。`,
  'adv-clauses': `I’ll call as soon as I will arrive.|I’ll call as soon as I arrive.|表未來的 as soon as 子句用現在式。
Will you stay until the lesson will end?|Will you stay until the lesson ends?|until 引導的未來時間子句用 ends。
She won’t open it until Dad will come home.|She won’t open it until Dad comes home.|will 的否定放主句，時間子句仍用現在式。`
};
