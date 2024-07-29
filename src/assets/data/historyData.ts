const historyData = {
    eras: [
      {
        id: "prehistoric_1",
        name: "Paleolithic Era (Old Stone Age)",
        startYear: -10000,
        endYear: 10000,
        briefDescription: "The earliest period of human history marked by the use of stone tools.",
        region: "Africa",
        events: [
          {
            id: "event_paleo_1",
            name: "Discovery of Fire",
            date: { start: "-500000", end: "-500000" },
            description: "The use of fire by early humans for cooking and protection.",
            significance: "A major milestone in human evolution, providing warmth, protection, and the ability to cook food.",
            location: { name: "Africa", coordinates: [-1.957875, 30.056609] },
            content: [

'The discovery and control of fire by early humans, estimated to have occurred around 1.7 million years ago in Africa, marked a pivotal turning point in human evolution. This groundbreaking achievement involved early hominids, such as Homo erectus, learning to harness the power of fire for various purposes. By understanding and controlling fire, humans gained a significant advantage over their environment.',
'Fire provided essential warmth, especially during colder periods, enhancing survival rates. Additionally, it served as a powerful tool for protection against predators, creating a barrier between humans and dangerous animals. The ability to cook food through fire transformed human diets, improving nutrient absorption and reducing the risk of disease.',
'Moreover, fire became instrumental in crafting tools and weapons, as it allowed for the hardening of materials and the creation of more sophisticated implements. The social implications were equally profound, as gathering around fires fostered community and communication, laying the foundation for the development of complex social structures.' ,
'In essence, the discovery of fire was a catalyst for human advancement, enabling our ancestors to adapt, innovate, and ultimately shape the course of human history.' 

            ],
            keyFigures: [
              { id: "figure_paleo_1", name: "Homo Erectus", role: "Early human species known for using fire", lifespan: "-1500000--200000", biography: "An early human ancestor known for significant evolutionary advancements." }
            ],
            consequences: "Allowed for more social interaction and increased survival rates.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.thoughtco.com/the-discovery-of-fire-169517", 
                "https://www.acsh.org/news/2016/07/23/how-and-when-did-humans-discover-fire#:~:text=Eventually%2C%20early%20humans%20figured%20out,have%20been%20made%20using%20fire."
            ]
          }
        ]
      },
      {
        id: "prehistoric_2",
        name: "Neolithic Era (New Stone Age)",
        startYear: -10000,
        endYear: -2000,
        briefDescription: "Marked by the advent of agriculture and the establishment of settled communities.",
        region: "Mesopotamia",
        events: [
          {
            id: "event_neo_1",
            name: "Development of Agriculture",
            date: { start: "-9000", end: "-9000" },
            description: "Transition from nomadic hunting and gathering to settled agricultural societies.",
            significance: "Enabled the development of permanent settlements and complex societies.",
            location: { name: "Mesopotamia", coordinates: [33.3152, 44.3661] },
            content: [
                'The development of agriculture, a transformative shift from nomadic hunting and gathering to a settled lifestyle, emerged approximately 10,000 years ago. This revolutionary change involved the domestication of plants and animals, marking the beginning of the Neolithic era. Early humans in various regions independently discovered the potential to cultivate crops and raise livestock, leading to the establishment of permanent settlements.',
                'By cultivating crops such as wheat, barley, and rice, and domesticating animals like sheep, goats, and cattle, humans secured a more reliable food source. This newfound stability enabled populations to grow and flourish, leading to the formation of villages and eventually, complex societies. Agriculture also fostered advancements in technology, as people developed tools for planting, harvesting, and storing crops.',
                'The shift to agriculture had profound implications for human civilization. It facilitated the accumulation of surplus food, enabling specialization of labor and the emergence of different social roles. Furthermore, agriculture laid the foundation for the development of trade networks as surplus produce could be exchanged for other goods. In essence, the agricultural revolution was a cornerstone of human progress, shaping the trajectory of societies and cultures for millennia.'
            ],
            keyFigures: [
              { id: "figure_neo_1", name: "Early Farmers", role: "Pioneers of agriculture", lifespan: "-10000--8000", biography: "Communities that developed early farming techniques." }
            ],
            consequences: "Led to population growth, social stratification, and technological innovation.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                'https://www.britannica.com/topic/agriculture/Early-development',
                'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/prehistoric-agriculture/a/the-dawn-of-agriculture',                
                'https://education.nationalgeographic.org/resource/development-agriculture/',
            ]
          }
        ]
      },
      {
        id: "ancient_1",
        name: "Bronze Age",
        startYear: -3300,
        endYear: -1200,
        briefDescription: "Characterized by the use of bronze tools and the development of early writing systems.",
        region: "Mesopotamia",
        events: [
          {
            id: "event_bronze_1",
            name: "Invention of Writing",
            date: { start: "-3200", end: "-3200" },
            description: "The creation of early writing systems such as cuneiform in Mesopotamia.",
            significance: "Enabled the recording of history, laws, and administrative activities.",
            location: { name: "Mesopotamia", coordinates: [32.4279, 53.6880] },
            content: [
                'The invention of writing, a revolutionary leap in human communication, emerged independently in several regions around the world. Unlike the accidental discovery of fire, writing was a deliberate human innovation driven by the need to record information, maintain complex societies, and facilitate trade.',
                'Early forms of writing, such as the Sumerian cuneiform and Egyptian hieroglyphics, evolved from simpler systems of accounting and record-keeping. These complex scripts represented a significant cognitive leap, enabling humans to transcend the limitations of oral communication. Over time, writing systems became more sophisticated, leading to the development of alphabets and syllabaries.',
                'The impact of writing on human civilization was profound. It facilitated the preservation of knowledge, allowing for the accumulation and sharing of information across generations. Writing played a crucial role in the development of law, government, and religion, as well as in the advancement of art, literature, and philosophy. By enabling complex communication and record-keeping, writing laid the foundation for the emergence of large-scale empires and civilizations.',
                'In essence, the invention of writing was a catalyst for cultural, social, and intellectual progress, transforming human societies and shaping the trajectory of history.'
            ],
            keyFigures: [
              { id: "figure_bronze_1", name: "Sumerians", role: "Inventors of cuneiform writing", lifespan: "-4500--1900", biography: "One of the earliest urban civilizations in Mesopotamia." }
            ],
            consequences: "Facilitated the growth of complex societies and trade networks.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://en.wikipedia.org/wiki/History_of_writing", 
                "https://www.thearchaeologist.org/blog/the-history-of-writing-tracing-the-development-of-expressing-language-by-systems-of-markings#:~:text=stages%20of%20development&text=An%20ancient%20civilization%20of%20southern,other%20goods%2C%20writing%20first%20appeared."
            ]
          }
        ]
      },
      {
        id: "ancient_2",
        name: "Iron Age",
        startYear: -1200,
        endYear: 500,
        briefDescription: "Marked by the widespread use of iron and steel, and significant cultural advancements.",
        region: "Anatolia",
        events: [
          {
            id: "event_iron_1",
            name: "Rise of the Hittite Empire",
            date: { start: "-1600", end: "-1178" },
            description: "An ancient Anatolian people who established an empire using iron weapons.",
            significance: "One of the first civilizations to use iron extensively for weapons and tools.",
            location: { name: "Anatolia", coordinates: [39.9208, 32.8541] },
            content: [
                'The Hittite Empire, centered in Anatolia (modern-day Turkey), rose to prominence during the Late Bronze Age, from around 1650 BCE to 1200 BCE. This empire emerged under the leadership of early kings such as Hattusili I, who established the capital at Hattusa and began unifying various Hittite territories. His military campaigns laid the groundwork for future expansions. His successor, Mursili I, continued these efforts, famously sacking Babylon around 1595 BCE, which significantly increased the Hittite\'s wealth and prestige, although his assassination led to a period of internal turmoil. The empire reached its zenith under Suppiluliuma I, who reigned around 1350–1322 BCE. Suppiluliuma I expanded Hittite influence into Syria and successfully campaigned against the Mitanni kingdom, marking a period of territorial expansion and political consolidation',
                "Muwatalli II, who reigned from 1295 to 1272 BCE, is known for his confrontation with Egypt at the Battle of Kadesh, one of the most famous military encounters of the ancient world. Despite the battle being indecisive, it demonstrated the Hittite military's strength and led to subsequent diplomatic efforts. His successor, Hattusili III, played a crucial role in stabilizing the empire after internal conflicts, signing the Treaty of Kadesh with Ramses II of Egypt, one of the earliest known peace treaties. Tudhaliya IV, who reigned from 1237 to 1209 BCE, faced internal strife and external threats but managed to maintain the empire's integrity and continued diplomatic relations with neighboring states.",
                "Muwatalli II, who reigned from 1295 to 1272 BCE, is known for his confrontation with Egypt at the Battle of Kadesh, one of the most famous military encounters of the ancient world. Despite the battle being indecisive, it demonstrated the Hittite military's strength and led to subsequent diplomatic efforts. His successor, Hattusili III, played a crucial role in stabilizing the empire after internal conflicts, signing the Treaty of Kadesh with Ramses II of Egypt, one of the earliest known peace treaties. Tudhaliya IV, who reigned from 1237 to 1209 BCE, faced internal strife and external threats but managed to maintain the empire's integrity and continued diplomatic relations with neighboring states.",
                "The decline of the Hittite Empire began around 1200 BCE, coinciding with the widespread disruptions known as the Late Bronze Age Collapse. Invasions by the Sea Peoples and internal instability contributed to the fall of the Hittite capital, Hattusa. Despite their decline, the Hittites left a lasting legacy in their legal and administrative innovations, which continued to impact the civilizations that followed. The Hittite Empire's rise and eventual decline reflect the dynamic and often turbulent nature of ancient Near Eastern history, characterized by periods of significant cultural and technological advancements interspersed with conflicts and power shifts."
            ],
            keyFigures: [
              { id: "figure_iron_1", name: "Hittite Kings", role: "Rulers of the Hittite Empire", lifespan: "-1650--1178", biography: "Led the Hittite Empire to prominence in the ancient world." }
            ],
            consequences: "Influenced neighboring civilizations and facilitated cultural exchange.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/topic/Hittite", 
                "https://www.worldhistory.org/hittite/",
                "https://www.worldhistory.org/hittite/"
            ]
          }
        ]
      },
      {
        id: "ancient_3",
        name: "Classical Antiquity",
        startYear: -800,
        endYear: 500,
        briefDescription: "Encompasses the Greek and Roman civilizations, and major developments in philosophy and governance.",
        region: "Europe",
        events: [
          {
            id: "event_classical_1",
            name: "Foundation of Rome",
            date: { start: "-753", end: "-753" },
            description: "The legendary founding of the city of Rome.",
            significance: "Laid the foundation for one of the most powerful empires in history.",
            location: { name: "Rome", coordinates: [41.9028, 12.4964] },
            content: [
                "The foundation of Rome, traditionally dated to April 21, 753 BCE, marks the birth of one of Western civilization's most influential empires. According to Roman mythology, twin brothers Romulus and Remus, sons of the god Mars and the vestal virgin Rhea Silvia, established the city. The legend tells of their abandonment as infants, their nurturing by a she-wolf, and their eventual decision to build a city. Following a dispute, Romulus killed Remus and became Rome's first ruler, giving the city his name.",
                "While mythical, this account reflects the divine origins and early conflicts central to Roman identity. The historical significance of Rome's foundation extends far beyond legend. It represents the emergence of a civilization that would profoundly shape Western history through its legal systems, political structures, military conquests, and cultural contributions.",
                "Rome's strategic location on the Italian Peninsula near the Tiber River facilitated trade and expansion, allowing it to evolve from a small settlement into a dominant empire. This transformation marked a shift from tribal conflicts to a structured political entity capable of unifying diverse peoples and territories.",
                "The establishment of the Roman Republic in 509 BCE, following the overthrow of the last king, set a precedent for republican governance and civic participation. This political model would influence many future systems. The subsequent Roman Empire further extended Rome's reach, creating a legacy that impacted law, architecture, engineering, and culture across Europe and the Mediterranean for centuries.",
                "The foundation of Rome thus symbolizes the beginning of a new era in governance and social organization. It laid the groundwork for a civilization that would endure for over a millennium, leaving an indelible mark on world history. The traditions and institutions established during this formative period continue to resonate in modern society, underscoring the enduring importance of Rome's origins."
            ],
            keyFigures: [
              { id: "figure_classical_1", name: "Romulus and Remus", role: "Founders of Rome", lifespan: "-770--717", biography: "Legendary twin brothers who founded Rome." }
            ],
            consequences: "Established the cultural and political heart of the Roman Empire.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: ["Source 1", "Source 2"]
          }
        ]
      },
      {
        id: "medieval_1",
        name: "Early Middle Ages (Dark Ages)",
        startYear: 500,
        endYear: 1000,
        briefDescription: "Marked by the decline of the Roman Empire and the rise of feudalism and Christianity.",
        region: "Europe",
        events: [
          {
            id: "event_early_middle_1",
            name: "Coronation of Charlemagne",
            date: { start: "800-12-25", end: "800-12-25" },
            description: "Charlemagne crowned as Emperor by Pope Leo III.",
            significance: "Revived the title of Emperor in the West and laid the foundations for the Holy Roman Empire.",
            location: { name: "Rome", coordinates: [41.9028, 12.4964] },
            content: [
                "The coronation of Charlemagne marks a pivotal moment in medieval history, symbolizing the fusion of Roman, Christian, and Germanic elements and laying the groundwork for the Holy Roman Empire. This event not only elevated Charlemagne's status but also had profound implications for the political and religious landscape of Europe. Charlemagne, also known as Charles the Great, was already a prominent ruler by the time of his coronation. He had expanded the Frankish kingdom through a series of military campaigns, conquering territories that included modern-day France, Germany, Italy, and beyond. His reign was characterized by efforts to strengthen and unify his vast empire, both politically and culturally. On December 25, 800 CE, during the Christmas Mass at St. Peter's Basilica in Rome, Pope Leo III placed a crown on Charlemagne's head, proclaiming him \"Emperor of the Romans.\" This act was significant for several reasons. Firstly, it marked the revival of the title of Roman Emperor in the West, which had been vacant since the fall of the Western Roman Empire in 476 CE. By crowning Charlemagne, Pope Leo III sought to legitimize his own position, which had been under threat, and to reaffirm the Church's authority over secular rulers.",
                "The coronation also represented a strategic alliance between the Frankish kingdom and the Roman Church. Charlemagne's support had been crucial for Pope Leo III, who faced opposition and rebellion in Rome. In return, the Pope's coronation of Charlemagne as emperor provided divine legitimacy to Charlemagne's rule, enhancing his prestige and authority. This alliance was instrumental in the formation of the Holy Roman Empire, which would play a central role in European politics for centuries. The rise of Charlemagne as Emperor had far-reaching implications for medieval Europe. Politically, it established the precedent for the Holy Roman Empire, a political entity that sought to revive the legacy of the Roman Empire and would endure in various forms until its dissolution in 1806. The title of \"Emperor\" conferred upon Charlemagne and his successors a sense of continuity with the ancient Roman tradition, despite the empire's predominantly Germanic and Christian character. Culturally, Charlemagne's reign ushered in the Carolingian Renaissance, a revival of art, culture, and learning based on classical and Christian ideals. This period saw significant developments in architecture, literature, and education, with Charlemagne himself championing the establishment of schools and the preservation of classical texts.",
                "Religiously, the coronation reinforced the idea of Christendom, a unified Christian community under the leadership of both a spiritual and a temporal ruler. It underscored the close relationship between the Church and the state, a dynamic that would shape European politics and society throughout the Middle Ages. The decline of the Hittite Empire began around 1200 BCE, coinciding with the widespread disruptions known as the Late Bronze Age Collapse. Invasions by the Sea Peoples and internal instability contributed to the fall of the Hittite capital, Hattusa. Despite their decline, the Hittites left a lasting legacy in their legal and administrative innovations, which continued to impact the civilizations that followed. The Hittite Empire's rise and eventual decline reflect the dynamic and often turbulent nature of ancient Near Eastern history, characterized by periods of significant cultural and technological advancements interspersed with conflicts and power shifts."
            ],
            keyFigures: [
              { id: "figure_early_middle_1", name: "Charlemagne", role: "King of the Franks and Emperor", lifespan: "747-814", biography: "Also known as Charles the Great, he united much of Western Europe." }
            ],
            consequences: "Strengthened the relationship between the Frankish state and the Catholic Church.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/biography/Charlemagne", 
                "https://www.worldhistory.org/Charlemagne/",
                "https://www.history.com/topics/middle-ages/charlemagne",
                "https://www.worldhistory.org/image/13841/coronation-of-charlemagne/"
            ]
          }
        ]
      },
      {
        id: "medieval_2",
        name: "High Middle Ages",
        startYear: 1000,
        endYear: 1300,
        briefDescription: "Characterized by the growth of cities, trade, and the power of the Church.",
        region: "Europe",
        events: [
          {
            id: "event_high_middle_1",
            name: "First Crusade",
            date: { start: "1096", end: "1099" },
            description: "A military expedition by Western Christianity to reclaim the Holy Lands from Muslim control.",
            significance: "Established Crusader states and increased the influence of the Catholic Church.",
            location: { name: "Jerusalem", coordinates: [31.7683, 35.2137] },
            content: [
                "The First Crusade was launched in response to a speech by Pope Urban II at the Council of Clermont in 1095, where he called for Christian knights to take up arms and reclaim the Holy Land from Muslim control. This call was partly a response to the Byzantine Emperor Alexios I's request for military assistance against the Seljuk Turks, who had made significant inroads into Byzantine territory. The Pope's speech ignited a wave of religious fervor across Europe, as thousands of knights and commoners alike vowed to take part in the crusade",
                "The journey to the Holy Land was arduous, with crusaders facing numerous hardships, including supply shortages, harsh weather, and hostile forces. Despite these challenges, the crusaders managed to capture key cities such as Nicaea and Antioch along the way. The climax of the First Crusade was the siege and capture of Jerusalem in July 1099. The fall of Jerusalem was marked by intense and bloody fighting, resulting in a decisive victory for the crusaders and the establishment of several Crusader states, including the Kingdom of Jerusalem.",
                "The First Crusade was significant for several reasons. It marked the beginning of a series of religiously motivated military campaigns that would span several centuries, known collectively as the Crusades. The success of the First Crusade reinforced the power and influence of the Papacy in European affairs and demonstrated the potential for large-scale military mobilization under the banner of Christianity. Additionally, the establishment of Crusader states in the Levant created new political and cultural dynamics, leading to increased interaction—and often conflict—between Christian and Muslim populations.",
                "The impact of the First Crusade extended beyond immediate military and territorial gains. It stimulated economic growth by opening new trade routes and markets between Europe and the Near East. Culturally, it facilitated the exchange of ideas, technologies, and knowledge between East and West, contributing to the intellectual revival of the High Middle Ages. However, it also sowed seeds of enduring animosity and mistrust between Christians and Muslims, shaping the course of their relations for centuries to come."
            ],
            keyFigures: [
              { id: "figure_high_middle_1", name: "Pope Urban II", role: "Initiator of the First Crusade", lifespan: "1042-1099", biography: "The Pope who called for the First Crusade at the Council of Clermont." }
            ],
            consequences: "Increased trade between Europe and the Middle East and intensified Christian-Muslim relations.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/event/Crusades/The-First-Crusade-and-the-establishment-of-the-Latin-states", 
                "https://www.history.com/topics/middle-ages/crusades",
                "https://www.worldhistory.org/First_Crusade/"
            ]
          }
        ]
      },
      {
        id: "medieval_3",
        name: "Late Middle Ages",
        startYear: 1300,
        endYear: 1500,
        briefDescription: "Known for the Black Death, the Hundred Years' War, and the decline of feudalism.",
        region: "Europe",
        events: [
          {
            id: "event_late_middle_1",
            name: "Black Death",
            date: { start: "1347", end: "1351" },
            description: "A devastating global epidemic of bubonic plague that struck Europe and Asia.",
            significance: "Killed an estimated 25 million people in Europe, changing the course of European history.",
            location: { name: "Europe", coordinates: [50.8503, 4.3517] },
            content: [
                "The Black Death, also known as the Bubonic Plague, was one of the most devastating pandemics in human history, causing widespread mortality and profound social, economic, and cultural upheaval in 14th-century Europe. This catastrophic event had far-reaching effects that shaped the course of European history.",
                "The Black Death arrived in Europe in 1347 when 12 Genoese trading ships docked at the Sicilian port of Messina. By the time the ships reached land, most of the sailors on board were dead, and those who were still alive were gravely ill and covered in black boils that oozed blood and pus. The Sicilian authorities hastily ordered the fleet of death ships out of the harbor, but it was too late. Over the next five years, the Black Death would kill an estimated 25 million people in Europe—almost a third of the continent’s population. The bacterium Yersinia pestis, typically transmitted through the bite of an infected flea or contact with a contaminated fluid, was the primary culprit. Fleas would first infect black rats, which were common in medieval towns and cities, and then spread to humans.",
                "The pandemic had immediate and catastrophic effects. Towns and cities were hit hardest due to their dense populations and poor sanitary conditions. The high mortality rate led to severe labor shortages, disrupting agricultural and economic activities. Many villages were abandoned, and urban areas saw a significant decline in population. The massive death toll caused a crisis of faith for many people, leading to widespread fear, superstition, and the persecution of minority groups such as Jews, who were often scapegoated for the spread of the plague.",
                "The significance of the Black Death extended beyond immediate mortality. Economically, the labor shortages caused by the pandemic led to higher wages for peasants and workers, contributing to the decline of the feudal system. With fewer people to work the land, lords were forced to negotiate better terms with their laborers, leading to improved living conditions for the surviving working class. Socially, the plague brought about significant changes in attitudes towards life and death. Art and literature from this period often reflect themes of macabre fascination and a preoccupation with mortality.",
                "Culturally, the Black Death had a lasting impact on European society. It accelerated changes that were already underway in the late medieval period, such as the shift towards a more market-based economy and the weakening of feudal structures. The reduction in population also meant that there was more land and resources available per capita, which over time led to economic recovery and the eventual flourishing of the Renaissance. Additionally, the pandemic spurred medical advancements as people sought to understand and combat the disease, leading to early developments in public health and epidemiology."
            ],
            keyFigures: [
              { id: "figure_late_middle_1", name: "Yersinia pestis", role: "Bacterium causing the plague", lifespan: "1347-1351", biography: "The bacterium responsible for the Black Death." }
            ],
            consequences: "Led to significant social, economic, and religious upheavals.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.worldhistory.org/Black_Death/", 
                "https://www.britannica.com/event/Black-Death",
                "https://www.history.com/topics/middle-ages/black-death",
            ]
          }
        ]
      },
      {
        id: "early_modern_1",
        name: "Renaissance",
        startYear: 1300,
        endYear: 1600,
        briefDescription: "A period of renewed interest in art, science, and the classical past.",
        region: "Europe",
        events: [
          {
            id: "event_renaissance_1",
            name: "Leonardo da Vinci paints the Mona Lisa",
            date: { start: "1503", end: "1506" },
            description: "Leonardo da Vinci creates one of the most famous portraits in the world.",
            significance: "A masterpiece of Renaissance art, renowned for its innovative techniques and enigmatic expression.",
            location: { name: "Florence, Italy", coordinates: [43.7696, 11.2558] },
            content: [
                "The creation of the Mona Lisa by Leonardo da Vinci is one of the most iconic events of the Renaissance, reflecting the artistic, cultural, and scientific advancements of the period. This masterpiece not only exemplifies Leonardo's genius but also embodies the spirit of the Renaissance era, which sought to merge art and science.",
                "Leonardo da Vinci began painting the Mona Lisa around 1503, during a period when he was residing in Florence. The commission came from Francesco del Giocondo, who wanted a portrait of his wife, Lisa Gherardini. The painting, also known as La Gioconda, captures the essence of Renaissance portraiture with its detailed depiction of the subject and the innovative use of sfumato—a technique that Leonardo pioneered to create a soft transition between colors and tones.",
                "The Mona Lisa is renowned for its enigmatic expression, which seems to change when viewed from different angles. This quality has intrigued and captivated viewers for centuries. Leonardo's meticulous attention to detail is evident in the intricate depiction of Lisa's face, the delicate folds of her clothing, and the serene landscape that forms the background. The use of light and shadow, along with the subtle gradation of tones, showcases Leonardo's mastery of the chiaroscuro technique.",
                "The significance of the Mona Lisa extends beyond its artistic merit. It symbolizes the merging of art and science that characterized the Renaissance. Leonardo's scientific studies of anatomy, light, and human emotion deeply informed his artistic practices. The painting also reflects the period's growing interest in individualism and humanism, emphasizing the unique personality and inner life of the subject.",
                "Culturally, the Mona Lisa became an icon of Renaissance art, representing the peak of artistic achievement and innovation. It has influenced countless artists and has been the subject of numerous studies and interpretations. The painting's journey from Florence to its current home in the Louvre Museum in Paris adds to its mystique and historical importance. Stolen in 1911 and recovered in 1913, the Mona Lisa's story is intertwined with the cultural heritage and national pride of France.",
                "The Mona Lisa's impact on society and culture is immense. It has become a symbol of artistic genius and a benchmark for portrait painting. The painting's fame and its status as a cultural icon have made it a subject of popular culture, referenced in literature, music, and film. Its mysterious allure continues to attract millions of visitors to the Louvre each year, making it one of the most recognized and celebrated artworks in the world."
            ],
            keyFigures: [
              { id: "figure_renaissance_1", name: "Leonardo da Vinci", role: "Painter, scientist, and polymath", lifespan: "1452-1519", biography: "One of the most diversely talented individuals ever to have lived." }
            ],
            consequences: "Influenced countless artists and remains a cultural icon to this day.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/topic/Mona-Lisa-painting", 
                "https://www.worldhistory.org/Leonardo_da_Vinci/#google_vignette",
                "https://history.com/topics/renaissance/leonardo-da-vinci"
            ]
          }
        ]
      },
      {
        id: "early_modern_2",
        name: "Age of Exploration",
        startYear: 1400,
        endYear: 1600,
        briefDescription: "Marked by European exploration and colonization of the Americas, Africa, and Asia.",
        region: "Global",
        events: [
          {
            id: "event_exploration_1",
            name: "Christopher Columbus' First Voyage",
            date: { start: "1492-08-03", end: "1492-10-12" },
            description: "Christopher Columbus set sail from Spain to find a new route to Asia, resulting in the discovery of the Americas.",
            significance: "Opened up the New World to European exploration and colonization.",
            location: { name: "Atlantic Ocean", coordinates: [25.0000, -60.0000] },
            content: [
                "Christopher Columbus' first voyage in 1492 marked a pivotal moment in the Age of Exploration, leading to the widespread awareness of the American continents among Europeans and setting the stage for the extensive exploration and colonization that followed. This event is crucial in understanding the geopolitical and cultural shifts that defined the early modern era.",
                "Christopher Columbus, an experienced mariner, proposed a plan to reach Asia by sailing west from Europe. After years of seeking support, he finally secured sponsorship from the Spanish monarchs, Ferdinand and Isabella, who were interested in expanding Spain's trade and influence. On August 3, 1492, Columbus set sail with three ships: the Niña, the Pinta, and the Santa María.",
                "The voyage faced numerous challenges, including the crew's fear of the unknown and the vast, uncharted waters. However, Columbus's persistence paid off when, on October 12, 1492, land was sighted. Columbus and his crew landed on an island in the Bahamas, which he named San Salvador. Believing he had reached the outskirts of Asia, Columbus continued to explore the Caribbean, visiting Cuba and Hispaniola.",
                "Columbus's discoveries had profound implications. Although he did not find the anticipated route to Asia, his voyages opened up the Americas to European exploration and colonization. The encounter between the Old and New Worlds led to significant cultural exchanges, often referred to as the Columbian Exchange, which included the transfer of plants, animals, technologies, and diseases between Europe and the Americas. This exchange had lasting effects on the global economy and ecosystems.",
                "The significance of Columbus's first voyage cannot be overstated. Politically, it established Spain as a major colonial power and initiated a period of fierce competition among European nations for territory and resources in the New World. The voyages also had devastating effects on the indigenous populations, leading to the collapse of native societies due to disease, warfare, and enslavement. Culturally, the Age of Exploration expanded European horizons, challenging existing worldviews and fostering a spirit of discovery and scientific inquiry.",
                "Columbus's legacy is complex. While celebrated for his navigational achievements and role in opening the Americas to European influence, he is also criticized for his role in the brutal treatment and exploitation of indigenous peoples. Modern historians and scholars continue to debate his impact, balancing his contributions to exploration with the negative consequences of his voyages."
            ],
            keyFigures: [
              { id: "figure_exploration_1", name: "Christopher Columbus", role: "Explorer", lifespan: "1451-1506", biography: "An Italian navigator who completed four voyages across the Atlantic Ocean." }
            ],
            consequences: "Led to widespread exploration, colonization, and significant cultural exchanges.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/biography/Christopher-Columbus", 
                "https://www.worldhistory.org/Christopher_Columbus/",
            ]
          }
        ]
      },
      {
        id: "early_modern_3",
        name: "Reformation",
        startYear: 1500,
        endYear: 1600,
        briefDescription: "A period of religious upheaval and the establishment of Protestant churches.",
        region: "Europe",
        events: [
          {
            id: "event_reformation_1",
            name: "Martin Luther's 95 Theses",
            date: { start: "1517-10-31", end: "1517-10-31" },
            description: "Martin Luther nailed his 95 Theses to the church door in Wittenberg, Germany.",
            significance: "Sparked the Protestant Reformation, challenging the practices of the Catholic Church.",
            location: { name: "Wittenberg, Germany", coordinates: [51.8663, 12.6494] },
            content: [
                "Martin Luther's 95 Theses, posted in 1517, were a catalyst for the Protestant Reformation, a movement that dramatically reshaped the religious, political, and cultural landscape of Europe. This event marked the beginning of significant challenges to the authority of the Catholic Church and paved the way for the emergence of Protestantism.",
                "On October 31, 1517, Martin Luther, a professor of theology at the University of Wittenberg, nailed his 95 Theses to the door of the Wittenberg Castle Church. This act was intended to invite scholarly debate about the practice of selling indulgences—certificates believed to reduce the punishment for sins. Johann Tetzel, a Dominican friar, had been vigorously selling indulgences to fund the renovation of St. Peter's Basilica in Rome, which deeply troubled Luther.",
                "Luther's 95 Theses outlined his arguments against the indulgence system and called for a return to biblical teachings. He argued that salvation could not be purchased and that it was granted by faith alone. This idea challenged the authority of the Pope and the Church, which claimed the power to dispense indulgences. The theses were quickly translated from Latin into German and disseminated across Europe, gaining widespread support and sparking public debate.",
                "The publication of the 95 Theses had profound implications. It directly challenged the financial practices and theological underpinnings of the Catholic Church. Luther's call for reform resonated with many who were disillusioned with the Church's corruption and moral decay. His writings laid the groundwork for the Reformation, a movement that sought to correct the perceived abuses within the Church and led to the establishment of various Protestant denominations.",
                "The significance of Luther's 95 Theses extends beyond religious reform. Politically, it weakened the Catholic Church's influence over European monarchies and contributed to the rise of nation-states. Socially, it empowered individuals to seek personal religious understanding and emphasized the importance of reading the Bible in one's native language. This emphasis on personal faith and scripture translated into broader cultural shifts, including the promotion of literacy and education.",
                "Culturally, the Reformation spurred the production of religious texts in vernacular languages, making them accessible to a broader audience. The invention of the printing press by Johannes Gutenberg played a crucial role in the rapid dissemination of Reformation ideas. Luther's translation of the Bible into German was particularly influential, shaping the development of the German language and literature.",
                "The impact of the 95 Theses and the Reformation was far-reaching, leading to centuries of religious conflict and the eventual establishment of religious tolerance and pluralism in Europe. The movement prompted the Catholic Church to initiate its own Counter-Reformation, which sought to address internal corruption and reaffirm Catholic doctrine."
            ],
            keyFigures: [
              { id: "figure_reformation_1", name: "Martin Luther", role: "Theologian and reformer", lifespan: "1483-1546", biography: "A German professor of theology, composer, priest, monk, and a seminal figure in the Reformation." }
            ],
            consequences: "Led to the formation of Protestant churches and significant changes in European religion and politics.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/biography/Martin-Luther", 
                "https://www.history.com/topics/religion/martin-luther-and-the-95-theses",
                "https://www.pbs.org/empires/martinluther/about_relu.html"
            ]
          }
        ]
      },
      {
        id: "early_modern_4",
        name: "Scientific Revolution",
        startYear: 1550,
        endYear: 1700,
        briefDescription: "Significant developments in mathematics, physics, astronomy, biology, and chemistry.",
        region: "Europe",
        events: [
          {
            id: "event_scientific_1",
            name: "Publication of Newton's Principia",
            date: { start: "1687", end: "1687" },
            description: "Isaac Newton publishes 'Philosophiæ Naturalis Principia Mathematica', laying the foundations of classical mechanics.",
            significance: "A landmark work in physics and mathematics, introducing the laws of motion and universal gravitation.",
            location: { name: "England", coordinates: [52.3555, -1.1743] },
            content: [
                "The publication of Isaac Newton's Philosophiæ Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), commonly known as the Principia, was a landmark event in the Scientific Revolution. Released in 1687, it laid the foundation for classical mechanics and transformed the understanding of the physical universe.",
                "Isaac Newton's Principia was published in 1687 and is widely regarded as one of the most important works in the history of science. The Principia systematically formulated the laws of motion and universal gravitation, offering a new framework for understanding the physical world. Newton's work was groundbreaking in its use of mathematics to describe natural phenomena, moving away from the qualitative descriptions that had dominated prior scientific thought.",
                "The Principia was composed in three books. The first book, De Motu Corporum (On the Motion of Bodies), introduced the three laws of motion, which describe the relationship between a body and the forces acting upon it, and the body's response in terms of motion. The second book, De Motu Corporum in Gyrum (On the Motion of Bodies in Orbits), applied these laws to explain the motion of objects in various types of orbits. The third book, De Systemate Mundi (On the System of the World), extended the laws of motion and universal gravitation to the movements of celestial bodies, providing a comprehensive explanation of the heliocentric system and predicting planetary motions with remarkable accuracy.",
                "The significance of the Principia cannot be overstated. It provided a unified framework that explained both terrestrial and celestial phenomena using the same set of principles. This marked a significant departure from the Aristotelian view that had dominated science for centuries, which held that different laws governed the heavens and the Earth. Newton's work demonstrated that the same physical laws apply throughout the universe, thus unifying the study of physics.",
                "The publication of the Principia had profound implications for science and society. It not only advanced the understanding of the physical world but also demonstrated the power of mathematics in scientific inquiry. Newton's laws of motion and universal gravitation became the foundation for classical mechanics, which dominated scientific thought until the advent of relativity and quantum mechanics in the 20th century. The Principia also influenced other areas of study, including engineering, astronomy, and even philosophy, as it encouraged a more empirical and rational approach to understanding the natural world.",
                "Culturally, the Principia elevated Newton to the status of a scientific icon, and his methods and discoveries became central to the Enlightenment's intellectual movement. The work's impact on the scientific community was immediate and far-reaching, inspiring subsequent generations of scientists to build upon Newton's principles and further advance the study of the natural world."
            ],
            keyFigures: [
              { id: "figure_scientific_1", name: "Isaac Newton", role: "Mathematician and physicist", lifespan: "1643-1727", biography: "An English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time." }
            ],
            consequences: "Revolutionized the scientific understanding of the physical world.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.worldhistory.org/Isaac_Newton/", 
                "https://www.history.com/topics/inventions/isaac-newton",
                "https://www.britannica.com/biography/Isaac-Newton"
            ]
          }
        ]
      },
      {
        id: "modern_1",
        name: "Enlightenment",
        startYear: 1700,
        endYear: 1800,
        briefDescription: "An intellectual movement emphasizing reason, individualism, and skepticism of traditional authority.",
        region: "Europe",
        events: [
          {
            id: "event_enlightenment_1",
            name: "Publication of the Encyclopédie",
            date: { start: "1751", end: "1772" },
            description: "A general encyclopedia published in France that represented the intellectual thought of the Enlightenment.",
            significance: "Promoted knowledge and intellectual interchange, influencing the development of modern Western thought.",
            location: { name: "France", coordinates: [46.6034, 1.8883] },
            content: [
                "The publication of the Encyclopédie, ou dictionnaire raisonné des sciences, des arts et des métiers (Encyclopedia, or a Systematic Dictionary of the Sciences, Arts, and Crafts) was a monumental event in the modern era, significantly contributing to the spread of Enlightenment ideas and the advancement of knowledge. Spearheaded by Denis Diderot and Jean le Rond d'Alembert, the Encyclopédie sought to compile and disseminate the entirety of human knowledge.",
                "The Encyclopédie was conceived as a grand project to organize and present knowledge in a systematic way. Denis Diderot and Jean le Rond d'Alembert were the primary editors, but the work involved contributions from many of the leading intellectuals of the Enlightenment. These thinkers aimed to challenge traditional authorities, promote critical thinking, and provide access to knowledge that was previously restricted to the elite.",
                "The first volume of the Encyclopédie was published in 1751, and the work continued to be published in volumes until 1772. The Encyclopédie covered a wide range of subjects, including science, art, technology, and philosophy. It was notable for its secular approach and its emphasis on empirical knowledge and rational thought. The contributors sought to explain subjects clearly and objectively, often criticizing religious dogma and advocating for intellectual freedom.",
                "The significance of the Encyclopédie extends beyond its content. It became a symbol of the Enlightenment and an instrument of change, challenging established institutions and promoting new ways of thinking. The work was controversial and faced opposition from the Catholic Church and the French government, which saw it as a threat to their authority. Despite attempts to censor and suppress the Encyclopédie, it was widely distributed and had a profound impact on European intellectual life.",
                "Politically, the Encyclopédie contributed to the spread of Enlightenment ideas, which played a crucial role in shaping the ideological foundations of the French Revolution and the subsequent rise of modern democratic states. Socially, it encouraged literacy and education, making knowledge more accessible to a broader audience. The work also had a lasting cultural impact, influencing the development of modern encyclopedias and the organization of knowledge.",
                "The Encyclopédie was not just a repository of facts but a tool for promoting progress and reform. It embodied the Enlightenment belief in the power of knowledge to improve society and advance human well-being. By advocating for reason and critical thinking, the Encyclopédie helped lay the groundwork for the scientific and industrial revolutions that followed."
            ],
            keyFigures: [
              { id: "figure_enlightenment_1", name: "Denis Diderot", role: "Editor of the Encyclopédie", lifespan: "1713-1784", biography: "A French philosopher, art critic, and writer, best known for serving as co-founder, chief editor, and contributor to the Encyclopédie." }
            ],
            consequences: "Encouraged the spread of Enlightenment ideas and contributed to revolutionary movements in Europe and the Americas.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://www.britannica.com/topic/Encyclopedie", 
            ]
          }
        ]
      },
      {
        id: "modern_2",
        name: "Industrial Revolution",
        startYear: 1760,
        endYear: 1840,
        briefDescription: "A period of major industrialization, technological innovation, and socioeconomic changes.",
        region: "Europe and North America",
        events: [
          {
            id: "event_industrial_1",
            name: "Invention of the Steam Engine",
            date: { start: "1769", end: "1769" },
            description: "James Watt patents an improved version of the steam engine, leading to widespread industrial use.",
            significance: "Enabled the growth of factories and mass production, revolutionizing transportation and industry.",
            location: { name: "Scotland", coordinates: [56.4907, -4.2026] },
            content: [
                "The invention of the steam engine, which became a pivotal development in the Industrial Revolution, is often attributed to the significant improvements made by James Watt in the late 18th century. While early prototypes, such as Thomas Newcomen's atmospheric engine, were developed earlier in 1712, it was Watt's enhancements in 1769 that truly revolutionized steam power. Watt, a Scottish inventor and mechanical engineer, introduced a separate condenser, which greatly improved the engine's efficiency by preventing the loss of steam and reducing fuel consumption. This innovation took place in Great Britain, a nation poised for industrial dominance due to its rich coal resources, advanced metallurgy, and burgeoning interest in scientific and engineering advancements.",
                "The context of the steam engine's invention is deeply intertwined with the broader historical narrative of the Industrial Revolution. Prior to this period, economies were predominantly agrarian, and manufacturing was done manually in small workshops. The advent of the steam engine marked a dramatic shift toward mechanized production. Watt's improved steam engine enabled the operation of machinery independently of natural power sources like water or wind. This technological leap allowed factories to be located anywhere, not just near rivers or streams, which led to the rapid growth of industrial cities across Great Britain and eventually the world. The steam engine's applications were vast, ranging from powering textile mills to driving pumps in mines, which facilitated deeper extraction of minerals and coal, further fueling industrial growth.",
                "The significance of the steam engine's invention cannot be overstated. Economically, it was a driving force behind the Industrial Revolution, leading to unprecedented levels of production and economic growth. The steam engine's efficiency and reliability made it the backbone of various industries, including textiles, mining, and transportation. In textiles, steam-powered machines vastly increased production speed and volume, leading to the establishment of large factories and the rise of the industrial working class. In mining, steam engines were crucial for pumping water out of deep mines, which allowed for the extraction of vast quantities of coal and minerals essential for industrial processes. The impact on transportation was equally transformative, with steam engines powering locomotives and ships, revolutionizing trade and travel by making them faster and more efficient.",
                "Culturally, the steam engine and the Industrial Revolution it powered fostered a spirit of innovation and progress. The technological advancements of this period laid the groundwork for the modern, technologically-driven world. The changes brought about by the steam engine also had significant social and political implications. The rise of industrial capitalists and the working class led to shifts in political power and the development of new economic theories and political movements, including capitalism, socialism, and labor unions. These movements sought to address the inequalities and challenges brought about by industrialization. Additionally, the steam engine's influence extended to global politics, as the increased production capabilities and wealth of industrialized nations bolstered their imperial ambitions, leading to the expansion of European empires and significant geopolitical changes.",
                "In summary, James Watt's invention of the steam engine was a cornerstone of the Industrial Revolution, fundamentally transforming industries, economies, and societies. It represents a key moment in history that set the stage for the modern industrialized world, with far-reaching consequences that continue to influence contemporary life. The steam engine's legacy is evident in the technological advancements and economic structures that shape our world today, reflecting the profound and lasting impact of this revolutionary invention.",
            ],
            keyFigures: [
              { id: "figure_industrial_1", name: "James Watt", role: "Inventor and mechanical engineer", lifespan: "1736-1819", biography: "A Scottish inventor, mechanical engineer, and chemist who improved the Newcomen steam engine with his Watt steam engine in 1765." }
            ],
            consequences: "Transformed economies, leading to urbanization and changes in labor and society.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: ["Source 1", "Source 2"]
          }
        ]
      },
      {
        id: "modern_3",
        name: "Age of Revolutions",
        startYear: 1770,
        endYear: 1850,
        briefDescription: "Includes the American Revolution, the French Revolution, and various other political upheavals.",
        region: "Global",
        events: [
          {
            id: "event_revolutions_1",
            name: "American Declaration of Independence",
            date: { start: "1776-07-04", end: "1776-07-04" },
            description: "The Thirteen Colonies declare independence from Britain, forming the United States of America.",
            significance: "Marked the birth of a new nation and inspired other revolutionary movements.",
            location: { name: "Philadelphia, USA", coordinates: [39.9526, -75.1652] },
            content: [
                "The American Declaration of Independence, adopted by the Continental Congress on July 4, 1776, marked the formal separation of the thirteen American colonies from Great Britain. Drafted primarily by Thomas Jefferson, this seminal document articulated the colonies' grievances against King George III and asserted their inherent right to self-governance. The Declaration's adoption took place at the Pennsylvania State House (now Independence Hall) in Philadelphia, driven by colonial discontent with British rule, particularly issues of taxation without representation, and a desire for political and economic autonomy. Set against the backdrop of the Age of Revolutions, the Declaration was profoundly influenced by Enlightenment ideas emphasizing individual rights, liberty, and democracy. This period was characterized by numerous revolutionary movements globally, challenging traditional monarchical and colonial systems. Events such as the Boston Massacre (1770) and the Boston Tea Party (1773) exemplified escalating conflicts that led to the First and Second Continental Congresses, where the move towards independence gained momentum. Jefferson's draft, influenced by Enlightenment thinkers like John Locke, clearly articulated the colonies' justification for breaking away from British rule, famously asserting that \"all men are created equal\" and endowed with \"unalienable Rights\" including \"Life, Liberty and the pursuit of Happiness.\" The Declaration's adoption transformed the conflict into a full-scale revolution, leading to the Revolutionary War, which continued until the Treaty of Paris in 1783 recognized the United States' independence.",
                "The Declaration of Independence had profound implications both domestically and internationally. Domestically, it unified the colonies in their struggle for independence and laid the ideological foundation for the new nation, influencing the drafting of the United States Constitution and the Bill of Rights. The principles enshrined in the Declaration became central to American political culture and identity, emphasizing individual rights and self-governance. Internationally, the Declaration resonated with other revolutionary movements and contributed to the spread of democratic ideals, inspiring subsequent revolutions, including the French Revolution (1789) and various independence movements in Latin America. The Declaration's assertion of universal human rights and the legitimacy of rebellion against oppressive governments became a powerful symbol for oppressed peoples worldwide. While the Declaration proclaimed that \"all men are created equal,\" its application was initially limited, sparking ongoing debates on issues such as slavery, gender equality, and civil rights. The American Declaration of Independence was a cornerstone event in the Modern Era, marking the birth of a new nation founded on principles of liberty and democracy, with enduring influence on global revolutionary movements and democratic thought.",
            ],
            keyFigures: [
              { id: "figure_revolutions_1", name: "Thomas Jefferson", role: "Principal author of the Declaration of Independence", lifespan: "1743-1826", biography: "An American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809." }
            ],
            consequences: "Led to the creation of the United States and influenced subsequent revolutions worldwide.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
                "https://plato.stanford.edu/entries/jefferson/", 
                "National Archives: The Declaration of Independence: Full Text"
            ]
          }
        ]
      },
      {
        id: "modern_4",
        name: "19th Century",
        startYear: 1800,
        endYear: 1900,
        briefDescription: "Marked by the expansion of empires, the rise of nationalism, and significant cultural and technological progress.",
        region: "Global",
        events: [
          {
            id: "event_19th_century_1",
            name: "The Emancipation Proclamation",
            date: { start: "1863-01-01", end: "1863-01-01" },
            description: "Issued by President Abraham Lincoln, it declared the freedom of all slaves in Confederate-held territory.",
            significance: "A major step towards the abolition of slavery in the United States.",
            location: { name: "Washington, D.C., USA", coordinates: [38.9072, -77.0369] },
            content: [
              "The Emancipation Proclamation was a pivotal executive order issued by President Abraham Lincoln during the American Civil War. Announced on September 22, 1862, and taking effect on January 1, 1863, the proclamation declared that all enslaved people in Confederate-held territories \"shall be then, thenceforward, and forever free.\" This declaration was a strategic and moral landmark in the war, aimed at weakening the Confederacy and advancing the cause of abolition.",
              "The proclamation was issued in the midst of the Civil War, a conflict that had initially begun over states' rights and the preservation of the Union, but which had increasingly come to focus on the issue of slavery. Lincoln's decision to issue the proclamation was influenced by several factors, including military necessity, moral imperative, and political strategy. The proclamation applied only to states in active rebellion and not to those in Union control or border states, which remained loyal to the Union but had not yet abolished slavery.",
              "The Emancipation Proclamation emerged from a complex interplay of military, political, and social dynamics. By mid-1862, the Union had experienced several military setbacks, and Lincoln recognized that a decisive move was needed to change the course of the war. The preliminary version of the proclamation was issued after the Union victory at the Battle of Antietam in September 1862, which provided Lincoln with the political leverage necessary to announce his intentions publicly.",
              "The document was a significant shift in the war’s objectives. Initially, the Civil War was fought to preserve the Union rather than to abolish slavery. However, as the war progressed, Lincoln and his advisers began to view emancipation as both a moral and strategic necessity. The proclamation sought to undermine the Confederate economy, which was heavily reliant on enslaved labor, and to discourage European nations, particularly Britain and France, from recognizing or supporting the Confederacy, as both had abolished slavery.",
              "The Emancipation Proclamation had immediate and long-term impacts. Although it did not immediately free all enslaved individuals—since it applied only to areas outside Union control—it provided a strong moral framework for the war and signaled a clear commitment to ending slavery. The proclamation also allowed for the recruitment of African American soldiers into the Union Army and Navy, which proved crucial in the Union's eventual victory. By the end of the war, nearly 200,000 African American soldiers and sailors had served, making significant contributions to the Union’s war effort.",
              "The Emancipation Proclamation was transformative both in its immediate effects and its lasting legacy. It fundamentally changed the nature of the Civil War, adding the moral imperative of abolition to the Union’s war aims. The proclamation galvanized the anti-slavery movement and solidified the Union’s stance as one fighting not just for political unity but for human freedom.",
              "The proclamation had profound social implications. It represented a significant step towards the abolition of slavery, laying the groundwork for the 13th Amendment to the U.S. Constitution, which was ratified on December 6, 1865, and legally abolished slavery throughout the entire country. The Emancipation Proclamation also set a precedent for future civil rights advancements, reinforcing the idea that the federal government had a role in protecting individual liberties and promoting equality.",
              "Politically, the proclamation strengthened Lincoln's position both domestically and internationally. It diminished the likelihood of European intervention on behalf of the Confederacy and helped to garner support from abolitionists and anti-slavery factions within the Union. The inclusion of African American soldiers into the Union forces was a strategic advantage that bolstered the Union’s military capabilities and contributed to its ultimate victory.",
              "In summary, the Emancipation Proclamation was a critical document in American history that marked a decisive shift in the objectives of the Civil War. It redefined the conflict as a battle for freedom and equality, profoundly impacted the lives of millions of enslaved individuals, and set the stage for subsequent civil rights advancements. Its legacy endures as a symbol of the struggle for justice and the ongoing quest for equality in the United States.",
            ],
            keyFigures: [
              { id: "figure_19th_century_1", name: "Abraham Lincoln", role: "16th President of the United States", lifespan: "1809-1865", biography: "An American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865." }
            ],
            consequences: "Contributed to the end of slavery and set the stage for the Civil Rights Movement.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
              "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation", 
              "https://www.history.com/topics/american-civil-war/emancipation-proclamation"
            ]
          }
        ]
      },
      {
        id: "modern_5",
        name: "20th Century",
        startYear: 1900,
        endYear: 2000,
        briefDescription: "Includes World War I, World War II, the Cold War, and significant advances in science, technology, and civil rights.",
        region: "Global",
        events: [
          {
            id: "event_20th_century_1",
            name: "Ghana's Independence",
            date: { start: "1957-03-06", end: "1957-03-06" },
            description: "Ghana gained independence from British colonial rule.",
            significance: "Ghana became the first African country to gain independence from colonial rule, inspiring other African nations to seek independence.",
            location: { name: "Accra, Ghana", coordinates: [5.6037, -0.1870] },
            content: [
              "Ghana’s journey to independence was a pivotal moment in 20th-century history, marking the end of British colonial rule in West Africa and setting a precedent for the broader decolonization movement across the African continent. The country, then known as the Gold Coast, gained its independence on March 6, 1957. This historic event was primarily driven by Kwame Nkrumah, the leader of the Convention People’s Party (CPP), who emerged as a key figure in the independence movement and became Ghana’s first Prime Minister and later its first President.",
              "The push for independence in Ghana was shaped by both internal dynamics and external influences. The Gold Coast had been under British colonial rule since the late 19th century, with various regions and ethnic groups falling under British control. The post-World War II era saw a global shift towards decolonization, influenced by the economic strains on colonial powers and growing nationalist sentiments in colonized regions. In the Gold Coast, this period of rising political consciousness was marked by the efforts of leaders like Kwame Nkrumah, who, educated in the United States and the United Kingdom, organized mass movements and advocated for self-rule.",
              "Nkrumah's CPP, founded in 1949, played a central role in mobilizing public support for independence. The party employed a strategy of political pressure and civil disobedience to challenge colonial authorities, which culminated in a series of constitutional reforms. In response to increasing unrest and pressure from nationalist leaders, the British government began negotiating with local leaders. These negotiations led to the introduction of a new constitution in 1954, which provided for greater self-governance. By 1956, following elections and further negotiations, the British agreed to grant full independence.",
              "On March 6, 1957, Ghana was officially declared independent, making it the first African nation south of the Sahara to achieve self-rule. The transition to independence was marked by celebrations and the establishment of a new government under Nkrumah’s leadership. This transition was relatively peaceful, reflecting the successful efforts of Ghanaian leaders to achieve their goals through negotiation and political activism.",
              "The significance of Ghana's independence extended well beyond its borders. For Ghana, it marked the beginning of a new era characterized by self-governance and national identity. Nkrumah’s administration embarked on ambitious development programs aimed at modernizing the country and improving the quality of life for its citizens. His vision of Pan-Africanism, which sought to unite African nations and promote solidarity, gained international recognition and set the stage for future cooperation among African countries.",
              "Ghana’s independence also had a profound impact on the broader African liberation movement. As the first sub-Saharan African nation to achieve independence, Ghana became a symbol of hope and inspiration for other nations still under colonial rule. The success of Ghana’s independence movement accelerated the process of decolonization across the continent, demonstrating the viability of nationalist movements and the potential for peaceful transitions from colonial rule.",
              "On an international scale, Ghana’s independence highlighted the changing global order and the decline of European colonial empires. It contributed to the growing momentum for decolonization and influenced subsequent political and diplomatic efforts to address colonial legacies and support self-determination.",
              "In summary, Ghana's independence was a landmark event that reshaped the political landscape of Africa and contributed to the global discourse on self-determination and national sovereignty. It was a transformative moment that not only marked the end of colonial rule in Ghana but also set a powerful example for other nations seeking to assert their independence and sovereignty.",
            ],
            keyFigures: [
              { id: "figure_20th_century_2", name: "Kwame Nkrumah", role: "Leader of Ghana's independence movement and first Prime Minister and President", lifespan: "1909-1972", biography: "A Ghanaian politician and revolutionary who led Ghana to independence from Britain in 1957 and served as its first Prime Minister and President." }
            ],
            consequences: "Paved the way for the decolonization of Africa and inspired independence movements across the continent.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
              "https://www.bbc.com/news/world-africa-35009100", 
              "https://www.ghanaweb.com/GhanaHomePage/history/",
              
            ]
          },
          {
            id: "event_20th_century_1",
            name: "Landing on the Moon",
            date: { start: "1969-07-20", end: "1969-07-20" },
            description: "NASA's Apollo 11 mission successfully lands humans on the Moon.",
            significance: "A major milestone in space exploration and human achievement.",
            location: { name: "Moon", coordinates: [0.6741, 23.4729] },
            content: [
              "The landing on the Moon was a historic event that marked a monumental achievement in human exploration and technology. On July 20, 1969, the Apollo 11 mission, conducted by NASA, successfully landed the first humans on the Moon. Astronauts Neil Armstrong and Edwin \"Buzz\" Aldrin became the first and second humans to set foot on the lunar surface, while Michael Collins orbited the Moon in the command module. Armstrong’s famous words, “That’s one small step for man, one giant leap for mankind,” captured the significance of the moment as he took the first steps on the Moon’s surface.",
              "The Apollo 11 mission was the culmination of intense scientific and technological efforts during the Space Race, a period of competition between the United States and the Soviet Union to achieve significant milestones in space exploration. The Space Race began in the late 1950s, following the Soviet Union’s launch of Sputnik, the first artificial satellite, in 1957. This event sparked a sense of urgency in the U.S. to advance its space program. In 1961, President John F. Kennedy set a national goal of landing a man on the Moon and returning him safely to Earth by the end of the decade, which set the stage for the Apollo missions.",
              "NASA’s Apollo program, initiated in 1961, was designed to achieve this ambitious goal. Apollo 11 was preceded by several other missions that tested various aspects of the technology and operations needed for a lunar landing. The mission involved complex procedures, including the launch of the Saturn V rocket, the deployment of the lunar module (Eagle), and the actual landing on the Moon’s surface. The successful execution of these steps demonstrated remarkable advancements in engineering, navigation, and space science.",
              "The significance of the Moon landing extended far beyond the technical achievement itself. It represented a major triumph in human exploration and innovation, showcasing the capabilities of modern science and technology. The successful landing on the Moon was a testament to the ingenuity and perseverance of the scientists, engineers, and astronauts involved in the Apollo program. It also had profound cultural and inspirational impacts, capturing the imagination of people around the world and symbolizing the possibilities of human endeavor.",
              "Moreover, the Moon landing had far-reaching implications for space exploration and international relations. It marked the U.S. as a leader in space exploration and demonstrated the potential for human exploration beyond Earth. The event fostered a new era of scientific curiosity and technological development, leading to subsequent missions and research in space. It also reinforced the importance of international cooperation in space exploration and contributed to the development of new technologies with applications beyond space science.",
              "In summary, the landing on the Moon was a landmark achievement of the 20th century that highlighted the extraordinary capabilities of human ingenuity and technological advancement. It marked a significant milestone in the Space Race and set the stage for future exploration and scientific discovery. The event’s legacy continues to inspire and influence the field of space exploration and the broader quest for knowledge and exploration.",
            ],
            
            keyFigures: [
              { id: "figure_20th_century_1", name: "Neil Armstrong", role: "Astronaut", lifespan: "1930-2012", biography: "An American astronaut and aeronautical engineer who was the first person to walk on the Moon." }
            ],
            consequences: "Demonstrated technological prowess and spurred further space exploration.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
              "Shttps://www.nasa.gov/history/july-20-1969-one-giant-leap-for-mankind/", 
            ]
          }
        ]
      },
      {
        id: "contemporary_1",
        name: "21st Century",
        startYear: 2000,
        endYear: 'present',
        briefDescription: "Characterized by rapid technological advancement, globalization, and ongoing social and political changes.",
        region: "Global",
        events: [
          {
            id: "event_21st_century_1",
            name: "9/11 Terrorist Attacks",
            date: { start: "2001-09-11", end: "2001-09-11" },
            description: "A series of coordinated terrorist attacks by the Islamic terrorist group al-Qaeda against the United States.",
            significance: "Had profound impacts on global politics, security measures, and led to the War on Terror.",
            location: { name: "New York City, USA", coordinates: [40.7128, -74.0060] },
            content: [
              "The 9/11 terrorist attacks, orchestrated by the Islamist extremist group al-Qaeda, took place on September 11, 2001, and stand as one of the most devastating and impactful events in contemporary history. On that fateful morning, 19 terrorists hijacked four commercial airplanes. Two of these planes, American Airlines Flight 11 and United Airlines Flight 175, were deliberately crashed into the North and South Towers of the World Trade Center in New York City. The impact and resulting fires caused both towers to collapse within two hours, leading to massive destruction and a significant loss of life. A third plane, American Airlines Flight 77, was crashed into the Pentagon, the headquarters of the U.S. Department of Defense, in Arlington, Virginia. The fourth plane, United Airlines Flight 93, was headed towards Washington, D.C., but passengers attempted to overpower the hijackers, resulting in the plane crashing into a field in Shanksville, Pennsylvania. Nearly 3,000 people were killed in the attacks, including passengers, first responders, and civilians from over 90 countries.",
              "The attacks were meticulously planned and executed, representing a significant intelligence and security failure for the United States. Al-Qaeda, led by Osama bin Laden, aimed to inflict maximum damage on symbolic targets representing American economic, military, and political power. The World Trade Center was targeted as a symbol of America's financial might, the Pentagon as the heart of its military, and the suspected target of Flight 93, the U.S. Capitol or the White House, represented its political leadership.",
              "The 9/11 attacks had profound and far-reaching consequences. In the immediate aftermath, the United States experienced a wave of national mourning and a surge of patriotism. The attacks led to significant changes in U.S. domestic and foreign policy. Domestically, the U.S. government enacted the USA PATRIOT Act, which expanded surveillance and law enforcement powers. The Department of Homeland Security was established to coordinate national efforts against terrorism, and airport security was significantly heightened with the creation of the Transportation Security Administration (TSA).",
              "On the international front, the attacks prompted the U.S. to launch the War on Terror. This included the invasion of Afghanistan in October 2001 to dismantle al-Qaeda and remove the Taliban from power, as they had provided sanctuary for bin Laden and his followers. The war in Afghanistan marked the beginning of a prolonged military engagement aimed at combating terrorism globally. In 2003, the U.S. also invaded Iraq, citing the need to eliminate weapons of mass destruction and to combat terrorism, although the connections to 9/11 were tenuous.",
              "The 9/11 attacks also had significant socio-political impacts worldwide. They prompted a reevaluation of global security policies and practices, leading to increased international cooperation in intelligence sharing and counter-terrorism efforts. The attacks also sparked widespread debates about civil liberties, privacy, and the balance between security and individual rights. Additionally, they led to a rise in anti-Muslim sentiment and discrimination, as well as increased scrutiny and challenges for Muslim communities in many parts of the world.",
              "In summary, the 9/11 terrorist attacks were a watershed moment in contemporary history, reshaping U.S. and global politics, security, and society. The legacy of 9/11 continues to influence global affairs, as nations grapple with the challenges of terrorism, security, and civil liberties.",
            ],
            keyFigures: [
              { id: "figure_21st_century_3", name: "Osama bin Laden", role: "Leader of al-Qaeda", lifespan: "1957-2011", biography: "Founder of the militant Islamist organization al-Qaeda." }
            ],
            consequences: "Led to the War on Terror, the invasions of Afghanistan and Iraq, and significant changes in global security policies.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
              "https://www.911memorial.org/", 
              "https://www.history.com/topics/21st-century/9-11-attacks"
            ]
          },
          {
            id: "event_21st_century_2",
            name: "Ebola Outbreak in West Africa",
            date: { start: "2014-12-06", end: "2016-03-29" },
            description: "A widespread outbreak of Ebola virus disease in West Africa, primarily affecting Guinea, Liberia, and Sierra Leone.",
            significance: "One of the largest and most complex Ebola outbreaks in history, with significant health, economic, and social impacts.",
            location: { name: "West Africa", coordinates: [7.1881, -9.6586] },
            keyFigures: [
              { id: "figure_21st_century_4", name: "Dr. Sheik Umar Khan", role: "Sierra Leonean doctor and leading Ebola specialist", lifespan: "1975-2014", biography: "A prominent Sierra Leonean doctor who played a critical role in treating Ebola patients before succumbing to the disease himself." }
            ],
            consequences: "Led to increased global awareness of and response to infectious diseases, as well as improvements in public health infrastructure in affected countries.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: ["Source 1", "Source 2"]
          },
          {
            id: "event_21st_century_2",
            name: "COVID-19 Pandemic",
            date: { start: "2019-12-01", end: "ongoing" },
            description: "A global pandemic caused by the novel coronavirus SARS-CoV-2, leading to significant health, economic, and social impacts.",
            significance: "Resulted in widespread illness, millions of deaths, and profound changes in daily life, healthcare, and economies.",
            location: { name: "Global", coordinates: [0, 0] },
            content: [
              "The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, emerged as one of the most significant global health crises in contemporary history. The outbreak began in December 2019 in Wuhan, Hubei province, China, where initial cases were linked to a seafood market that also sold live wild animals, suggesting zoonotic transmission. By January 2020, the virus had spread to multiple countries, leading the World Health Organization (WHO) to declare a Public Health Emergency of International Concern on January 30, 2020. On March 11, 2020, the WHO characterized the outbreak as a pandemic.",
              "Governments worldwide implemented various measures to curb the spread of the virus, including lockdowns, travel restrictions, social distancing, and mask mandates. Health systems were overwhelmed as cases surged, resulting in shortages of medical supplies and personnel. The pandemic exposed vulnerabilities in global health infrastructure and prompted a significant shift towards telehealth and digital health solutions.",
              "COVID-19 primarily transmits through respiratory droplets when an infected person coughs, sneezes, or talks. Symptoms range from mild respiratory issues to severe pneumonia and multi-organ failure, with higher mortality rates observed in the elderly and those with underlying health conditions. The rapid development and deployment of vaccines were critical in combating the virus. By December 2020, vaccines developed by Pfizer-BioNTech, Moderna, and AstraZeneca received emergency use authorization, marking a significant milestone in the fight against COVID-19.",
              "The pandemic had profound and lasting impacts on global society. Economically, it triggered the worst global recession since the Great Depression, with millions of jobs lost and businesses shuttered. Governments implemented massive stimulus packages to mitigate the economic fallout, resulting in significant fiscal impacts. Socially, the pandemic altered daily life, with remote work, online education, and virtual social interactions becoming the norm. Mental health issues surged due to isolation, stress, and uncertainty. The pandemic also highlighted and exacerbated existing inequalities, disproportionately affecting marginalized and low-income communities.",
              "Scientifically, the pandemic accelerated research in virology, immunology, and public health. The rapid development of mRNA vaccines was a breakthrough, demonstrating the potential for new technologies to address future pandemics. Collaborative efforts in research and data sharing were unprecedented, leading to a better understanding of the virus and more effective public health responses.",
              "In summary, the COVID-19 pandemic was a transformative global event that reshaped health, economic, and social landscapes. It underscored the importance of preparedness, international cooperation, and investment in health systems to address future global health challenges.",
            ],
            keyFigures: [
              { id: "figure_21st_century_2", name: "Dr. Anthony Fauci", role: "Director of the National Institute of Allergy and Infectious Diseases", lifespan: "1940-", biography: "An American immunologist who has served as the director of the NIAID since 1984 and a key advisor during the COVID-19 pandemic." }
            ],
            consequences: "Accelerated digital transformation, exposed global health vulnerabilities, and led to significant government interventions and vaccine developments.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: [
              "https://covid19.nih.gov/", 
              "https://www.cdc.gov/covid/index.html",
              "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            ]
          },
          {
            id: "event_21st_century_4",
            name: "Russo-Ukrainian War",
            date: { start: "2014-02-20", end: "ongoing" },
            description: "An ongoing conflict between Russia and Ukraine that began with Russia's annexation of Crimea and continued with the war in Donbas.",
            significance: "Significant geopolitical conflict with widespread implications for international relations, security, and the global economy.",
            location: { name: "Ukraine", coordinates: [48.3794, 31.1656] },
            keyFigures: [
              { id: "figure_21st_century_5", name: "Vladimir Putin", role: "President of Russia", lifespan: "1952-", biography: "The President of Russia who has played a central role in the conflict." },
              { id: "figure_21st_century_6", name: "Volodymyr Zelensky", role: "President of Ukraine", lifespan: "1978-", biography: "The President of Ukraine leading the country during the conflict." }
            ],
            consequences: "Led to significant military and civilian casualties, economic sanctions on Russia, and increased tensions between Russia and Western countries.",
            relatedEvents: [],
            subEvents: [],
            media: [],
            sources: ["Source 1", "Source 2"]
          }
        ]
      }
    ]
  };

  

