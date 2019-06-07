# == Schema Information
#
# Table name: ability_associations
#
#  id             :bigint(8)        not null, primary key
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

  def update_specialization(string)
    self.specialization = string
    self.save!
  end
end
