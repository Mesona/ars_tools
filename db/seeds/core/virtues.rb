
module Virtues

  Virtue.destroy_all

  # 5th Edition
  # Core Rule Book
  the_gift = Virtue.create!(name: "The Gift",
    description: "The Gift is a special Virtue, because it has no cost. The character suffers all the penalties of The Gift, just as magi do, but can be taught Supernatural Abilities without having to take the corresponding Virtues. Most importantly, the character can be taught Hermetic Magic, so all magi must have this Virtue. A character with The Gift, even if he is not a magus, may take Hermetic Virtues and Flaws which relate to intrinsic ability rather than background or training. Characters may take Virtues that grant Supernatural Abilities without taking The Gift, and such characters do not suffer the penalties imposed by The Gift. However, such characters may not learn new Supernatural Abilities in the course of the saga, although they may improve the ones they already have. Characters who have The Gift may start play with a single Supernatural Ability, without having to take any other Virtue, but if they wish to learn others they must find opportunities to learn others in the course of the saga. They may also take Virtues granting Supernatural Abilities if they wish to have more Abilities at character creation. Note that it is harder for a character with Supernatural Abilities to become a Hermetic magus, so you may not wish to take any abilities if you plan for the character to become an apprentice. The ability to cast Hermetic magic is the single supernatural ability possessed by Hermetic magi in virtue of The Gift; again, they may take more Supernatural Ability Virtues if they wish. Grogs can never have The Gift, as a character with The Gift is too important to be a grog. As a rule, companions should only have The Gift if they are intended to become magi. Troupes should not allow any other Gifted characters unless they are absolutely sure that they want them.",
    book: "Core",
    virtue_type: "Special",
    free: true)

  adept_laboratory_student = Virtue.create!(name: "Adept Laboratory Student",
    description: "You digest the instruction of others quite easily. You get a +6 bonus to Lab Totals when working from the lab texts of others, including when reinventing spells.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  affinity_with_ability = Virtue.create!(name: "Affinity With (Ability)",
    description: "All Study Totals for one Ability are increased by half, as are any experience points you put in that Ability at character creation. You may only take this Virtue once for a given Ability, but may take it again for different Abilities. If you take this Virtue for an Ability, you may exceed the normal age-based cap during character generation (see page 31) by two points for that Ability.",
    book: "Core",
    virtue_type: "General",
    creation_max: 5,
    major: false)

  affinity_with_art = Virtue.create!(name: "Affinity With (Art)",
    description: "Your Study Totals for one Hermetic Art are increased by one half, rounded up. At character creation, any experience points you put into that Art are also increased by one half (rounded up), and you may exceed the normal recommended limits. You may take this Virtue twice, for two different Arts.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  animal_ken = Virtue.create!(name: "Animal Ken",
    description: "You can communicate with animals as if they were human beings. Choosing this Virtue confers the Ability Animal Ken 1 (page 62).",
    book: "Core",
    virtue_type: "Supernatural",
    major: false)

  apt_student = Virtue.create!(name: "Apt Student",
    description: "You are particularly good at learning from others. When being taught by someone else, add five to your Advancement Total.",
    book: "Core",
    virtue_type: "General",
    major: false)

  arcane_lore = Virtue.create!(name: "Arcane Lore",
    description: "You may take Arcane Abilities during character generation. Unless you have The Gift, you cannot learn Parma Magica. You get an additional 50 experience points, which must be spent on Arcane Abilities.
    A Gifted character who is not a Hermetic magus and knows Parma Magica must take the Major Story Flaw Enemy: Entire Order of Hermes, as magi are bound by their Oath to slay the character on sight, unless he immediately joins the Order. Such a character cannot be played in a normal saga, as the other player characters have to kill him.",
    book: "Core",
    virtue_type: "General",
    major: false)

  berserk = Virtue.create!(name: "Berserk",
    description: "You are capable of entering a blinding rage when in combat or frustrating situations. You automatically gain the Personality Trait Angry +2 (or more, at your option). Any time you take a wound or wound an enemy, roll a stress die and add your Angry score. A roll of 9+ means you go berserk. The storyguide can also call for a roll when you are strongly frustrated. You may deliberately try to go berserk. In this case, you only need a 6+ when you take a wound or wound an enemy, or a 9+ if you have not been wounded or caused a wound. While berserk, you get +2 to Attack and Soak scores, but suffer a –2 penalty to Defense. While berserk, you cannot retreat, hesitate to attack, or give quarter. If you are still berserk when there are no enemies present, you attack your friends. You may roll once per round to calm down if you desire, requiring a stress die + Perception — Angry against an Ease Factor of 6. You may learn Martial Abilities at character creation.",
    book: "Core",
    virtue_type: "General",
    major: false)

  book_learner = Virtue.create!(name: "Book Learner",
    description: "You have a talent for comprehending the writings of others. When studying from books, treat them as if they were three Quality levels higher than they actually are.",
    book: "Core",
    virtue_type: "General",
    major: false)

  cautious_sorcerer = Virtue.create!(name: "Cautious Sorcerer",
    description: "You are very careful with magic, and are less likely to fail spectacularly if you do fail. You roll three fewer botch dice when casting spells (either spontaneous or formulaic), and when working in the laboratory. This Virtue may not reduce the number of botch dice rolled below one. However, its effects are applied before any other effects which reduce botch dice, such as spell mastery (see page 86), and they may reduce the number of botch dice to zero.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  cautious_with_ability = Virtue.create!(name: "Cautious With (Ability)",
    description: "You are very careful with a specific Ability, and are less likely to fail spectacularly if you do fail when using it. You roll two fewer botch dice than normal whenever you are required to roll botch dice for that Ability. This may mean that you roll no botch dice. This Virtue may apply to any Ability, even one you cannot learn at character creation.",
    book: "Core",
    virtue_type: "General",
    major: false)

  clear_thinker = Virtue.create!(name: "Clear Thinker",
    description: "You think logically and rationally. You get a +3 bonus on all rolls to resist lies, confusion, befuddlement, and subterfuge — whether magical or mundane.",
    book: "Core",
    virtue_type: "General",
    major: false)

  clerk = Virtue.create!(name: "Clerk",
    description: "You are a member of the literate class and are either a professional scribe, accountant, lawyer, student, or functionary. Due to your training, you may take Academic Abilities during character generation. If you are male, you may be in minor orders (acolyte, exorcist, lector, or door-keeper), in which case you may marry and still benefit from being a member of the clergy and as such subject to canon rather than secular law (see page 205). Male characters may also be sub-deacons or deacons, the lesser two holy orders, in which case they would normally be expected to be unmarried. However, if they were already married, and promise complete sexual abstinence, they may still be ordained to these orders. A man may not marry after ordination to holy orders. Those in holy orders are also subject to canon, rather than secular, law. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    book: "Core",
    virtue_type: "Social Status",
    major: false)

  common_sense = Virtue.create!(name: "Common Sense",
    description: "Whenever you are about to do something contrary to what is sensible in the game setting, common sense (the storyguide) alerts you to the error. This is an excellent Virtue for a beginning player, as it legitimizes any help the storyguide may give.",
    book: "Core",
    virtue_type: "General",
    major: false)

  covenfolk = Virtue.create!(name: "Covenfolk",
    description: "You are a member of the covenant staff, and may have lived there all your life. You are supported by the covenant, and so your standard of living is determined by the covenant’s resources rather than your own. You may not take the Wealthy Major Virtue or the Poor Major Flaw.",
    book: "Core",
    virtue_type: "Social Status",
    major: false,
    free: true)

  craftsman = Virtue.create!(name: "Craftsman",
    description: "You live by making and selling goods. You are probably a free resident of a town, but you may be from a rural area. The Wealthy Major Virtue and Poor Major Flaw affect you normally.",
    book: "Core",
    virtue_type: "Social Status",
    major: false,
    free: true)

  custos = Virtue.create!(name: "Custos",
    description: "You are an employee of a covenant, but you have high status within the walls. You may be a grog, or a specialist, or a manager. You may take one group of restricted Abilities during character generation, either Martial, Academic, or Arcane Abilities. If you choose Martial or Arcane Abilities, you may still learn to speak Latin, although you cannot read or write it. As a covenant employee, your wealth is determined by the covenant’s prosperity, and you may not take the Wealthy Virtue or Poor Flaw. This Virtue is available to male and female characters.
    This Virtue may also apply to employees of other institutions, such as a noble household or a monastery.",
    book: "Core",
    virtue_type: "Social Status",
    major: false)

  cyclic_magic_positive = Virtue.create!(name: "Cyclic Magic (Positive)",
    description: "Your magic is attuned to some cycle of nature (solar, lunar, or seasonal, for example) and as such, is more potent at specific times. At those times, you receive a +3 bonus to all spell rolls. The bonus also applies to Lab Totals if the positive part of the cycle covers the whole season. The cycle of your magic must be regular and approved by the storyguide. Furthermore, the length of time when the bonus applies must be equal to the amount of time when it does not.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  death_prophecy = Virtue.create!(name: "Death Prophecy",
    description: "You have been blessed or cursed as to your fate. Someone (a magician, a faerie, or other supernatural creature) has put a condition on your death, and until the condition is met, you will not die, though you can be seriously injured. You heal normally, but cannot die as a result of wounds or old age. Unfortunately for you, fate or bad planning can bring about the conditions in unexpected ways. If, for instance, your death condition is to fear only boars, you should be wary of men bearing boars on their coats of arms or of inns named after boars, in addition to the purely mundane creature. This symbolism may not be obvious: a man known as a “pig” in his village might also count as a boar.
    The storyguide must keep the prophecy in mind and give fair warning of items related to the prophecy. This is a Major Virtue because the character knows he can get away with insane risks; sneaking his prophecy up on him is an unfair way of negating the value of the Virtue. Players may only take this Virtue with the agreement of the storyguide or troupe.",
    book: "Core",
    virtue_type: "General",
    major: true)

  deft_form = Virtue.create!(name: "Deft Form",
    description: "You are particularly skilled with one Form. You suffer no penalty to the Casting Total casting spells in that Form when using non-standard voicings/gestures (see page 83), including using no voice or gestures because you are in a non-human form. Voice Range spells still have a Range based on how loudly you are speaking.",
    book: "Core",
    virtue_type: "Hermetic",
    major: false)

  diedne_magic = Virtue.create!(name: "Diedne Magic",
    description: "Your magic lineage and traditions are from the druids and the vanquished former house of Diedne, making you especially skilled with spontaneous magic. When you cast a spontaneous spell without expending fatigue, you may choose to divide by five or by two. If you choose to divide by five, you need not roll a stress die, and cannot botch, just as normal. If you choose to divide by two, you must roll a stress die, and may botch.
    When you expend fatigue on casting a spontaneous spell, the lowest applicable Art is doubled before the whole total is divided by two. You still roll a stress die, and may botch.
    You must keep your lineage hidden from the Order, giving you the Major Story Flaw Dark Secret. This is in addition to your normal allowance of Flaws, and does not grant you any points with which to buy Virtues.",
    book: "Core",
    virtue_type: "Hermetic",
    major: true)

  dowsing = Virtue.create!(name: "Dowsing",
    description: "You have the ability to find things nearby through the use of a dowsing rod (usually a forked stick) and your own intuitive sense. Choosing this Virtue confers the Ability Dowsing 1 (page 64).",
    book: "Core",
    virtue_type: "Supernatural",
    major: true)

  educated = Virtue.create!(name: "Educated",
    description: "You have been educated in a grammar school, and may have attended a university or cathedral school. You may purchase Academic Abilities during character generation. During character generation you get an additional 50 experience points, which must be spent on Latin and Artes Liberales.",
    book: "Core",
    virtue_type: "General",
    major: false)

  elemental_magic = Virtue.create!(name: "Elemental Magic",
    description: "You have been trained in the ability to manipulate raw elemental forms (Ignem, Auram, Terram and Aquam), and view them as a connected whole rather than four separate Arts. Whenever you successfully study one of these Arts (that is, gain at least one experience point from study), you gain an additional experience point in each of the other three.
    Your elemental magics are also more flexible than those of other magi — there is no disadvantage in adding elemental Form requisites to any elemental spell. If an Aquam, Auram, Ignem, or Terram spell has another element as a requisite, you may ignore the requisite. You must still use the primary Art, even if the requisite is higher.",
    book: "Core",
    virtue_type: "Hermetic",
    major: true)

  enchanting_music = Virtue.create!(name: "Enchanting Music",
    description: "When you set your mind to it, you can magically induce emotions and beliefs in others with your music. Choosing this Virtue confers the Ability Enchanting Music 1 (page 65).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  enduring_constitution = Virtue.create!(name: "Enduring Constitution",
    description: "You can withstand pain and fatigue. Decrease the penalties for reduced Fatigue levels by one point, and reduce your total penalty from wounds by one point (but not below zero). You also get +3 on rolls to resist pain.",
    virtue_type: "General",
    book: "Core",
    major: false)

  enduring_magic = Virtue.create!(name: "Enduring Magic",
    description: "The effects of your spells tend to last longer than usual (though Concentration, Momentary, and Ring spells remain just that). The storyguide secretly rolls a simple die; the number rolled is a multiple to the spell’s normal duration. This is usually, but not always, a good thing. This Virtue does not affect the duration of Ritual spells.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  the_enigma = Virtue.create!(name: "The Enigma",
    description: "You have been initiated into the Outer Mystery of The Enigma (see page 92), and thus are a member of House Criamon. Note that all Criamon magi get this Virtue free at character creation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  entrancement = Virtue.create!(name: "Entrancement",
    description: "You have the power to control another’s will by staring into their eyes and giving them a verbal command. Choosing this Virtue confers the Ability Entrancement 1 (page 65).",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  faerie_blood = Virtue.create!(name: "Faerie Blood",
    description: "Somewhere in your ancestry there is a faerie, and this relation gives you an intuitive grasp of the motivations and personalities of those mystical folk. Faeries are more comfortable around you than around other humans, and given time, may even forget the mortal blood in your veins.
      You are resistant to aging, and get –1 to all aging rolls.
      Type of Faerie Blood (pick one, or create a similar one):
      Dwarf Blood: You are descended from the master craftsmen of the fay, and get a +1 bonus to any total including a Craft Ability.
      Goblin Blood: Your ancestors were the sneaky inhabitants of the shadows underground, and you get a +1 bonus on all totals involving stealth.
      Satyr Blood: The satyrs are notoriously lecherous. You get a +1 bonus to Communication and Presence totals when dealing with sexually compatible characters.
      Sidhe Blood: You are descended from one of the noble fay who rule the lands of Summer and sunlight. Because of the striking and unusual qualities of your nature add +1 to your Presence, but not to more than +3. Many mortals may consider you fascinating or alluring.
      Undine Blood: The undines are the faeries of the water, and you get a +2 bonus to any action taken underwater, which will partially offset any penalty applied.
      Characters with Faerie Blood can learn Faerie Lore at character generation.",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  faerie_magic = Virtue.create!(name: "Faerie Magic",
    description: "You have been initiated into the Outer Mystery of Faerie Magic (see page 92), and thus are a member of House Merinita. Note that all Merinita magi gain this Virtue for free at character generation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  failed_apprentice = Virtue.create!(name: "Failed Apprentice",
    description: "You were once apprenticed to a mage, but something kept you from completing your studies. Perhaps your Gift was incomplete or some grievous mishap robbed you of it altogether. You may still work for your former master or for the covenant in some other capacity. Magi welcome you and have compassion for you — those who are given to such emotions, anyway. You may learn Academic and Arcane Abilities during character creation, and you are familiar with the lives of magi. You may not have The Gift, but if your Gift was not completely destroyed, you may have some Supernatural Abilities. You may learn Magic Theory and serve a magus as a laboratory assistant. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  famous = Virtue.create!(name: "Famous",
    description: "You have a good Reputation of level 4. Choose any reputation you like (it need not be justified), and one type.",
    virtue_type: "General",
    book: "Core",
    major: false)

  fast_caster = Virtue.create!(name: "Fast Caster",
    description: "Your magic takes less time to perform than that of other magi. You gain +3 to Initiative to cast spells in combat.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  flawless_magic = Virtue.create!(name: "Flawless Magic",
    description: "You automatically master every spell that you learn. All your spells start with a score of 1 in the corresponding Ability. You may choose a different special ability for every spell you have. Further, all experience points you put into Spell Mastery Abilities are doubled.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  flexible_formulaic_magic = Virtue.create!(name: "Flexible Formulaic Magic",
    description: "You can vary the effects of formulaic spells to a slight degree, while still getting the benefits of casting known magic. You may raise or lower the casting level of the spell by five to raise or lower one (only) of Range, Duration, and Target by one step, as long as this does not violate any of the normal limits on formulaic magic. Casting success, fatigue loss, and Penetration are all calculated based on the casting level of the spell. You cannot manipulate Ritual magic in this way.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  free_expression = Virtue.create!(name: "Free Expression",
    description: "You have the imagination and creativity needed to compose a new ballad or to paint an original picture, and have the potential to be a great artist. You get a +3 bonus on all rolls to create a new work of art.",
    virtue_type: "General",
    book: "Core",
    major: false)

  free_study = Virtue.create!(name: "Free Study",
    description: "You are better at figuring things out for yourself than you are at poring over books. Add +3 to rolls when studying from raw vis.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  gentle_gift = Virtue.create!(name: "Gentle Gift",
    description: "Unlike other magi, whose Magical nature disturbs normal people and animals, your Gift is subtle and quiet. You don’t suffer the usual penalties when interacting with people and animals.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  gentleman_woman = Virtue.create!(name: "Gentleman/Woman",
    description: "You are a minor member (possibly illegitimate) of a noble family. You do not stand to inherit from your relatives, but are still treated as one of their own and may be addressed as “Lord” or “Lady.” You probably reside near the covenant with your relatives. Although you do not want for anything, you have no vast wealth of your own. You may occasionally ask your family to buy expensive equipment for you, but you will need a convincing rationale. You are expected to wait on your relations much of the time or you will lose the benefits of family (though you will keep your social standing if you can otherwise maintain your normal lifestyle). The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  ghostly_warder = Virtue.create!(name: "Ghostly Warder",
    description: "A ghost watches over you. It might be a grandparent, a childhood friend, or anyone else who cares for you enough to stay around after death. The ghost is invisible and silent to all but you and those with Second Sight (see page 67). It can see and hear what is going on around you and makes an excellent spy, since it can leave your presence once per day for up to half an hour. However, death does not leave people in their normal state of mind, so the ghost probably has some quirks that make it less than dependable — it might even encourage you to join it on the other side. The ghost has 300 experience points in various Abilities that it can use to advise you, and ghosts may take any Abilities. See page 194 for an example of a ghostly warder.",
    virtue_type: "General",
    book: "Core",
    major: true)

  good_teacher = Virtue.create!(name: "Good Teacher",
    description: "You can explain new concepts and skills with great facility. Add three to the Quality of any books that you write, and five to the Advancement Total of anyone who studies with you.",
    virtue_type: "General",
    book: "Core",
    major: false)

  giant_blood = Virtue.create!(name: "Giant Blood",
    description: "The blood of the ancient race of giants flows in your veins. Though you are not as large as your ancestors, you are up to eight feet tall and can weigh as much as 500 pounds. Your Size is +2, so you take wounds in 7-point increments, rather than the normal 5 (see page 171). You also gain +1 to both Strength and Stamina. This bonus may raise your scores in those Characteristics as high as +6. You cannot take this Virtue and Large, Small Frame, or Dwarf.",
    virtue_type: "General",
    book: "Core",
    major: true)

  gossip = Virtue.create!(name: "Gossip",
    description: "You have regular social contacts in the area that provide you with all kinds of information about local social and political goings-on. On a simple roll of 6+, you hear interesting news before almost everyone else. You treat all local Reputations as twice their actual level. With some well-placed words, you may be able to bestow new Reputations (whether deserved or not). You quite likely have a Reputation, too — as a gossip.",
    virtue_type: "General",
    book: "Core",
    major: false)

  great_characteristic = Virtue.create!(name: "Great (Characteristic)",
    description: "You may raise any Characteristic that already has a score of at least +3 by one point, to no more than +5. Make sure you describe what it is about you that causes that increase (such as sheer bulk, a lean build, or extreme charisma). You may take this Virtue twice for the same Characteristic, and for more than one Characteristic.",
    virtue_type: "General",
    book: "Core",
    creation_max: 5,
    major: false)

  greater_immunity = Virtue.create!(name: "Greater Immunity",
    description: "You are completely immune to one hazard which is both common and potentially deadly. For example, you might be immune to fire or to iron (and only iron) weapons. You may not take immunity to aging — see the Unaging Supernatural Minor Virtue (page 50) instead. This immunity applies to mundane and magical versions of the thing. If you are immune to fire, you are also immune to magically created fire.",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  greater_purifying_touch = Virtue.create!(name: "Greater Purifying Touch",
    description: "You can, with a touch and the expenditure of a Fatigue level, cure a single serious disease. This disease should be either life-threatening or seriously disabling, and should be one from which people do not normally recover by themselves. You must choose the disease that you can cure when you take this Virtue, and you can only cure that disease. You can only choose a disease, not other types of injury or misfortune. See page 180 for more information on diseases.",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  guardian_angel = Virtue.create!(name: "Guardian Angel",
    description: "You have learned to hear the words of a divine watcher who gives you practical and spiritual advice. The angel whispers in your ear and tells you what is best for you spiritually, rather than materially. He approves of violence only when there is a holy reason — often difficult to demonstrate. If you act against the angel’s advice, he may leave you until you correct your ways. The angel has only a limited awareness of your thoughts, but when you speak aloud, he can hear and converse with you.
    Your guardian angel can also help in two practical ways. First, he can grant you a +5 bonus to Soak. Second, he can grant you a Magic Resistance of 15. This magic resistance is not compatible with a magus’s Parma Magica, or magic resistance from most other sources, but it does add to the magic resistance resulting from Faith Points (see page 189). The angel only grants you these bonuses if you are acting in accordance with God’s will.",
    virtue_type: "General",
    book: "Core",
    major: true)

  harnessed_magic = Virtue.create!(name: "Harnessed Magic",
    description: "You have great control over your spells. You are able to cancel any of your spells simply by concentrating. You can even cancel the magic in magic items which you created. The act of canceling your magic should be treated as if you were casting a spell for timing and concentration purposes. If you are distracted and fail a Concentration roll, another attempt may be made in a later round. Spells and magic items can be canceled out over any distance, but once they have been canceled, you must recast a spell or reinvest a power in a magic item to start the effect again.
      The drawback is that when you die, all of your spells and magic items sputter out.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  heartbeast = Virtue.create!(name: "Heartbeast",
    description: "You have been initiated into the Outer Mystery of the Heartbeast (see page 91), and thus are a member of House Bjornaer. Note that all Bjornaer magi gain this Virtue for free at character creation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  hermetic_magus = Virtue.create!(name: "Hermetic Magus",
    description: "You are a member of the Order of Hermes. All magi must take this as their Social Status, and only magi may take it.",
    virtue_type: "Social Status",
    book: "Core",
    major: false,
    free: true)

  hermetic_prestige = Virtue.create!(name: "Hermetic Prestige",
    description: "Because of something in your background, other magi look up to you even if you haven’t earned their respect. Some envy you, and most will certainly expect more from you than from others. You gain a Reputation of level 3 within the Order.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  improved_characteristics = Virtue.create!(name: "Improved Characteristics",
    description: "You have an additional three points to spend on buying Characteristics, but you are still limited to a maximum score of +3 in any single Characteristic unless you take the Virtue Great Characteristic. You may take this Virtue multiple times.",
    virtue_type: "General",
    book: "Core",
    creation_max: 5,
    major: false)

  inoffensive_to_animals_general = Virtue.create!(name: "Inoffensive To Animals",
    description: "Your Gift does not bother animals, although it still has the normal effects on people. Animals with a Might score might react either way, depending on the animal. As a rule, if the animal reacts positively to The Gift most of the time, it reacts positively to you because you do have The Gift. If it reacts negatively, this Virtue over-rides it. UnGifted characters may take this Virtue if they have the Flaw Magical Air (page 56).",
    virtue_type: "General",
    book: "Core",
    major: false)

  inoffensive_to_animals_hermetic = Virtue.create!(name: "Inoffensive To Animals",
    description: "Your Gift does not bother animals, although it still has the normal effects on people. Animals with a Might score might react either way, depending on the animal. As a rule, if the animal reacts positively to The Gift most of the time, it reacts positively to you because you do have The Gift. If it reacts negatively, this Virtue over-rides it. UnGifted characters may take this Virtue if they have the Flaw Magical Air (page 56).",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  inspirational = Virtue.create!(name: "Inspirational",
    description: "You are a stirring speaker or a heroic figure, and can urge people to great efforts. You give targets a +3 bonus to rolls for appropriate Personality Traits.",
    virtue_type: "General",
    book: "Core",
    major: false)

  intuition = Virtue.create!(name: "Intuition",
    description: "You have a natural sensitivity that allows you to make the right decisions more often than luck can account for. Whenever you are given a choice in which luck plays a major role (such as deciding which of three unexplored paths to follow), you have a good chance of choosing correctly. The storyguide should secretly roll a simple die. On a 6+, your intuition kicks in and you make whatever might be considered the “right” decision. Otherwise, you fail to get any flash of insight and must make the decision without aid.",
    virtue_type: "General",
    book: "Core",
    major: false)

  inventive_genius = Virtue.create!(name: "Inventive Genius",
    description: "Invention comes naturally to you. You receive +3 on Lab Totals when you invent new spells, craft magic items, and make potions. If you experiment, you get +6.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  keen_vision = Virtue.create!(name: "Keen Vision",
    description: "You can see farther and more clearly than most. You get a +3 bonus to all rolls involving sight, not including attacks with missile weapons.",
    virtue_type: "General",
    book: "Core",
    major: false)

  knight = Virtue.create!(name: "Knight",
    description: "You are a knight, a member of the noble classes and one of the elite warriors of Europe. Unless you are Poor, you may have high quality weapons and armor, and a horse. Typical armaments for a mid-13th century knight are lance, sword, heater shield, a complete mail suit, and a warhorse. You may take Martial Abilities during character generation. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is only available to male characters, and is compatible with the Landed Noble Virtue.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  landed_noble = Virtue.create!(name: "Landed Noble",
    description: "You owe fealty and service to a higher noble, and control land, serfs, and men-atarms. You have half a dozen servants at your manor house, including a couple of bodyguards. Your servants should be controlled by the rest of the troupe. You have sworn an Oath of Fealty, and so must balance this Virtue with that Flaw. You get the normal points for Oath of Fealty. You are wealthier than most characters, but have no additional free time. You have the power to enforce the law within your fief, but you may not impose the death penalty, nor may you mutilate criminals. Floggings and fines are the normal penalties you impose.
      If you are Poor, your fief is either very small, or in a poor area for farming with few other resources. You must spend every season managing it, or it may collapse completely, leaving you effectively landless. You are no wealthier than most average characters, and you have only a couple of servants.
      Wealthy Landed Nobles control more than one fief, and have bailiffs or stewards for each, so that they do not need to devote any time to looking after their lands. You are significantly richer than most Wealthy characters, and could afford to build a small castle or a large chapel within a cathedral. You have around fifty servants, including a significant number of warriors.
      This Status Virtue is compatible with the Knight Minor Status Virtue, but unlike that Virtue it’s available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: true)

  large = Virtue.create!(name: "Large",
    description: "Your Size is +1 instead of 0, so you are between six and seven feet tall. This means that the severity of wounds you take increases in six point intervals rather than five point intervals. (See page 171). You cannot take both this Virtue and Giant Blood, Small Frame, or Dwarf.",
    virtue_type: "General",
    book: "Core",
    major: false)

  latent_magical_ability = Virtue.create!(name: "Latent Magical Ability",
    description: "You have a magical quality that has not yet manifested itself. You probably do not realize you have this capacity; if you are a magus, your master failed to detect it during your apprenticeship. At the storyguide’s discretion, this quality might appear spontaneously or because of some relevant event (like drinking faerie wine). This is not The Gift, and the latent ability is more limited than that.",
    virtue_type: "General",
    book: "Core",
    major: false)

  learn_ability_from_mistakes = Virtue.create!(name: "Learn (Ability) From Mistakes",
    description: "You are able to improve a particular Ability through the expedient of repeated failure. The first time in a given game session that you botch a roll or fail by exactly one point, you gain five experience points in the Ability. The roll must have come up naturally in the course of the story. You may take this Virtue several times, once for each Ability chosen.",
    virtue_type: "General",
    book: "Core",
    creation_max: 5,
    major: false)

  lesser_immunity = Virtue.create!(name: "Lesser Immunity",
    description: "You are immune to some hazard which is either rare, or not deadly, or both. See “Greater Immunity,” page 43.",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  lesser_purifying_touch = Virtue.create!(name: "Lesser Purifying Touch",
    description: "You can, with a touch and the expenditure of a Fatigue level, heal a specific illness. This illness should be one that people often recover from on their own, or one that is not particularly serious. You can only choose an illness, not an injury or other misfortune. See page 180 for rules on diseases.",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  life_boost = Virtue.create!(name: "Life Boost",
    description: "You may boost your formulaic spell casting totals by expending additional Fatigue levels. Each Fatigue level gives you an additional bonus of +5 on the roll, which can yield very impressive Penetration totals. You may burn more Fatigue levels than you possess. If you do, you must Soak damage, without the help of armor. The Damage total is 5 for every additional Fatigue level spent, plus a stress die. Thus, if you spend three additional levels, you must Soak a damage of 15 + stress die, with your Soak (no armor) + stress die. Fatigue levels spent in this way are spent regardless of the success or failure of the casting roll, and any wounds taken are similarly taken even if you fail to cast the spell. You can kill yourself doing this. The total number of Fatigue levels to be used must be committed before the casting roll is made.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  life_linked_spontaneous_magic = Virtue.create!(name: "Life-Linked Spontaneous Magic",
    description: "You can do more with spontaneous magic than most magi at the cost of your own life energy. When you decide to use this ability in casting a spontaneous spell, you declare the level of effect you wish to produce before rolling. This level may include a number of levels of penetration (see page 82). For example, you can choose to cast a level 10 effect at level 20, to give a penetration of 10 plus your Penetration score.
      Roll to cast a fatiguing spontaneous spell. If your result is higher than the level you declared, you spend only one Fatigue level as usual. If your result is less than the level you declared, you must expend one additional Fatigue level per five points (or fraction thereof) by which you missed the target level. If you run out of Fatigue levels, you take a wound. The number of levels still needed for the spell is treated as the amount by which a damage total exceeds your soak, and you take the corresponding wound. You can kill yourself this way.
      A maga with this Virtue may still cast fatiguing spontaneous spells normally.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  light_touch = Virtue.create!(name: "Light Touch",
    description: "You have especially good hand-eye coordination and great proficiency for using your hands in precise, fast ways. You gain +1 to all rolls involving subtle manipulation of objects (like picking pockets) and roll one less botch die than you normally would in such activities (minimum of one). This bonus does not apply to archery, but does apply to playing musical instruments.",
    virtue_type: "General",
    book: "Core",
    major: false)

  lightning_reflexes = Virtue.create!(name: "Lightning Reflexes",
    description: "You respond to surprises almost instantly. In fact, your reflexes are sometimes so fast that you don’t have a chance to think about how you are going to respond. Whenever you are surprised or startled, roll a stress die + Quickness. If you get a 3 or better, you respond reflexively. You must tell the storyguide on each occasion what one type of action (attacking, blocking, running, etc.) you would like to respond with. If attacking in response, you gain +9 to your Initiative Total. The storyguide is the final arbiter of what happens (though it is always in the best interests of your immediate self-preservation). You only react to threats that you are not fully aware of, so you don’t get a bonus against an assassin you watch sneak up on you. Note that you do not get a choice about whether to react. You could just as easily skewer a friend sneaking up in fun as you would an assassin about to strike. Also note that you must perceive an action to react to it — you can still be easily killed in your sleep. This Virtue gives you no special powers of perception.",
    virtue_type: "General",
    book: "Core",
    major: false)

  long_winded = Virtue.create!(name: "Long-Winded",
    description: "You can last longer when exerting yourself than most, and gain +3 on all your Fatigue rolls. This bonus does not apply to casting spells.",
    virtue_type: "General",
    book: "Core",
    major: false)

  luck = Virtue.create!(name: "Luck",
    description: "You perform well in situations where luck is more of a factor than skill or talent. You get +1 to +3 (storyguide’s discretion) on rolls in such situations, depending upon how much luck is involved. You do well at games of chance, but may be labeled a cheater if you play them too often.",
    virtue_type: "General",
    book: "Core",
    major: false)

  magic_sensitivity = Virtue.create!(name: "Magic Sensitivity",
    description: "You are often able to identify a place or object as magical. However, your sensitivity makes you more susceptible to magical effects: subtract your Magic Sensitivity score from all magic resistance rolls you make. Choosing this Virtue confers the Ability Magic Sensitivity 1 (page 66).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  magical_memory = Virtue.create!(name: "Magical Memory",
    description: "Your memory has been developed to remember magical rather than mundane things. You need not keep laboratory texts (see page 101) of your creations to get the benefit of a Lab Text when reproducing them. If you have created an effect by following another magus’s lab text once, you may get the same benefit in future without needing to have the text available.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  magister_in_artibus = Virtue.create!(name: "Magister in Artibus",
    description: "You have incepted Master of Arts in one of the universities of Europe (Paris, Bologna, Oxford, Cambridge, Montpellier, Arezzo or Salamanca) and completed your two years’ regency of compulsory teaching. You are entitled to be addressed as Magister, are subject only to canon law, and may teach anywhere in Europe.
      You are at least (25 – Int) years old, and must have scores of at least 5 in Latin and Artes Liberales. You have, however, spent eight years in a university, and gain an additional 30 experience points in each of those years, for a total of 240 additional experience points over and above your allowance based on age. You may buy Academic Abilities during character generation, and must spend your additional experience points on Academic Abilities or Teaching.
      You must spend two seasons teaching to maintain yourself and your reputation as a dependable instructor. These two seasons are spread between September and June, so you are genuinely free in the summer. If you take the Poor flaw, you are still genuinely free in the summer. If you take the Wealthy virtue, you can maintain your reputation with a single season’s teaching.
      This Virtue is only available to male characters, and is compatible with the Hermetic Magus, Mendicant Friar, and Priest Virtues.",
    virtue_type: "Social Status",
    book: "Core",
    major: true)

  major_magical_focus = Virtue.create!(name: "Major Magical Focus",
    description: "Your magic is much more potent in a fairly limited area, such as weather, necromancy, birds, or emotions. This area should be smaller than a single Art, but may be spread over several Arts — necromancy, for example, covers both Corpus and Mentem effects. You cannot be focused on laboratory activities, although a focus does apply to laboratory activities.
      When you cast a spell or generate a Lab Total within your focus, add the lowest applicable Art score twice. If a spell has requisites, the lowest applicable score may be one of the requisites, rather than one of the primary Arts. Thus, if a magus with a focus on birds was casting a spell to turn a bird into pure flame, MuAn (Ig), with Muto 14, An 18, and Ig 10, his final total would be 34 + other modifiers: 14 from Muto, and 20 from adding Ignem twice. If he was casting a spell to turn a bird into another sort of bird, MuAn with no requisites, his total would be 46 + other modifiers, 18 from Animal and 28 from adding Muto twice.
      A character can have only one Magical Focus, either major or minor, regardless of the source of the focus.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  mastered_spells = Virtue.create!(name: "Mastered Spells",
    description: "You have fifty experience points to spend on mastering spells that you know. (See page 86 for rules on mastering spells.) You may take this Virtue if you also have Flawless Magic, to give you more experience points to spend on mastering your spells. You may take this Virtue multiple times.",
    virtue_type: "Hermetic",
    book: "Core",
    creation_max: 5,
    major: false)

  mendicant_friar = Virtue.create!(name: "Mendicant Friar",
    description: "You are a follower of St. Francis or St. Dominic, going among the rich and poor, spreading the word of God and giving comfort to the sick, homeless, hungry, or dying. You are sworn to serve the Church for the rest of your life, but your wandering habits are considered suspect by the local bishop and parish clergy, and you lack political influence within the organization. Like all clerics, however, you are only subject to canon law.
      Due to your training, you may take Academic Abilities during character generation. If you wish, you may be an ordained priest and may officiate at marriages, baptisms, funerals, and the Mass, though the parish clergy may resent your interfering on their “turf.” You do not need to take the Priest Virtue in addition to this one if you do want to be ordained.
      You have sworn vows of poverty, chastity, and obedience, which together constitute a Major Story Flaw (Monastic Vows, see page 56) which you must take if you take this Virtue (this Flaw balances other Virtues as normal). You may not take the Wealthy Virtue or Poor Flaw. This Virtue is only available to male characters, and is compatible with the Magister in Artibus Major Virtue.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  mercenary_captain = Virtue.create!(name: "Mercenary Captain",
    description: "You lead a small company of mercenaries (5 to 10), for hire to the highest bidder. You are much like a knight-errant, only without the prestige. During your travels you have gained great wealth — and squandered it — several times over. You may take Martial Abilities during character generation.
      If you are Poor, you lead only a couple of other mercenaries, but you and they may have armor and weapons available to normal characters. If you are Wealthy you lead about twenty mercenaries, and can delegate some of the work to sergeants. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  merchant = Virtue.create!(name: "Merchant",
    description: "You live from the buying and selling of goods. You may be a peddler, if you are relatively poor, a shopkeeper, or a traveling merchant. The Wealthy Major Virtue and Poor Major Flaw affect you normally.",
    virtue_type: "Social Status",
    book: "Core",
    major: false,
    free: true)

  mercurian_magic = Virtue.create!(name: "Mercurian Magic",
    description: "Your magical lineage and traditions are from the Roman priests of Mercury, which predate the Order of Hermes, making you especially skilled with Ritual Magic and magic used in conjunction with others. In addition to your standard spell allocation, you also know Wizard’s Communion (page 160) at a level equal to the highest level of Ritual spell that you know, and should you invent or learn a Ritual spell of higher level, you automatically invent a Wizard’s Communion spell of the same level, without needing to spend extra time.
      When casting a spell using Wizard’s Communion, you may add your Mastery score (page 86) in the spell being cast and your Mastery score in Wizard’s Communion to the effective level of the Wizard’s Communion.
      Finally, any Ritual spells which you cast have only half the usual vis requirement. If cast as part of a Wizard’s Communion, all the participants need to have this Virtue to gain this benefit.
      Your concentration in Ritual magic has a downside, however — you may only cast Spontaneous magic using the rules for Ceremonial Casting (page 83).",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  method_caster = Virtue.create!(name: "Method Caster",
    description: "You are excellent at formulaic spells, as you have perfected a consistent and precise method for casting them. You gain a +3 bonus to any formulaic spell you cast. However, if you vary at all from your precise method (by altering your gestures or voicing), you do not get this bonus.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  minor_magical_focus = Virtue.create!(name: "Minor Magical Focus",
    description: "Your magic is particularly attuned to some narrow field, such as self-transformation, birds of prey, or healing. In general, the field should be slightly narrower than a single Technique and Form combination, although it may include restricted areas of several such combinations. Healing, for example, is a part of Creo Corpus, Creo Animal, and possibly Creo Herbam. You cannot be focused on a laboratory activity, such as creating charged items, although a focus does apply to laboratory activities.
      When you cast a spell or generate a Lab Total within your focus, add the lowest applicable Art score twice, as for a Major Magical Focus (page 45).
      A magus may only have one Magical Focus, whether major or minor, regardless of the source of the focus.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  mythic_blood = Virtue.create!(name: "Mythic Blood",
    description: "You are a blood descendant of either a wizard of legend (possibly one of the Twelve Founders, or some other ancient and powerful sorcerer) or a supernatural being (such as a dragon).
      Your potent Gift means that you do not lose Fatigue levels if your Casting Total falls short of the level of a formulaic spell by less than ten points, although you do lose Fatigue if the spell fails completely. You must expend Fatigue normally to cast spontaneous magic, and if you fail to cast a formulaic spell you lose the normal number of Fatigue levels.
      Additionally, you may choose one special magic feat which you can invoke at will and cancel at will, as often as you like. Invoking this feat takes as long as fast-casting a mastered formulaic spell (see page 87), and requires the same level of concentration. The effect should be designed as a Hermetic effect, with a level + Penetration limited as below. The Penetration of the effect is not modified by the magus’s Penetration Ability score, and cannot be negative, so that the highest possible level of the effect is 30.
      Invocation: Level + Penetration Speak and Gesture: 30
      Speak: 25
      Gesture: 20
      Nither Speak nor Gesture: 15
      This Virtue includes a Minor Magical
      Focus in an area related to your legendary ancestor and a hereditary Minor Personality Flaw (both at no extra cost). Mythic Blood is not particularly uncommon in the Order of Hermes, so this Virtue does not grant any Reputation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  peasant = Virtue.create!(name: "Peasant",
    description: "You live by working the land. You may control quite a lot of land and hire people to work it, if you are wealthy, or be one of the people who is hired, if you are poor. You are free, rather than a serf. The Wealthy Major Virtue and Poor Major Flaw affect you normally.",
    virtue_type: "Social Status",
    book: "Core",
    major: false,
    free: true)

  perfect_balance = Virtue.create!(name: "Perfect Balance",
    description: "You are skilled at keeping your balance, especially on narrow ledges or tightropes. Add +6 to any roll to avoid falling or tripping.",
    virtue_type: "General",
    book: "Core",
    major: false)

  personal_vis_source = Virtue.create!(name: "Personal Vis Source",
    description: "You have exclusive access to a supply of raw vis. Determine the amount and type with the help of your troupe; the yield should be about one tenth as much as the player covenant expects to gather per year at the beginning of the saga. The yield of your source does not normally change over the course of time, even if the covenant uncovers new sources.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  piercing_gaze = Virtue.create!(name: "Piercing Gaze",
    description: "By staring intently at people you make them feel uneasy, as if you are peering into their souls. Those with ulterior motives, uneasy consciences, or lying tongues must make rolls against an appropriate Personality Trait, Guile, or whatever the storyguide deems appropriate, to remain calm. Furthermore, you gain a +3 to rolls involving intimidation. Faeries and demons are unfazed by your power.",
    virtue_type: "General",
    book: "Core",
    major: false)

  premonitions = Virtue.create!(name: "Premonitions",
    description: "You intuitively sense when something is wrong, or is likely to go wrong soon. This Virtue confers the Ability Premonitions 1 (page 67).",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  priest = Virtue.create!(name: "Priest",
    description: "You have been ordained a priest, which means that you can carry out the sacraments of the Mass, Penance, and Extreme Unction. By your words, you can cause the Son of God to manifest in bread and wine. As a priest you come under the protection of canon law, meaning that you cannot be prosecuted by secular authorities. You are accorded considerable respect due to your position, and few people are willing to insult you.
    You may be a parish priest. If you are, you cannot take the Poor Flaw. Your normal duties involve hearing confession, preaching to your flock, and ministering to their spiritual needs. If you are Wealthy, your parish is rich enough to pay for a curate to do some of the work for you, and you may be a pluralist, holding the benefices of several parishes. Reform-minded churchmen do not approve of pluralism.
    If you are not a parish priest, the Wealthy Virtue and Poor Flaw affect you normally. You may be employed as a curate to a parish priest, or a chaplain to a wealthy individual, or in any other capacity requiring education.
    You may purchase Academic Abilities during character generation. You must take the Minor Personality Flaw Vow as one of your normal Flaws, for your vow of celibacy. This Virtue is only available to male characters, and is compatible with the Magister in Artibus Major Virtue.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)

  privileged_upbringing =  Virtue.create!(name: "Priviledged Upbringing",
    description: "You grew up in an environment where you had access to teachers and free time for study. You have an additional 50 experience points, which may be spent on General, Academic, or Martial Abilities. You may not, however, buy Academic or Martial Abilities with your normal pool of experience points unless you have another Virtue or Flaw permitting that. The most common reason for this Virtue is that your family was wealthy while you were a child, but if you are wealthy now, you should take the Wealthy Virtue.",
    virtue_type: "General",
    book: "Core",
    major: false)

  protection = Virtue.create!(name: "Protection",
    description: "You are under the aegis of a powerful person, usually a noble or high-ranking Church official (though other options are possible, if the storyguide approves). Those who know of your favored status treat you carefully; those who do not often pay the price. You have a Reputation (good or bad, your choice) of level 3, which could be higher if your protector is particularly great or well-known.",
    virtue_type: "General",
    book: "Core",
    major: false)

  puissant_ability = Virtue.create!(name: "Puissant (Ability)",
    description: "You are particularly adept with one Ability, and add 2 to its value whenever you use it. Note that you do not, in general, use an Ability when learning it, teaching it, or writing about it. You may only take this Virtue once for a given Ability, but may take it more than once for different Abilities.",
    virtue_type: "General",
    book: "Core",
    creation_max: 5,
    major: false)

  puissant_art = Virtue.create!(name: "Puissant (Art)",
    description: "You add 3 to the value of one Art whenever you use it. This means all totals in which the score of the Art is part of the total. It does not apply to Study Totals. You may take this Virtue twice, for two different Arts. If a spell has requisites, include the bonus from Puissant Art with that Art when calculating which Art is higher. If the Puissant Art is higher, the bonus does not apply to the requisite.",
    virtue_type: "Hermetic",
    book: "Core",
    creation_max: 2,
    major: false)

  quiet_magic = Virtue.create!(name: "Quiet Magic",
    description: "You can cast spells using only a soft voice at no penalty, and at only a –5 penalty if you do not speak at all. You gain no benefits from using your voice normally but gain the normal benefit for using a booming voice. The range of Voice Range spells is determined normally, based on how loud your voice is.
      You may take this Virtue twice, and eliminate the penalty altogether.",
    virtue_type: "Hermetic",
    book: "Core",
    creation_max: 2,
    major: false)

  rapid_covalescence = Virtue.create!(name: "Rapid Covalescence",
    description: "Your body can heal quickly. You get a +3 bonus on all rolls to recover from wounds.",
    virtue_type: "General",
    book: "Core",
    major: false)

  redcap = Virtue.create!(name: "Redcap",
    description: "Although you do not have The Gift and cannot work Hermetic magic, you are a full member of the Order of Hermes and of House Mercere (see page 12). There are Gifted members of House Mercere, but they do not take this Virtue, taking the Hermetic Magus Social Status (page 43) instead.
      You deliver messages for the Order, and you possess a number of enchanted devices to help you do this. A newly-Gauntleted Redcap has enchanted devices with fifty levels of effect, including modifications to the level due to factors such as the number of uses per day (see “Magical Enchantments,” page 95, for details). These levels are invariably split between two or more effects useful for delivering messages. New Redcaps are never given items capable of killing, wounding, or ensorcelling large numbers of mundanes; the risk of abuse bringing trouble on the Order is too great. These will be upgraded and replaced in return for good service, on average an extra two levels per year. You are trained in a similar manner to magi, and may take Academic, Arcane, and Martial Abilities during character generation. You have spent fifteen years as an apprentice, and gained a total of 300 experience points in those fifteen years. (See “Detailed Character Creation,” page 28.) In addition, you have the Well Traveled Virtue at no cost. When you start to age, a magus with a Lab Total of at least fifty will devise a Longevity Ritual (see page 101) for you free of charge, if you wish. If you make suitable contacts in the course of the saga, this ritual may be devised by a more powerful magus.
      You are supported by your covenant, so you cannot take the Wealthy Virtue or Poor Flaw. You may not take The Gift. You must spend two seasons per year delivering messages for the Order. Your other two seasons are, however, genuinely free, and you may do whatever you wish. This Virtue is available to male and female characters. Redcaps created some years past Gauntlet get improved enchanted devices, as described above, and, if applicable, a Longevity Ritual.",
    virtue_type: "Social Status",
    book: "Core",
    major: true)

  relic = Virtue.create!(name: "Relic",
    description: "You own a holy relic, such as the finger bone of a saint, with one Faith point in it. This can be built into any other item you possess (a sword, for instance).",
    virtue_type: "General",
    book: "Core",
    major: false)

  reserves_of_strength = Virtue.create!(name: "Reserves of Strength",
    description: "Once per day, when in need, you can perform an incredible feat of strength. For the duration of the action, add +3 to your effective Strength score. Afterwards, though, you must make two Fatigue rolls.",
    virtue_type: "General",
    book: "Core",
    major: false)

  second_sight = Virtue.create!(name: "Second Sight",
    description: "You are able to see through illusionary concealment and disguise, including invisibility, and can also see naturally invisible things such as spirits and the boundaries between regio levels (see page 189). Choosing this Virtue confers the Ability Second Sight 1 (page 67).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  seconday_insight = Virtue.create!(name: "Secondary Insight",
    description: "Your method of magical study is especially versatile. When studying one of the magical Techniques from a book, a teacher, or raw vis, you also gain a single experience point in any 4 Forms of your choosing. When studying one of the magical Forms, you also gain a single experience point in any 2 separate Techniques of your choosing. You may not put more than one bonus experience point into a single Art. This Virtue is especially suitable for generalist magi.",
    virtue_type: "Hermetic",
    book: "Core",
    major: true)

  self_confident = Virtue.create!(name: "Self-Confident",
    description: "You have firm confidence in your own abilities, and have a Confidence Score of two. You also start with five Confidence Points, rather than the usual three. (See page 19 for Confidence rules.)",
    virtue_type: "General",
    book: "Core",
    major: false)

  sense_holiness_and_unholiness = Virtue.create!(name: "Sense Holiness and Unholiness",
    description: "You are able to feel the presence of good and evil. In auras of particularly strong divine or infernal influence, your sensitivity may overwhelm you. Choosing this Virtue confers the Ability Sense Holiness and Unholiness 1 (page 67).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  shapeshifter = Virtue.create!(name: "Shapeshifter",
    description: "You may change your shape into that of one or more mundane animals. Choosing this Virtue confers the Ability Shapeshift 1 (page 67).",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  sharp_ears = Virtue.create!(name: "Sharp Ears",
    description: "You hear better than most. You get a +3 bonus to all rolls involving hearing.",
    virtue_type: "General",
    book: "Core",
    major: false)

  side_effect = Virtue.create!(name: "Side Effect",
    description: "Your magic has some incidental feature that is generally useful, though occasionally annoying. The intensity of the side effect increases with the level of the spell. Examples include a commanding presence when casting that translates into a temporary +1 Presence bonus for a short time after casting, or a calm state of mind derived from casting which allows a bonus on Concentration rolls for a short time after casting.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  skilled_parens = Virtue.create!(name: "Skilled Parens",
    description: "Your parens was more powerful, and a better teacher, than is common. You gain an additional 60 experience points and 30 spell levels during apprenticeship. This Virtue has no effect on your study after apprenticeship, but you still have a close relationship with a powerful magus.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  skinchanger = Virtue.create!(name: "Skinchanger",
    description: "You have a magical cloak, animal skin or similar item made from an animal. While in physical contact with it, you may transform into the form of the animal represented by the item. The transformation takes one full round, and you retain both intelligence and sentience while in animal form. Clothing and possessions (save the animal item) do not transform, and you may be seen as a transformed human with InAn or InCo, or similar spells. If the item is stolen, the new owner has an Arcane Connection to you, and you may not transform until the item is retrieved. If the item is destroyed, you can make a new one over the course of a season, although the method varies depending on what the item is. Skinchangers may transform into any non-magical animal between Size –5 (robin) and Size +2 (bear). The character has the normal physical characteristics of the animal, except that +3 is added to the character’s Soak score (in animal form only).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  social_contacts = Virtue.create!(name: "Social Contacts",
    description: "You have a broad range of acquaintances in a specific social circle (specified when this Virtue is purchased), accumulated over years of travel and socializing. Almost everywhere you go, you meet someone you know, or can get in touch with someone who can help you. Whenever you are somewhere new, you can contact someone on a simple Presence roll against an Ease Factor of 6. The storyguide may modify this target number upward for very small areas or areas where it is extremely unlikely that you would know someone. You may purchase this Virtue more than once, each time specifying a different social group.",
    virtue_type: "General",
    book: "Core",
    creation_max: 5,
    major: false)

  special_circumstances = Virtue.create!(name: "Special Circumstances",
    description: "You are able to perform magic better in certain uncommon situations (such as during a storm or while touching the target), gaining a +3 bonus to your rolls to cast or resist spells. You may take this Virtue more than once, but you only gain a +3 bonus even if more than one set of circumstances applies.",
    virtue_type: "Hermetic",
    book: "Core",
    creation_max: 5,
    major: false)

  strong_faerie_blood = Virtue.create!(name: "Strong Faerie Blood",
    description: "The blood of the fay is strong in you. Perhaps one of your parents was actually a faerie, or maybe you were conceived or born in a place of great faerie power. This ancestry grants you several abilities.
      First, you have natural longevity. You start making aging rolls at the age of fifty, rather than the normal 35, and get –3 to Aging Rolls, cumulative with any other bonuses.
      Second, you have faerie eyes. This gives you the Virtue Second Sight (see page 48) at no cost, and you can see normally in darkness or semi-darkness, such as in deep woods or at night. Your eyes look mostly normal, but are an unusual and vivid color.
      Third, you may learn Faerie Lore during character generation.
      Finally, you get the benefits of a particular type of fay heritage, as given in the Virtue Faerie Blood (page 42). Your specific fay heritage is clearly visible. Choose one physical quirk, such as small horns, literally blue blood, or eyes without irises and pupils, appropriate to the faeries from which you are descended.
      You may not have both Faerie Blood and Strong Faerie Blood.
      This is a Supernatural Virtue, and you cannot lose it when being trained as a magus (see page 106). If your master cannot preserve the ability, you cannot be trained.",
    virtue_type: "Supernatural",
    book: "Core",
    major: true)

  strong_willed = Virtue.create!(name: "Strong-Willed",
    description: "You cannot easily be coerced into activities, beliefs, or feelings. You get +3 on any roll which may require strength of will.",
    virtue_type: "General",
    book: "Core",
    major: false)

  student_of_realm = Virtue.create!(name: "Student of (Realm)",
    description: "You have been trained in the mystical aspects of one of the four realms of power (Divine, Faerie, Infernal, or Magic), and you have a +2 bonus on all uses of the appropriate Lore. You may take that Lore at character generation even if you cannot learn other Arcane Abilities. You may take this Virtue multiple times, for a different realm each time. You may not take Student of (Realm) and Puissant Ability for the same Lore.",
    virtue_type: "General",
    book: "Core",
    creation_max: 4,
    major: false)

  study_bonus = Virtue.create!(name: "Study Bonus",
    description: "When given the opportunity to study an Art from books or raw vis in the presence of the Form or Technique, your surroundings give you new insights into your studies. Add two to die rolls to study from vis, or two to the Quality of any text you study from. Your current Art score determines the magnitude of the surroundings you require to get the bonus. See the table for some guidelines.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  subtle_magic = Virtue.create!(name: "Subtle Magic",
    description: "You may cast spells without using gestures at no penalty. You gain no benefits from using normal gestures but gain the normal benefit for exaggerated gestures.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  temporal_influence = Virtue.create!(name: "Temporal Influence",
    description: "Through blood or a position of trust, you enjoy some political weight in society. You have the ear of a leader and may yourself lead common folk at times, if they respect your position. The more influence you have, the more responsibility, and the harder it is to work unopposed with magi. Grogs may not take this Virtue.",
    virtue_type: "General",
    book: "Core",
    major: false)

  tough = Virtue.create!(name: "Tough",
    description: "You can take physical punishment better than most people. You get a +3 bonus on your Soak score.",
    virtue_type: "General",
    book: "Core",
    major: false)

  troupe_upbringing = Virtue.create!(name: "Troup Upbringing",
    description: "You were raised among a group of entertainers, spending much of your childhood traveling from town to town. Rolls involving Abilities in a selected area (which you should have approved by the storyguide) receive a +2 modifier. Examples might include tumbling and acrobatics, knife throwing and juggling, or storytelling and acting.",
    virtue_type: "General",
    book: "Core",
    major: false)

  true_faith = Virtue.create!(name: "True Faith",
    description: "Through piety and holy devotion you have faith that can move mountains. You have one Faith point and can gain more. For more about Faith points, see page 189.",
    virtue_type: "General",
    book: "Core",
    major: true)

  true_love = Virtue.create!(name: "True Love (PC)",
    description: "You have found the one person meant for you in all of creation, and the bond between the two of you cannot be sundered. Whenever you are suffering, in danger, or dejected, the thought of your love will give you strength to persevere. Thus, you may add +3 to appropriate Personality Trait rolls, and add additional bonuses as allowed by the storyguide (never in excess of +3) to activities that will return you to your love, or save her life. In dire need, she may even come to rescue you. On the other hand, you are tied to your lover, to whom you must return frequently. If you do not, you may suffer penalties to most actions requiring spirit due to melancholy. If any enchantment keeps you from your true love’s side, the power of your devotion can probably break it. Your True Love is another player character, who must also have this Virtue. True Love is never one-sided.
      This Virtue may be renamed “True Friend” to cover equally close attachments which are not romantic.",
    virtue_type: "General",
    book: "Core",
    major: false)

  unaging = Virtue.create!(name: "Unaging",
    description: "You do not suffer the effects of age. In game terms, your aging points do not decrease your Characteristics, only building up to give you Decrepitude points. If a crisis is not potentially fatal, you suffer no ill effects. If it is potentially fatal, you die if you fail the Stamina roll, but otherwise nothing happens. You are not enfeebled when you reach four Decrepitude points, but you die as normal when you reach five. You may choose your apparent age freely, although if you are basically human it should be less than or equal to your actual age.",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  venus_blessing = Virtue.create!(name: "Venus' Blessing",
    description: "People are often attracted to you. You get +3 on Communication and Presence rolls with sexually compatible characters in appropriate situations. At times you can put this to good use. At other times it’s an annoyance.",
    virtue_type: "General",
    book: "Core",
    major: false)

  verditius_magic = Virtue.create!(name: "Verditius Magic",
    description: "You have been initiated into the Outer Mystery of Verditius Magic (see page 93), and thus are a member of House Verditius. Note that all Verditius magi gain this Virtue for free at character creation.",
    virtue_type: "Hermetic",
    book: "Core",
    major: false)

  wanderer = Virtue.create!(name: "Wanderer",
    description: "You are not tied to any community, and survive by doing casual work of some sort. The Wealthy Major Virtue and Poor Major Flaw affect you normally, although if you are Wealthy you are supported by someone or some institution. Your supporter does not question your activities in any way, however.",
    virtue_type: "Social Status",
    book: "Core",
    major: false,
    free: true)

  warrior = Virtue.create!(name: "Warrior",
    description: "You have been trained to fight, and may have spent some time campaigning, perhaps on one of the Crusades. You may acquire Martial Abilities during character creation, and gain an additional 50 experience points which must be spent on Martial Abilities.",
    virtue_type: "General",
    book: "Core",
    major: false)

  ways_of_the_land = Virtue.create!(name: "Ways of the (Land)",
    description: "You have a deep understanding of a type of terrain, feeling more natural and at home there than anywhere else. Examples include Ways of the Forest, Ways of the Mountain, Ways of the Steppe or Ways of the Town. You get a +3 bonus to all rolls, including combat, that directly involve that area and its inhabitants; mundane, magical, or faerie. In addition, you roll one fewer botch die than normal (which may mean you roll no botch dice) in rolls that pertain to your area of understanding. You are not normally molested by animals of the terrain, and though particularly vicious creatures may still attack you, at least they’ll accord you proper respect. (For Ways of the Town, this still applies to town animals, of which there are plenty in the medieval world, rather than people. The +3 bonus does apply to people.) You may choose this Virtue multiple times, for different types of terrain.",
    virtue_type: "General",
    book: "Core",
    creation_max: 3,
    major: true)

  wealthy = Virtue.create!(name: "Wealthy",
    description: "You are a rich member of your class. You may spend three seasons per year on study or adventuring, as you can pay people to look after your interests, and these seasons are genuinely free. Exactly how wealthy you are depends on your social class; a noble would have at least a dozen servants, including some bodyguards, while a wealthy townsman would have a good house and maybe three servants. Whatever your class, you are wealthy enough to afford goods generally associated with a higher class, and thus risk being labeled a vulgar social climber. Wealthy characters may live at a covenant, but they are not supported by the covenant. As all Hermetic magi are supported by their covenant, no magi may take this Virtue.",
    virtue_type: "General",
    book: "Core",
    major: true)

  well_traveled = Virtue.create!(name: "Well-Traveled",
    description: "You have journeyed extensively in this part of the world and find it easy to get along with people throughout the area. You have fifty bonus experience points to spend on living languages, Area Lores, and Bargain, Carouse, Charm, Etiquette, Folk Ken, or Guile.",
    virtue_type: "General",
    book: "Core",
    major: false)

  wilderness_sense = Virtue.create!(name: "Wilderness Sense",
    description: "You are mystically attuned to the ways of the wilderness. Choosing this Virtue confers the Ability Wilderness Sense 1 (page 67).",
    virtue_type: "Supernatural",
    book: "Core",
    major: false)

  wise_one = Virtue.create!(name: "Wise One",
    description: "You belong to a broad class that includes mystics, seers, healers, and the like. You are probably magical, and will probably want to purchase a Virtue that gives you some sort of supernatural ability. You are well regarded in the community, although your presence may cause fear as well as awe or respect. If you lack such good standing, though, you are most likely a wanderer or an outcast. You may take either Arcane or Academic Abilities, but not both, at character creation. The Wealthy Virtue and Poor Flaw affect you normally. This Virtue is available to male and female characters.",
    virtue_type: "Social Status",
    book: "Core",
    major: false)
end