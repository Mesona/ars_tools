# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

# FactoryGirl.define do
FactoryBot.define do
  factory :user do
    username { Faker::Internet.user_name }
    email { Faker::Internet.email }
    password_digest { "password" }
    # username { Faker::Name.name }
    # email { Faker::Internet.email }
    # password_digest { BCrypt::Password.create(Faker::Address.street_address) }
  end
end
