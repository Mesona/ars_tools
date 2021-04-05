# == Schema Information
#
# Table name: abilities
#
#  id               :bigint           not null, primary key
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
end
