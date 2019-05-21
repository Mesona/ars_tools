FactoryGirl.define do
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
  end
end