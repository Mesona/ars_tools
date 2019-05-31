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

require 'rails_helper'

RSpec.describe User, type: :model do

  temp_user = ""
  before(:each) do
    temp_user = FactoryBot.build(:user)
  end
  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "mary_mack", email: "mary@mack.com", password: "abcdef")
      user = User.find_by(username: "mary_mack")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "mary_mack", password: "abcdef")
    end
  end

  describe "When creating a user" do
    describe "With incorrect input" do
      it "should throw an error when username is missing" do
        temp_user.username = ""
        expect { temp_user.save! }.to raise_error("Validation failed: Username can't be blank") 
      end
      it "should throw an error when email is missing" do
        temp_user.email = ""
        expect { temp_user.save! }.to raise_error("Validation failed: Email can't be blank, Email is invalid")
      end
      it "should throw an error when email is not formatted properly" do
        temp_user.email = "emaiiiiiil"
        expect { temp_user.save! }.to raise_error("Validation failed: Email is invalid")
      end
      it "should thrown an error when the password is missing" do
        temp_user.password = ""
        expect { temp_user.save! }.to raise_error("Validation failed: Password is too short (minimum is 6 characters)")
      end
      it "should thrown an error when the password is too short" do
        temp_user.password = "12345"
        expect { temp_user.save! }.to raise_error("Validation failed: Password is too short (minimum is 6 characters)")
      end
      it "should thrown an error when username is not unique" do
        temp_user_two = FactoryBot.create(:user)
        temp_user.username = temp_user_two.username
        expect { temp_user.save! }.to raise_error("Validation failed: Username has already been taken")
      end
      it "should thrown an error when email is not unique" do
        temp_user_two = FactoryBot.create(:user)
        temp_user.email = temp_user_two.email
        expect { temp_user.save! }.to raise_error("Validation failed: Email has already been taken")
      end
    end

    describe "With correct input" do
      it "should be discoverable in the database" do
        temp_user = FactoryBot.create(:user)
        expect(User.last.username).to eq(temp_user.username)
      end
    end
  end

end
