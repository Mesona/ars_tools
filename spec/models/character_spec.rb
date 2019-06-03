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

require 'rails_helper'

RSpec.describe Character, type: :model do

  test_character = ""
  test_user = FactoryBot.create(:user)
  before(:each) do
    test_character = FactoryBot.build(:character, user_id: test_user.id, character_type: "Other")
  end

  describe "Generic characters" do
    it "should not have both 'Wealthy' and 'Poor'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Cannot have both the 'Wealthy' Virtue and the 'Poor' Flaw") 
    end
    it "should not be 'Covenfolk' with 'Wealthy' or 'Poor'"
    it "should not be 'Custos' with 'Wealthy' or 'Poor'"
    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'"
    it "should only have 'The Gift' if they are 'Mages'"
    it "should only have 'Hermetic Magus' if they are 'Mages'"
    it "should only take 'Inoffensive to Animals' if they are 'Mages' or have 'Magical Air'"
    it "should not be a 'Redcap' with 'Wealthy' or 'Poor'"
    it "should not have both 'Strong Faerie Blood' and 'Faerie Blood'"
    it "should not be 'Students of (Realm)' for Realms that they have 'Puissant (Ability)' in"
    it "should not take 'Blatant Gift' unless they are 'Mages'"
    it "should not have both 'Branded Criminal' and 'Wealthy'"
    it "should not have both 'No Sense of Direction' and 'Well-Traveled'"
    it "should not have both 'Offensive to Animals' and 'Magical Air'"
    it "should not have both 'Outcast' and 'Wealthy'"
    it "should have a number of excess stat points (above +3) equal to their number of 'Great (Characteristic)' virtues"
    it "should not have any stat above +5"
    it "should have a number of excess negative stat points (below -3) equal to their number of 'Poor (Characteristic) flaws"
    it "should not have any stats below -5"

  end

  describe "Mages" do
    it "should not have 'Wealthy' or 'Poor'"
    it "should have 'Dark Secret' if they have 'Diedne Magic'"
    it "should not have both 'Major Magic Focus' and 'Minor Magical Focus'"
    it "should not have both 'Minor Magical Focus' and'Mythic Blood'"
    it "should not take 'Incompatible Arts' for the same form they have a 'Deficient Form' in"
    it "should not take 'Incompatible Arts' for the same technique they have a 'Deficient Technique' in"
    it "should not have 'Magical Air'"
    it "should have 'Gentle Gift' if they have 'Offensive to Animals'"
  end

  describe "Grogs" do
    it "should not have any 'Major' Virtues or Flaws"
    it "should not take 'Temporal Influence'"
    it "should not take 'Outlaw Leader'"
  end

  describe "Gender rules" do
    it "Only 'Male' characters may take 'Knight'"
    it "Only 'Male' characters may take 'Magister in Artibus'"
    it "Magisters cannot take 'Wealthy' or 'Poor'"
    it "Only 'Male' characters may take 'Priest'"
    it "Priests must also take 'Vow'"
    
  end

end
