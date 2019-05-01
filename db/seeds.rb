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

demoUser = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')
demoCharacter = Character.create!(type: 'Mage', name: 'Demo Mage', user_id: demoUser.id)

theGift = Virtue.create!(name: "The Gift",
  description: "The Gift is a special Virtue, because it has no cost. The character suffers all the penalties of The Gift, just as magi do (see page 75), but can be taught Supernatural Abilities without having to take the corresponding Virtues (see page 166 for rules). Most importantly, the character can be taught Hermetic Magic, so all magi must have this Virtue. A character with The Gift, even if he is not a magus, may take Hermetic Virtues and Flaws which relate to intrinsic ability rather than background or training.
  Characters may take Virtues that grant Supernatural Abilities without taking The Gift, and such characters do not suffer the penalties imposed by The Gift. However, such charac- ters may not learn new Supernatural Abilities in the course of the saga, although they may improve the ones they already have.
  Characters who have The Gift may start play with a single Supernatural Ability, without having to take any other Virtue, but if they wish to learn others they must find opportuni- ties to learn others in the course of the saga. They may also take Virtues granting Supernatural Abilities if they wish to have more Abilities at character creation. Note that it is harder for a character with Supernatural Abilities to become a Hermetic magus (see “Training Your Apprentice” on page 106), so you may not wish to take any abilities if you
  plan for the character to become an apprentice. The ability to cast Hermetic magic is the single supernatural ability possessed by Hermetic magi in virtue of The Gift; again, they may take more Supernatural Ability Virtues if they wish.
  Grogs can never have The Gift, as a char- acter with The Gift is too important to be a grog. As a rule, companions should only have The Gift if they are intended to become magi. Troupes should not allow any other Gifted characters unless they are absolutely sure that they want them.",
  book: "Core",
  type: "Special")