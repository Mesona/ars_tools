# == Schema Information
#
# Table name: flaws
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  book        :string           not null
#  flaw_type   :string           not null
#  major       :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flaw < ApplicationRecord

  has_many :flaw_associations
  has_many :characters, through: :flaw_associations
end
