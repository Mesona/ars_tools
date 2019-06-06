# == Schema Information
#
# Table name: characters
#
#  id             :bigint(8)        not null, primary key
#  character_type :string           not null
#  name           :string           not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  intelligence   :integer          default(0)
#  perception     :integer          default(0)
#  strength       :integer          default(0)
#  stamina        :integer          default(0)
#  presence       :integer          default(0)
#  communication  :integer          default(0)
#  dexterity      :integer          default(0)
#  quickness      :integer          default(0)
#  age            :integer          default(0)
#  appearant_age  :integer          default(0)
#

FactoryBot.define do
  factory :character do
    character_type { "Mage" }
    name { Faker::Name.name }
    user_id { 1234 }
    intelligence { rand(6) - 3 }
    perception { rand(6) - 3 }
    strength { rand(6) - 3 }
    stamina { rand(6) - 3 }
    presence { rand(6) - 3 }
    communication { rand(6) - 3 }
    dexterity { rand(6) - 3 }
    quickness { rand(6) - 3 }
    age { rand(25) + 5 }
    appearant_age { rand(25) + 5 }
    gender { "Male" }
  end
end
