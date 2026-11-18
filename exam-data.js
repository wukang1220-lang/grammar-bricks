const examSets = [
  {
    id: 'mixed-campus', title: '校慶的一天', slot: 1, description: '讀班群訊息、校慶公告和活動報導。', alt: '橘橘拿著校慶地圖站在攤位前。',
    passages: [
      { id: 'messages', title: '班群對話', text: `Mia: Where were you at seven this morning?
Leo: I [1] the game signs when you called. I have finished them [2].
Mia: Great! I’ll put them up as soon as the gate [3]. Do you know who will bring the tape?
Leo: Ben will. The tape is in his blue bag, next to mine.`, rows: `
01|第 [1] 格應填什麼？|was making|am making|have made tomorrow|was make|at seven 和 called 指過去某時正在做的事。
02|第 [2] 格應填什麼？|already|yesterday at six|next week|ago|already 可用在肯定完成式，表示已完成。
03|第 [3] 格應填什麼？|opens|will opens|opened last night|to open|as soon as 表未來時間，子句用現在式。
04|Whose blue bag has the tape?|Ben’s.|Mia’s.|Leo’s.|The teacher’s.|最後一句的 his 接續 Ben，mine 才指 Leo 的包。
05|Which uses the last question’s sentence structure correctly?|Do you know who will bring the tape?|Do you know who the tape will bring?|Do you know who will the tape?|Do you know who to will bring the tape?|who 在名詞子句中當主詞，接 will bring。` },
      { id: 'notice', title: '校慶公告', text: `SCHOOL FAIR — SATURDAY
The west gate opens at nine. A map [1] near every entrance. Check the map before you join a line.
The closest food stand sells juice and tea. If you want a meal, use the stand next to the gym. It opens at eleven.
One of the two game areas is inside. [2] is in the garden. Bring a pencil, [3] you won’t be able to enter the drawing contest.`, rows: `
01|第 [1] 格應填什麼？|will be placed|will place itself|places tomorrow|has placing|地圖會被放置，未來被動是 will be + 過去分詞。
02|第 [2] 格應填什麼？|The other|Another three|It of them|Other each|兩個遊戲區中剩下的那個用 the other。
03|第 [3] 格應填什麼？|or|because of|although|but since|祈使句 + or 引出不照做的後果。
04|Where can visitors buy a meal?|At the stand next to the gym.|At the garden game area.|At the west gate.|At the closest drink stand.|公告直接列出販售餐點的位置。
05|In “It opens at eleven,” what does It mean?|The stand next to the gym.|A meal.|The west gate.|The map.|It 指上一句最接近的主詞所談的餐點攤。` },
      { id: 'report', title: '班刊短文', text: `Everyone enjoyed the fair. The student who designed our game [1] from Class 803. He used to [2] games on paper, but now he makes them on a computer.
The prize I won [3] a small plant. I thought it looked lovely, so I gave it to my grandmother. She will put it next to the window.`, rows: `
01|第 [1] 格應填什麼？|is|are|designed|be to|先圈 who designed our game，主詞是單數 student。
02|第 [2] 格應填什麼？|draw|drawing|drew|draws|used to 後接動詞原形。
03|第 [3] 格應填什麼？|was|were|won|be|I won 是省略受格關代的修飾語；was 才是主句動詞。
04|Why did the writer give the plant to Grandma?|The writer thought it looked lovely.|He wanted to sell the plant.|The plant needed a computer.|The writer’s class asked him to.|短文用 so 串起原因與結果。
05|Which word in “I gave it to my grandmother” refers to the plant?|it|I|my|grandmother|it 指同一個先前提過的東西。` }
    ]
  },
  {
    id: 'mixed-library', title: '圖書館交換日', slot: 2, description: '從海報、借書對話和志工來信找線索。', alt: '橘橘戴著眼鏡，在圖書交換區抱著一疊書。',
    passages: [
      { id: 'poster', title: '交換日海報', text: `BRING A BOOK, FIND A BOOK
The event [1] at ten last Saturday. About forty people came.
There [2] two tables by the door. Science books were on one. Storybooks were on the other.
You could leave a book and choose a different [3] to take home. The event will be held again next month.`, rows: `
01|第 [1] 格應填什麼？|started|has started tomorrow|will start|starts every week|last Saturday 是已結束的時間，選過去簡單式。
02|第 [2] 格應填什麼？|were|was|are now|have to|two tables 是複數，活動發生在過去。
03|第 [3] 格應填什麼？|one|it|them|ones|different one 表另一個同類的單數名詞。
04|Where were the storybooks?|On the other table by the door.|At the back of the bus.|In the garden.|Beside the gym.|第二段說另一張門口的桌子放故事書。
05|Which shows the next event in the passive voice?|It will be held next month.|It held next month.|It will holding next month.|It was held next month.|will be held 是未來被動。` },
      { id: 'borrow', title: '借書對話', text: `Clerk: Have you already picked a book?
Ivy: Yes. The one you showed me [1] great. How long can I keep it?
Clerk: You can keep it for two weeks. Bring it back before the next meeting [2].
Ivy: OK! By the way, I’m [3] in books about outer space. Do you know where I can find more?`, rows: `
01|第 [1] 格應填什麼？|sounds|you showed|soundly|are sounding|you showed me 修飾 one，主句連綴動詞是 sounds。
02|第 [2] 格應填什麼？|starts|will start|start to be|is start|before 引導未來時間子句，用現在式 starts。
03|第 [3] 格應填什麼？|interested|interesting|interest|interestingly|描述 Ivy 自己對事物有興趣，用 interested in。
04|What does it refer to in “How long can I keep it”?|The book Ivy chose.|The meeting.|The two weeks.|The shelf in the library.|前面的 one 就是她要借的書。
05|Which keeps the correct word order in the indirect question?|Do you know where I can find more?|Do you know where can I find more?|Do you know where I find can more?|Do you know where to I can find more?|where 後接直述語序 I can find。` },
      { id: 'letter', title: '志工來信', text: `Dear library volunteers,
Our group has helped at the library [1] September. This month we checked all the books that people [2] back. We saved the three that were damaged and fixed the covers.
Reading with young children [3] my favorite job. Join us next Friday if you have time!`, rows: `
01|第 [1] 格應填什麼？|since|for|ago|during since|September 是起點，用 since。
02|第 [2] 格應填什麼？|brought|brings|have bring|will bring next year|checked 回顧已處理的事；bring 的過去式是 brought。
03|第 [3] 格應填什麼？|is|are|be reading|have to|Reading with young children 整段當單一主詞，配 is。
04|How many damaged books did they save?|Three.|All forty books.|Two.|None.|信中寫 they saved the three that were damaged。
05|Which invitation uses a real future condition?|Join us next Friday if you have time.|Join us next Friday if you will have time.|Join us next Friday if have you time.|Join us next Friday although you time.|真實未來條件用 if + 現在式 have。` }
    ]
  },
  {
    id: 'mixed-trail', title: '公園步道任務', slot: 3, description: '判讀路線資料、戶外對話和活動日記。', alt: '橘橘揹著探險包站在公園步道路標旁。',
    passages: [
      { id: 'routes', title: '步道路線表', text: `PARK ROUTES
Pond Route | 20 minutes | open every day
Hill Route | 45 minutes | open on weekends only
Forest Route | 35 minutes | closed after heavy rain
Bring water. If it [1] hard tonight, use the Pond Route tomorrow. It is the [2] of the three routes. It takes most visitors twenty minutes [3] it.`, rows: `
01|第 [1] 格應填什麼？|rains|will rain|rained yesterday|raining|if 子句表未來條件，用現在式 rains。
02|第 [2] 格應填什麼？|shortest|shorter|most shortest|as short|三條之中最短，用 the + 最高級。
03|第 [3] 格應填什麼？|to finish|finishes|finish to|finished|It takes 人 + 時間 + to V。
04|Which route is open every day?|Pond Route|Forest Route|Hill Route|Both Hill and Forest|表格只有 Pond Route 標示每天開放。
05|On a Wednesday right after heavy rain, which route should the group choose?|Pond Route|Hill Route|Forest Route|Any of the three|Hill 只週末開放；Forest 大雨後關閉。` },
      { id: 'bird', title: '觀鳥對話', text: `Tom: Did you see the bird take off? I was [1] at the map.
Nora: Yes, I saw it [2] from the tree to the roof. It moved so quickly that I couldn’t take a photo.
Tom: I can’t take good photos, either. Do you know how [3] this camera?
Nora: Ask Eva. The blue camera is hers. Mine is the black one.`, rows: `
01|第 [1] 格應填什麼？|looking|look|looked|look to|was looking 表觀鳥時正在看地圖。
02|第 [2] 格應填什麼？|fly|to fly|flew|flies|see + 受詞 + 原形可強調飛行全程。
03|第 [3] 格應填什麼？|to use|do use|use I|using I|how + to V 用來表示方法。
04|Whose camera is black?|Nora’s.|Eva’s.|Tom’s.|The park guide’s.|Nora 說 Mine is the black one。
05|Which agrees with “I can’t take good photos”?|Neither can I.|So can I.|I can, too.|Neither do I.|否定附和用 Neither + can + 主詞。` },
      { id: 'diary', title: '步道日記', text: `Last spring I [1] the Hill Route with my cousins. At ten we were looking for the trail sign when a guide found us. He [2] us a map and explained the easiest path.
The sign we missed [3] behind a big tree. I have kept the map since that day. I’ll bring it the next time I go.`, rows: `
01|第 [1] 格應填什麼？|tried|have tried tomorrow|try now|try to last|last spring 是過去已結束的時間。
02|第 [2] 格應填什麼？|gave|given|gives yesterday to|bought to|從 found 延續過去敘事，gave + 人 + 物。
03|第 [3] 格應填什麼？|was|were|missed|hiding to|we missed 是修飾 sign 的關係子句；主句動詞是 was。
04|What were the hikers doing when the guide found them?|Looking for the trail sign.|Giving away a map.|Leaving the park.|Planting a big tree.|when 前的過去進行式說明當時正在做什麼。
05|Which time word shows how long the writer has kept the map?|since|last|then|when in the first sentence|since that day 標出持續到現在的起點。` }
    ]
  }
];
