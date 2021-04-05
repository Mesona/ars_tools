# == Schema Information
#
# Table name: virtue_associations
#
#  id           :bigint           not null, primary key
#  virtue_id    :integer
#  character_id :integer
#  special      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class VirtueAssociation < ApplicationRecord
  belongs_to :character
  belongs_to :virtue
end
