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
  has_many :ability_associations
  has_many :abilities, through: :ability_associations
  # has_one inventory
  # Need to add stats to character sheet (PER, STR, QUI, etc)
  # Need to add Age to character
  # Need to add appearant age to character
  # has_many decrepitude
end
