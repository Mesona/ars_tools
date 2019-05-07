
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
    description: "",
    book: "Core",
    virtue_type: "",
    major: false)

  virtue_name = Virtue.create!(name: ),
    description: "",
    book: "Core",
    virtue_type: "",
    major: false)

  virtue_name = Virtue.create!(name: ),
    description: "",
    book: "Core",
    virtue_type: "",
    major: false)

  virtue_name = Virtue.create!(name: ),
    description: "",
    book: "Core",
    virtue_type: "",
    major: false)

  virtue_name = Virtue.create!(name: ),
    description: "",
    book: "Core",
    virtue_type: "",
    major: false)

end