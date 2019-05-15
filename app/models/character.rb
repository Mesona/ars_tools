# == Schema Information
#
# Table name: characters
#
#  id             :bigint(8)        not null, primary key
#  character_type :string           not null
#  name           :string           not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  intelligence   :integer          default(0)
#  perception     :integer          default(0)
#  strength       :integer          default(0)
#  stamina        :integer          default(0)
#  presence       :integer          default(0)
#  communication  :integer          default(0)
#  dexterity      :integer          default(0)
#  quickness      :integer          default(0)
#  age            :integer          default(0)
#  appearant_age  :integer          default(0)
#

class Character < ApplicationRecord
  # validate :virtues_and_flaws

  belongs_to :user

  has_many :virtue_associations
  has_many :virtues, through: :virtue_associations

  has_many :flaw_associations
  has_many :flaws, through: :flaw_associations

  has_many :ability_associations
  has_many :abilities, through: :ability_associations
  # has_one inventory
  # need to add decrepitude when I get to aging


  # [68] pry(main)> c.ability_associations.includes(:ability).each do |a|
  #   [68] pry(main)*   a.ability.name
  #   [68] pry(main)*   a.experience
  #   [68] pry(main)* end  
    


  private

  # def virtues_and_flaws
  #   core_book_virtues_and_flaws
  # end

  # def core_book_virtues_and_flaws
  #   virtues = self.virtues
  #   if virtues.includes(XXX && YYY)
  # end


end
