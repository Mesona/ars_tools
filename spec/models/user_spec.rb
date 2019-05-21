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

# RSpec.describe User, type: :model do
#   it "has a valid factory" do
#     expect(user).to be_valid
#   end
# end

RSpec.describe User, type: :model do

  subject(:user) do
    User.create!(
      username: "gerald",
      email: "test@test.test",
      password: "super_secret_password"
    )
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

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }

  # context "When creating a new user with valid input" do
  #   it "Should save properly" do
  #     # u.save!
  #     # expect ( User.last.username ).to be("test")
  #     u = User.first.username
  #     expect ( u ).to eq "Demo"
  #   end
  # end

  # context "When creating a new user with invalid input" do
  #   it "Should require a username" do
  #     u.username = ""
  #     output = u.save!
  #     expect(output).to raise_exception
  #   end

  #   it "Should require the username to be unique" do
  #     u.username = ""
  #     output = u.save!
  #     expect(output).to raise_exception
  #   end

  #   it "Should require a valid email" do
  #     u.username = ""
  #     output = u.save!
  #     expect(output).to raise_exception
  #   end

  #   it "Should require a password_digest" do
  #     u.username = ""
  #     output = u.save!
  #     expect(output).to raise_exception
  #   end
  # end

end
