interface Book {
  title: string;
  author: string;
  description: string;
  genre: string[];
  status: 'Read' | 'Currently Reading' | 'Want to Read';
  link?: string;
  rating?: number;
  thoughts?: string;
  isbn?: string;
}

// Books data split into categories for easier management
export const currentlyReadingBooks: Book[] = [
  {
    title: 'Kissinger: A Biography',
    author: 'Walter Isaacson',
    description: 'A comprehensive look at one of the most influential and controversial diplomats in American history.',
    genre: ['Biography', 'Politics', 'History'],
    status: 'Currently Reading',
    link: 'https://www.amazon.com/Kissinger-Biography-Walter-Isaacson/dp/0743286979',
    isbn: '0743286979'
  }
];

export const readBooks: Book[] = [
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'A collection of timeless lessons about wealth, greed, and happiness, exploring the psychology behind our financial decisions.',
    genre: ['Finance', 'Psychology', 'Personal Development'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliant insights into how our psychology affects our financial decisions.',
    link: 'https://www.amazon.com/Psychology-Money-Timeless-Lessons-Happiness/dp/0857197681',
    isbn: '0857197681'
  },
  {
    title: 'Neuromancer',
    author: 'William Gibson',
    description: 'The groundbreaking cyberpunk novel that coined the term "cyberspace" and influenced countless works of science fiction.',
    genre: ['Science Fiction', 'Cyberpunk'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterpiece that defined cyberpunk and predicted many aspects of our digital world.',
    link: 'https://www.amazon.com/Neuromancer-William-Gibson/dp/0441569595',
    isbn: '0441569595'
  },
  {
    title: 'Dear Reader',
    author: 'Michael Malice',
    description: 'The unauthorized autobiography of Kim Jong Il, offering a satirical yet informative look into North Korea\'s dictatorship.',
    genre: ['Politics', 'History', 'Satire'],
    status: 'Read',
    rating: 5,
    thoughts: 'A fascinating blend of humor and insight into one of the world\'s most secretive regimes.',
    link: 'https://www.amazon.com/Dear-Reader-Unauthorized-Autobiography-Jong/dp/1495283259',
    isbn: '1495283259'
  },
  {
    title: 'The New Right',
    author: 'Michael Malice',
    description: 'A journey exploring the fringes of American politics and the emergence of new political movements.',
    genre: ['Politics', 'Current Events'],
    status: 'Read',
    rating: 4,
    thoughts: 'An interesting exploration of modern political movements and ideologies.',
    link: 'https://www.amazon.com/New-Right-Journey-American-Politics/dp/1250154669',
    isbn: '1250154669'
  },
  {
    title: 'The Story of Civilization',
    author: 'Will Durant',
    description: 'A monumental work chronicling the entire history of human civilization, covering art, science, politics, religion, and the rise and fall of empires across the ages.',
    genre: ['History', 'Philosophy', 'Civilization'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible achievement in historical synthesis. Durant\'s ability to weave together cultural, political, and intellectual history while maintaining readability is remarkable.',
    link: 'https://www.amazon.com/Story-Civilization-11-Set/dp/1567310230',
    isbn: '9781567310238'
  },
  {
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    description: 'Nietzsche\'s philosophical novel presenting his ideas about the death of God, the Übermensch, and eternal recurrence.',
    genre: ['Philosophy', 'Literature'],
    status: 'Read',
    rating: 4,
    thoughts: 'A challenging but rewarding exploration of Nietzsche\'s philosophy.',
    link: 'https://www.amazon.com/Thus-Spoke-Zarathustra-Friedrich-Nietzsche/dp/0140441182',
    isbn: '0140441182'
  },
  {
    title: 'Boyd',
    author: 'Robert Coram',
    description: 'The biography of John Boyd, the fighter pilot whose theories of warfare revolutionized military strategy.',
    genre: ['Biography', 'Military', 'History'],
    status: 'Read',
    rating: 4,
    thoughts: 'Fascinating look at a brilliant military theorist who changed modern warfare.',
    link: 'https://www.amazon.com/Boyd-Fighter-Pilot-Who-Changed/dp/0316796883',
    isbn: '0316796883'
  },
  {
    title: 'On War',
    author: 'Carl von Clausewitz',
    description: 'The classic treatise on military strategy and the nature of warfare.',
    genre: ['Military', 'Strategy', 'History'],
    status: 'Read',
    rating: 3,
    thoughts: 'Dense but foundational work on military theory and strategy.',
    link: 'https://www.amazon.com/War-Carl-von-Clausewitz/dp/0691018545',
    isbn: '0691018545'
  },
  {
    title: '33 Strategies of War',
    author: 'Robert Greene',
    description: 'A comprehensive guide to strategic thinking, drawing from military history and applying it to modern life.',
    genre: ['Strategy', 'History', 'Military'],
    status: 'Read',
    rating: 3,
    thoughts: 'Interesting historical examples applied to modern strategic thinking.',
    link: 'https://www.amazon.com/33-Strategies-War-Robert-Greene/dp/0143112783',
    isbn: '0143112783'
  },
  {
    title: 'We Are Legion (We Are Bob)',
    author: 'Dennis E. Taylor',
    description: 'Book 1 of the Bobiverse series, following a reincarnated human consciousness exploring the cosmos.',
    genre: ['Science Fiction', 'Space Opera'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliant blend of humor and hard sci-fi concepts.',
    link: 'https://www.amazon.com/Are-Legion-Bob-Bobiverse-Book-ebook/dp/B01LWAESYQ',
    isbn: 'B01LWAESYQ'
  },
  {
    title: 'For We Are Many',
    author: 'Dennis E. Taylor',
    description: 'Book 2 of the Bobiverse series, expanding the scope of Bob\'s adventures.',
    genre: ['Science Fiction', 'Space Opera'],
    status: 'Read',
    rating: 5,
    thoughts: 'Excellent continuation that builds on the first book\'s foundation.',
    link: 'https://www.amazon.com/We-Are-Many-Bobiverse-Book-ebook/dp/B01MZI77C0',
    isbn: 'B01MZI77C0'
  },
  {
    title: 'All These Worlds',
    author: 'Dennis E. Taylor',
    description: 'Book 3 of the Bobiverse series, bringing the original trilogy to a satisfying conclusion.',
    genre: ['Science Fiction', 'Space Opera'],
    status: 'Read',
    rating: 5,
    thoughts: 'A fantastic conclusion to an innovative sci-fi series.',
    link: 'https://www.amazon.com/All-These-Worlds-Bobiverse-Book-ebook/dp/B0736185ZL',
    isbn: 'B0736185ZL'
  },
  {
    title: 'Heaven\'s River',
    author: 'Dennis E. Taylor',
    description: 'The fourth book in the Bobiverse series follows Bob and his replicants as they discover a massive megastructure in space, inhabited by an alien civilization that raises new questions about the nature of consciousness and society.',
    genre: ['Science Fiction', 'Space Opera', 'AI Fiction'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating exploration of alien civilizations and artificial consciousness. Taylor continues to expand the scope of the Bobiverse while maintaining the series\' signature humor and scientific accuracy.',
    link: 'https://www.amazon.com/Heavens-River-Bobiverse-Book-4/dp/B088C51F5H',
    isbn: 'B088C51F5H'
  },
  {
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    description: 'A mind-bending cyberpunk novel that predicted many aspects of our digital world.',
    genre: ['Science Fiction', 'Cyberpunk'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliant mix of technology, mythology, and social commentary that feels more relevant every year.',
    link: 'https://www.amazon.com/Snow-Crash-Neal-Stephenson/dp/0553380958',
    isbn: '0553380958'
  },
  {
    title: 'The Player of Games',
    author: 'Iain M. Banks',
    description: 'A masterpiece of science fiction exploring culture, politics, and strategy through the lens of gaming.',
    genre: ['Science Fiction', 'Space Opera'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliant exploration of games, culture, and politics in a far-future setting.',
    link: 'https://www.amazon.com/Player-Games-Culture-Iain-Banks/dp/0316005401',
    isbn: '0316005401'
  },
  {
    title: 'Endurance',
    author: 'Alfred Lansing',
    description: 'The incredible true story of Ernest Shackleton\'s survival after his Antarctic expedition goes wrong.',
    genre: ['History', 'Adventure', 'Biography'],
    status: 'Read',
    rating: 4,
    thoughts: 'An amazing tale of human endurance and leadership.',
    link: 'https://www.amazon.com/Endurance-Shackletons-Incredible-Alfred-Lansing/dp/0465062881',
    isbn: '0465062881'
  },
  {
    title: 'Strategy: A History',
    author: 'Lawrence Freedman',
    description: 'A comprehensive exploration of strategy across military, political, and business domains.',
    genre: ['History', 'Strategy', 'Military'],
    status: 'Read',
    rating: 3,
    thoughts: 'Thorough examination of strategic thinking throughout history.',
    link: 'https://www.amazon.com/Strategy-History-Lawrence-Freedman/dp/0199325154',
    isbn: '0199325154'
  },
  {
    title: 'The Skeptics\' Guide to the Future',
    author: 'Dr. Steven Novella, Bob Novella, Jay Novella',
    description: 'An enlightening exploration of what tomorrow might bring, using science and critical thinking to separate science fiction from science fact and guide us to a realistic vision of the future.',
    genre: ['Science', 'Technology', 'Futurism'],
    status: 'Read',
    rating: 4,
    thoughts: 'A refreshingly grounded take on future technology. The authors do an excellent job of analyzing past predictions and using that insight to make more informed projections about future developments.',
    link: 'https://www.amazon.com/Skeptics-Guide-Future-Science-Tomorrow/dp/1538709546',
    isbn: '1538709546'
  },
  {
    title: 'Games People Play',
    author: 'Eric Berne',
    description: 'A groundbreaking analysis of the psychology behind human relationships and social interactions, revealing the patterns of behavior that shape our daily interactions.',
    genre: ['Psychology', 'Self-Help', 'Social Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating exploration of human interaction patterns. Berne\'s concept of transactional analysis provides a unique lens for understanding social dynamics.',
    link: 'https://www.amazon.com/Games-People-Play-Psychology-Relationships/dp/0141040270',
    isbn: '9780141040271'
  },
  {
    title: 'Breakfast of Champions',
    author: 'Kurt Vonnegut',
    description: 'A wildly satirical novel about the American condition, featuring Vonnegut\'s signature dark humor and illustrations.',
    genre: ['Fiction', 'Literary Fiction', 'Satire'],
    status: 'Read',
    rating: 4,
    thoughts: 'A wild ride through American culture with Vonnegut\'s own illustrations adding another layer of satire.',
    link: 'https://www.amazon.com/Breakfast-Champions-Novel-Kurt-Vonnegut/dp/0385334206',
    isbn: '0385334206'
  },
  {
    title: 'Deadeye Dick',
    author: 'Kurt Vonnegut',
    description: 'A dark comedy about a man who accidentally killed someone as a child.',
    genre: ['Fiction', 'Literary Fiction', 'Satire'],
    status: 'Read',
    rating: 4,
    thoughts: 'Dark and thought-provoking exploration of guilt and responsibility.',
    link: 'https://www.amazon.com/Deadeye-Dick-Novel-Kurt-Vonnegut/dp/0385334176',
    isbn: '0385334176'
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    description: 'A masterpiece of anti-war fiction, following Billy Pilgrim\'s time-traveling experiences during WWII.',
    genre: ['Fiction', 'Science Fiction', 'Literary Fiction'],
    status: 'Read',
    rating: 5,
    thoughts: 'A profound and innovative exploration of war, time, and human nature. So it goes.',
    link: 'https://www.amazon.com/Slaughterhouse-Five-Novel-Modern-Library-Novels/dp/0385333846',
    isbn: '0385333846'
  },
  {
    title: 'Mother Night',
    author: 'Kurt Vonnegut',
    description: 'A dark tale about an American spy in Nazi Germany who questions his own identity.',
    genre: ['Fiction', 'Literary Fiction', 'War Fiction'],
    status: 'Read',
    rating: 5,
    thoughts: 'Powerful exploration of identity and moral complexity.',
    link: 'https://www.amazon.com/Mother-Night-Novel-Kurt-Vonnegut/dp/0385334141',
    isbn: '0385334141'
  },
  {
    title: 'Cat\'s Cradle',
    author: 'Kurt Vonnegut',
    description: 'A satirical commentary on modern man and his madness, involving a deadly form of ice.',
    genre: ['Fiction', 'Science Fiction', 'Satire'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliant satire of science, religion, and human folly. Ice-nine will stick with you.',
    link: 'https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut/dp/038533348X',
    isbn: '038533348X'
  },
  {
    title: 'Bluebeard',
    author: 'Kurt Vonnegut',
    description: 'The autobiography of an abstract expressionist painter with a mysterious secret in his barn.',
    genre: ['Fiction', 'Literary Fiction', 'Art'],
    status: 'Read',
    rating: 4,
    thoughts: 'Fascinating meditation on art, war, and creativity.',
    link: 'https://www.amazon.com/Bluebeard-Novel-Kurt-Vonnegut/dp/0385333501',
    isbn: '0385333501'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    description: 'A thrilling tale of survival on Mars, following astronaut Mark Watney as he uses his scientific ingenuity to stay alive after being stranded.',
    genre: ['Science Fiction', 'Hard Science Fiction'],
    status: 'Read',
    rating: 5,
    thoughts: 'A perfect blend of hard science and engaging storytelling. The technical problem-solving is fascinating, and Mark\'s humor keeps the story light despite the dire circumstances.',
    link: 'https://www.amazon.com/Martian-Andy-Weir/dp/0553418025',
    isbn: '0553418025'
  },
  {
    title: 'Tropic of Cancer',
    author: 'Henry Miller',
    description: 'A groundbreaking work of 20th-century literature that broke with narrative conventions to present a raw, honest account of Miller\'s life as a struggling writer in Paris.',
    genre: ['Literary Fiction', 'Autobiography'],
    status: 'Read',
    rating: 4,
    thoughts: 'A challenging but rewarding read. Miller\'s stream-of-consciousness style and brutal honesty created something truly unique for its time.',
    link: 'https://www.amazon.com/Tropic-Cancer-Henry-Miller/dp/0802131786',
    isbn: '0802131786'
  },
  {
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    description: 'A haunting narrative of imperialism and human nature, following Marlow\'s journey up the Congo River in search of the mysterious Kurtz.',
    genre: ['Literary Fiction', 'Classics'],
    status: 'Read',
    rating: 4,
    thoughts: 'A powerful exploration of colonialism and the darkness that can exist in human nature. Conrad\'s prose is dense but rewarding.',
    link: 'https://www.amazon.com/Heart-Darkness-Dover-Thrift-Editions/dp/0486264645',
    isbn: '0486264645'
  },
  {
    title: 'The C++ Programming Language',
    author: 'Bjarne Stroustrup',
    description: 'The definitive guide to C++ by its creator, covering the latest C++11 standard with in-depth explanations of language features, standard libraries, and key design techniques.',
    genre: ['Programming', 'Computer Science', 'Reference'],
    status: 'Read',
    rating: 5,
    thoughts: 'The authoritative resource on C++. While dense, it provides invaluable insights into the language\'s design philosophy and practical usage.',
    link: 'https://www.amazon.com/C-Programming-Language-4th/dp/0321958322',
    isbn: '9780321958327'
  },
  {
    title: 'Skunk Works',
    author: 'Ben R. Rich, Leo Janos',
    description: 'An insider\'s account of Lockheed\'s legendary aerospace development division, revealing the stories behind the U-2, SR-71 Blackbird, and F-117 stealth fighter.',
    genre: ['Aviation', 'History', 'Technology'],
    status: 'Read',
    rating: 5,
    thoughts: 'A thrilling look into the world of advanced aerospace development. The stories about the SR-71 development and the stealth program are particularly fascinating.',
    link: 'https://www.amazon.com/Skunk-Works-Personal-Memoir-Lockheed/dp/0316743003',
    isbn: '0316743003'
  },
  {
    title: 'Masters of Doom',
    author: 'David Kushner',
    description: 'The story of id Software\'s John Carmack and John Romero, their creation of revolutionary games like Doom and Quake, and their impact on gaming culture.',
    genre: ['Technology', 'Biography', 'Gaming'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible journey through the early days of game development. The technical innovations and cultural impact of id Software shaped modern gaming.',
    link: 'https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155',
    isbn: '0812972155'
  },
  {
    title: 'The Search for Exoplanets',
    author: 'Joshua N. Winn',
    description: 'A comprehensive exploration of how astronomers discover and study planets orbiting other stars, covering the latest techniques, major discoveries, and what these distant worlds might tell us about our own solar system.',
    genre: ['Science', 'Astronomy', 'Space'],
    status: 'Read',
    rating: 5,
    thoughts: 'An excellent overview of exoplanet detection methods and discoveries. Professor Winn explains complex astronomical concepts clearly while conveying the excitement of this rapidly evolving field.',
    link: 'https://www.amazon.com/Search-Exoplanets-What-Astronomers-Know/dp/B015SF8WKG',
    isbn: 'B015SF8WKG'
  },
  {
    title: 'Atomic Adventures',
    author: 'James Mahaffey',
    description: 'A fascinating journey through the lesser-known stories of atomic research, from failed nuclear rocket programs to the quest for clean energy, revealing the brilliant, chaotic, and often dangerous birth of our atomic age.',
    genre: ['Science', 'History', 'Nuclear Physics'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible collection of atomic research stories that rarely make the history books. Mahaffey\'s expertise and humor make complex nuclear concepts accessible while highlighting the human drama behind the science.',
    link: 'https://www.amazon.com/Atomic-Adventures-James-Mahaffey-audiobook/dp/B071Z865P8',
    isbn: 'B071Z865P8'
  },
  {
    title: 'Ignition!',
    author: 'John Drury Clark',
    description: 'A humorous and technical history of rocket propellant development during the space race, written by someone who was there and somehow survived.',
    genre: ['Science', 'History', 'Space'],
    status: 'Read',
    rating: 5,
    thoughts: 'The most entertaining chemistry book ever written. Clark\'s wit makes the dangerous world of hypergolic propellants both fascinating and hilarious.',
    link: 'https://www.amazon.com/Ignition-Informal-History-Liquid-Propellants/dp/0813595835',
    isbn: '0813595835'
  },
  {
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    description: 'A groundbreaking look at evolution from the gene\'s perspective, revolutionizing our understanding of natural selection and introducing the concept of memes.',
    genre: ['Science', 'Biology', 'Evolution'],
    status: 'Read',
    rating: 5,
    thoughts: 'A paradigm-shifting view of evolution that completely changed my understanding of genetics and natural selection. The concept of memes has become even more relevant in the digital age.',
    link: 'https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606',
    isbn: '0198788606'
  },
  {
    title: 'Algorithms to Live By',
    author: 'Brian Christian, Tom Griffiths',
    description: 'An exploration of how computer algorithms can be applied to our everyday lives, from finding a parking spot to organizing your closet.',
    genre: ['Computer Science', 'Psychology', 'Self-Help'],
    status: 'Read',
    rating: 4,
    thoughts: 'A brilliant application of computer science to daily life. The chapters on optimal stopping and caching strategies have actually improved my decision-making process.',
    link: 'https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1627790365',
    isbn: '1627790365'
  },
  {
    title: 'Hackers',
    author: 'Steven Levy',
    description: 'The definitive history of the hacker movement, from the early days at MIT to the personal computer revolution and beyond.',
    genre: ['Technology', 'History', 'Biography'],
    status: 'Read',
    rating: 5,
    thoughts: 'Essential reading for understanding hacker culture and the tech revolution. The stories of the MIT AI Lab and the Homebrew Computer Club are particularly inspiring.',
    link: 'https://www.amazon.com/Hackers-Computer-Revolution-Steven-Levy/dp/1449388396',
    isbn: '1449388396'
  },
  {
    title: 'Masters of Doom',
    author: 'David Kushner',
    description: 'The story of id Software\'s John Carmack and John Romero, their creation of revolutionary games like Doom and Quake, and their impact on gaming culture.',
    genre: ['Technology', 'Biography', 'Gaming'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible look into the birth of modern gaming. The technical brilliance of Carmack and the design vision of Romero created something truly revolutionary.',
    link: 'https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155',
    isbn: '0812972155'
  },
  {
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    description: 'A science fiction novel that explores virtual reality, linguistics, ancient Sumerian mythology, and the future of the internet.',
    genre: ['Science Fiction', 'Cyberpunk'],
    status: 'Read',
    rating: 4,
    thoughts: 'A wildly imaginative cyberpunk classic that predicted many aspects of our modern digital world. The blend of ancient mythology with futuristic technology is particularly compelling.',
    link: 'https://www.amazon.com/Snow-Crash-Neal-Stephenson/dp/0553380958',
    isbn: '0553380958'
  },
  {
    title: 'The Innovators',
    author: 'Walter Isaacson',
    description: 'A comprehensive history of the digital revolution, profiling the people who created and shaped the modern world of computers and technology.',
    genre: ['Technology', 'History', 'Biography'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterful narrative of computing history that emphasizes the collaborative nature of innovation. Isaacson expertly weaves together the stories of both well-known and overlooked pioneers.',
    link: 'https://www.amazon.com/Innovators-Hackers-Geniuses-Created-Revolution/dp/1476708703',
    isbn: '9781476708706'
  },
  {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    description: 'A controversial masterpiece of 20th-century literature that follows the story of Humbert Humbert\'s obsession with young Dolores Haze.',
    genre: ['Literary Fiction', 'Classics', 'Controversial'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterclass in unreliable narration and prose style. Nabokov\'s command of language creates a haunting contrast between the beautiful writing and disturbing subject matter.',
    link: 'https://www.amazon.com/Lolita-Vladimir-Nabokov/dp/0679723161',
    isbn: '0679723161'
  },
  {
    title: 'I Hope They Serve Beer in Hell',
    author: 'Tucker Max',
    description: 'A collection of outrageous true stories from the author\'s life, chronicling his adventures in debauchery and excess.',
    genre: ['Humor', 'Memoir', 'Comedy'],
    status: 'Read',
    rating: 3,
    thoughts: 'A guilty pleasure read that\'s both entertaining and cringe-worthy. While often offensive, it provides an unfiltered look at a certain type of early 2000s party culture.',
    link: 'https://www.amazon.com/Hope-They-Serve-Beer-Hell/dp/0806532254',
    isbn: '0806532254'
  },
  {
    title: 'The Norsemen - Understanding Vikings and Their Culture',
    author: 'Kim Hjardar',
    description: 'A comprehensive exploration of Viking society, culture, and history, examining their daily lives, beliefs, and impact on European history.',
    genre: ['History', 'Norse Mythology', 'Cultural Studies'],
    status: 'Read',
    rating: 4,
    thoughts: 'An enlightening look at Viking culture beyond the common stereotypes. The detailed examination of their social structures and daily life was particularly fascinating.',
    link: 'https://www.amazon.com/Vikings-Understanding-Their-Culture-Norsemen/dp/1612009352',
    isbn: '1612009352'
  },
  {
    title: 'Mythology',
    author: 'Edith Hamilton',
    description: 'A comprehensive guide to Greek, Roman, and Norse mythology, retelling the great myths and exploring their significance in ancient cultures.',
    genre: ['Mythology', 'Classics', 'History'],
    status: 'Read',
    rating: 4,
    thoughts: 'An excellent introduction to classical mythology. Hamilton\'s clear writing style makes complex mythological narratives accessible while preserving their cultural significance.',
    link: 'https://www.amazon.com/Mythology-Timeless-Tales-Gods-Heroes/dp/0446574759',
    isbn: '0446574759'
  },
  {
    title: 'Salt Sugar Fat',
    author: 'Michael Moss',
    description: 'An investigation into how the processed food industry uses these three ingredients to hook consumers, and the impact on public health.',
    genre: ['Science', 'Health', 'Business'],
    status: 'Read',
    rating: 4,
    thoughts: 'Eye-opening look at how food companies engineer their products. The detailed research into the science of food addiction and marketing practices is particularly compelling.',
    link: 'https://www.amazon.com/Salt-Sugar-Fat-Giants-Hooked/dp/0812972155',
    isbn: '0812972155'
  },
  {
    title: 'The Practicing Mind',
    author: 'Thomas M. Sterner',
    description: 'A guide to developing focus and discipline in your life by understanding the true purpose and mechanics of practice and process.',
    genre: ['Self-Help', 'Psychology', 'Productivity'],
    status: 'Read',
    rating: 4,
    thoughts: 'A refreshing take on personal development that focuses on the process rather than the goal. The concepts about mindful practice have been particularly useful.',
    link: 'https://www.amazon.com/Practicing-Mind-Developing-Focus-Discipline/dp/1608680908',
    isbn: '1608680908'
  },
  {
    title: 'Eating the Dinosaur',
    author: 'Chuck Klosterman',
    description: 'A collection of essays exploring various aspects of modern culture, from football to time travel, with Klosterman\'s signature wit and insight.',
    genre: ['Essays', 'Cultural Criticism', 'Humor'],
    status: 'Read',
    rating: 4,
    thoughts: 'Klosterman\'s unique perspective makes even mundane topics fascinating. His ability to draw unexpected connections between disparate subjects is remarkable.',
    link: 'https://www.amazon.com/Eating-Dinosaur-Chuck-Klosterman/dp/1416544216',
    isbn: '1416544216'
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    description: 'A comedic science fiction series following the adventures of Arthur Dent after Earth\'s destruction, featuring the famous answer to life, the universe, and everything.',
    genre: ['Science Fiction', 'Comedy', 'Satire'],
    status: 'Read',
    rating: 5,
    thoughts: 'Brilliantly funny and surprisingly profound. Adams\' absurdist humor and social commentary create a unique blend of entertainment and insight.',
    link: 'https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802',
    isbn: '0345391802'
  },
  {
    title: 'The Anglo-Saxon World',
    author: 'Nicholas J. Higham, Martin J. Ryan',
    description: 'A comprehensive examination of Anglo-Saxon England, covering its history, culture, literature, and archaeological evidence.',
    genre: ['History', 'Medieval Studies', 'British History'],
    status: 'Read',
    rating: 4,
    thoughts: 'A thorough and engaging exploration of Anglo-Saxon civilization. The integration of archaeological findings with historical texts provides a vivid picture of the period.',
    link: 'https://www.amazon.com/Anglo-Saxon-World-Nicholas-Higham/dp/0300216130',
    isbn: '0300216130'
  },
  {
    title: 'Gumption',
    author: 'Nick Offerman',
    description: 'A collection of biographical essays about people who have inspired Offerman, combining humor with thoughtful reflections on character and achievement.',
    genre: ['Biography', 'Humor', 'Essays'],
    status: 'Read',
    rating: 4,
    thoughts: 'Offerman\'s unique voice and perspective make these biographical sketches both entertaining and inspiring. His passion for craftsmanship and authenticity shines through.',
    link: 'https://www.amazon.com/Gumption-Relighting-Torch-America-Gutsy/dp/0451473019',
    isbn: '0451473019'
  },
  {
    title: '13 Things That Don\'t Make Sense',
    author: 'Michael Brooks',
    description: 'An exploration of the most intriguing scientific anomalies and mysteries that continue to puzzle researchers.',
    genre: ['Science', 'Physics', 'Popular Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'Fascinating look at the edges of scientific knowledge. Brooks does an excellent job of making complex scientific puzzles accessible and engaging.',
    link: 'https://www.amazon.com/13-Things-That-Dont-Sense/dp/0385520689',
    isbn: '0385520689'
  },
  {
    title: 'Periodic Tales',
    author: 'Hugh Aldersey-Williams',
    description: 'A cultural history of the elements, exploring how they\'ve shaped human civilization and our understanding of the world.',
    genre: ['Science', 'Chemistry', 'History'],
    status: 'Read',
    rating: 4,
    thoughts: 'A unique blend of science and cultural history. The stories behind each element\'s discovery and impact make chemistry feel alive and relevant.',
    link: 'https://www.amazon.com/Periodic-Tales-Cultural-History-Elements/dp/0061824739',
    isbn: '0061824739'
  },
  {
    title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    author: 'Ashlee Vance',
    description: 'A biography of the entrepreneur behind PayPal, Tesla, and SpaceX, exploring his vision for the future and his impact on multiple industries.',
    genre: ['Biography', 'Business', 'Technology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A well-researched look into Musk\'s life and companies. The book provides valuable insights into both his successes and the controversial aspects of his leadership style.',
    link: 'https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233',
    isbn: '0062301233'
  },
  {
    title: 'Elon Musk',
    author: 'Walter Isaacson',
    description: 'A comprehensive biography of Elon Musk by the acclaimed biographer of Steve Jobs, exploring his complex personality and revolutionary impact on multiple industries.',
    genre: ['Biography', 'Business', 'Technology'],
    status: 'Read',
    rating: 4,
    thoughts: 'Isaacson\'s thorough research and balanced perspective provide deep insights into Musk\'s character, ambitions, and the personal costs of his relentless drive.',
    link: 'https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281',
    isbn: '1982181281'
  },
  {
    title: 'Einstein: His Life and Universe',
    author: 'Walter Isaacson',
    description: 'A comprehensive biography of Albert Einstein, exploring both his scientific genius and his complex personal life, set against the backdrop of the tumultuous 20th century.',
    genre: ['Biography', 'Science', 'History'],
    status: 'Read',
    rating: 5,
    thoughts: 'Isaacson brilliantly weaves together Einstein\'s scientific achievements with his personal life, making complex physics concepts accessible while revealing the human side of genius.',
    link: 'https://www.amazon.com/Einstein-Life-Universe-Walter-Isaacson/dp/0743264746',
    isbn: '0743264746'
  },
  {
    title: 'Bullshit Jobs: A Theory',
    author: 'David Graeber',
    description: 'An anthropological exploration of meaningless jobs and their psychological, social, and political effects on society.',
    genre: ['Social Science', 'Economics', 'Anthropology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A thought-provoking analysis of modern work culture. Graeber\'s insights into the proliferation of meaningless jobs and their societal impact are both enlightening and concerning.',
    link: 'https://www.amazon.com/Bullshit-Jobs-Theory-David-Graeber/dp/150114331X',
    isbn: '150114331X'
  },
  {
    title: 'Guns, Germs and Steel',
    author: 'Jared Diamond',
    description: 'A groundbreaking study of how ecological and environmental factors shaped human history, explaining why different civilizations developed at different rates.',
    genre: ['History', 'Anthropology', 'Science'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterful synthesis of history, geography, and biology. Diamond\'s thesis about the role of geography and environment in human development is compelling and well-supported.',
    link: 'https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393354326',
    isbn: '0393354326'
  },
  {
    title: 'The Holographic Universe',
    author: 'Michael Talbot',
    description: 'An exploration of the theory that the universe is a hologram, examining quantum physics, consciousness, and paranormal phenomena.',
    genre: ['Science', 'Physics', 'Philosophy'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating, if controversial, look at the nature of reality. While some ideas are speculative, the book provides an intriguing perspective on consciousness and quantum physics.',
    link: 'https://www.amazon.com/Holographic-Universe-Revolutionary-Theory-Reality/dp/0062014102',
    isbn: '0062014102'
  },
  {
    title: 'Rust: The Longest War',
    author: 'Jonathan Waldman',
    description: 'A fascinating look at corrosion\'s impact on civilization and the ongoing battle to prevent it, from the Statue of Liberty to modern electronics.',
    genre: ['Science', 'Technology', 'History'],
    status: 'Read',
    rating: 4,
    thoughts: 'An unexpectedly engaging exploration of a seemingly mundane topic. Waldman reveals how rust shapes our world and the constant struggle to combat it.',
    link: 'https://www.amazon.com/Rust-Longest-War-Jonathan-Waldman/dp/1451691599',
    isbn: '1451691599'
  },
  {
    title: 'Footprints in the Dust',
    author: 'Colin Burgess',
    description: 'A comprehensive look at the Apollo program through the experiences of the astronauts who flew the missions, offering unique insights into humanity\'s greatest space adventure.',
    genre: ['Space', 'History', 'Biography'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible collection of personal accounts from Apollo astronauts. The book provides intimate details about the missions that you won\'t find in other Apollo histories.',
    link: 'https://www.amazon.com/Footprints-Dust-Outbound-Footsteps-Spaceflight/dp/0803226659',
    isbn: '0803226659'
  },
  {
    title: 'Debt: The First 5,000 Years',
    author: 'David Graeber',
    description: 'A comprehensive anthropological history of debt, exploring its role in shaping human societies, economies, and moral systems throughout history.',
    genre: ['History', 'Economics', 'Anthropology'],
    status: 'Read',
    rating: 5,
    thoughts: 'A revolutionary perspective on the history of debt and its role in human civilization. Graeber\'s analysis challenges conventional economic wisdom and reveals deep insights about society.',
    link: 'https://www.amazon.com/Debt-First-5-000-Years/dp/1612194192',
    isbn: '1612194192'
  },
  {
    title: 'A History of the World in 6 Glasses',
    author: 'Tom Standage',
    description: 'A unique perspective on world history through the lens of six beverages: beer, wine, spirits, coffee, tea, and cola, showing how each has influenced civilization.',
    genre: ['History', 'Food & Drink', 'Culture'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating way to explore history through the evolution of beverages. Standage effectively demonstrates how drinks have shaped trade, social interaction, and technological development.',
    link: 'https://www.amazon.com/History-World-6-Glasses/dp/0802715524',
    isbn: '0802715524'
  },
  {
    title: 'History\'s Greatest Voyages of Exploration',
    author: 'Vejas Gabriel Liulevicius',
    description: 'A comprehensive survey of the most significant expeditions throughout history, from ancient times to modern space exploration.',
    genre: ['History', 'Exploration', 'Adventure'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating journey through humanity\'s greatest expeditions. The course effectively ties together the motivations, challenges, and lasting impacts of exploration throughout history.',
    link: 'https://www.amazon.com/Historys-Greatest-Voyages-Exploration/dp/B00S4IJT1G',
    isbn: 'B00S4IJT1G'
  },
  {
    title: 'The Death of Cool',
    author: 'Gavin McInnes',
    description: 'A collection of autobiographical stories chronicling the author\'s experiences from young punk rocker to media company founder.',
    genre: ['Memoir', 'Humor', 'Biography'],
    status: 'Read',
    rating: 3,
    thoughts: 'A raw and unfiltered look at counterculture and media. The author\'s irreverent style and controversial perspectives provide an interesting window into a specific cultural moment.',
    link: 'https://www.amazon.com/Death-Cool-Selling-Out-Growing/dp/1451614187',
    isbn: '1451614187'
  },
  {
    title: 'Bad Astronomy',
    author: 'Philip Plait',
    description: 'A scientist\'s look at common misconceptions about space and astronomy, debunking myths while explaining fascinating astronomical phenomena.',
    genre: ['Science', 'Astronomy', 'Popular Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'An excellent blend of science education and myth-busting. Plait\'s clear explanations and enthusiasm for astronomy make complex concepts accessible and engaging.',
    link: 'https://www.amazon.com/Bad-Astronomy-Misconceptions-Revealed-Astrology/dp/0471409766',
    isbn: '0471409766'
  },
  {
    title: 'Undeniable',
    author: 'Bill Nye',
    description: 'A passionate defense of evolution and scientific thinking, addressing common misconceptions and explaining the evidence for evolution.',
    genre: ['Science', 'Biology', 'Popular Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'Nye brings his characteristic clarity and enthusiasm to explaining evolution. His arguments are well-structured and accessible while maintaining scientific rigor.',
    link: 'https://www.amazon.com/Undeniable-Evolution-Creation-Bill-Nye/dp/1250007135',
    isbn: '1250007135'
  },
  {
    title: 'The X-15 Rocket Plane',
    author: 'Michelle Evans',
    description: 'A detailed history of the X-15 program, featuring firsthand accounts from pilots and engineers who made the hypersonic research program possible.',
    genre: ['Aviation', 'Space', 'History'],
    status: 'Read',
    rating: 5,
    thoughts: 'An incredible deep dive into one of aviation\'s most ambitious programs. The personal accounts from test pilots and detailed technical information make this a must-read for space enthusiasts.',
    link: 'https://www.amazon.com/X-15-Rocket-Plane-Michelle-Evans/dp/0803228406',
    isbn: '0803228406'
  },
  {
    title: 'Sex at Dawn',
    author: 'Christopher Ryan, Cacilda Jethá',
    description: 'A provocative analysis of human sexuality that challenges conventional wisdom about monogamy and marriage by examining our evolutionary past.',
    genre: ['Science', 'Anthropology', 'Psychology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A thought-provoking examination of human sexuality through an evolutionary lens. While controversial, it presents compelling evidence that challenges traditional narratives.',
    link: 'https://www.amazon.com/Sex-Dawn-Stray-Modern-Relationships/dp/0061707813',
    isbn: '0061707813'
  },
  {
    title: 'The Pluto Files',
    author: 'Neil deGrasse Tyson',
    description: 'The story of Pluto\'s discovery, its cultural impact, and the controversy surrounding its demotion from planetary status, told with Tyson\'s characteristic wit.',
    genre: ['Science', 'Astronomy', 'Popular Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'An entertaining blend of astronomy and cultural history. Tyson makes the scientific debate about Pluto\'s status both accessible and engaging.',
    link: 'https://www.amazon.com/Pluto-Files-Rise-Fall-Americas/dp/0393337324',
    isbn: '0393337324'
  },
  {
    title: 'The Story of Philosophy',
    author: 'Will Durant',
    description: 'A comprehensive survey of Western philosophy through its greatest thinkers, making complex philosophical ideas accessible to the general reader.',
    genre: ['Philosophy', 'History', 'Biography'],
    status: 'Read',
    rating: 5,
    thoughts: 'Durant\'s gift for clear exposition makes difficult philosophical concepts approachable. His biographical approach helps contextualize each philosopher\'s ideas within their time.',
    link: 'https://www.amazon.com/Story-Philosophy-Opinions-Greatest-Philosophers/dp/0671739166',
    isbn: '0671739166'
  },
  {
    title: 'The Lessons of History',
    author: 'Will Durant, Ariel Durant',
    description: 'A distillation of the major themes and patterns observed by the Durants in their massive study of human civilization.',
    genre: ['History', 'Philosophy', 'Social Science'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterful synthesis of historical patterns and their implications. The Durants\' insights into the recurring themes of human history remain remarkably relevant.',
    link: 'https://www.amazon.com/Lessons-History-Will-Durant/dp/143914995X',
    isbn: '143914995X'
  },
  {
    title: 'A History of the English Language',
    author: 'Albert C. Baugh, Thomas Cable',
    description: 'A comprehensive examination of how English evolved from its Indo-European roots to its modern form, covering linguistic, historical, and social factors.',
    genre: ['Linguistics', 'History', 'Reference'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating journey through the development of English. The book effectively shows how historical events and cultural changes shaped our language.',
    link: 'https://www.amazon.com/History-English-Language-Albert-Baugh/dp/0415655966',
    isbn: '0415655966'
  },
  {
    title: 'The ONE Thing',
    author: 'Gary Keller, Jay Papasan',
    description: 'A guide to achieving extraordinary results by focusing on the single most important task that will drive the greatest results.',
    genre: ['Self-Help', 'Business', 'Productivity'],
    status: 'Read',
    rating: 4,
    thoughts: 'A powerful argument for radical prioritization. The concept of the focusing question and the domino effect of sequential achievements is particularly valuable.',
    link: 'https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776',
    isbn: '1885167776'
  },
  {
    title: 'The Vikings',
    author: 'Else Roesdahl',
    description: 'A comprehensive examination of Viking society, culture, and expansion, drawing on archaeological evidence and historical sources to present a complete picture of the Viking age.',
    genre: ['History', 'Medieval History', 'Archaeology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A scholarly yet accessible exploration of Viking civilization. The blend of archaeological findings and historical context provides a nuanced view beyond the common stereotypes.',
    link: 'https://www.amazon.com/Vikings-Revised-Else-Roesdahl/dp/0140252827',
    isbn: '0140252827'
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline',
    description: 'A science fiction novel set in a virtual reality world, combining 1980s pop culture nostalgia with a high-stakes treasure hunt in a dystopian future.',
    genre: ['Science Fiction', 'Adventure', 'Dystopian'],
    status: 'Read',
    rating: 4,
    thoughts: 'An engaging blend of nostalgia and futurism. The detailed virtual world and clever integration of pop culture references create an immersive reading experience.',
    link: 'https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/0307887448',
    isbn: '0307887448'
  },
  {
    title: 'Our Mathematical Universe',
    author: 'Max Tegmark',
    description: 'An exploration of how mathematics underlies our physical reality, from quantum mechanics to cosmic inflation, proposing that reality itself is a mathematical structure.',
    genre: ['Science', 'Physics', 'Cosmology'],
    status: 'Read',
    rating: 5,
    thoughts: 'A mind-expanding journey through modern physics and cosmology. Tegmark\'s mathematical multiverse hypothesis, while controversial, offers fascinating perspectives on reality\'s nature.',
    link: 'https://www.amazon.com/Our-Mathematical-Universe-Ultimate-Reality/dp/0307744256',
    isbn: '0307744256'
  },
  {
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    description: 'A collection of parables set in ancient Babylon that teach timeless principles of financial wisdom and personal wealth building.',
    genre: ['Finance', 'Self-Help', 'Business'],
    status: 'Read',
    rating: 4,
    thoughts: 'Simple yet profound financial wisdom presented through engaging parables. The ancient setting helps emphasize the timeless nature of these financial principles.',
    link: 'https://www.amazon.com/Richest-Man-Babylon-George-Clason/dp/1505339111',
    isbn: '1505339111'
  },
  {
    title: 'Wizard: The Life and Times of Nikola Tesla',
    author: 'Marc J. Seifer',
    description: 'A detailed biography of the brilliant and enigmatic inventor Nikola Tesla, exploring his revolutionary innovations, complex personality, and troubled life.',
    genre: ['Biography', 'Science', 'History'],
    status: 'Read',
    rating: 5,
    thoughts: 'A thorough and balanced biography that captures both Tesla\'s genius and his human complexities. The technical details of his innovations are particularly well-explained.',
    link: 'https://www.amazon.com/Wizard-Times-Nikola-Tesla-Biography/dp/0806539968',
    isbn: '0806539968'
  },
  {
    title: 'Lost at Sea',
    author: 'Jon Ronson',
    description: 'A collection of investigative essays exploring strange beliefs, mysterious disappearances, and the outer edges of normal human behavior.',
    genre: ['Journalism', 'Psychology', 'True Crime'],
    status: 'Read',
    rating: 4,
    thoughts: 'Ronson\'s unique blend of empathy and skepticism makes these unusual stories both compelling and insightful. His approach to fringe beliefs and extraordinary claims is particularly balanced.',
    link: 'https://www.amazon.com/Lost-Sea-Jon-Ronson-Mysteries/dp/1594631956',
    isbn: '1594631956'
  },
  {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    description: 'A science fiction masterpiece about a gifted child trained in military strategy to defend Earth against an alien threat, exploring themes of leadership, morality, and the nature of war.',
    genre: ['Science Fiction', 'Military Fiction', 'Young Adult'],
    status: 'Read',
    rating: 5,
    thoughts: 'A brilliant exploration of strategy, ethics, and leadership through the lens of a child soldier. The psychological depth and strategic elements are particularly compelling.',
    link: 'https://www.amazon.com/Enders-Game-Ender-Quintet-Book/dp/0812550706',
    isbn: '0812550706'
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A groundbreaking exploration of the two systems that drive the way we think: the fast, intuitive, and emotional system; and the slow, deliberative, and logical system.',
    genre: ['Psychology', 'Behavioral Economics', 'Science'],
    status: 'Read',
    rating: 5,
    thoughts: 'A masterful examination of human decision-making. Kahneman\'s insights into cognitive biases and decision processes are both fascinating and practically applicable.',
    link: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
    isbn: '0374533555'
  },
  {
    title: 'Mastery',
    author: 'Robert Greene',
    description: 'An examination of the lives of historical masters across various fields to discover the universal path to expertise and achievement.',
    genre: ['Self-Help', 'Psychology', 'Biography'],
    status: 'Read',
    rating: 4,
    thoughts: 'Greene\'s analysis of historical masters provides valuable insights into the journey to expertise. The combination of historical examples and practical principles is particularly effective.',
    link: 'https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X',
    isbn: '014312417X'
  },
  {
    title: 'Red Moon Rising',
    author: 'Matthew Brzezinski',
    description: 'A detailed account of the space race between the United States and Soviet Union, focusing on the development of Sputnik and its impact on the Cold War.',
    genre: ['History', 'Space', 'Cold War'],
    status: 'Read',
    rating: 4,
    thoughts: 'A riveting history of the early space race. Brzezinski captures both the technical challenges and the political tensions that drove this pivotal moment in history.',
    link: 'https://www.amazon.com/Red-Moon-Rising-audiobook/dp/B000W7E5DY',
    isbn: '9780805081473'
  },
  {
    title: 'The Men Who Stare at Goats',
    author: 'Jon Ronson',
    description: 'An investigation into the U.S. military\'s exploration of psychic abilities and psychological warfare, revealing bizarre experiments and programs.',
    genre: ['Non-Fiction', 'Military History', 'Journalism'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating look at the intersection of military ambition and fringe science. Ronson\'s humorous yet respectful approach makes the strange subject matter both credible and entertaining.',
    link: 'https://www.amazon.com/Men-Who-Stare-Goats/dp/1451665970',
    isbn: '9781439181775'
  },
  {
    title: 'Hell\'s Angels',
    author: 'Hunter S. Thompson',
    description: 'A firsthand account of Thompson\'s experiences riding with the Hell\'s Angels motorcycle club, offering an inside look at the notorious organization.',
    genre: ['Journalism', 'Biography', 'True Crime'],
    status: 'Read',
    rating: 4,
    thoughts: 'Thompson\'s immersive journalism provides a raw and unfiltered look at counterculture. His unique writing style and personal involvement create a vivid portrait of the motorcycle club.',
    link: 'https://www.amazon.com/Hells-Angels-Strange-Terrible-Saga/dp/0345410084',
    isbn: '0345410084'
  },
  {
    title: 'The Psychopath Test',
    author: 'Jon Ronson',
    description: 'An exploration of the mental health industry and the nature of psychopathy, investigating how we define and diagnose mental illness.',
    genre: ['Psychology', 'Non-Fiction', 'Journalism'],
    status: 'Read',
    rating: 4,
    thoughts: 'Ronson\'s journey through the world of mental health diagnosis is both entertaining and thought-provoking. His investigation raises important questions about how we categorize mental illness.',
    link: 'https://www.amazon.com/Psychopath-Test-Journey-Through-Industry/dp/1594485755',
    isbn: '1594485755'
  },
  {
    title: 'Going Clear',
    author: 'Lawrence Wright',
    description: 'An in-depth investigation into the Church of Scientology, examining its history, practices, and controversies through extensive research and interviews.',
    genre: ['Religion', 'Investigative Journalism', 'History'],
    status: 'Read',
    rating: 5,
    thoughts: 'A meticulously researched exposé that maintains objectivity while revealing disturbing truths. Wright\'s balanced approach makes the controversial subject matter even more compelling.',
    link: 'https://www.amazon.com/Going-Clear-Scientology-Hollywood-Prison/dp/0307745309',
    isbn: '0307745309'
  },
  {
    title: 'The Four Pillars of Investing',
    author: 'William Bernstein',
    description: 'A comprehensive guide to investment strategy, covering theory, history, psychology, and business aspects of investing.',
    genre: ['Finance', 'Investment', 'Economics'],
    status: 'Read',
    rating: 5,
    thoughts: 'An excellent foundation for understanding investment principles. Bernstein\'s systematic approach and historical perspective provide valuable context for making informed investment decisions.',
    link: 'https://www.amazon.com/Four-Pillars-Investing-Building-Portfolio/dp/0071747052',
    isbn: '0071747052'
  },
  {
    title: 'The Black Swan',
    author: 'Nassim Nicholas Taleb',
    description: 'An examination of rare, improbable events and their massive impact on history, economics, and science, challenging how we think about uncertainty and randomness.',
    genre: ['Economics', 'Philosophy', 'Psychology'],
    status: 'Read',
    rating: 5,
    thoughts: 'A profound analysis of uncertainty and our cognitive biases. Taleb\'s insights about rare events and their impact have become even more relevant in our increasingly complex world.',
    link: 'https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X',
    isbn: '081297381X'
  },
  {
    title: 'Moonwalking with Einstein',
    author: 'Joshua Foer',
    description: 'A journey into the art and science of memory, following the author\'s preparation for the U.S. Memory Championship while exploring the history and techniques of memorization.',
    genre: ['Science', 'Psychology', 'Memoir'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating blend of memory science and personal journey. Foer\'s exploration of memory techniques and their practical applications is both educational and entertaining.',
    link: 'https://www.amazon.com/Moonwalking-Einstein-Science-Remembering-Everything/dp/0143120530',
    isbn: '0143120530'
  },
  {
    title: 'Kill Decision',
    author: 'Daniel Suarez',
    description: 'A techno-thriller about autonomous weapons systems and artificial intelligence, exploring the implications of delegating lethal decisions to machines.',
    genre: ['Science Fiction', 'Thriller', 'Technology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A gripping exploration of autonomous weapons and AI ethics. Suarez combines technical accuracy with fast-paced storytelling to create a thought-provoking thriller.',
    link: 'https://www.amazon.com/Kill-Decision-Daniel-Suarez/dp/0451417704',
    isbn: '0451417704'
  },
  {
    title: 'In Defense of Food',
    author: 'Michael Pollan',
    description: 'An examination of the Western diet and its relationship with nutrition science, advocating for a more traditional approach to eating: "Eat food. Not too much. Mostly plants."',
    genre: ['Health', 'Food', 'Science'],
    status: 'Read',
    rating: 4,
    thoughts: 'Pollan presents a compelling critique of nutritionism and processed foods. His simple dietary advice and historical perspective on food culture are particularly valuable.',
    link: 'https://www.amazon.com/Defense-Food-Eaters-Manifesto/dp/0143114964',
    isbn: '0143114964'
  },
  {
    title: 'Freedom™',
    author: 'Daniel Suarez',
    description: 'The sequel to Daemon, continuing the story of an automated world-changing program, exploring themes of technological autonomy and societal transformation.',
    genre: ['Science Fiction', 'Thriller', 'Technology'],
    status: 'Read',
    rating: 4,
    thoughts: 'A worthy sequel that expands on the technological and social themes of Daemon. Suarez\'s vision of a technology-driven societal transformation is both fascinating and plausible.',
    link: 'https://www.amazon.com/Freedom-TM-Daniel-Suarez/dp/0451231899',
    isbn: '0451231899'
  },
  {
    title: 'Daemon',
    author: 'Daniel Suarez',
    description: 'A techno-thriller about an AI program that activates upon its creator\'s death, initiating a chain of events that threatens to reshape society.',
    genre: ['Science Fiction', 'Thriller', 'Technology'],
    status: 'Read',
    rating: 5,
    thoughts: 'An innovative and technically accurate thriller that predicted many current technological trends. The blend of gaming culture, AI, and societal change is masterfully executed.',
    link: 'https://www.amazon.com/Daemon-Daniel-Suarez/dp/0451228731',
    isbn: '0451228731'
  },
  {
    title: 'Dirt',
    author: 'David R. Montgomery',
    description: 'A scientific and historical exploration of soil\'s role in civilization, examining how soil management has influenced the rise and fall of societies.',
    genre: ['Science', 'History', 'Environment'],
    status: 'Read',
    rating: 4,
    thoughts: 'A fascinating look at the crucial role of soil in human civilization. Montgomery effectively demonstrates how soil health directly correlates with societal sustainability.',
    link: 'https://www.amazon.com/Dirt-Erosion-Civilizations-David-Montgomery/dp/0520272900',
    isbn: '0520272900'
  }
];

// Combine all books
export const books: Book[] = [
  ...currentlyReadingBooks,
  ...readBooks
];

export type { Book };
