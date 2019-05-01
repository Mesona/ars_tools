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
#

class Character < ApplicationRecord

  belongs_to :user

  has_and_belongs_to_many :virtues
  has_and_belongs_to_many :flaws
  # has_many :abilities
end
