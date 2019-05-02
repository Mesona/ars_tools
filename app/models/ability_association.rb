# == Schema Information
#
# Table name: ability_associations
#
#  id                 :bigint(8)        not null, primary key
#  ability_id         :integer
#  character_id       :integer
#  ability_experience :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  specialization     :string
#

class AbilityAssociation < ApplicationRecord
  belongs_to :character
  belongs_to :ability
end
