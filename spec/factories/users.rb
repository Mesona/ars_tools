FactoryGirl.define do
  factory :user do
    username "Bob"
    email "email@email.com"
    # username { Faker::Name.name }
    # email { Faker::Internet.email }
    # password_digest { BCrypt::Password.create(Faker::Address.street_address) }
  end
end