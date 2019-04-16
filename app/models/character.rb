# == Schema Information
#
# Table name: characters
#
#  id         :bigint(8)        not null, primary key
#  type       :string           not null
#  name       :string           not null
#  abilities  :string           not null
#  virtues    :string           not null
#  flaws      :string           not null
#  equipment  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Character < ApplicationRecord
end
