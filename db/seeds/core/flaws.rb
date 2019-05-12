
module Flaws
  Flaw.destroy_all

  # 5th Edition
  # Core Rule Book
  ability_block = Flaw.create!(name: "Ability Block",
    description: "You are completely unable to learn a cer- tain class of Abilities, for some reason. This may be Martial Abilities, or a more limited set of the others. A profound inability to master logic would rule out Artes Liberales, Philosophiae, any Law, Medicine, and Theology. Alternatively, you might be unable to learn any languages other than your native tongue. It must be possible for your character to learn the abilities in question, but she need have no intention of doing so. You may only take this Flaw once.",
    book: "Core",
    flaw_type: "General",
    major: false)

  afflicted_tongue = Flaw.create!(name: "Afflicted Tongue",
    description: "You have a speech impediment, such as a lisp, stutter, or missing teeth. You suffer a –2 to all rolls involving the voice. If you are a magus, you must also roll an extra botch die when cast- ing a spell using words.",
    book: "Core",
    flaw_type: "General",
    major: false)

  age_quickly = Flaw.create!(name: "Age Quickly"),
    descrtiption: "Probably due to a curse or a magical disas- ter, you age twice as fast as normal people. Your effective age (which applies as if it were your actual age when creating a Longevity Ritual, and when making rolls on the Aging table) increases two years for every year that passes, and you make two aging rolls each year. There is no way to halt or slow this other than Longevity Rituals.",
    flaw_type: "Supernatural",
    book: "Core",
    major: true)

  ambitious_major = Flaw.create!(name: "Ambitious"),
    descrtiption: "You want to be the most successful or powerful person in the world in some respect. You will not be distracted into doing things that do not contribute to your ambition, and are very eager to do things that advance it.",
    flaw_type: "Personality",
    book: "Core",
    major: true)
  
  ambitious_minor = Flaw.create!(name: "Ambitious"),
    descrtiption: "You want to be the most successful or powerful person in the world in some respect. You will not be distracted into doing things that do not contribute to your ambition, and are very eager to do things that advance it.",
    flaw_type: "Personality",
    book: "Core",
    major: false)
  
  animal_companion = Flaw.create!(name: "Animal Companion"),
    descrtiption: "You are accompanied by a loyal, intelligent (but mundane) animal that can obey simple com- mands. Your relationship with it is very close. If it should die, you would be profoundly upset.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  arthiritis = Flaw.create!(name: "Arthiritis"),
    descrtiption: "Your joints are stiff and often painful, mak- ing almost any prolonged movement difficult. You are at –3 to rolls involving repetitive move- ment, sustained over time. Occasionally, the pain is so great that you are seriously disabled. On any movement or combat botch, one of your joints may “lock up,” making the limb effec- tively useless (–6 to all rolls involving it) until you have a chance to rest it for a day or two.",
    flaw_type: "General",
    book: "Core",
    major: false)

  avaricious_major = Flaw.create!(name: "Avaricious"),
    descrtiption: "You want money, lots of money. When you have it, you do not spend it, but hoard it so that you can count it. You can be avaricious about physical things other than money, such as books or raw vis. In this case, you do not use the things you hoard, nor do you allow others to use them.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  avaricious_minor = Flaw.create!(name: "Avaricious"),
    descrtiption: "You want money, lots of money. When you have it, you do not spend it, but hoard it so that you can count it. You can be avaricious about physical things other than money, such as books or raw vis. In this case, you do not use the things you hoard, nor do you allow others to use them.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  black_sheep = Flaw.create!(name: "Black Sheep"),
    descrtiption: "You come from a prestigious family, but you have somehow estranged yourself from your relatives. They have nothing to do with you, unless they wish to punish you somehow or make use of you. Those who resent your family’s power can take safe revenge by assault- ing you. You begin the game with a bad Reputation of your choice at level 2, among those who respect your family.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  blackmail = Flaw.create!(name: "Blackmail"),
    descrtiption: "You have information that some powerful person would prefer kept hidden. You receive payments or services in return for your silence, and you may occasionally demand special favors. Don’t push your luck — your victim may decide it isn’t worth the cost, or silence you permanently. This benefit has a yearly value of about 50 silver pennies, possibly more if you keep the pressure on. You should detail and record the specifics of this arrangement.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  blatant_gift = Flaw.create!(name: "Blatant Gift"),
    descrtiption: "People immediately realize that there is something strange about you, even if they do not know you are a magus. Animals are extremely disturbed, frightened, and possibly enraged by your presence. You suffer a –6 penalty on all interaction rolls with normal people and animals, and should see page 75 for further discussion of this Flaw’s effects.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  blind = Flaw.create!(name: "Blind"),
    descrtiption: "You have little or no sight. Using missile weapons is futile, reading is impossible, and nav- igation in unknown territory is difficult to say the least. Blind magi can detect targets by other senses, and thus are less limited than people try- ing to use missile weapons. However, blind magi cannot aim spells without magical aid.",
    flaw_type: "General",
    book: "Core",
    major: true)

  branded_criminal = Flaw.create!(name: "Branded Criminal"),
    descrtiption: "As punishment for some crime in your past, a mark has been burned into your cheek. This adversely affects your ability to function in society. You may not take the Wealthy Virtue, but you may take Martial Abilities at character creation. You may choose not to take such abilities, if your crime was not violent.",
    flaw_type: "Social Status",
    book: "Core",
    major: false)

  busybody = Flaw.create!(name: "Busybody"),
    descrtiption: "You usually know everything that is going on among your friends and acquaintances, especially in private matters. You are always interested in rumors and gossip, and are fre- quently able to extract personal secrets from people. Among magi the language is more dig- nified, but the idea is the same: you keep tabs on the Hermetic community (your covenant, your House, and nearby covenants — at the least). However, magi probably don’t have much knowledge of what’s going on among the lower class members of their covenant unless they choose to apply this Flaw specifically to such people at character creation.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  carefree = Flaw.create!(name: "Carefree"),
    descrtiption: "You are unshakably cheerful and happy in all circumstances.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  careless_sorcerer = Flaw.create!(name: "Careless Sorcerer"),
    descrtiption: "You are slapdash in your use of magical power, and must roll two more botch dice more than normal when casting spells. Note that if you would normally roll no botch dice, you still roll none.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  chaotic_magic = Flaw.create!(name: "Chaotic Magic"),
    descrtiption: "Your magic is very wild. When you cast a spontaneous spell, you must specify a desired level of effect. If you fall short of or exceed that target by more than one level, the spell still works, but its effects are beyond your control — the storyguide decides the results. The level of effect includes any levels you assign to Penetration.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  close_family_ties = Flaw.create!(name: "Close Family Ties"),
    descrtiption: "Your family is one of the most important things in your life, and still supports and aids you whenever possible, even at personal risk. Family members do not hesitate to do you any favor that is within their power, and can call on their friends and neighbors to help you. It works both ways, however; your family may require help from you some day.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  clumsy = Flaw.create!(name: "Clumsy"),
    descrtiption: "You are not very graceful and tend to drop things — you are at –3 in all related rolls. Furthermore, roll an extra botch die when tak- ing actions related to Dexterity. Roleplay your clumsiness.",
    flaw_type: "General",
    book: "Core",
    major: false)

  clumsy_magic = Flaw.create!(name: "Clumsy Magic"),
    descrtiption: "You have trouble aiming your spells accu- rately. Any aiming roll (see page 86) is subject to disastrous failure: an aiming roll of 0 is auto- matically a botch. (Aiming rolls do not count as mystical rolls for the purposes of gaining Warping Points.) You receive a –3 penalty to any rolls involving Finesse.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  compassionate_major = Flaw.create!(name: "Compassionate"),
    descrtiption: "You help anyone who is wounded or in trou- ble. You cannot bear to see suffering in others, although you happily drive yourself to exhaustion.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  compassionate_minor = Flaw.create!(name: "Compassionate"),
    descrtiption: "You help anyone who is wounded or in trou- ble. You cannot bear to see suffering in others, although you happily drive yourself to exhaustion.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  compulsion = Flaw.create!(name: "Compulsion"),
    descrtiption: "You have an unfortunate urge that causes you problems. Examples include drinking, sex, perfection, bragging, or gambling.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  continence = Flaw.create!(name: "Continence"),
    descrtiption: "You do not engage in sexual activity. This may be due to a vow of celibacy, or simply per- sonal choice.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  convenant_upbringing = Flaw.create!(name: "Covenant Upbringing"),
    descrtiption: "You were raised in a large, old covenant that has little contact with the outside world. You might have very strange religious beliefs, and you certainly find medieval social and political struc- tures very odd. You may take Latin and Order of Hermes Lore at character creation. While Latin cannot be your native language, you may speak a language closely related to Latin that is spoken only at your home covenant.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  creative_block = Flaw.create!(name: "Creative Block"),
    descrtiption: "You have problems creating new things in the lab. You receive –3 on Lab Totals when you invent new spells, craft magic items, and make potions, unless you are working from a lab text. If you experiment, roll twice as many dice on the experimentation table.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  crippled = Flaw.create!(name: "Crippled"),
    descrtiption: "You either have no legs, or your legs are completely useless. You may have lost them in an accident or as a punishment. You cannot walk, although you may drag yourself along the ground, or push a trolley around with a stick.",
    flaw_type: "General",
    book: "Core",
    major: true)

  curse_of_venus = Flaw.create!(name: "Curse of Venus"),
    descrtiption: "You are very attractive to people whom you do not wish to attract. People you detest keep getting crushes on you, and will not be dissuaded. Furthermore, you tend to fall in love with inappropriate people, and in inappropri- ate circumstances. Those people you are inter- ested in tend to think you are vain and shallow.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  cyclic_magic_negative = Flaw.create!(name: "Cyclic Magic (Negative)"),
    descrtiption: "As with the Hermetic Virtue, your magic is attuned to some cycle of nature and is less potent at specific times. You have a –3 penalty to all Lab Totals and Casting Totals during that time. The length of time during which you are at a disadvantage must be equal to the time when there is no penalty.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  dark_secret = Flaw.create!(name: "Dark Secret"),
    descrtiption: "You are haunted by something that would lead to shame, rejection, and possibly revenge if discovered. Hints about the secret continual- ly arise, and there might be others who know it and could betray you. This makes you avoid certain places, dislike certain people, or fear certain things.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  deaf = Flaw.create!(name: "Deaf"),
    descrtiption: "You cannot hear at all. You may be able to speak, but you cannot understand spoken lan- guage, which makes communication difficult. Magi with this flaw must roll an extra two botch dice when casting spells with a spoken compo- nent, as they cannot hear what they are saying.",
    flaw_type: "General",
    book: "Core",
    major: true)

  deficient_form = Flaw.create!(name: "Deficient Form"),
    descrtiption: "Almost all totals (including Casting Totals and Lab Totals, but excluding Magic Resistance) to which a particular Form is added are halved. The Form has its full value for the purposes of studying it, and study totals are not halved.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  deficient_technique = Flaw.create!(name: "Deficient Technique"),
    descrtiption: "All totals, including Lab and Casting totals, including a particular Technique are halved. Study totals are not halved. Experience points required are based on the actual value of the Technique, before halving.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  deleterious_circumstances = Flaw.create!(name: "Deleterious Circumstances"),
    descrtiption: "All your magic totals are halved under certain uncommon circumstances. This can be your state, such as sitting or wet, the target of the magic, such as wild animals or iron, or the place where you are casting the magic, such as a city or high up a mountain.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  delusion = Flaw.create!(name: "Delusion"),
    descrtiption: "You believe wholeheartedly in something that just isn’t so. Examples include that you are a magus (if you aren’t), that you are the Pope’s child, or that your imaginary friend is real. This can cause real problems for you and your associates.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  dependent = Flaw.create!(name: "Dependent"),
    descrtiption: "You feel responsible for someone, and bound to help if he is in trouble. This person may be a rel- ative or friend, but should be relatively weak and a non-player character. If your Dependent passes beyond your ability to help, or becomes too pow- erful, you should substitute another Story Flaw. Possibilities include taking the children of the old Dependent as new Dependents, taking the killers of the Dependent as Enemies, or taking the Dependent as a True Friend.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  depressed = Flaw.create!(name: "Depressed"),
    descrtiption: "You have a dark outlook on life, seeing lit- tle point in acting and taking no pleasure in anything that happens.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  diabolic_past = Flaw.create!(name: "Diabolic Past"),
    descrtiption: "You were associated with diabolists, and though you have escaped their evil ways, you are still haunted by your upbringing and the memory of acts best left unspoken. Perhaps your parents were diabolists, although you were not, or maybe you joined a cult but soon repented and fled. Your former associates still take an interest in your activities and where- abouts. Unfortunately. You may purchase the Ability Infernal Lore, even if you are normally not permitted to buy Arcane Abilities.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  difficult_longevity_ritual = Flaw.create!(name: "Difficult Longevity Ritual"),
    descrtiption: "Something in your magical nature makes it difficult to create an effective Longevity Ritual for you. Anyone (including yourself) cre- ating a Longevity Ritual for you must halve their Lab Total. You may create Longevity Rituals for others without penalty.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  difficult_spontaneous_magic = Flaw.create!(name: "Difficult Spontaneous Magic"),
    descrtiption: "Spontaneous magic is always an effort for you. You cannot cast spontaneous spells without exerting yourself. However, when you do exert yourself, you cast spells as any other magus.
      This flaw may be combined with Weak Spontaneous Magic to create a magus who can- not use spontaneous magic at all.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  disjointed_magic = Flaw.create!(name: "Disjointed Magic"),
    descrtiption: "You cannot use previous knowledge to help you with magic. You gain no benefit from knowing a spell that is similar to one you are learning or inventing, and you gain no enchantment bonuses from Techniques and Forms already invested in an item.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  difficult_underlings = Flaw.create!(name: "Difficlt Underlings"),
    descrtiption: "You may only take this Story Hook if your character has, and will keep, underlings of some sort or another. No matter how many people you fire, or how carefully you vet new candidates, your underlings always cause prob- lems for you. The nature of the problems may change, but you are repeatedly drawn into dealing with the trouble they have caused. If other people give the same underlings orders, they have no problem. It’s not them, it’s you.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  disfigured = Flaw.create!(name: "Disfigured"),
    descrtiption: "A visible disfigurement makes you ugly and easy to recognize. Presence rolls that involve good looks and gaining respect from most people are at –3. You probably have a cruel nickname that refers to your unfortunate appearance. You might have a large, visible burn scar, or an enlarged and deformed eye (an “evil eye”), or even be albino.",
    flaw_type: "General",
    book: "Core",
    major: false)

  disorientating_magic = Flaw.create!(name: "Disorientating Magic"),
    descrtiption: "After casting a spell, you must spend a round doing nothing but recovering your men- tal faculties.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  driven_major = Flaw.create!(name: "Driven"),
    descrtiption: "You have some goal which you are deter- mined to bring about. This has to be the sort of big goal that could shape an entire life, but if you do accomplish it you will immediately turn to a new project.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  driven_minor = Flaw.create!(name: "Driven"),
    descrtiption: "You have some goal which you are deter- mined to bring about. This has to be the sort of big goal that could shape an entire life, but if you do accomplish it you will immediately turn to a new project.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  dutybound = Flaw.create!(name: "Dutybound"),
    descrtiption: "You adhere to a restrictive code of con- duct that forbids certain behavior, probably including prohibitions against lying, killing prisoners, stealing, and other occasionally use- ful actions. You follow this code out of guilt or fear rather than high-flown moral standards, and may spend more time justifying yourself than keeping your conduct pure.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  dwarf = Flaw.create!(name: "Dwarf"),
    descrtiption: "You are the size of a child. Your comfort- able walking speed is two-thirds that of a nor- mal person. Your Size is –2, so the severity of wounds you take increases in three point incre- ments rather than five point increments (see page 171). You take a –1 penalty to each of Strength and Stamina, which may reduce each Characteristic as low as –6. You cannot take this Flaw and Giant Blood, Large, or Small Frame.",
    flaw_type: "General",
    book: "Core",
    major: true)

  enemies = Flaw.create!(name: "Enemies"),
    descrtiption: "
    Someone is causing trouble for you, such as a local baron or bishop, a band of outlaws, or a really nasty innkeeper. The enemy must be powerful enough to endanger you — this is best agreed on with the storyguide and the rest of the troupe.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  enfeebled = Flaw.create!(name: "Enfeebled"),
    descrtiption: "You cannot exert yourself for longer than a few seconds. Any need for rapid movement, such as combat or a chase, leaves you helpless. Long hikes are likewise beyond your capability. You are unable to learn Martial Abilities or any other skills involving physical exertion, since you cannot train in them. If you are a magus, you lose double the normal number of Fatigue levels from casting spells, but you may carry out laboratory activities as normal.",
    flaw_type: "General",
    book: "Core",
    major: true)

  envious_major = Flaw.create!(name: "Envious"),
    descrtiption: "You believe that everyone has it better than you do, and that they don’t deserve their good fortune, while you do. Thus, you try to ruin their lives and take their goods for your- self. (This is not a good Flaw for a player char- acter, as it is likely to lead to conflict with the other players.)",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  envious_minor = Flaw.create!(name: "Envious"),
    descrtiption: "You believe that everyone has it better than you do, and that they don’t deserve their good fortune, while you do. Thus, you try to ruin their lives and take their goods for your- self. (This is not a good Flaw for a player char- acter, as it is likely to lead to conflict with the other players.)",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  faerie_friend = Flaw.create!(name: "Faerie Friend"),
    descrtiption: "You have an ally among the fay. How much assistance you can get depends on the power of the friend — a small faerie with (relatively) minor powers can accompany you on a day to day basis. Powerful faeries have other business, and may only be available to answer questions and provide guidance, not to accompany you around on your adventures. Your ally is fully sentient, has its own powers, and can speak when it chooses. You may want to have another player act the part. While a faerie companion can be a great boon, it can also be a terrible burden. If it is nasty or mischievous, it could cause trouble for you everywhere. Characters with this Flaw can purchase the Arcane Knowledge Faerie Lore, even if they are normally restricted from purchasing it.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  faerie_upbringing = Flaw.create!(name: "Faerie Upbringing"),
    descrtiption: "Perhaps you were abandoned by your true kin, and the faeries found you. Maybe your fam- ily actually lived in a faerie forest, or faeries took you as a babe. Though you are now back in human society, you feel at home with and have an enhanced understanding of faeries, magic, and other strange things. However, you find human society, including religion, bizarre. You may learn Faerie Lore at character generation.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  favors = Flaw.create!(name: "Favors"),
    descrtiption: "You owe a boon to someone (or to a great many people), and may be called upon to return the favor at any time. The consequences of ignoring such a request can range from mild to deadly serious, at the storyguide’s discretion.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  fear = Flaw.create!(name: "Fear"),
    descrtiption: "You are scared of something that you are likely to encounter fairly often. Its presence makes you edgy and very uncomfortable.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  feral_upbringing = Flaw.create!(name: "Feral Upbringing"),
    descrtiption: "You grew up in the wilderness, either raised by wild animals or surviving on your own. For much of your life you could not speak, and knew nothing of human ways. Now that you have joined human society (or the covenant), you have learned to understand some basic spoken phrases, but civilized life is still a mystery you want little part of. You may only choose beginning Abilities that you could have learned in the wilds. In particular, you may not start with a score in a Language. In your first five years you gain 120 experience points, which must be split between (Area) Lore, Animal Handling, Athletics, Awareness, Brawl, Hunt, Stealth, Survival, and Swim.",
    flaw_type: "General",
    book: "Core",
    major: false)

  feud = Flaw.create!(name: "Feud"),
    descrtiption: "Your family is involved in a feud. The opposing family or families are roughly of equivalent strength to your family and its allies. You are liable to be ambushed or attacked by opposing clansmen, and your family expects you to join raids against your enemies.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  flawed_parma_magica = Flaw.create!(name: "Flawed Parma Magica"),
    descrtiption: "Your Parma Magica is defective and pro- vides only half the normal Magic Resistance against a certain Form. You may purchase this Flaw more than once for different Forms.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  fragile_constitution = Flaw.create!(name: "Fragile Constitution"),
    descrtiption: "You are sickly and weak. You suffer a –3 penalty on all rolls to recover from wounds and diseases.",
    flaw_type: "General",
    book: "Core",
    major: false)

  fury = Flaw.create!(name: "Fury"),
    descrtiption: "A violent temper sometimes overwhelms you, sending you into a destructive, uncontrol- lable rage. You are likely to be provoked by some sort of specific event, such as being insulted, being hurt, or hearing the Order of Hermes disparaged. Roll 9+ on a stress die to avoid flying into a rage when such an event occurs, with another roll every round to try to calm yourself should you fail the first. On a botch, you try to kill everyone around you. While enraged you get +3 to Damage, but –1 on all other scores and rolls.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  generous_major = Flaw.create!(name: "Generous"),
    descrtiption: "You willingly give away your property to anyone who expresses a desire for it, even if they are not particularly deserving. If some- thing is very important, you might not give it to someone, but you will certainly share it.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  generous_minor = Flaw.create!(name: "Generous"),
    descrtiption: "You willingly give away your property to anyone who expresses a desire for it, even if they are not particularly deserving. If some- thing is very important, you might not give it to someone, but you will certainly share it.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  greater_malediction = Flaw.create!(name: "Greater Malediction"),
    descrtiption: "You have been cursed by some supernat- ural power, in a way that greatly hinders you. The effects of the curse should be comparable to those of other Major Flaws. Indeed, almost any greater Flaw could be the result of a curse.",
    flaw_type: "Supernatural",
    book: "Core",
    major: true)

  greedy_major = Flaw.create!(name: "Greedy"),
    descrtiption: "You like to eat and drink, and do so to excess whenever given the chance. You are probably fat, but may not be if you rarely have the chance to indulge.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  greedy_minor = Flaw.create!(name: "Greedy"),
    descrtiption: "You like to eat and drink, and do so to excess whenever given the chance. You are probably fat, but may not be if you rarely have the chance to indulge.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  hatred_major = Flaw.create!(name: "Hatred"),
    descrtiption: "You hate someone or some group so much that hurting them dominates your life. The tar- get of your hatred must not be someone you could easily overcome.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  hatred_minor = Flaw.create!(name: "Hatred"),
    descrtiption: "You hate someone or some group so much that hurting them dominates your life. The tar- get of your hatred must not be someone you could easily overcome.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  hedge_wizard = Flaw.create!(name: "Hedge Wizard"),
    descrtiption: "Because of your esoteric magic, other magi distrust you, and more importantly, grant you no respect. You start with a negative Reputation within the Order of Hermes at level 3 as a hedge wizard, even though you are a member of the Order.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  heir = Flaw.create!(name: "Heir"),
    descrtiption: "You have little power or wealth now, but you stand to inherit land and possibly money. You need do nothing special to remain in your position, but others may occasionally attempt to remove you from the line of succession — one way or another. When you finally win your inheritance you gain its responsibilities as well, so your freedom may be restricted.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  higher_purpose = Flaw.create!(name: "Higher Purpose"),
    descrtiption: "Let others concern themselves with petty matters, you have a nobler goal. This purpose should be altruistic, like freeing an oppressed people or bringing peace between the Order of Hermes and society.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  humble = Flaw.create!(name: "Humble"),
    descrtiption: "You are humble, always willing to believe that others are more skilled and better than you. You do not necessarily underestimate your own abilities, you just think others are better.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  # = Flaw.create!(name: ""),
  #   descrtiption: "",
  #   flaw_type: "",
  #   book: "Core",
  #   major: false)

end