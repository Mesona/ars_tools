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
#  user_id    :integer          not null
#

class Character < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
