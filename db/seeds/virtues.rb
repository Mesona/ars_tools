
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

end