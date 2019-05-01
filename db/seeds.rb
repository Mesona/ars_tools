# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Character.destroy_all
Virtue.destroy_all
Flaw.destroy_all

demo_user = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')
demo_character = Character.create!(character_type: 'Mage', name: 'Demo Mage', user_id: demo_user.id)

the_gift = Virtue.create!(name: "The Gift",
  description: "The Gift is a special Virtue, because it has no cost. The character suffers all the penalties of The Gift, just as magi do, but can be taught Supernatural Abilities without having to take the corresponding Virtues. Most importantly, the character can be taught Hermetic Magic, so all magi must have this Virtue. A character with The Gift, even if he is not a magus, may take Hermetic Virtues and Flaws which relate to intrinsic ability rather than background or training. Characters may take Virtues that grant Supernatural Abilities without taking The Gift, and such characters do not suffer the penalties imposed by The Gift. However, such characters may not learn new Supernatural Abilities in the course of the saga, although they may improve the ones they already have. Characters who have The Gift may start play with a single Supernatural Ability, without having to take any other Virtue, but if they wish to learn others they must find opportunities to learn others in the course of the saga. They may also take Virtues granting Supernatural Abilities if they wish to have more Abilities at character creation. Note that it is harder for a character with Supernatural Abilities to become a Hermetic magus, so you may not wish to take any abilities if you plan for the character to become an apprentice. The ability to cast Hermetic magic is the single supernatural ability possessed by Hermetic magi in virtue of The Gift; again, they may take more Supernatural Ability Virtues if they wish. Grogs can never have The Gift, as a character with The Gift is too important to be a grog. As a rule, companions should only have The Gift if they are intended to become magi. Troupes should not allow any other Gifted characters unless they are absolutely sure that they want them.",
  book: "Core",
  virtue_type: "Special")

adept_laboratory_student = Virtue.create!(name: "Adept Laboratory Student",
  description: "You digest the instruction of others quite easily. You get a +6 bonus to Lab Totals when working from the lab texts of others, including when reinventing spells.",
  book: "Core",
  virtue_type: "Hermetic",
  major: false)

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