
module Abilities 
  Ability.destroy_all

  # 5th Edition
  # Core Rule Book
  area_lore = Ability.create!(name: "(Area) Lore",
  description: "Knowledge of one particular region, covenant, or even a village. It includes knowing where things are in the immediate area, local history and legends, and the centers of power in the region. The smaller the region, the more detailed your knowledge. Specialties: geography, history, legends, politics, personalities.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  animal_handling = Ability.create!(name: "Animal Handling",
  description: "Care and use of animals, including raising, tending, grooming, and healing them. Specialties: falconry, specific animals.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  animal_ken = Ability.create!(name: "Animal Ken",
  description: "You can communicate with animals as if they were human beings. Treat your score in Animal Ken as your score in a language that the animal speaks fluently in order to determine how well you can communicate, and you can use Animal Handling as a substitute for any social abilities affecting humans. Beyond this, this virtue has no effect on the attitude of animals to you, or you to animals. Other people cannot understand your communication with the animals. Specialties: a particular type of animal, a particular type of communication.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  artes_liberales = Ability.create!(name: "Artes Liberales",
  description: "The seven artes liberales, or liberal arts, are the basis of medieval higher education. Everyone learns them at the universities before passing on to study other subjects. It would be very rare for a character to have a score in any other Academic Knowledge without a score of at least one in this.
  The artes liberales are divided into two groups: the Trivium (grammar, logic, and rhetoric) and the Quadrivium (arithmetic, geometry, astronomy, and music). The emphasis at this period is on the Trivium, but both are taught. (Note that Artes Liberales as a whole is one Skill, not seven separate ones.)
  Grammar concerns theoretical questions of the structure of languages, rather than the ability to use a specific language (that is covered by Speak skills). The authorities are Priscian and Donatus. Logic is the study of the syllogism, and other forms of reasoning discussed by Aristotle. It is the most important of the arts at this period. Aristotle is the authority, in his logica vetus and logica nova. Rhetoric is the study of the theory of rhetorical forms: knowledge of the sort of tricks that an orator can use, rather than the ability to use them. The authority is Cicero, especially his De Inventione.
  Arithmetic is the ability to add and subtract, multiply and divide. The authority is Boethius, De arithmetica. Geometry is concerned with study of plane and solid figures, and the authority is Euclid, in his Elementa. It also deals with the study of light, and Euclid’s Optica is the authority here. Astronomy is concerned with predicting the positions of the stars and planets, and the authority is Ptolemy, in the Libri Almagesti. Music is purely theoretical, the study of proportions and musical theory, not the ability to sing or play an instrument. The authority is Boethius, in De Musica.
  Artes Liberales also covers the ability to read and write. For every point in the Ability, the character can read and write one writing system, providing that he knows a language which normally uses that system: the Latin alphabet, the Greek alphabet, the Arabic alphabet, and so on. Specialties: grammar, logic, rhetoric, arithmetic, geometry, astronomy, music, Ritual magic, Ceremonial magic.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  athletics = Ability.create!(name: "Athletics",
  description: "General physical prowess. It includes moving smoothly, confidently, and with grace. Use of Athletics improves most large-muscle coordination. Specialties: acrobatics, contortions, grace, jumping, running.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  awareness = Ability.create!(name: "Awareness",
  description: "Noticing things, be they things you are looking for or things that you are not expecting. It is also used to see how alert you are in circumstances that require watchfulness. Specialties: bodyguarding, keeping watch, alertness, searching.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  bargain = Ability.create!(name: "Bargain",
  description: "The know-how to get the greatest return for a service or product, while paying the least. It involves reading the person with whom you haggle, a general knowledge of the value of goods, and presenting yourself in certain ways. A good haggler can easily overcome resistance in an inexperienced customer and see through attempts to over-value most merchandise. Specialties: specific types of products, hard sell.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  bows = Ability.create!(name: "Bows",
  description: "Using bows and arrows. Specialties: any one weapon.",
  book: "Core",
  ability_type: "Martial",
  unlearned_usable: true)

  brawl = Ability.create!(name: "Brawl",
  description: "Fighting hand-to-hand without weapons, or with the sorts of improvised weapons you just pick up, including knives. Brawl is also the Ability used to dodge attacks if you have no Martial Abilities. Specialties: punches, grapples, knives, dodging.",
  book: "Core",
  ability_type: "Martial",
  unlearned_usable: true)

  carouse = Ability.create!(name: "Carouse",
  description: "The ability to enjoy oneself without suffering adverse effects. A person with this skill can, for example, consume prodigious amounts of alcohol without passing out. The skill also covers a familiarity with acceptable behavior, balancing enjoyment and moderation. With this Skill, a person is able to have fun and gain friends among the lower classes nearly anywhere, even among those of a different culture. Specialties: power drinking, drinking songs, games of chance, staying sober.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  charm = Ability.create!(name: "Charm",
  description: "Enticing, fascinating, and endearing others to you, but only on a personal basis. It can be used to win someone over emotionally, especially members of the opposite sex. Specialties: courtly love, first impressions, being witty.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  chirurgy = Ability.create!(name: "Chirurgy",
  description: "This is Middle Ages-style surgery, used to help others recover from physical damage. It encompasses tending and binding wounds of all varieties, and the necessary but brutal skill of cauterization. See “Wounds” starting on page 178 for rules. Specialties: cauterization, diagnosis, binding wounds, setting bones.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  civil_and_canon_law = Ability.create!(name: "Civil and Canon Law",
  description: "Civil Law is the law of the Roman Empire. Most local legal systems are based upon it (England being the notable exception), and when a law is needed to govern international relations, Civil Law is appealed to. The authority is Justinian’s Digest. Canon Law is the law of the Church. It is important to Mythic Europe as it applies in all nations, governing the working of the church and some other areas, such as marriage. It is important to note that members of the clergy are only subject to Canon Law, not customary or Civil Law. Most high churchmen are skilled canonists, not theologians. Canon Law is made by Papal bulls (pronouncements), but the authority is Gratian, in his Decretum. This skill covers the knowledge of both types of law. Other religions, particularly Judaism and Islam, have their own versions of this Ability, which must be learned separately. Specialties: laws and customs of a specific area, papal laws.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  code_of_hermes = Ability.create!(name: "Code of Hermes",
  description: "Judging events according to the Code of Hermes and the Peripheral Code. In addition to memorizing important precedents, this knowledge includes the practical side of enforcing Hermetic law — for example, knowing when to push for a vote or how to present an argument. Specialties: Wizards’ Marches, apprentices, mundane relations, Tribunal procedures, political intrigue.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  common_law = Ability.create!(name: "Common Law",
  description: "Knowledge of the laws of England. There is no authority for this Ability, and it is only taught in England. Specialties: local laws, exchequer laws.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  concentration = Ability.create!(name: "Concentration",
  description: "Focusing your mental faculties on one task, particularly for extended periods of time. If you are attempting a feat that demands your extra attention, or if you have just failed an action and are trying again, the storyguide can call for a Concentration roll before you can make the attempt. This Ability is especially important for magi because it helps them maintain concentration on spells despite distractions. Specialties: spell concentration, reading, lab work.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  craft = Ability.create!(name: "Craft (Type)",
  description: "A general term for countless Abilities, all dealing with handiwork of some type. In general, Craft Abilities are distinguished by the material they work with, although you may also take a Craft Ability that allows the character to work with several materials in one specific way. You may purchase Craft more than once, choosing a different one each time. Skill in one Craft does not imply skill in any others. Specialties: as appropriate to the craft.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  dead_language = Ability.create!(name: "(Dead Language)",
  description: "This skill is similar to all other (Language) Abilities, but it is only available to educated characters. It grants the ability to speak a language which is no longer used as a native language. The most important example is Latin. All educated characters in the West know Latin, since without it you cannot learn any Academic Knowledges. It is also the common language of the Church and Order of Hermes. In other areas of the world, Arabic, Greek and Hebrew fill similar functions, although of these only Hebrew is a dead language. Specialties: academic usage, Church ceremonies, Hermetic usage.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  dominion_lore = Ability.create!(name: "Dominion Lore",
  description: "Knowledge of the manifestations of the power of the Divine. Different from Church Lore (a kind of (Organization) Lore)) because it covers miracles rather than politics, and different from Theology because it is concerned with power rather than doctrine. Specialties: angels, saints, Divine creatures.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  dowsing = Ability.create!(name: "Dowsing",
  description: "You have the ability to find things nearby through the use of a dowsing rod (usually a forked stick) and your own intuitive sense. You concentrate on the thing to be found, hold your dowsing rod out in front of you, and follow its subtle motions to the target. If you’re looking for something specific, you must have an appropriate sympathetic connection to the thing sought (such as bottled water from a stream when searching for running water). Before you roll, designate the area in which you are searching — if the item sought is not present in that area, you automatically fail. The time required to search depends on the size of the area, and must be invested whether you succeed or not. It takes about one Diameter (two minutes, or twenty combat rounds) to search for something within 25 paces, and doubling the distance quadruples the time. To find something common, like water, within 25 paces requires a Perception + Dowsing of 9+. Increased distances or dowsing for less common things increases the target number, so that, for example, finding gold within 100 paces would have an Ease Factor of 15. Specialties: searching for a particular kind of thing (water, gold, etc.), searching in a particular kind of place.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  enchanting_music = Ability.create!(name: "Enchanting Music",
  description: "When you set your mind to it, you can influence others with your music. For a specific effect, you must sing words that people can understand. You can calm the grieving with tunes alone, but you need lyrics to convince peasants to rise up against the local lord. General effects work on animals, but specific effects only work on creatures that can understand words. When you use Enchanting Music, roll a die (stress or simple, depending on the situation) and add Communication and Enchanting Music. An Ease Factor of 9+will calm the upset, 12 will win someone’s love, 15 will incite a riot, and a 24 might win back a soul from the Prince of Darkness. If you botch, you inspire an unwanted emotion.
  If the target has Magic Resistance, you must penetrate their resistance; see page 184 for rules.
  You should also roll for the quality of the musical performance, but the magical effect is independent of this, unless you botch. If you do botch the Music roll, you have failed to produce any music for some reason, and so the Supernatural Ability automatically fails. Specialties: a particular emotion, a particular sort of person.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  entrancement = Ability.create!(name: "Entrancement",
  description: "You have the power to control another’s will. By staring deeply into someone’s eyes for several seconds — generally impossible in combat — you can verbally command the person to perform a certain task. Roll Presence + Entrancement against the target’s Stamina roll. The person being controlled may get a bonus to resist at the option of the storyguide, according to the table below. Hermetic magi get their normal Mentem Magic Resistance, and get the normal Stamina roll if the effect penetrates. The blind, and people with their eyes closed, are immune; see page 111 for more guidelines on making eye contact. However, it is not possible to look away while being Entranced unless you win the opposed roll.
  Command         Example                   Victim's Bonus
  Innocuous       Talk to me                +3
  Questionable    Meet me alone at night    +6
  Dangerous       Put your weapons away     +9
  Heinous         Kill your fellows         +12
  Suicidal        Jump off a cliff          +15

  Specialties: A specific sort of person.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  etiquette = Ability.create!(name: "Etiquette",
  description: "You know the social graces and how to behave in different situations. Etiquette differs from Charm in that Etiquette covers proper behavior, rather than charming behavior. You cannot seduce someone with Etiquette, but neither can you get through an audience with the bishop on Charm alone. Specialties: nobility, court, peasants, faeries, the Church.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  faerie_lore = Ability.create!(name: "Faerie Lore",
  description: "Familiarity with faerie powers, weaknesses, motivations, and areas. Specialties: faerie forests, faerie mounds, specific types of faeries.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  finesse = Ability.create!(name: "Finesse",
  description: "Manipulating your spells and performing special feats with them. You would use this Ability to position objects delicately or to target spells. Specialties: grace, precision, any one Form.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: true)

  folk_ken = Ability.create!(name: "Folk Ken",
  description: "Understanding the background, personality, and motives of another person. Often the storyguide secretly rolls a die when this Ability is used. Thus, you do not know if your character guessed correctly, or even botched. Specialties: peasants, townsfolk, nobles, clergy, magi, the opposite sex.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  great_weapon = Ability.create!(name: "Great Weapon",
  description: "Fighting with a weapon which requires two hands to use. Specialties: any one weapon.",
  book: "Core",
  ability_type: "Martial",
  unlearned_usable: true)

  guile = Ability.create!(name: "Guile",
  description: "Telling convincing lies, as well as feigning emotion, belief, or frame of mind. If you understand the person you are attempting to deceive (roll 9+ on Perception + Folk Ken), you gain a bonus of +1 to your Guile roll. This Ability also covers disguising yourself, and pretending to be something you are not. It is often an opposed roll, against the victim’s Perception + Folk Ken or, for disguise, Perception + Awareness. Specialties: particular sorts of deception, lying to authority, fast talk, elaborate lies.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  hunt = Ability.create!(name: "Hunt",
  description: "Setting snares, choosing appropriate hunting spots, and following and identifying the spoor of creatures of all varieties. This Ability also lets you cover your tracks or not leave any in the first place. Specialties: tracking, covering tracks, hunting a specific animal.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  infernal_lore = Ability.create!(name: "Infernal Lore",
  description: "An understanding and familiarity with the sinister side of the world, primarily the Infernal and its agents. Includes knowledge of demons and their habits and weaknesses, undead and their habits and weaknesses, and the power of curses. Specialties: demons, undead, curses.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  intrigue = Ability.create!(name: "Intrigue",
  description: "Dealing and plotting, including subtle use of power in non-confrontational ways to achieve your own ends. Intrigue need not be underhanded or manipulative — it also covers negotiations and knowledge of formal and informal rules of conduct and politeness. In addition, Intrigue also allows a character to pick up important information about those in power, separating fact from useless gossip. Intrigue is a vital talent for those who frequent court or a Hermetic Tribunal. Specialties: gossip, plotting, rumormongering, alliances.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  leadership = Ability.create!(name: "Leadership",
  description: "Getting people to obey your orders and to follow you. Can also be used to inspire fear in others, cowing them into submission. Specialties: intimidation, in combat, inspiration.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  legerdemain = Ability.create!(name: "Legerdemain",
  description: "Sleight of hand and knowledge of confidence games requiring sleight of hand. It requires a delicate touch and great hand-eye coordination. Legerdemain includes filching things from market stalls, cutting purses, and picking such locks as there are, as well as the “magical” trickery often used to raise money from credulous folk. The target of an attempt rolls Perception + Awareness to detect your actions. If the perceiver has Legerdemain skill, he may substitute that for Awareness if he wishes. On particularly delicate moves such as picking pockets, someone trying to spot the character using Legerdemain receives a +3 bonus. Specialties: filching, picking pockets, “magic” tricks.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  living_language = Ability.create!(name: "(Living Language)",
  description: "Fluency in a particular living language. Rather than a die roll modifier, your score in this Knowledge measures your ability to communicate.
  Score   Fluency
  0       Point and grunt. With one or more experience points, you know “please,” ”thank you,” and a few other words.
  1       Basic questions and answers: “Where is the church?,” “Do you sell food?” Constant mistakes, and an atrocious accent. People must speak slowly and often repeat themselves, and you cannot string a conversation together.
  2       Basic conversation. You can sustain a short conversation on a common topic. You still make many mistakes, and often fail to catch what others say.
  3       Haltingly functional. You can hold a conversation on everyday topics, although it takes time, you make many mistakes, and your accent is still bad.
  4       Functional. You can hold a conversation on non-technical topics, and make few mistakes. People do not normally need to repeat themselves. This is the minimum level required to study from a book.
  5       Fluent. You still have an accent if this is not your native language, but it is weak. You speak as well as most natives. This is the minimum level required to write a book.
  6       Elegant. You choose your words well, and have no accent if this is not your native language.
  
  When two people speak to each other, the lower Ability score determines how well they communicate. Characters who speak related languages can communicate at a penalty to their scores (assigned by the storyguide) depending on how closely related the two languages are.
  Note that Latin and Hebrew are not living languages in most of Mythic Europe. However, characters who live in places where they are (such as some covenants) may learn this Ability without any special Virtues.
  Characters with this Ability are illiterate unless they also have a score in Artes Liberales (page 62).
  This Ability also covers artistic compositions in the language, and telling existing tales with verve and passion. Knowledge of stories is covered by the appropriate Lore Abilities. Specialties: poetry, prose, specific dialects, expansive vocabulary, specific technical vocabulary, slang, storytelling.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  magic_lore = Ability.create!(name: "Magic Lore",
  description: "Knowledge of magical creatures, areas, and traditions. Specialties: creatures, magical traditions, regiones.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  magic_sensitivity = Ability.create!(name: "Magic Sensitivity",
  description: "You are often able to identify a place or object as magical. However, your sensitivity makes you more susceptible to magical effects: subtract your Magic Sensitivity score from all magic resistance rolls you make. When attempting to sense the magic nature of a place or object, the storyguide will assign an Ease Factor — simply roll a simple die + Perception + Magic Sensitivity.
  Detecting a Magic aura would normally have an Ease Factor equal to 12 – aura level, so 9foralevel3auraand6foralevel6aura.
  For spells and enchanted items, an Ease Factor equal to 21 – magnitude of effect is a good guide. For enchanted items, use the magnitude of the most powerful effect in the item.
  For magical creatures, 15 – one fifth of the creature’s Magic Might is appropriate, so for a creature with a Magic Might of 25, the Ease Factor would be 10.
  Specialties: auras, magical creatures, enchanted items, active spells.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  magic_theory = Ability.create!(name: "Magic Theory",
  description: "Knowledge of what magic is and how it works, used primarily in the laboratory. Magic Theory deals with the technical details of Hermetic magic; Magic Lore covers knowledge of magical things in general. Anyone can learn Magic Theory, if they have access to a teacher or book (normally represented by a Virtue), but it is little use to those without The Gift. Specialties: inventing spells, enchanting items, a single Art.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  medicine = Ability.create!(name: "Medicine",
  description: "Medicine is the formal study of the body and its diseases. Medical practice is based on the theory of the four humors: blood, phlegm, yellow bile, and black bile. Diseases are believed to be caused by imbalances among them, hence such practices as bloodletting, to restore the balance. Medicine also deals with treating poisons and the results of starvation and the like, but not with treating wounds (see “Chirurgy,” above). The authorities are Galen and Hippocrates, in many works. Specialties: anatomy, apothecary, physician.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  music = Ability.create!(name: "Music",
  description: "The ability to sing, play musical instruments, and compose new music. Specialties: sing, compose, any one instrument.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  organization_lore = Ability.create!(name: "(Organization) Lore",
  description: "Knowledge of the legends, history, structure, operation, and goals of the specified organization. Organizations can be as large as the Church, or as small as a local craft guild. The smaller the organization, the more detailed your knowledge. Specialties: personalities, history, politics.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: false)

  parma_magica = Ability.create!(name: "Parma Magica",
  description: "Protection from magic. This is a special ritual (not a ritual spell) that takes about two minutes to perform. It lets you add 5 times your Parma Magica score to your magic resistance until the next sunrise or sunset, whichever comes first. You may suppress your Parma Magica temporarily by concentrating; this is equivalent to sustaining a Concentration duration spell. (See page 82). Parma Magica does not require concentration while it is active.
  You may also protect one other person for each point in Parma Magica, with their consent. You must touch each person to start the protection, and it lasts as long as at least one character can see the other. The magus may cancel the protection at will, at any distance. While a magus is protecting others, his effective Parma Magica score is reduced by 3 points, both for himself and for the other people he is protecting. If the magus has a Parma Magica score of 3 or lower, his Parma Magica provides each character, including himself, with a Magic Resistance of 0. In the magus’s case, this is added to his Form resistance, and a magus protected by another magus’s Parma Magica may also add his Form resistance.
  Parma Magica can only be learned by Gifted characters, although they learn it as a normal Arcane Ability, not a Supernatural Ability. It is only known by Hermetic magi, as the Order enforces the “Join or Die” choice rigorously on anyone who knows it, as well as declaring a Wizard’s March on the magus who taught it. Parma Magica is the last thing an apprentice learns, being taught the final key to the Ability after he swears the Oath. Specialties: protection from any specific Form.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: false)

  penetration = Ability.create!(name: "Penetration",
  description: "Getting your spell through the target’s Magic Resistance. See page 82 for detailed Penetration rules. Specialties: any one Art.",
  book: "Core",
  ability_type: "Arcane",
  unlearned_usable: true)

  philosophiae = Ability.create!(name: "Philosophiae",
  description: "There are three philosophies — natural philosophy, moral philosophy, and metaphysics. Aristotle is the authority for all of them, in different books. Most scholars study the philosophies after the Arts but before going on to Law, Theology or Medicine. Natural phi losophy is the study of the sub-lunar world. It roughly corresponds to today’s science. The main texts are the Physica, De Meteorologia, and De historia animalium. Moral philosophy is the study of the proper way of human life. It covers ethics, politics, and economics — the texts are the Ethica, Politica, and Economica. Metaphysics is the philosophy of the fundamental nature of the world. The main text is Aristotle’s Metaphysica. Specialties: natural philosophy, moral philosophy, metaphysics, Ritual magic, Ceremonial magic.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  premonitions = Ability.create!(name: "Premonitions",
  description: "You intuitively sense whenever something is wrong, or is likely to go wrong soon. This Ability can be called upon by you or the storyguide, as appropriate, whenever there is a chance to avoid danger. Roll Perception + Premonitions against an Ease Factor depending on the situation. The Ease Factor starts at 3 for imminent, mortal peril, and increases as the distance in time increases and the level of danger decreases. Mortal peril a week in the future would have an Ease Factor of 9, while an imminent minor inconvenience would have an Ease Factor of about 15. If you beat the Ease Factor by 3 or more, you also get some sense of the nature of the danger, with more detail if you roll more highly. Specialties: threats to a particular person or group of people, particular kinds of threats.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  profession = Ability.create!(name: "Profession",
  description: "The ability to do a job which does not involve making something. Examples include jongleur, reeve, sailor, steward, teamster, and washerwoman. Specialties depend on the profession.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  ride = Ability.create!(name: "Ride",
  description: "Riding and controlling a horse, especially under stress. Specialties: battle, speed, tricks.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  second_sight = Ability.create!(name: "Second Sight",
  description: "You are able to see through illusionary concealment and disguise, including invisibility, and can also see naturally invisible things such as spirits and the boundaries between regio levels. The Ease Factor to see through illusionary concealment is normally equal to 6 + the magnitude of the might of the creature responsible for the effect, or 6 + the magnitude of a Hermetic spell. In general, this Virtue allows you to see through Hermetic Imaginem concealment, but not other kinds. The Magic Resistance, if any, of the concealed creature does not interfere with your Second Sight. If something is actually transformed, for example by a MuCo spell, you cannot determine the genuine form. The Ease Factor to see a naturally invisible thing is normally 9, and the Ease Factor for seeing regio levels is specified on page 189. All Second Sight rolls are Perception + Second Sight. Specialties: regiones, invisible things, illusory disguises, faeries, ghosts.",
  book: "Core",
  ability_type: "Supernatuaral",
  unlearned_usable: false)

  sense_holiness_and_unholiness = Ability.create!(name: "Sense Holiness and Unholiness",
  description: "You are able to feel the presence of good and evil. A Perception + Sense Holiness and Unholiness roll against an Ease Factor of 9 lets you sense holiness or unholiness in a general area; against an Ease Factor of 15, in a person or object. As demons normally try to hide their nature, you must generally beat their Magic Resistance with your roll. However, you only need to beat it by 1 point, as demons are extremely evil. Emissaries of heaven rarely try to hide their nature, but if they do, you must actually penetrate their Magic Resistance (see page 184). In auras of particularly strong divine or infernal influence, your sensitivity may overwhelm you. This Ability is granted by the Divine realm, not the Magic or Faerie realms, and thus uses the Divine column of the Realm Interaction chart (page 183). Specialties: good or evil.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  shapeshifter = Ability.create!(name: "Shapeshifter",
  description: "You may change your shape into that of a mundane animal from the size of a robin (–5) to that of a bear (+2). This requires a few seconds’ (one round’s) concentration, and a roll of Stamina + Shapeshift against an Ease Factor of 9. Changing back to human form requires the same concentration, and the same roll.
  You have a limited repertoire of shapes, one for every point you have in the Shapeshift ability. Every time you raise the Ability by one point, you may choose a new shape.
  Specialties: One of your shapes, particular conditions for the change.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

  single_weapon = Ability.create!(name: "Single Weapon",
  description: "Fighting with a weapon used in one hand, possibly using a shield with the other. This includes lances used as intended from horseback. Specialties: any one weapon or shield, which covers using that weapon with any shield or none, and that shield with any weapon.",
  book: "Core",
  ability_type: "Martial",
  unlearned_usable: true)

  stealth = Ability.create!(name: "Stealth",
  description: "Sneaking about without being seen or heard, also hiding in one place. This includes following people without their noticing, which is rolled against the other person’s Perception. Specialties: hide, sneak, shadowing, urban areas, natural areas.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  survival = Ability.create!(name: "Survival",
  description: "Finding food, water, shelter, a direct route, and relative safety in the wilderness (a very dangerous place in Mythic Europe). This Ability covers such mundane tasks as building a fire and cooking food without implements. Specialties: specific locales.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  swim = Ability.create!(name: "Swim",
  description: "The ability to propel yourself through water quickly and efficiently. Specialties: long distances, diving, underwater maneuvering.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  teaching = Ability.create!(name: "Teaching",
  description: "The ability to teach an Ability to someone else. Specialties: a particular Ability, particular kinds of student.",
  book: "Core",
  ability_type: "General",
  unlearned_usable: true)

  theology = Ability.create!(name: "Theology",
  description: "Theology is the study of God and his work in the world. The authorities are the Bible and Peter the Lombard’s Sententiae, the Bible having theoretical primacy, being infallible, and the Sentences being most studied. The speculations of theology are very abstruse, and many theologians are accused of heresy. Sometimes those accused recant, and sometimes they convince the Church that they were right after all. Theology can also be purchased (as a separate Ability) for other religions like Islam and Judaism. Specialties: biblical knowledge, heresy, history.",
  book: "Core",
  ability_type: "Academic",
  unlearned_usable: false)

  thrown_weapon = Ability.create!(name: "Thrown Weapon",
  description: "Fighting at range using weapons which are thrown. Specialties: any one weapon.",
  book: "Core",
  ability_type: "Martial",
  unlearned_usable: true)

  wilderness_sense = Ability.create!(name: "Wilderness Sense",
  description: "You are mystically attuned to the ways of the wilderness. A Perception + Wilderness Sense roll against an Ease Factor of 9 lets you determine the direction of north, the upcoming weather, or the presence of natural hazards or resources. One roll will only reveal one piece of information. Specialties: direction, weather, hazards, resources.",
  book: "Core",
  ability_type: "Supernatural",
  unlearned_usable: false)

end