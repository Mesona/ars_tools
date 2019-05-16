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
  validate :virtues_and_flaws

  belongs_to :user

  has_many :virtue_associations
  has_many :virtues, through: :virtue_associations

  has_many :flaw_associations
  has_many :flaws, through: :flaw_associations

  has_many :ability_associations
  has_many :abilities, through: :ability_associations
  # has_one inventory
  # need to add decrepitude when I get to aging
  # need to add gender to character page


  # [68] pry(main)> c.ability_associations.includes(:ability).each do |a|
  #   [68] pry(main)*   a.ability.name
  #   [68] pry(main)*   a.experience
  #   [68] pry(main)* end  

  private

  def virtues_and_flaws
    core_book_virtues_and_flaws
  end

  def core_book_virtues_and_flaws
    virtues = self.virtues
    flaws = self.flaws
    allVirtues = Virtue.all
    allFlaws = Flaw.all

    if virtues.include?(allVirtues.find_by(name: "Wealthy")) && flaws.include?(allFlaws.find_by(name: "Poor"))
      errors.add(:virtues, "Cannot have both the 'Wealthy' Virtue and the 'Poor' Flaw")
    end

    if (self.character_type = "Grog" || self.character_type = "NPC") && virtues.include?(allVirtues.find_by(name: "The Gift").id)
      errors.add(:virtues, "Grogs and NPCs cannot have 'The Gift.'")
    end

    if virtues.include?(allVirtues.find_by(name: "Covenfolk").id) && (virtues.include?(allVirtues.find_by(name: "Wealthy").id) || flaws.include?(allFlaws.find_by(name: "Poor").id))
      errors.add(:virtues, "'Covenfolk' may not take the 'Wealthy' Virtue or 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Custos").id) && (virtues.include?(allVirtues.find_by(name: "Wealthy").id) || flaws.include?(allFlaws.find_by(name: "Poor").id))
      errors.add(:virtues, "'Custos' may not take the 'Wealthy' Virtue or 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Diedne Magic")) && ! flaws.include?(allFlaws.find_by(name: "Dark Secret"))
      errors.add(:virtues, "The 'Diedne Magic' Virtue must also be paired with the 'Dark Secret' Flaw")
    end

    if (virtues.include?(allVirtues.find_by(name: "Giant Blood")) && 
        (virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf"))) ||
      virtues.include?(allVirtues.find_by(name: "Large")) && 
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf"))) ||
      flaws.include?(allFlaws.find_by(name: "Small Frame")) && 
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf"))) ||
      flaws.include?(allFlaws.find_by(name: "Dwarf")) && 
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame"))))
      errors.add(:virtues, "Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'")
    end

    # if virtues.name.include?(allVirtues.find_by(name: "Large")) && (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || flaws.include?(allFlaws.find_by(name: "Small Frame")) || flaws.include?(allFlaws.find_by(name: "Dwarf")))
    #   errors.add(:virtues, "Characters may only have one Virtue or Flaw from: Giant Blood / Large / Small Frame / Dwarf")
    # end

    # if flaws.name.include?(allFlaws.find_by(name: "Small Frame")) && (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || virtues.include?(allVirtues.find_by(name: "Large")) || flaws.include?(allFlaws.find_by(name: "Dwarf")))
    #   errors.add(:virtues, "Characters may only have one Virtue or Flaw from: Giant Blood / Large / Small Frame / Dwarf")
    # end

    # if flaws.name.include?(allFlaws.find_by(name: "Dwarf")) && (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || virtues.include?(allVirtues.find_by(name: "Large")) || flaws.include?(allFlaws.find_by(name: "Small Frame")))
    #   errors.add(:virtues, "Characters may only have one Virtue or Flaw from: Giant Blood / Large / Small Frame / Dwarf")
    # end

    if virtues.include?(allVirtues.find_by(name: "Hermetic Magus")) && self.character_type != "Mage"
      errors.add(:virtues, "Only magi may take the Virtue 'Hermetic Magus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Inoffensive to Animals")) && (self.character_type != "Mage" || ! flaws.include?(allFlaws.find_by(name: "Magical Air")))
      errors.add(:virtues, "Only magi or individuals with the Flaw 'Magical Air' may take 'Inoffensive to Animals'")
    end

    if virtues.include?(allVirtues.find_by(name: "Knight")) && self.gender = "Female"
      errors.add(:virtues, "Only 'Male' characters may take the virtue 'Knight'")
    end

    if virtues.include?(allVirtues.find_by(name: "Magister in Artibus")) && self.gender = "Female"
      errors.add(:virtues, "Only 'Male' characters may take the virtue 'Magister in Artibus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Magister in Artibus")) && (self.gender = "Female" || virtues.include?(allVirtues.find_by(name: "Wealthy")) || flaws.include?(allFlaws.find_by(name: "Poor")) )
      errors.add(:virtues, "The 'Magister in Artibus' Virtue is not available to 'Female' characters, and cannot be taken with the 'Wealthy' Virtue or 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Major Magical Focus")) && virtues.include?(allVirtues.find_by(name: "Minor Magical Focus"))
      errors.add(:virtues, "Characters cannot have both 'Major Magical Focus' and 'Minor Magical Focus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Mythic Blood")) && ! virtues.include?(allVirtues.find_by(name: "Minor Magical Focus"))
      errors.add(:virtues, "'Mythic Blood' grants the 'Minor Magical Focus' Virtue for free and must be taken")
    end

    if virtues.include?(allVirtues.find_by(name: "Priest")) && self.gender = "Female"
      errors.add(:virtues, "Only 'Male' characters may take the Virtue 'Priest")
    end

    if virtues.include?(allVirtues.find_by(name: "Priest")) && ! flaws.include?(allFlaws.find_by(name: "Vow"))
      errors.add(:virtues, "Characters with the 'Priest' Virtue must also take the Flaw 'Vow'")
    end

    if virtues.include?(allVirtues.find_by(name: "Redcap")) && (virtues.include?(allVirtues.find_by(name: "Wealthy")) || flaws.include?(allFlaws.find_by(name: "Poor")))
      errors.add(:virtues, "Characters with the Virtue 'Redcap' cannot take the Virtue 'Wealthy' or the Flaw 'Poor'")
    end

    if virtues.include?(allVirtues.find_by(name: "Strong Faerie Blood")) && virtues.include?(allVirtues.find_by(name: "Faerie Blood"))
      errors.add(:virtues, "Characters may not have both the 'Strong Faerie Blood' and 'Faerie Blood' Virtues")
    end

    # TODO: Finish filling this out
    # if virtues.include?(allVirtues.find_by(name: "Student of (Realm)")) && virtues.include?(allVirtues.find_by(name: "Puissant (Ability)"))
    #   if 
    #     errors.add(:virtues, "Characters may not take 'Puissant (Ability)' for the same Lore Ability that aligns with their 'Student of (Realm) Virtue'")
    #   end
    # end

    if virtues.include?(allVirtues.find_by(name: "Temporal Influence")) && self.character_type = "Grog"
      errors.add(:virtues, "Grogs may not take the Virtue 'Temporal Influence'")
    end

    if (virtues.include?(allVirtues.find_by(name: "Wealthy")) || flaws.include?(allFlaws.find_by(name: "Poor")) ) && self.character_type = "Mage"
      errors.add(:virtues, "Magi may not take the 'Wealthy' Virtue or the 'Poor' Flaw")
    end

    if flaws.include?(allFlaws.find_by(name: "Blatant Gift")) && self.character_type != "Mage"
      errors.add(:flaws, "Only Magi may take the Flaw 'Blatant Gift'")
    end

    if flaws.include?(allFlaws.find_by(name: "Branded Criminal")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:flaws, "Characters with the 'Branded Criminal' Flaw may not take the 'Wealthy' Virtue")
    end

    # TODO: Finish filling this out
    # if flaws.include?(allFlaws.find_by(name: "Incompatible Arts")) && (flaws.include?(allFlaws.find_by(name: "Deficient Form")) || flaws.include?(allFlaws.find_by(name: "Deficient Technique")))
      # if
      #   errors.add(:flaws, "Characters may not take the 'Incompatible Arts' Flaw for the same Form or Technique they have a 'Deficient' Flaw in")
      # end
    # end

    if flaws.include?(allFlaws.find_by(name: "Magical Air")) && self.character_type = "Mage"
      errors.add(:flaws, "Mages cannot take the Flaw 'Magical Air'")
    end

    if flaws.include?(allFlaws.find_by(name: "No Sense of Direction")) && virtues.include?(allVirtues.find_by(name: "Well-Traveled"))
      errors.add(:flaws, "The 'No Sense of Direction' Flaw cannot be combined with the 'Well-Traveled' Virtue")
    end

    if flaws.include?(allFlaws.find_by(name: "Offensive to Animals")) 
      if flaws.include?(allFlaws.find_by(name: "Magical Air"))
        errors.add(:flaws, "Characters may not have both the 'Offensive to Animals' and 'Magical Air' Flaws")
      end
      if self.character_type = "Mage" && ! virtues.include?(allVirtues.find_by(name: "Gentle Gift"))
        errors.add(:flaws, "Mages may only take the 'Offensive to Animals' Flaw if they also have the 'Gentle Gift' Virtue")
      end
    end

    if flaws.include?(allFlaws.find_by(name: "Outcast")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:virtues, "Characters may not take the 'Outcast' Flaw and the 'Wealthy' Virtue")
    end

    if flaws.include?(allFlaws.find_by(name: "Outlaw Leader")) && self.character_type = "Grog"
      errors.add(:flaws, "Grogs may not take the 'Outlaw Leader' Flaw")
    end


  end


end
