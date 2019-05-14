# == Schema Information
#
# Table name: virtues
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  book        :string           not null
#  virtue_type :string           not null
#  major       :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  free        :boolean          default(FALSE)
#

class Virtue < ApplicationRecord

  has_many :virtue_associations
  has_many :characters, through: :virtue_associations
end
