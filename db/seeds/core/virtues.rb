
module Virtues

  Virtue.destroy_all

  # 5th Edition
  # Core Rule Book
  the_gift = Virtue.create!(name: "The Gift",
    description: "The Gift is a special Virtue, because it has no cost. The character suffers all the penalties of The Gift, just as magi do, but can be taught Supernatural Abilities without having to take the corresponding Virtues. Most importantly, the character can be taught Hermetic Magic, so all magi must have this Virtue. A character with The Gift, even if he is not a magus, may take Hermetic Virtues and Flaws which relate to intrinsic ability rather than background or training. Characters may take Virtues that grant Supernatural Abilities without taking The Gift, and such characters do not suffer the penalties imposed by The Gift. However, such characters may not learn new Supernatural Abilities in the course of the saga, although they may improve the ones they already have. Characters who have The Gift may start play with a single Supernatural Ability, without having to take any other Virtue, but if they wish to learn others they must find opportunities to learn others in the course of the saga. They may also take Virtues granting Supernatural Abilities if they wish to have more Abilities at character creation. Note that it is harder for a character with Supernatural Abilities to become a Hermetic magus, so you may not wish to take any abilities if you plan for the character to become an apprentice. The ability to cast Hermetic magic is the single supernatural ability possessed by Hermetic magi in virtue of The Gift; again, they may take more Supernatural Ability Virtues if they wish. Grogs can never have The Gift, as a character with The Gift is too important to be a grog. As a rule, companions should only have The Gift if they are intended to become magi. Troupes should not allow any other Gifted characters unless they are absolutely sure that they want them.",
    book: "Core",
    virtue_type: "Special")

  adept_laboratory_student = Virtue.create!(name: "Adept Laboratory Student",
    description: "You digest the instruction of others quite easily. You get a +6 bonus to Lab Totals when working from the lab texts of others, including when reinventing spells.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  affinity_with_ability = Virtue.create!(name: "Affinity With (Ability)"),
    description: "All Study Totals for one Ability are increased by half, as are any experience points you put in that Ability at character creation. You may only take this Virtue once for a given Ability, but may take it again for different Abilities. If you take this Virtue for an Ability, you may exceed the normal age-based cap dur- ing character generation (see page 31) by two points for that Ability.",
    book: "Core",
    virtue_type: "General",
    major: false)

  affinity_with_art = Virtue.create!(name: "Affinity With (Art)"),
    description: "Your Study Totals for one Hermetic Art are increased by one half, rounded up. At char- acter creation, any experience points you put into that Art are also increased by one half (rounded up), and you may exceed the normal recommended limits. You may take this Virtue twice, for two different Arts.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  animal_ken = Virtue.create!(name: "Animal Ken"),
    description: "You can communicate with animals as if they were human beings. Choosing this Virtue confers the Ability Animal Ken 1 (page 62).",
    book: "Core",
    virtue_type: "Supernatural",
    major: false)

  apt_student = Virtue.create!(name: "Apt Student"),
    description: "You are particularly good at learning from others. When being taught by someone else, add five to your Advancement Total.",
    book: "Core",
    virtue_type: "General",
    major: false)

  arcane_lore = Virtue.create!(name: "Arcane Lore"),
    description: "You may take Arcane Abilities during character generation. Unless you have The Gift, you cannot learn Parma Magica. You get an additional 50 experience points, which must be spent on Arcane Abilities.
    A Gifted character who is not a Hermetic magus and knows Parma Magica must take the Major Story Flaw Enemy: Entire Order of Hermes, as magi are bound by their Oath to slay the character on sight, unless he immedi- ately joins the Order. Such a character cannot be played in a normal saga, as the other player characters have to kill him.",
    book: "Core",
    virtue_type: "General",
    major: false)

  berserk = Virtue.create!(name: "Berserk"),
    description: "You are capable of entering a blinding rage when in combat or frustrating situations. You automatically gain the Personality Trait Angry +2 (or more, at your option). Any time you take a wound or wound an enemy, roll a stress die and add your Angry score. A roll of 9+ means you go berserk. The storyguide can also call for a roll when you are strongly frus- trated. You may deliberately try to go berserk. In this case, you only need a 6+ when you take a wound or wound an enemy, or a 9+ if you have not been wounded or caused a wound. While berserk, you get +2 to Attack and Soak scores, but suffer a –2 penalty to Defense. While berserk, you cannot retreat, hesitate to attack, or give quarter. If you are still berserk when there are no enemies present, you attack your friends. You may roll once per round to calm down if you desire, requiring a stress die + Perception — Angry against an Ease Factor of 6. You may learn Martial Abilities at charac- ter creation.",
    book: "Core",
    virtue_type: "General",
    major: false)

  book_learner = Virtue.create!(name: "Book Learner"),
    description: "You have a talent for comprehending the writings of others. When studying from books, treat them as if they were three Quality levels higher than they actually are.",
    book: "Core",
    virtue_type: "General",
    major: false)

  cautious_sorcerer = Virtue.create!(name: "Cautious Sorcerer"),
    description: "You are very careful with magic, and are less likely to fail spectacularly if you do fail. You roll three fewer botch dice when casting spells (either spontaneous or formulaic), and when working in the laboratory. This Virtue may not reduce the number of botch dice rolled below one. However, its effects are applied before any other effects which reduce botch dice, such as spell mastery (see page 86), and they may reduce the number of botch dice to zero.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  cautious_with_ability = Virtue.create!(name: "Cautious With (Ability)"),
    description: "You are very careful with a specific Ability, and are less likely to fail spectacularly if you do fail when using it. You roll two fewer botch dice than normal whenever you are required to roll botch dice for that Ability. This may mean that you roll no botch dice. This Virtue may apply to any Ability, even one you cannot learn at character creation.",
    book: "Core",
    virtue_type: "General",
    major: false)

  clear_thinker = Virtue.create!(name: "Clear Thinker"),
    description: "You think logically and rationally. You get a +3 bonus on all rolls to resist lies, confusion, befuddlement, and subterfuge — whether mag- ical or mundane.",
    book: "Core",
    virtue_type: "General",
    major: false)

  clerk = Virtue.create!(name: "Clerk"),
    description: "You are a member of the literate class and are either a professional scribe, accountant, lawyer, student, or functionary. Due to your training, you may take Academic Abilities dur- ing character generation. If you are male, you may be in minor orders (acolyte, exorcist, lec- tor, or door-keeper), in which case you may marry and still benefit from being a member of the clergy and as such subject to canon rather than secular law (see page 205). Male charac- ters may also be sub-deacons or deacons, the lesser two holy orders, in which case they would normally be expected to be unmarried. However, if they were already married, and promise complete sexual abstinence, they may still be ordained to these orders. A man may not marry after ordination to holy orders. Those in holy orders are also subject to canon, rather than secular, law. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    book: "Core",
    virtue_type: "Social Status",
    major: false)

  common_sense = Virtue.create!(name: "Common Sense"),
    description: "Whenever you are about to do something contrary to what is sensible in the game setting, common sense (the storyguide) alerts you to the error. This is an excellent Virtue for a beginning player, as it legitimizes any help the storyguide may give.",
    book: "Core",
    virtue_type: "General",
    major: false)

  covenfolk = Virtue.create!(name: "Covenfolk"),
    description: "You are a member of the covenant staff, and may have lived there all your life. You are supported by the covenant, and so your stan- dard of living is determined by the covenant’s resources rather than your own. You may not take the Wealthy Major Virtue or the Poor Major Flaw.",
    book: "Core",
    virtue_type: "Social Status",
    major: false,
    free: true)

  craftsman = Virtue.create!(name: "Craftsman"),
    description: "You live by making and selling goods. You are probably a free resident of a town, but you may be from a rural area. The Wealthy Major Virtue and Poor Major Flaw affect you normally.",
    book: "Core",
    virtue_type: "Social Status",
    major: false,
    free: true)

  custos = Virtue.create!(name: "Custos"),
    description: "You are an employee of a covenant, but you have high status within the walls. You may be a grog, or a specialist, or a manager. You may take one group of restricted Abilities dur- ing character generation, either Martial, Academic, or Arcane Abilities. If you choose Martial or Arcane Abilities, you may still learn to speak Latin, although you cannot read or write it. As a covenant employee, your wealth is determined by the covenant’s prosperity, and you may not take the Wealthy Virtue or Poor Flaw. This Virtue is available to male and female characters.
    This Virtue may also apply to employees of other institutions, such as a noble household or a monastery.",
    book: "Core",
    virtue_type: "Social Status",
    major: false)

  cyclic_magic_positive = Virtue.create!(name: "Cyclic Magic (Positive)"),
    description: "Your magic is attuned to some cycle of nature (solar, lunar, or seasonal, for example) and as such, is more potent at specific times. At those times, you receive a +3 bonus to all spell rolls. The bonus also applies to Lab Totals if the posi- tive part of the cycle covers the whole season. The cycle of your magic must be regular and approved by the storyguide. Furthermore, the length of time when the bonus applies must be equal to the amount of time when it does not.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  death_prophecy = Virtue.create!(name: "Death Prophecy"),
    description: "You have been blessed or cursed as to your fate. Someone (a magician, a faerie, or other supernatural creature) has put a condition on your death, and until the condition is met, you will not die, though you can be seriously injured. You heal normally, but cannot die as a result of wounds or old age. Unfortunately for you, fate or bad planning can bring about the conditions in unexpected ways. If, for instance, your death condition is to fear only boars, you should be wary of men bearing boars on their coats of arms or of inns named after boars, in addition to the purely mundane creature. This symbolism may not be obvious: a man known as a “pig” in his village might also count as a boar.
    The storyguide must keep the prophecy in mind and give fair warning of items related to the prophecy. This is a Major Virtue because the character knows he can get away with insane risks; sneaking his prophecy up on him is an unfair way of negating the value of the Virtue. Players may only take this Virtue with the agreement of the storyguide or troupe.",
    book: "Core",
    virtue_type: "General",
    major: true)

  deft_form = Virtue.create!(name: "Deft Form"),
    description: "You are particularly skilled with one Form. You suffer no penalty to the Casting Total casting spells in that Form when using non-standard voicings/gestures (see page 83), including using no voice or gestures because you are in a non-human form. Voice Range spells still have a Range based on how loudly you are speaking.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  diedne_magic = Virtue.create!(name: "Diedne Magic"),
    description: "Your magic lineage and traditions are from the druids and the vanquished former house of Diedne, making you especially skilled with spontaneous magic. When you cast a spontaneous spell without expending fatigue, you may choose to divide by five or by two. If you choose to divide by five, you need not roll a stress die, and cannot botch, just as normal. If you choose to divide by two, you must roll a stress die, and may botch.
    When you expend fatigue on casting a spontaneous spell, the lowest applicable Art is doubled before the whole total is divided by two. You still roll a stress die, and may botch.
    You must keep your lineage hidden from the Order, giving you the Major Story Flaw Dark Secret. This is in addition to your normal allowance of Flaws, and does not grant you any points with which to buy Virtues.",
    book: "Core",
    virtue_type: "Hermetic",
    major: true)

  dowsing = Virtue.create!(name: "Dowsing"),
    description: "You have the ability to find things nearby through the use of a dowsing rod (usually a forked stick) and your own intuitive sense. Choosing this Virtue confers the Ability Dowsing 1 (page 64).",
    book: "Core",
    virtue_type: "Supernatural",
    major: true)

  educated = Virtue.create!(name: "Educated"),
    description: "You have been educated in a grammar school, and may have attended a university or cathedral school. You may purchase Academic Abilities during character generation. During character generation you get an additional 50 experience points, which must be spent on Latin and Artes Liberales.",
    book: "Core",
    virtue_type: "General",
    major: false)

  elemental_magic = Virtue.create!(name: "Elemental Magic"),
    description: "You have been trained in the ability to manipulate raw elemental forms (Ignem, Auram, Terram and Aquam), and view them as a connected whole rather than four separate Arts. Whenever you successfully study one of these Arts (that is, gain at least one experience point from study), you gain an additional expe- rience point in each of the other three.
    Your elemental magics are also more flex- ible than those of other magi — there is no dis- advantage in adding elemental Form requisites to any elemental spell. If an Aquam, Auram, Ignem, or Terram spell has another element as a requisite, you may ignore the requisite. You must still use the primary Art, even if the req- uisite is higher.",
    book: "Core",
    virtue_type: "Hermetic",
    major: true)

  enchanting_music = Virtue.create!(name: "Enchanting Music"),
    description: "When you set your mind to it, you can magically induce emotions and beliefs in others with your music. Choosing this Virtue confers the Ability Enchanting Music 1 (page 65).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  enduring_constitution = Virtue.create!(name: "Enduring Constitution"),
    description: "You can withstand pain and fatigue. Decrease the penalties for reduced Fatigue lev- els by one point, and reduce your total penalty from wounds by one point (but not below zero). You also get +3 on rolls to resist pain.",
    virtue_type: "General",
    book: "Core",
    major: false)

  enduring_magic = Virtue.create!(name: "Enduring Magic"),
    description: "The effects of your spells tend to last longer than usual (though Concentration, Momentary, and Ring spells remain just that). The storyguide secretly rolls a simple die; the number rolled is a multiple to the spell’s normal duration. This is usually, but not always, a good thing. This Virtue does not affect the duration of Ritual spells.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  the_enigma = Virtue.create!(name: "The Enigma"),
    description: "You have been initiated into the Outer Mystery of The Enigma (see page 92), and thus are a member of House Criamon. Note that all Criamon magi get this Virtue free at character creation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  entrancement = Virtue.create!(name: "Entrancement"),
    description: "You have the power to control another’s will by staring into their eyes and giving them a verbal command. Choosing this Virtue con- fers the Ability Entrancement 1 (page 65).",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  faerie_blood = Virtue.create!(name: "Faerie Blood"),
    description: "Somewhere in your ancestry there is a faerie, and this relation gives you an intuitive grasp of the motivations and personalities of those mystical folk. Faeries are more comfort- able around you than around other humans, and given time, may even forget the mortal blood in your veins.
      You are resistant to aging, and get –1 to all aging rolls.
      Type of Faerie Blood (pick one, or create a similar one):
      Dwarf Blood: You are descended from the master craftsmen of the fay, and get a +1 bonus to any total including a Craft Ability.
      Goblin Blood: Your ancestors were the sneaky inhabitants of the shadows under- ground, and you get a +1 bonus on all totals involving stealth.
      Satyr Blood: The satyrs are notoriously lecherous. You get a +1 bonus to Communication and Presence totals when dealing with sexually compatible characters.
      Sidhe Blood: You are descended from one of the noble fay who rule the lands of Summer and sunlight. Because of the striking and unusu- al qualities of your nature add +1 to your Presence, but not to more than +3. Many mor- tals may consider you fascinating or alluring.
      Undine Blood: The undines are the faeries of the water, and you get a +2 bonus to any action taken underwater, which will par- tially offset any penalty applied.
      Characters with Faerie Blood can learn Faerie Lore at character generation.",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  faerie_magic = Virtue.create!(name: "Faerie Magic"),
    description: "You have been initiated into the Outer Mystery of Faerie Magic (see page 92), and thus are a member of House Merinita. Note that all Merinita magi gain this Virtue for free at character generation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  failed_apprentice = Virtue.create!(name: "Failed Apprentice"),
    description: "You were once apprenticed to a mage, but something kept you from completing your stud- ies. Perhaps your Gift was incomplete or some grievous mishap robbed you of it altogether. You may still work for your former master or for the covenant in some other capacity. Magi welcome you and have compassion for you — those who are given to such emotions, anyway. You may learn Academic and Arcane Abilities during character creation, and you are familiar with the lives of magi. You may not have The Gift, but if your Gift was not completely destroyed, you may have some Supernatural Abilities. You may learn Magic Theory and serve a magus as a lab- oratory assistant. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  famous = Virtue.create!(name: "Famous"),
    description: "You have a good Reputation of level 4. Choose any reputation you like (it need not be justified), and one type.",
    virtue_type: "General",
    book: "Core",
    major: false)

  fast_caster = Virtue.create!(name: "Fast Caster"),
    description: "Your magic takes less time to perform than that of other magi. You gain +3 to Initiative to cast spells in combat.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  flawless_magic = Virtue.create!(name: "Flawless Magic"),
    description: "You automatically master every spell that you learn. All your spells start with a score of 1 in the corresponding Ability. You may choose a different special ability for every spell you have. Further, all experience points you put into Spell Mastery Abilities are doubled.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  flexible_formulaic_magic = Virtue.create!(name: "Flexible Formulaic Magic"),
    description: "You can vary the effects of formulaic spells to a slight degree, while still getting the benefits of casting known magic. You may raise or lower the casting level of the spell by five to raise or lower one (only) of Range, Duration, and Target by one step, as long as this does not violate any of the normal limits on formulaic magic. Casting success, fatigue loss, and Penetration are all calculated based on the cast- ing level of the spell. You cannot manipulate Ritual magic in this way.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  free_expression = Virtue.create!(name: "Free Expression"),
    description: "You have the imagination and creativity needed to compose a new ballad or to paint an original picture, and have the potential to be a great artist. You get a +3 bonus on all rolls to create a new work of art.",
    virtue_type: "General",
    book: "Core",
    major: false)

  free_study = Virtue.create!(name: "Free Study"),
    description: "You are better at figuring things out for yourself than you are at poring over books. Add +3 to rolls when studying from raw vis.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  gentle_gift = Virtue.create!(name: "Gentle Gift"),
    description: "Unlike other magi, whose Magical nature disturbs normal people and animals, your Gift is subtle and quiet. You don’t suffer the usual penal- ties when interacting with people and animals.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  gentleman_woman = Virtue.create!(name: "Gentleman/Woman"),
    description: "You are a minor member (possibly illegit- imate) of a noble family. You do not stand to inherit from your relatives, but are still treated as one of their own and may be addressed as “Lord” or “Lady.” You probably reside near the covenant with your relatives. Although you do not want for anything, you have no vast wealth of your own. You may occasionally ask your family to buy expensive equipment for you, but you will need a convincing rationale. You are expected to wait on your relations much of the time or you will lose the benefits of family (though you will keep your social standing if you can otherwise maintain your normal lifestyle). The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  ghostly_warder = Virtue.create!(name: "Ghostly Warder"),
    description: "A ghost watches over you. It might be a grandparent, a childhood friend, or anyone else who cares for you enough to stay around after death. The ghost is invisible and silent to all but you and those with Second Sight (see page 67). It can see and hear what is going on around you and makes an excellent spy, since it can leave your presence once per day for up to half an hour. However, death does not leave people in their normal state of mind, so the ghost probably has some quirks that make it less than depend- able — it might even encourage you to join it on the other side. The ghost has 300 experience points in various Abilities that it can use to advise you, and ghosts may take any Abilities. See page 194 for an example of a ghostly warder.",
    virtue_type: "General",
    book: "Core",
    major: true)

  good_teacher = Virtue.create!(name: "Good Teacher"),
    description: "You can explain new concepts and skills with great facility. Add three to the Quality of any books that you write, and five to the Advancement Total of anyone who studies with you.",
    virtue_type: "General",
    book: "Core",
    major: false)

  giant_blood = Virtue.create!(name: "Giant Blood"),
    description: "The blood of the ancient race of giants flows in your veins. Though you are not as large as your ancestors, you are up to eight feet tall and can weigh as much as 500 pounds. Your Size is +2, so you take wounds in 7-point incre- ments, rather than the normal 5 (see page 171). You also gain +1 to both Strength and Stamina. This bonus may raise your scores in those Characteristics as high as +6. You cannot take this Virtue and Large, Small Frame, or Dwarf.",
    virtue_type: "General",
    book: "Core",
    major: true)

  gossip = Virtue.create!(name: "Gossip"),
    description: "You have regular social contacts in the area that provide you with all kinds of informa- tion about local social and political goings-on. On a simple roll of 6+, you hear interesting news before almost everyone else. You treat all local Reputations as twice their actual level. With some well-placed words, you may be able to bestow new Reputations (whether deserved or not). You quite likely have a Reputation, too — as a gossip.",
    virtue_type: "General",
    book: "Core",
    major: false)

  great_characteristic = Virtue.create!(name: "Great (Characteristic)"),
    description: "You may raise any Characteristic that already has a score of at least +3 by one point, to no more than +5. Make sure you describe what it is about you that causes that increase (such as sheer bulk, a lean build, or extreme charisma). You may take this Virtue twice for the same Characteristic, and for more than one Characteristic.",
    virtue_type: "General",
    book: "Core",
    major: false)

  greater_immunity = Virtue.create!(name: "Greater Immunity"),
    description: "You are completely immune to one hazard which is both common and potentially deadly. For example, you might be immune to fire or to iron (and only iron) weapons. You may not take immunity to aging — see the Unaging Supernatural Minor Virtue (page 50) instead. This immunity applies to mundane and magical versions of the thing. If you are immune to fire, you are also immune to magically created fire.",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  greater_purifying_touch = Virtue.create!(name: "Greater Purifying Touch"),
    description: "You can, with a touch and the expenditure of a Fatigue level, cure a single serious disease. This disease should be either life-threatening or seriously disabling, and should be one from which people do not normally recover by themselves. You must choose the disease that you can cure when you take this Virtue, and you can only cure that disease. You can only choose a disease, not other types of injury or misfortune. See page 180 for more information on diseases.",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  guardian_angel = Virtue.create!(name: "Guardian Angel"),
    description: "You have learned to hear the words of a divine watcher who gives you practical and spiritual advice. The angel whispers in your ear and tells you what is best for you spiritually, rather than materially. He approves of violence only when there is a holy reason — often diffi- cult to demonstrate. If you act against the angel’s advice, he may leave you until you cor- rect your ways. The angel has only a limited awareness of your thoughts, but when you speak aloud, he can hear and converse with you.
    Your guardian angel can also help in two practical ways. First, he can grant you a +5 bonus to Soak. Second, he can grant you a Magic Resistance of 15. This magic resistance is not compatible with a magus’s Parma Magica, or magic resistance from most other sources, but it does add to the magic resistance resulting from Faith Points (see page 189). The angel only grants you these bonuses if you are acting in accordance with God’s will.",
    virtue_type: "General",
    book: "Core",
    major: true)

  harnessed_magic = Virtue.create!(name: "Harnessed Magic"),
    description: "You have great control over your spells. You are able to cancel any of your spells simply by concentrating. You can even cancel the magic in magic items which you created. The act of canceling your magic should be treated as if you were casting a spell for timing and concentration purposes. If you are distracted and fail a Concentration roll, another attempt may be made in a later round. Spells and magic items can be canceled out over any distance, but once they have been canceled, you must recast a spell or reinvest a power in a magic item to start the effect again.
      The drawback is that when you die, all of your spells and magic items sputter out.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  heartbeast = Virtue.create!(name: "Heartbeast"),
    description: "You have been initiated into the Outer Mystery of the Heartbeast (see page 91), and thus are a member of House Bjornaer. Note that all Bjornaer magi gain this Virtue for free at character creation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  hermetic_magus = Virtue.create!(name: "Hermetic Magus"),
    description: "You are a member of the Order of Hermes. All magi must take this as their Social Status, and only magi may take it.",
    virtue_type: "Social Status",
    book: "Core",
    major: false,
    free: true)

  hermetic_prestige = Virtue.create!(name: "Hermetic Prestige"),
    description: "Because of something in your back- ground, other magi look up to you even if you haven’t earned their respect. Some envy you, and most will certainly expect more from you than from others. You gain a Reputation of level 3 within the Order.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  improved_characteristics = Virtue.create!(name: "Improved Characteristics"),
    description: "You have an additional three points to spend on buying Characteristics, but you are still limited to a maximum score of +3 in any single Characteristic unless you take the Virtue Great Characteristic. You may take this Virtue multiple times.",
    virtue_type: "General",
    book: "Core",
    major: false)

  inoffensive_to_animals = Virtue.create!(name: "Inoffensive To Animals"),
    description: "Your Gift does not bother animals, although it still has the normal effects on peo- ple. Animals with a Might score might react either way, depending on the animal. As a rule, if the animal reacts positively to The Gift most of the time, it reacts positively to you because you do have The Gift. If it reacts negatively, this Virtue over-rides it. UnGifted characters may take this Virtue if they have the Flaw Magical Air (page 56).",
    virtue_type: "General & Hermetic",
    book: "Core",
    major: false)

  inspirational = Virtue.create!(name: "Inspirational"),
    description: "You are a stirring speaker or a heroic fig- ure, and can urge people to great efforts. You give targets a +3 bonus to rolls for appropriate Personality Traits.",
    virtue_type: "General",
    book: "Core",
    major: false)

  intuition = Virtue.create!(name: "Intuition"),
    description: "You have a natural sensitivity that allows you to make the right decisions more often than luck can account for. Whenever you are given a choice in which luck plays a major role (such as deciding which of three unexplored paths to fol- low), you have a good chance of choosing cor- rectly. The storyguide should secretly roll a sim- ple die. On a 6+, your intuition kicks in and you make whatever might be considered the “right” decision. Otherwise, you fail to get any flash of insight and must make the decision without aid.",
    virtue_type: "General",
    book: "Core",
    major: false)

  inventive_genius = Virtue.create!(name: "Inventive Genius"),
    description: "Invention comes naturally to you. You receive +3 on Lab Totals when you invent new spells, craft magic items, and make potions. If you experiment, you get +6.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  keen_vision = Virtue.create!(name: "Keen Vision"),
    description: "You can see farther and more clearly than most. You get a +3 bonus to all rolls involving sight, not including attacks with missile weapons.",
    virtue_type: "General",
    book: "Core",
    major: false)

  knight = Virtue.create!(name: "Knight"),
    description: "You are a knight, a member of the noble classes and one of the elite warriors of Europe. Unless you are Poor, you may have high quali- ty weapons and armor, and a horse. Typical armaments for a mid-13th century knight are lance, sword, heater shield, a complete mail suit, and a warhorse. You may take Martial Abilities during character generation. The Wealthy Virtue and Poor Flaw affect you nor- mally. This Virtue is only available to male characters, and is compatible with the Landed Noble Virtue.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  landed_noble = Virtue.create!(name: "Landed Noble"),
    description: "You owe fealty and service to a higher noble, and control land, serfs, and men-at- arms. You have half a dozen servants at your manor house, including a couple of body- guards. Your servants should be controlled by the rest of the troupe. You have sworn an Oath of Fealty, and so must balance this Virtue with that Flaw. You get the normal points for Oath of Fealty. You are wealthier than most charac- ters, but have no additional free time. You have the power to enforce the law within your fief, but you may not impose the death penalty, nor may you mutilate criminals. Floggings and fines are the normal penalties you impose.
      If you are Poor, your fief is either very small, or in a poor area for farming with few other resources. You must spend every season managing it, or it may collapse completely, leaving you effectively landless. You are no wealthier than most average characters, and you have only a couple of servants.
      Wealthy Landed Nobles control more than one fief, and have bailiffs or stewards for each, so that they do not need to devote any time to looking after their lands. You are signif- icantly richer than most Wealthy characters, and could afford to build a small castle or a large chapel within a cathedral. You have around fifty servants, including a significant number of warriors.
      This Status Virtue is compatible with the Knight Minor Status Virtue, but unlike that Virtue it’s available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: true)

  large = Virtue.create!(name: "Large"),
    description: "Your Size is +1 instead of 0, so you are between six and seven feet tall. This means that the severity of wounds you take increases in six point intervals rather than five point intervals. (See page 171). You cannot take both this Virtue and Giant Blood, Small Frame, or Dwarf.",
    virtue_type: "General",
    book: "Core",
    major: false)

  latent_magical_ability = Virtue.create!(name: "Latent Magical Ability"),
    description: "You have a magical quality that has not yet manifested itself. You probably do not real- ize you have this capacity; if you are a magus, your master failed to detect it during your apprenticeship. At the storyguide’s discretion, this quality might appear spontaneously or because of some relevant event (like drinking faerie wine). This is not The Gift, and the latent ability is more limited than that.",
    virtue_type: "General",
    book: "Core",
    major: false)

  # virtue_name = Virtue.create!(name: ""),
  #   description: "",
  #   virtue_type: "",
  #   book: "Core",
  #   major: false)

end