# == Schema Information
#
# Table name: virtue_associations
#
#  id           :bigint(8)        not null, primary key
#  virtue_id    :integer
#  character_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  special_one  :string
#  special_two  :string
#

class VirtueAssociation < ApplicationRecord
  belongs_to :character
  belongs_to :virtue
end
