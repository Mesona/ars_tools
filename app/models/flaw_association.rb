# == Schema Information
#
# Table name: flaw_associations
#
#  id           :bigint(8)        not null, primary key
#  flaw_id      :integer
#  character_id :integer
#  special      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FlawAssociation < ApplicationRecord
  belongs_to :character
  belongs_to :flaw
end
