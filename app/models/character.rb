# == Schema Information
#
# Table name: characters
#
#  id         :bigint(8)        not null, primary key
#  type       :string           not null
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Character < ApplicationRecord

  belongs_to :user

  # has_many :abilities
  # has_many :virtues
  # has_many :flaws
end
