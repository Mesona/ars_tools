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
#  extra       :string
#

class Virtue < ApplicationRecord

  has_and_belongs_to_many :characters
end
