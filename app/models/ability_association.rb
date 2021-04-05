# == Schema Information
#
# Table name: ability_associations
#
#  id             :bigint           not null, primary key
#  ability_id     :integer
#  character_id   :integer
#  experience     :integer          default(0)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  specialization :string
#

class AbilityAssociation < ApplicationRecord

  attr_accessor :experience, :specialization
  
  belongs_to :character
  belongs_to :ability

  # TODO
  # Impliment this in frontend when time comes
  # Character.last.ability_associations.last[:experience] = 50
  def exp
    return self[:experience]
  end

  def ability_name
    ability.name
  end

  def ability_description
    ability.description
  end

end
