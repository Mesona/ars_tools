# == Schema Information
#
# Table name: abilities
#
#  id               :bigint(8)        not null, primary key
#  name             :string           not null
#  description      :text             not null
#  book             :string           not null
#  ability_type     :string           not null
#  unlearned_usable :boolean
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Ability < ApplicationRecord
  has_many :ability_associations
  has_many :characters, through: :ability_associations

  # def experience
  #   self.ability_associations
  # end

  # has_many :experience, through: :ability_associations

  # has_many :experience,
  #   class_name: :AbilityAssociation,
  #   foreign_key: :experience

  # has_one :experience,
  #   class_name: :AbilityAssociation,
  #   foreign_key: :ability_experience

  # has_one :specialization,
  #   class_name: :AbilityAssociation,
  #   foreign_key: :specialization

end
