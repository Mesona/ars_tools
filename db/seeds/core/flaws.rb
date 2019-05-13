
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

  hunchback = Flaw.create!(name: "Hhunchback"),
    descrtiption: "You have a deformed body that gives you a grotesque appearance and hinders your movements. You are at –3 to all rolls involving agility and balance. Communication rolls that involve good looks are at –3.",
    flaw_type: "General",
    book: "Core",
    major: false)

  incompatible_arts = Flaw.create!(name: "Incompatible Arts"),
    descrtiption: "For some reason you are completely unable to use two combinations of Techniques and Forms, except for Vim and Corpus. For example, you may be unable to use Intellego Herbam and Intellego Animal. This Flaw may be taken repeatedly with different combinations, but may not be combined with a Deficiency.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  incomprehensible = Flaw.create!(name: "Incomprehensible"),
    descrtiption: "You are almost completely unable to convey the knowledge and understanding that you have. Anyone trying to learn from you or from a book you have written must halve their Study Total (or Lab Total, if you are a magus and have written Lab Texts on some spells or enchanted items). If you are a magus teaching spells, halve all applicable Lab Totals, both yours and the student’s.",
    flaw_type: "General",
    book: "Core",
    major: false)

  indiscreet = Flaw.create!(name: "Indiscreet"),
    descrtiption: "You are unable to keep a secret. You must tell all to the first interested party you meet in an effort to be helpful or to demonstrate that you are in-the-know, unless you make a 9+ Intelligence-based stress roll. If you botch, you may have to be physically restrained by your companions from answering any questions put to you for the remainder of the encounter.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  infamous = Flaw.create!(name: "Infamous"),
    descrtiption: "People know you well and curse you in their prayers. You have a level 4 bad Reputation, specifying the horrible deeds that earned you such ill will.",
    flaw_type: "General",
    book: "Core",
    major: false)

  infamous_master = Flaw.create!(name: "Infamous Master"),
    descrtiption: "Your master was a diabolist, bumbler, fool, widely despised, or held in contempt for some other reason. Most magi expect lit- tle better from you. Even if you’ve done nothing wrong, you are treated as though you don’t deserve to be a member of the Order. You have a bad Reputation of the appropriate type at level 3 among magi.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  judged_unfairly = Flaw.create!(name: "Judged Unfairly"),
    descrtiption: "Somehow you come across the wrong way to people, and they universally distrust and underestimate you. You catch no one’s eye, impress no one, and can get no one to take you seriously. If you ever find an exceptional some- one who sees you as you want to be seen, you will cling to that person.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  lame = Flaw.create!(name: "Lame"),
    descrtiption: "One of your legs is weakened, whether since birth or through some accident. You move slowly and clumsily. Your base speed is a mere one mile per hour, and anyone can outrun you. You suffer a –6 penalty on rolls involving moving quickly or with agility, –3 on Dodge, and –1 on other combat scores.",
    flaw_type: "General",
    book: "Core",
    major: false)

  lecherous_major = Flaw.create!(name: "Lecherous"),
    descrtiption: "You seek sexual contact with as many people as possible. Note that you need not be any good at seduction; skill here merely changes the kinds of problems you encounter.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  lecherous_minor = Flaw.create!(name: "Lecherous"),
    descrtiption: "You seek sexual contact with as many people as possible. Note that you need not be any good at seduction; skill here merely changes the kinds of problems you encounter.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  lesser_maledictions = Flaw.create!(name: "Lesser Maledictions"),
    descrtiption: "You have been cursed by some supernat- ural power. The effects of the curse should be about as bad as other Minor General Flaws.",
    flaw_type: "Supernatural",
    book: "Core",
    major: false)

  limited_magical_resistance = Flaw.create!(name: "Limited Magical Resistance"),
    descrtiption: "You are less able to resist magic than other magi. You gain no bonus from one of your Form scores to Magic Resistance rolls, though if you are caught without your Parma Magica, you retain a Magic Resistance of 0. You may take this Flaw multiple times, for multiple Forms.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  loose_magic = Flaw.create!(name: "Loose Magic"),
    descrtiption: "Your Study Total is halved whenever you try to master spells.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  lost_love = Flaw.create!(name: "Lost Love"),
    descrtiption: "You have lost your true love to death, dis- tance, or marriage. You take little joy in life’s pleasures and give up easily in the face of diffi- culty, since you’ve already lost the most impor- tant struggle. On those occasions when you for- get yourself and have a good time, you inevitably feel sorrow afterwards, thinking about how it could have been if your love were with you.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  low_self_esteem = Flaw.create!(name: "Low Self-Esteem"),
    descrtiption: "You have a deflated opinion of your own self- worth. You begin the game with no Confidence Score, and never have any Confidence Points.",
    flaw_type: "General",
    book: "Core",
    major: true)

  lycanthrope = Flaw.create!(name: "Lycanthrope"),
    descrtiption: "You have been cursed to change form into a dangerous predator (such as a wolf, lynx, or bear) on nights of the full moon (or similar, monthly astrological events). No items or clothing transform between shapes, and it takes one full round for the full transformation to take effect. You aren’t immune to normal weapons, and the curse does not infect bite victims. The animal may be detected as a cursed human with an InAn or InCo spell.
      You have the intelligence of an animal while changed, react to all stimuli as an ani- mal, and don’t retain any memory of actions taken in animal form, save occasionally in dreams. You may not even realize that you are under this curse. You still recognize both friends and enemies when changed.
      Lycanthropes may transform into a non-magical animal between Size –1 (wolf) and Size +2 (bear). You have the normal physical characteristics of the animal, except that +3 is added to your Soak score (in ani- mal form only). Furthermore, you are fully healed of all wounds incurred in animal form upon resuming human form (which happens at dawn).",
    flaw_type: "Supernatural",
    book: "Core",
    major: true)

  magic_addiction = Flaw.create!(name: "Magic Addiction"),
    descrtiption: "You crave the rush of casting and holding power over magic. Whenever you cast a spell, you have a difficult time stopping yourself from casting again and again until you drop from exhaustion. Whenever you use a stress die in spellcasting, you must, whether or not the spell succeeds, make an Intelligence + Concentration stress roll, against an Ease Factor of half the level of the spell (or, if you botched, the level you were attempting). If you fail, as your next action you must either cast a Formulaic spell of at least the same level as the previous spell, or cast any spontaneous spell, expending Fatigue and not reserving levels for Penetration. You must roll again to control your addiction, based on the level of the spell you just cast, but you get a +3 bonus to the roll for every spell you cast after the first. If you botch, you continue casting spells until you fall unconscious.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  magical_air = Flaw.create!(name: "Magical Air"),
    descrtiption: "People and animals react to you as if you had The Gift, but, at least as far as you know, you have no magical abilities. You may not take this Flaw if you actually do have The Gift; see The Blatant Gift (page 51) instead.",
    flaw_type: "General",
    book: "Core",
    major: true)

  magical_animal_companion = Flaw.create!(name: "Magical Animal Companion"),
    descrtiption: "You are accompanied by a magical animal that’s smart enough to follow your orders or to disobey them on its own initiative. The smaller and more innocuous the creature, the more intelligent it is. A ferret or crow is as intelligent as a human, a wolf is very cunning, and an ani- mal the size of a horse is simply more intelli- gent than normal. The creature has a Magic Might score of 10 – Size.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  meddler_major = Flaw.create!(name: "Meddler"),
    descrtiption: "You want to fix other peoples’ lives: arrange matches, teach children to sew “prop- erly,” or tend the sick. You waste a lot of time and energy on such endeavors, and people usu- ally resent it.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  meddler_minor = Flaw.create!(name: "Meddler"),
    descrtiption: "You want to fix other peoples’ lives: arrange matches, teach children to sew “prop- erly,” or tend the sick. You waste a lot of time and energy on such endeavors, and people usu- ally resent it.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  mentor = Flaw.create!(name: "Mentor"),
    descrtiption: "A person of some importance, wealth, or wisdom has taken an interest in your life, and at times provides you with minor material aid and advice. However, at some point your mentor will have a small favor or two to ask of you. He might not necessarily like your relationship with the covenant — perhaps you must keep it a secret. The Mentor must be an NPC.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  missing_ear = Flaw.create!(name: "Missing Ear"),
    descrtiption: "You cannot accurately locate the direction of sounds, and suffer a penalty of –3 to hearing rolls.",
    flaw_type: "General",
    book: "Core",
    major: false)

  missing_eye = Flaw.create!(name: "Missing Eye"),
    descrtiption: "You cannot judge close distances easily and get –3 on Attack rolls for missiles and tar- geting rolls for spells. In melee combat you suf- fer –1 on Attack rolls because your field of vision is limited. You also have a blind side from which people can approach unseen. This Flaw can be combined with Poor Eyesight (below), but the penalties are cumulative.",
    flaw_type: "General",
    book: "Core",
    major: false)

  missing_hang = Flaw.create!(name: "Missing Hand"),
    descrtiption: "Perhaps it was an accident or a punish- ment in your past that cost you one of your hands. Climbing, combat, and other activities normally requiring both hands are at a penalty of –3 or greater.",
    flaw_type: "General",
    book: "Core",
    major: false)

  mistaken_identity = Flaw.create!(name: "Mistaken Identity"),
    descrtiption: "Someone, who looks exactly like you and whom you and your companions will most likely never meet, lives near you, and is responsible for an ongoing variety of violent, illegal, obscene, or embarrassing acts. You often have to explain who you are, and sometimes have to deal with the consequences of the other person’s acts.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  monastic_vows = Flaw.create!(name: "Monastic Vows"),
    descrtiption: "You have taken vows of poverty, chastity, and obedience to a religious superior. This covers the vows taken by mendicant friars, as well as those taken by monks and nuns strictly speaking.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  motion_sickness = Flaw.create!(name: "Motion Sickness"),
    descrtiption: "Riding a horse, in a cart, or sailing on a ship makes you violently ill. When not traveling on foot, you suffer double the fatigue loss on long journeys specified on page 185, with a minimum loss of two Fatigue levels. Violent jostling over a period of a few hours could conceivably lead to unconsciousness.",
    flaw_type: "General",
    book: "Core",
    major: false)

  mute = Flaw.create!(name: "Mute"),
    descrtiption: "You cannot speak; perhaps your tongue was cut out. You probably use rudimentary hand gestures and grunts to communicate your needs. You can still understand languages per- fectly well, and may learn to read and write if you have an appropriate Virtue. Note that magi with this Flaw get a –10 penalty to all spell- casting, although this may be offset by taking the Quiet Magic Virtue (page 48). A magus with this Flaw can be assumed to be able to make sounds, which are sufficient to allow nor- mal use of the Voice Range.",
    flaw_type: "General",
    book: "Core",
    major: true)

  necessary_condition = Flaw.create!(name: "Necessary Condition"),
    descrtiption: "In order for your magic to work, you must perform a specific action while casting any spell. This should be something simple, such as singing or spinning around three times. If you cannot perform the action, you cannot cast spells at all.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  no_hands = Flaw.create!(name: "No Hands"),
    descrtiption: "You have no hands. Any activity requiring hands is impossible, and magi with this flaw take a –5 penalty to all spellcasting. This may be offset by taking the Subtle Magic Virtue.",
    flaw_type: "General",
    book: "Core",
    major: true)

  no_sense_of_direction = Flaw.create!(name: "No Sense of Direction"),
    descrtiption: "You are completely unable to follow directions. North, south, east, and west have no meaning to you, and you often confuse right and left. You frequently get lost while traveling unfamiliar paths by yourself, or with others fol- lowing your lead, and often have to reason your way home or to your destination from first principles. This Flaw is incompatible with the Well-Traveled Virtue.",
    flaw_type: "General",
    book: "Core",
    major: false)

  nocturnal = Flaw.create!(name: "Nocturnal"),
    descrtiption: "Your natural body rhythms try to keep you sleeping until noon. You are at –1 on all rolls made between dawn and midday. Conversely, you have little difficulty staying up at night. Though you enjoy no special benefits in the dark, your companions may decide to saddle you with night guard duty on a regular basis to use your attributes to best effect.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  noncombatant = Flaw.create!(name: "Noncombatant"),
    descrtiption: "You have no interest in combat, nor do you have any ability with it. You might be unreason- ably afraid of combat, or a complete pacifist, or prone to freezing and doing nothing.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  oath_of_fealty = Flaw.create!(name: "Oath of Fealty"),
    descrtiption: "You have sworn an oath of loyalty and support to someone outside the covenant, and sometimes they call on you to uphold your vow. Magi are forbidden from taking Oaths of Fealty by the Hermetic Code. Some don’t let that stop them.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  obese = Flaw.create!(name: "Obese"),
    descrtiption: "You are large because of fat, not muscle. You are at –1 to all rolls that involve moving quickly or gracefully and at –3 to all Fatigue rolls. You are not so large that your Size is increased, and you may take this Flaw along with the Virtues and Flaws that change your Size.",
    flaw_type: "General",
    book: "Core",
    major: false)

  obsessed = Flaw.create!(name: "Obsessed"),
    descrtiption: "You are fixated on some prized object, action, or ideal. This interferes with your accom- plishment of more immediate tasks. Examples might include obsessive protection of magi to the point that you attack those who insult them, or obsessive neatness where you keep yourself spotless and deride those who do not.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  offensive_to_animals_general = Flaw.create!(name: "Offensive to Animals"),
    descrtiption: "Animals react to you as if you had The Gift, although people still do not. You may not take this Flaw and Magical Air. Characters with The Gift may only take this Flaw if they have the Gentle Gift, in which case only humans react to them as if they didn’t have The Gift. Animals with a Might score react in different ways. In general, those that react negatively to The Gift react negatively to you, while those that react positively do not, unless you actually have The Gift.",
    flaw_type: "General",
    book: "Core",
    major: false)

  offensive_to_animals_hermetic = Flaw.create!(name: "Offensive to Animals"),
    descrtiption: "Animals react to you as if you had The Gift, although people still do not. You may not take this Flaw and Magical Air. Characters with The Gift may only take this Flaw if they have the Gentle Gift, in which case only humans react to them as if they didn’t have The Gift. Animals with a Might score react in different ways. In general, those that react negatively to The Gift react negatively to you, while those that react positively do not, unless you actually have The Gift.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  optimistic_major = Flaw.create!(name: "Optimistic"),
    descrtiption: "You are convinced that everything will turn out for the best. This is not overconfi- dence, as you accept that you might well fail. Even if you do, however, you are sure that cir- cumstances will mean that everything works to your benefit.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  optimistic_minor = Flaw.create!(name: "Optimistic"),
    descrtiption: "You are convinced that everything will turn out for the best. This is not overconfi- dence, as you accept that you might well fail. Even if you do, however, you are sure that cir- cumstances will mean that everything works to your benefit.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  outcast = Flaw.create!(name: "Outcase"),
    descrtiption: "You have the rough task of making it on your own — normal society rejects you and you are not attached to a covenant. Perhaps you have a magical nature, a supernatural back- ground, some disfigurement, or a tremendous scandal in your past. You may not take the Wealthy Virtue.",
    flaw_type: "Social Status",
    book: "Core",
    major: false)

  outlaw = Flaw.create!(name: "Outlaw"),
    descrtiption: "You have been outlawed, and must live by your wits outside society. You may take Martial Abilities at character generation, and have a Reputation at level 2 for whatever got you out- lawed.",
    flaw_type: "Social Status",
    book: "Core",
    major: true)

  outlaw_leader = Flaw.create!(name: "Outlaw Leader"),
    descrtiption: "You command a small group (three to six persons) of outlaws. Your followers look up to you and do what you tell them — within rea- son. However, you must occasionally stick up for the group or one of its members, as well as provide for them. You often have to deal with challenges to your leadership in one form or another. You are well known as an outlaw in the local area, with a Reputation level of 3. You are actively sought by the local lord, sheriff, or other such official. You may take Martial Abilities at character generation. Grogs may not take this Flaw.",
    flaw_type: "Social Status",
    book: "Core",
    major: false)

  outsider = Flaw.create!(name: "Outsider"),
    descrtiption: "You belong to a group that is both readi- ly identifiable and distrusted or disliked. Examples include Saracens, Jews, and Moors. You are shunned and often persecuted because of this, and your life and freedom may occa- sionally be in peril. You have a bad Reputation of level 1 to 3 (depending upon how easy it is to identify you) among members of the domi- nant social group of your area. There is no way for you to ever remove that stain, and you are marked by it wherever you go.",
    flaw_type: "Social Status",
    book: "Core",
    major: true)

  overconfident_major = Flaw.create!(name: "Overconfident"),
    descrtiption: "You have a completely unshakable faith in your own abilities. You believe that you will always perform at, or slightly above, the peak of your abilities, and cannot imagine failure. If you actually botch, you come up with some rationalization as to what “really” happened.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  overconfident_minor = Flaw.create!(name: "Overconfident"),
    descrtiption: "You have a completely unshakable faith in your own abilities. You believe that you will always perform at, or slightly above, the peak of your abilities, and cannot imagine failure. If you actually botch, you come up with some rationalization as to what “really” happened.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  oversensitive = Flaw.create!(name: "Oversensitive"),
    descrtiption: "Something that others find merely unpleasant you consider intolerable. Examples might include an oversensitivity to disrespect, to slovenliness, or to impiety. If you are the vio- lent type, you may start fights with those who offend you.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  painful_magic = Flaw.create!(name: "Painful Magic"),
    descrtiption: "Casting spells causes you to suffer the equivalent of one Fatigue level in pain for each spell you cast. This reduces all your actions by the appropriate Fatigue penalty, which is cumu- lative with any from actual fatigue or injuries (though you do not suffer any physical damage from pain). You recover these “pain levels” just like Fatigue levels.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  palsied_hands = Flaw.create!(name: "Palsied Hands"),
    descrtiption: "Your hands shake uncontrollably, which makes casting spells or holding objects diffi- cult. All rolls involving holding or wielding an object are made at –2, including weapon skills. Magi and others who rely on hand gestures to work magic must roll an extra botch die when casting a spell.",
    flaw_type: "General",
    book: "Core",
    major: false)

  pessimistic = Flaw.create!(name: "Pessimistic"),
    descrtiption: "Personality",
    flaw_type: "",
    book: "Core",
    major: false)

  pious_major = Flaw.create!(name: "Pious"),
    descrtiption: "You are a fervent follower of your reli- gion. You avoid the things it prohibits, and enthusiastically do the things it commands.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  pious_minor = Flaw.create!(name: "Pious"),
    descrtiption: "You are a fervent follower of your reli- gion. You avoid the things it prohibits, and enthusiastically do the things it commands.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  plagued_by_supernatural_entities = Flaw.create!(name: "Plagued by Supernatural Entities"),
    descrtiption: "Some supernatural being interferes in your life on a fairly regular basis. It may even have your best interests at heart, but the result is that you get dragged into stories. Suitable examples would be a demon trying to corrupt you, an angel trying to save you, a faerie play- ing games with you, or a ghost continuing the agenda she had while alive.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  poor = Flaw.create!(name: "Poor"),
    descrtiption: "You are a poor member of your social class. You must work three seasons per year in order to make ends meet, and can afford only the necessities of life, as measured by your sta- tus. This also means that you have one fewer season available for any form of advancement other than exposure, which is a major hin- drance. You cannot take this Flaw if you are supported by the covenant. In particular, this Flaw is not available to magi.",
    flaw_type: "General",
    book: "Core",
    major: true)

  poor_characteristic = Flaw.create!(name: "Poor (Characteristic)"),
    descrtiption: "You have an exceedingly bad Characteristic — lower one which is already –3 or lower by one point. Describe what it is about you that makes this obvious, such as a feeble stature, hideous visage, or slack-jawed stupidity. You may take this Flaw twice for a single Characteristic, lowering it to –5, and multiple times for different Characteristics.",
    flaw_type: "General",
    book: "Core",
    major: false)

  poor_eyesight = Flaw.create!(name: "Poor Eyesight"),
    descrtiption: "Bleary vision impedes your performance. Rolls involving sight, including rolls to attack and defend, are at –3. New environments are disorienting and perhaps frightening for you. This Flaw can be combined with Missing Eye (above), but the penalties are cumulative.",
    flaw_type: "General",
    book: "Core",
    major: false)

  poor_formulaic_magic = Flaw.create!(name: "Poor Formulaic Magic"),
    descrtiption: "You are simply not very good at formula- ic magic. Subtract five from every roll that you make to cast formulaic spells. This does not apply to Ritual spells.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  poor_hearing = Flaw.create!(name: "Poor Hearing"),
    descrtiption: "Subtract 3 from rolls involving hearing. Speech that is hard for others to understand because of language, dialect, or accent is almost impossible for you to follow. You often pretend to be listening to people when in fact you are not.",
    flaw_type: "General",
    book: "Core",
    major: false)

  poor_memory = Flaw.create!(name: "Poor Memory"),
    descrtiption: "You have a very hard time recalling one type of thing, such as names, faces, or places.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  poor_student = Flaw.create!(name: "Poor Student"),
    descrtiption: "You are bad at learning new things. Subtract three from all Advancement Totals derived from teaching and books (that is, you have no penalty to adventure experience, expo- sure, practice, or training), but do not reduce a total below one. If you could learn something without this Flaw, you still learn a bit.",
    flaw_type: "General",
    book: "Core",
    major: false)

  prohibition = Flaw.create!(name: "Prohibition"),
    descrtiption: "Personality",
    flaw_type: "You have had a Conditional Curse (also known as a “Geas”) cast upon you and must obey the restrictions of your prohibition or be penalized by the curse. If you fail to adhere to the restrictions, you will suffer the curse in full force. The troupe must agree on both the restriction, and the curse that strikes you if you break it.",
    book: "Core",
    major: false)

  proud_major = Flaw.create!(name: "Proud"),
    descrtiption: "You believe that you are more important than just about everybody, and expect the appropriate respect. Magi may admit one or two equals, but do not believe that they have any superiors. Mundanes will admit social superiors, but still believe themselves to be fun- damentally better than, say, the king.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  proud_minor = Flaw.create!(name: "Proud"),
    descrtiption: "You believe that you are more important than just about everybody, and expect the appropriate respect. Magi may admit one or two equals, but do not believe that they have any superiors. Mundanes will admit social superiors, but still believe themselves to be fun- damentally better than, say, the king.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  reckless = Flaw.create!(name: "Reckless"),
    descrtiption: "You tend not to notice that situations are threatening. You start with a Personality Trait of Reckless +3, and can never have a positive Personality Trait reflecting care or patience. Whenever the storyguide deems it necessary for you to check bravery or a similar Personality Trait, make a roll against your Reckless score instead. A success means you do not realize your danger, and can act immedi- ately without further checks.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  reclusive = Flaw.create!(name: "Reclusive"),
    descrtiption: "You do not like being disturbed or inter- rupted. You feel that an intrusion by another upon your time is unnecessary at best, and an insult at worst. You are very reluctant to be dragged into public places, or group activities, and generally complain when you must partic- ipate. Note that this is often a bad Flaw for a player character, unless there is a good reason why that character needs to stay out of play most of the time (for example, he is played by the alpha storyguide).",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  restriction = Flaw.create!(name: "Restriction"),
    descrtiption: "You cannot cast spells at all under certain uncommon conditions. These might refer to your state, such as touching the earth directly or having no beard, or to the target, such as birds or glass, or to your location when you use the magic, such as on a small boat or in a storm. The Restriction also applies to effects generat- ed by any enchanted items you create. Spells cast remain in effect even if the Restriction comes into play. Thus, if your Restriction is that you must not have a beard, you cast a spell with Year duration, and then grow a beard, the spell does not fail.",
    flaw_type: "Heremtic",
    book: "Core",
    major: true)

  rigid_magic = Flaw.create!(name: "Rigid Magic"),
    descrtiption: "You cannot use vis when you cast spells. Thus, you cannot increase your spell rolls or cast Ritual magic. You can use vis in the laboratory.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  sheltered_upbringing = Flaw.create!(name: "Sheltered Upbringing"),
    descrtiption: "You grew up completely separated from society, knowing only your parents or mentor. Recently you have been introduced to a won- drous new world of strangers, and you are over- whelmed. Depending on your personality, you might react with contempt, fear, or wonder. You are unable to function normally because you cannot understand most human customs. You may not take Bargain, Charm, Etiquette, Folk Ken, Guile, Intrigue, or Leadership as begin- ning Abilities, but you may learn them in play.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  short_attention_span = Flaw.create!(name: "Short Attention Span"),
    descrtiption: "You have trouble concentrating. Keeping watch, listening to complex orders, following the plot of a story, or performing other such tasks that require continued attention are usu- ally not within your ability.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  short_lived_magic = Flaw.create!(name: "Short-Lived Magic"),
    descrtiption: "Your spells do not last as long as they should. Spells that should last a year, last a moon; those of a moon, only to the next sun- rise or sundown; and those of a sun, merely Diameter. Diameter, Concentration, Ring, and Momentary spells are not affected.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  short_ranged_magic = Flaw.create!(name: "Short-Ranged Magic"),
    descrtiption: "Halve your Casting Totals whenever you are not touching the target of the spell. Halve your Lab Total when designing an effect or spell that has a range greater than Touch.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  simple_minded = Flaw.create!(name: "Simple-Minded"),
    descrtiption: "You can only think about one thing at a time — guarding the bridge, hunting for a missing ring, or hiding in the trees for example. You become easily confused unless others give you very clear instructions. When unexpected circumstances pop up, you find them difficult to deal with.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  slow_caster = Flaw.create!(name: "Slow Caster"),
    descrtiption: "Your magic requires more time to prepare and execute than that of other magi. Your for- mulaic spells take two rounds to cast; sponta- neous spells also take two rounds unless you fast-cast, in which case they take one round casting time. Fast-cast mastered spells also take the normal one-round time. Ritual spells are performed as normal, since all magi must cast them slowly and carefully.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  small_frame = Flaw.create!(name: "Small Framce"),
    descrtiption: "You are of a lighter-than-average build. Your Size is reduced to –1. This means that the severity of wounds you take increases in four point increments, rather than five point. (See page 171). You cannot take this Flaw and Giant Blood, Large, or Dwarf.",
    flaw_type: "General",
    book: "Core",
    major: false)

  social_handicap = Flaw.create!(name: "Social Handicap"),
    descrtiption: "You have some trait that keeps you from interacting easily with other people. This impairs your dealings with most of society, causing penalties of –3 on appropriate rolls. Examples include morose temperament, unworldliness, an unpleasant odor, or outspo- ken atheism.",
    flaw_type: "General",
    book: "Core",
    major: false)

  soft_hearted = Flaw.create!(name: "Soft-Hearted"),
    descrtiption: "You cannot bear to witness suffering, and causing it brings you sleepless nights. Even the deaths of enemies are painful for you. You avoid danger and try to keep your friends out of it as well. Life and health mean so much that you would rather give up important goals than let another person risk combat. You are easily moved by song and story.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  study_requirement = Flaw.create!(name: "Study Requirement"),
    descrtiption: "You are unable to study magic from books or vis alone. You must study in the presence of the appropriate Art. For example, you need to sit next to a brook or pond to study Aquam, or a large fire to study Ignem. Growing things are good for Creo, decaying ones good for Perdo. As your knowledge grows, you need to work with larger and larger quantities. See “Study Bonus Virtue” on page 49 for a list of examples.
      You may take Study Bonus and Study Requirement.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  supernatural_nuisance = Flaw.create!(name: "Supernatural Nuisance"),
    descrtiption: "Supernatural entities of a certain kind interfere in your life in minor ways whenever you are around them. This differs from Plagued by Supernatural Entity in that the nuisances do not have any long-term plans. This could rep- resent a ghost that haunts you, or general enmi- ty from faeries towards you.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  susceptibility_to_divine_power = Flaw.create!(name: "Susceptibility to Divine Power"),
    descrtiption: "You are especially sensitive to the Dominion and suffer twice the normal penal- ties (such as spellcasting modifiers and botch rolls) to your magic when in a divine aura.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  susceptibility_to_faerie_power = Flaw.create!(name: "Susceptibility to Faerie Power"),
    descrtiption: "You are especially susceptible to the fay and their magic. Whenever you enter a faerie area, you must make a Stamina roll equal to or greater than its aura rating to avoid becoming disoriented. In addition, your Magic Resistance score, including Parma Magica, against faerie magic is halved. If someone else uses their Parma Magica to protect you, their resistance is not affected and you benefit normally.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  susceptibility_to_infernal_power = Flaw.create!(name: "Susceptibility to Infernal Power"),
    descrtiption: "You are especially vulnerable to the dark powers. Whenever you enter an area of infernal influence, you must make a Stamina roll equal to or greater than the aura rating or become ill (–1 on all rolls). You get only half your normal Magic Resistance score against infernal magic, though if someone else’s Parma Magica is pro- tecting you, it counts normally.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  tainted_with_evil = Flaw.create!(name: "Tainted With Evil"),
    descrtiption: "An air of corruption surrounds you as a result of something you, your parens, or your ancestors did. Others naturally feel very ill at ease around you, and can easily grow to hate you. Gaining a positive Reputation is impossi- ble. Magi do not react as strongly to this attribute as normal people.",
    flaw_type: "General",
    book: "Core",
    major: false)

  temperate = Flaw.create!(name: "Temperate"),
    descrtiption: "You do not over-indulge in any sensual pleasures.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  tormenting_master = Flaw.create!(name: "Tormenting Master"),
    descrtiption: "Your master does not believe you have successfully passed the apprentice’s gauntlet (the test of becoming a magus). He periodical- ly troubles you with political moves and indi- rect attacks. This Flaw is only applicable to magi, although other characters could take an analogous Story Hook.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  transvestite = Flaw.create!(name: "Transvestite"),
    descrtiption: "You dress and act as a member of the opposite gender, and expect to be treated as such. Note that this is not a delusion — you know what your physical gender is, but choose to live as the other gender. In Christian and Muslim lands you are regarded as a freak, and are often shunned, laughed at, or even chased out of town. However, these problems will only arise if others realize you are not a mem- ber of the gender you are living as. Because of your long experience living as a member of your chosen gender, attempting to live as a member of your physical gender will result in a –3 to all social skill rolls for as long as the char- acter attempts to live as this gender.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  true_love_major = Flaw.create!(name: "True Love"),
    descrtiption: "You have found the one person meant for you in all of creation, and the bond between the two of you cannot be sundered. Whenever you are suffering, in danger, or dejected, the thought of your love will give you strength to persevere. In dire need, he may even come to rescue you. More often, he will be in trouble and need res- cuing. If any enchantment keeps you from your true love’s side, the power of your devotion can probably break it. Your love is higher than mor- tal magic, and no magic can make you hate your love, or make you truly betray him. Your True Love must be a non-player character. To have another player character as your True Love, see the True Love Virtue on page 50.
      This Story Hook may be renamed “True Friend” to cover characters with whom you are very closely linked, but not in a romantic way.
      If the True Love is significantly weaker than the player character, and not able to pro- vide useful assistance in most cases, this is a Major Flaw. If the True Love is competent, equal to or better than the player character, then this is only a Minor Flaw. The True Love may need rescuing occasionally, but more often he will involve the player character in his plans.",
    flaw_type: "Story",
    book: "Core",
    major: true)

  true_love_minor = Flaw.create!(name: "True Love"),
    descrtiption: "You have found the one person meant for you in all of creation, and the bond between the two of you cannot be sundered. Whenever you are suffering, in danger, or dejected, the thought of your love will give you strength to persevere. In dire need, he may even come to rescue you. More often, he will be in trouble and need res- cuing. If any enchantment keeps you from your true love’s side, the power of your devotion can probably break it. Your love is higher than mor- tal magic, and no magic can make you hate your love, or make you truly betray him. Your True Love must be a non-player character. To have another player character as your True Love, see the True Love Virtue on page 50.
      This Story Hook may be renamed “True Friend” to cover characters with whom you are very closely linked, but not in a romantic way.
      If the True Love is significantly weaker than the player character, and not able to pro- vide useful assistance in most cases, this is a Major Flaw. If the True Love is competent, equal to or better than the player character, then this is only a Minor Flaw. The True Love may need rescuing occasionally, but more often he will involve the player character in his plans.",
    flaw_type: "Story",
    book: "Core",
    major: false)

  twilight_prone = Flaw.create!(name: "Twilight Prone"),
    descrtiption: "You either enjoy or cannot help running excessive amounts of magic through you when you cast spells. You must roll to resist Twilight on a single magical botch, rather than on a double botch like most magi.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  unimaginative_learner = Flaw.create!(name: "Unimaginative Learner"),
    descrtiption: "You have trouble figuring things out for yourself. Subtract three from rolls when you study from raw vis.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  unpredictable_magic = Flaw.create!(name: "Unpredictable Magic"),
    descrtiption: "You always roll a stress die when using magic, even if completely relaxed. If you choose to cast a spontaneous spell without expending fatigue, you must still roll to check for a botch, although the roll does not add to your Casting Total. Even if you have mastered a spell, you must always roll at least one botch die.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  unstructured_caster = Flaw.create!(name: "Unstructured Caster"),
    descrtiption: "You have never quite mastered the intrica- cies of spellcasting, and are unable to perform formulaic magic without extreme effort. You cast all formulaic spells as though they were rit- ual spells (including the need for vis), and you may not learn ritual spells at all. You cast spon- taneous spells normally.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  visions = Flaw.create!(name: "Visions"),
    descrtiption: "You often see images related to emotionally or magically laden events. A vision might be of the past, a possible future, or a distant occurrence, and is often symbolic or confusing. Visions usually come to you at quiet times or in places connected with a powerful emotional or magical event, such as the site of a patricide or diabolic sacrifice. Your visions may warn you of dangers to come, or involve you in matters you would otherwise avoid.
      The visions come purely at the sto- ryguide’s discretion, and reveal only what he wants to reveal.",
    flaw_type: "Supernatural",
    book: "Core",
    major: false)

  vow = Flaw.create!(name: "Vow"),
    descrtiption: "You have sworn to do something difficult, and breaking your vow is a serious matter. Example vows include never raising a weapon, never speaking, or living in poverty. If you do fail to uphold your vow, you must perform some kind of atonement, whether it be reli- gious penance or coming to terms with your failure in some other way. Furthermore, your Confidence Score drops by one until you atone. Depending on your vow, some people may respect your dedication, giving you a good Reputation of level 1 among those people.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  warped_magic = Flaw.create!(name: "Warped Magic"),
    descrtiption: "Your magic is accompanied by some unpleasant side effect that always manifests itself the same way, but with increasing intensi- ty according to the level of the spell. Examples include nearby items become hot or nearby plant matter becomes shriveled and wilted. This effect may cause trouble from time to time, but is usually just annoying.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  waster_of_vis = Flaw.create!(name: "Waster of Vis"),
    descrtiption: "When you use raw vis you waste one quarter (rounded up) of the pawns you apply. The lost raw vis does not apply to the magical effect being enacted but does count toward the total number of botch dice you must roll if you roll a zero. You must use a third again as many pawns as usual when casting a ritual spell, and if you want to improve an Art score by study- ing raw vis, you must use a third again as many pawns as usual. This Flaw applies to all occa- sions on which you use vis, including certamen, laboratory work, and boosting penetration. Wasted pawns count toward the maximum number you can use at one time.
      For example, if you would normally use 12 pawns, you use 16, and 4, one quarter of those you use, are wasted. If you would normally need 10 pawns, you use 14, because 4 pawns are wasted.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  weak_characteristics = Flaw.create!(name: "Weak Characteristics"),
    descrtiption: "You have three fewer points to spend buy- ing Characteristics than most characters. You may take this Flaw twice, leaving you with only one point to spend.",
    flaw_type: "General",
    book: "Core",
    major: false)

  weak_enchanter = Flaw.create!(name: "Weak Enchanter"),
    descrtiption: "Your Gift is ill attuned to creating enchanted devices. Halve your Lab Total whenever you create or investigate an enchant- ed item. If you have a Deficiency that counts as part of the Lab Total, apply the Deficiency first and then halve the remaining total.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  weak_magic = Flaw.create!(name: "Weak Magic"),
    descrtiption: "Your magic is particularly bad at penetrat- ing magic resistance. You halve the normal Penetration Total for all spells, and only get half the normal benefit when instilling Penetration into an item. Note that you halve the Penetration Total, after subtracting the spell level and making any adjustments for the use of Arcane Connections. You do not halve the Casting Total and calculate Penetration from that.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  weak_magic_resistance = Flaw.create!(name: "Weak Magic Resistance"),
    descrtiption: "Any form of magic resistance you gener- ate is much weaker under relatively common circumstances which are fairly easy for an opponent to utilize, such as when you are wet or facing away from the caster of the spell. If the conditions are met, do not subtract the level of the effect from the casting total before calculating Penetration. You would be well advised to keep your weakness from being dis- covered by too many potential enemies.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  weak_parens = Flaw.create!(name: "Weak Parens"),
    descrtiption: "Your parens was less powerful and a worse teacher than normal. You gain 60 fewer experi- ence points and 30 fewer spell levels from apprenticeship, for a total of 180 experience points and 90 levels of spells.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  weak_scholar = Flaw.create!(name: "Weak Scholar"),
    descrtiption: "You don’t understand what others teach you very well. You get a –6 penalty to Lab Totals when working from the Lab Texts of others, including when re-inventing spells.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  weak_spontaneous_magic = Flaw.create!(name: "Weak Spontaneous Magic"),
    descrtiption: "You may not exert yourself when casting spontaneous magic, so you always divide your Casting Total by five. In stressful conditions you must still roll a stress die to see if you botch, but the die roll does not add to your casting total. You may still use ceremonial casting.
      This Flaw may be combined with Difficult Spontaneous Magic to create a magus who can- not cast spontaneous magic at all.",
    flaw_type: "Hermetic",
    book: "Core",
    major: true)

  weakness = Flaw.create!(name: "Weakness"),
    descrtiption: "You have a soft spot for some sort of object or person. In the face of this, all else is unimportant: promises are forgotten, duties neglected, and common sense cast to the winds. Examples include poets and storytellers, food, flattery, or a pretty face.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  weak_willed = Flaw.create!(name: "Weak-Willed"),
    descrtiption: "You look to others for guidance rather than to yourself. Those who try to fool, intim- idate, or manipulate you gain +3 to their rolls. What you need more than anything else is to find someone you can trust.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

  weird_magic = Flaw.create!(name: "Weird Magic"),
    descrtiption: "Your control over magic is somewhat loose, perhaps due to Twilight effects or idio- syncratic training. Roll one extra botch die when you roll a zero on stressed spell casting rolls, apart from your other botch dice. Botches from this die should be strange or bizarre rather than dangerous, and if the Weird Magic botch occurs along with a regular botch, the results could be truly spectacular.",
    flaw_type: "Hermetic",
    book: "Core",
    major: false)

  wrathful_major = Flaw.create!(name: "Wrathful"),
    descrtiption: "You are prone to anger over the smallest issues, and your rage when you are thwarted in something major is terrible to behold.",
    flaw_type: "Personality",
    book: "Core",
    major: true)

  wrathful_minor = Flaw.create!(name: "Wrathful"),
    descrtiption: "You are prone to anger over the smallest issues, and your rage when you are thwarted in something major is terrible to behold.",
    flaw_type: "Personality",
    book: "Core",
    major: false)

end