# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Character.destroy_all

require File.expand_path('../seeds/virtues', __FILE__)
require File.expand_path('../seeds/flaws', __FILE__)
require File.expand_path('../seeds/abilities', __FILE__)

demo_user = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')
demo_character = Character.create!(character_type: 'Mage', name: 'Demo Mage', user_id: demo_user.id)
demo_character2 = Character.create!(character_type: 'Mage', name: 'Demo Mage 2', user_id: demo_user.id)

