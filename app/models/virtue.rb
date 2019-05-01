# == Schema Information
#
# Table name: virtues
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  book        :string           not null
#  type        :string           not null
#  major       :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Virtue < ApplicationRecord

  has_any_belongs_to_many :characters
end
