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
    test_character = FactoryBot.create(:character, user_id: test_user.id, character_type: "NPC")
  end

  describe "Generic characters" do
    it "should not have both 'Wealthy' and 'Poor'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Cannot have both the 'Wealthy' Virtue and the 'Poor' Flaw") 
    end

    it "should not be 'Covenfolk' with 'Wealthy'" do
      VirtueAssociation.create!(character_id: test_character.id, virtue_id: Virtue.find_by(name: "Covenfolk").id)
      VirtueAssociation.create!(character_id: test_character.id, virtue_id: Virtue.find_by(name: "Wealthy").id)
      expect { test_character.save! }.to raise_error("Validation failed: Virtues 'Covenfolk' may not take the 'Wealthy' Virtue") 
    end

    it "should not be 'Covenfolk' with 'Poor'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Covenfolk"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues 'Covenfolk' may not take the 'Poor' Flaw") 
    end
    
    it "should not be 'Custos' with 'Wealthy'" do
      VirtueAssociation.create!(character_id: test_character.id, virtue_id: Virtue.find_by(name: "Custos").id)
      VirtueAssociation.create!(character_id: test_character.id, virtue_id: Virtue.find_by(name: "Wealthy").id)
      expect { test_character.save! }.to raise_error("Validation failed: Virtues 'Custos' may not take the 'Wealthy' Virtue") 
    end

    it "should not be 'Custos' with 'Poor'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Custos"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues 'Custos' may not take the 'Poor' Flaw") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Giant Blood"))
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Large"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Giant Blood"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Small Frame"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Giant Blood"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Dwarf"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Large"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Small Frame"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Large"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Dwarf"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have one from 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Small Frame"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Dwarf"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'") 
    end

    it "should only have 'The Gift' if they are 'Mages'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "The Gift"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Only Magi can have 'The Gift'")
    end

    it "should only have 'Hermetic Magus' if they are 'Mages'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Hermetic Magus"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Only magi may take the Virtue 'Hermetic Magus'")
    end

    it "should only have 'Hermetic Magus' if they are 'Mages'" do
      test_character.character_type = "Mage"
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Hermetic Magus"))
      expect(test_character.save!).to eq(true)
    end

    it "should only take 'Inoffensive to Animals' if they are 'Mages' or have 'Magical Air'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Inoffensive To Animals", virtue_type: "General"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Only magi or individuals with the Flaw 'Magical Air' may take 'Inoffensive To Animals'")
    end

    it "should only take 'Inoffensive to Animals' if they are 'Mages' or have 'Magical Air'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Inoffensive To Animals", virtue_type: "General"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Magical Air"))
      expect(test_character.save!).to eq(true)
    end

    it "should only take 'Inoffensive to Animals' if they are 'Mages' or have 'Magical Air'" do
      test_character.character_type = "Mage"
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Inoffensive To Animals", virtue_type: "Hermetic"))
      expect(test_character.save!).to eq(true)
    end

    it "should not be a 'Redcap' with 'Wealthy'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Redcap"))
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters with the Virtue 'Redcap' cannot take the Virtue 'Wealthy' or the Flaw 'Poor'")
    end

    it "should not be a 'Redcap' with 'Poor'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Redcap"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters with the Virtue 'Redcap' cannot take the Virtue 'Wealthy' or the Flaw 'Poor'")
    end

    it "should not have both 'Strong Faerie Blood' and 'Faerie Blood'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Strong Faerie Blood"))
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Faerie Blood"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may not have both the 'Strong Faerie Blood' and 'Faerie Blood' Virtues")
    end

    it "should not be 'Students of (Realm)' for Realms that they have 'Puissant (Ability)' in"

    it "should not take 'Blatant Gift' unless they are 'Mages'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Blatant Gift"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Only Magi may take the Flaw 'Blatant Gift'")
    end

    it "should not have both 'Branded Criminal' and 'Wealthy'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Branded Criminal"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Characters with the 'Branded Criminal' Flaw may not take the 'Wealthy' Virtue")
    end

    it "should not have both 'No Sense of Direction' and 'Well-Traveled'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Well-Traveled"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "No Sense of Direction"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws The 'No Sense of Direction' Flaw cannot be combined with the 'Well-Traveled' Virtue")
    end

    it "should not have both 'Offensive to Animals' and 'Magical Air'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Magical Air"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Offensive to Animals"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Characters may not have both the 'Offensive to Animals' and 'Magical Air' Flaws")
    end

    it "should not have both 'Outcast' and 'Wealthy'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Outcast"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters may not take the 'Outcast' Flaw and the 'Wealthy' Virtue")
    end
    
    it "should have a number of excess stat points (above +3) equal to their number of 'Great (Characteristic)' virtues"
    it "should not have any stat above +5"
    it "should have a number of excess negative stat points (below -3) equal to their number of 'Poor (Characteristic) flaws"
    it "should not have any stats below -5"
    it "should not have any 'Hermetic' Virtues"
    it "should not have any 'Hermetic' Flaws"

  end

  describe "Mages" do

    before(:each) do
      test_character = FactoryBot.create(:character, user_id: test_user.id, character_type: "Mage")
    end

    it "should not have 'Wealthy'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Wealthy"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Magi may not take the 'Wealthy' Virtue or the 'Poor' Flaw")
    end

    it "should not have 'Poor'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Poor"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Magi may not take the 'Wealthy' Virtue or the 'Poor' Flaw")
    end

    it "should have 'Dark Secret' if they have 'Diedne Magic'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Diedne Magic"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues The 'Diedne Magic' Virtue must also be paired with the 'Dark Secret' Flaw")
    end

    it "should have 'Dark Secret' if they have 'Diedne Magic'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Diedne Magic"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Dark Secret"))
      expect(test_character.save!).to eq(true)
    end

    it "should not have both 'Major Magic Focus' and 'Minor Magical Focus'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Major Magical Focus"))
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Minor Magical Focus"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Characters cannot have both 'Major Magical Focus' and 'Minor Magical Focus'")
    end

    it "should have 'Minor Magical Focus' if they have 'Mythic Blood'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Mythic Blood"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues 'Mythic Blood' grants the 'Minor Magical Focus' Virtue for free and must be taken")
    end

    it "should have 'Minor Magical Focus' if they have 'Mythic Blood'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Mythic Blood"))
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Minor Magical Focus"))
      expect(test_character.save!).to eq(true)
    end

    it "should not take 'Incompatible Arts' for the same form they have a 'Deficient Form' in"

    it "should not take 'Incompatible Arts' for the same technique they have a 'Deficient Technique' in"

    it "should not have 'Magical Air'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Magical Air"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Mages cannot take the Flaw 'Magical Air'")
    end

    it "should have 'Gentle Gift' if they have 'Offensive to Animals'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Offensive to Animals"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Mages may only take the 'Offensive to Animals' Flaw if they also have the 'Gentle Gift' Virtue")
    end

    it "should have 'Gentle Gift' if they have 'Offensive to Animals'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Gentle Gift"))
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Offensive to Animals"))
      expect(test_character.save!).to eq(true)
    end

  end

  describe "Grogs" do

    before(:each) do
      test_character = FactoryBot.create(:character, user_id: test_user.id, character_type: "Grog")
    end

    it "should not have 'The Gift'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "The Gift"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Only Magi can have 'The Gift'")
    end

    it "should not have any 'Major' Virtues or Flaws"

    it "should not take 'Temporal Influence'" do
      VirtueAssociation.create!(character: test_character, virtue: Virtue.find_by(name: "Temporal Influence"))
      expect { test_character.save! }.to raise_error("Validation failed: Virtues Grogs may not take the Virtue 'Temporal Influence'")
    end

    it "should not take 'Outlaw Leader'" do
      FlawAssociation.create!(character: test_character, flaw: Flaw.find_by(name: "Outlaw Leader"))
      expect { test_character.save! }.to raise_error("Validation failed: Flaws Grogs may not take the 'Outlaw Leader' Flaw")
    end

  end

  describe "Others"

  describe "Gender rules" do

    it "Only 'Male' characters may take 'Knight'"
    it "Only 'Male' characters may take 'Magister in Artibus'"
    it "Magisters cannot take 'Wealthy' or 'Poor'"
    it "Only 'Male' characters may take 'Priest'"
    it "Priests must also take 'Vow'"
    
  end

end
