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
  validates :character_type, :name, presence: true
  validate :virtues_and_flaws

  belongs_to :user

  has_many :virtue_associations
  has_many :virtues, through: :virtue_associations

  has_many :flaw_associations
  has_many :flaws, through: :flaw_associations

  has_many :ability_associations
  has_many :abilities, through: :ability_associations
  accepts_nested_attributes_for :ability_associations, update_only: true

  # TODO
  # has_one inventory
  # need to add decrepitude when I get to aging

  # [68] pry(main)> c.ability_associations.includes(:ability).each do |a|
  #   [68] pry(main)*   a.ability.name
  #   [68] pry(main)*   a.experience
  #   [68] pry(main)* end  

  def stats
    return {
      "Intelligence": self.intelligence,
      "Perception": self.perception,
      "Strength": self.strength,
      "Stamina": self.stamina,
      "Presence": self.presence,
      "Communication": self.communication,
      "Dexterity": self.dexterity,
      "Quickness": self.quickness 
    }
  end

  def all_abilities
    ability_associations.includes(:ability).each do |ability_association|
      puts ability_association.ability.name
      puts ability_association.experience
    end
  end

  private

  def self.generate_abilities(character_id)
    abilities = Ability.all
    abilities.each do |ability|
      AbilityAssociation.create(ability_id: ability.id, character_id: character_id, experience: 0)
    end
  end

  def virtues_and_flaws
    core_book_virtues_and_flaws
  end

  def core_book_virtues_and_flaws
    virtues = self.virtues
    flaws = self.flaws
    allVirtues = Virtue.all
    allFlaws = Flaw.all
    flawAssociations = FlawAssociation.where(character_id: self.id)
    virtueAssociations = VirtueAssociation.where(character_id: self.id)

    if virtues.include?(allVirtues.find_by(name: "Wealthy")) && flaws.include?(allFlaws.find_by(name: "Poor"))
      errors.add(:virtues, "Cannot have both the 'Wealthy' Virtue and the 'Poor' Flaw")
    end

    if (self.character_type == "Grog" || self.character_type == "NPC") && virtues.include?(allVirtues.find_by(name: "The Gift"))
      errors.add(:virtues, "Only Magi can have 'The Gift'")
    end

    if virtues.include?(allVirtues.find_by(name: "Covenfolk")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:virtues, "'Covenfolk' may not take the 'Wealthy' Virtue")
    end

    if virtues.include?(allVirtues.find_by(name: "Covenfolk")) && flaws.include?(allFlaws.find_by(name: "Poor"))
      errors.add(:virtues, "'Covenfolk' may not take the 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Custos")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:virtues, "'Custos' may not take the 'Wealthy' Virtue")
    end

    if virtues.include?(allVirtues.find_by(name: "Custos")) && flaws.include?(allFlaws.find_by(name: "Poor"))
      errors.add(:virtues, "'Custos' may not take the 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Diedne Magic")) && ! flaws.include?(allFlaws.find_by(name: "Dark Secret"))
      errors.add(:virtues, "The 'Diedne Magic' Virtue must also be paired with the 'Dark Secret' Flaw")
    end

    if (virtues.include?(allVirtues.find_by(name: "Giant Blood")) && 
        (virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf")))) ||
      (virtues.include?(allVirtues.find_by(name: "Large"))  &&
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf")))) ||
      (flaws.include?(allFlaws.find_by(name: "Small Frame")) && 
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Dwarf")))) ||
      (flaws.include?(allFlaws.find_by(name: "Dwarf")) && 
        (virtues.include?(allVirtues.find_by(name: "Giant Blood")) || 
        virtues.include?(allVirtues.find_by(name: "Large")) || 
        flaws.include?(allFlaws.find_by(name: "Small Frame"))))
      errors.add(:virtues, "Characters may only have one Virtue or Flaw from: 'Giant Blood' / 'Large' / 'Small Frame' / 'Dwarf'")
    end

    if virtues.include?(allVirtues.find_by(name: "Hermetic Magus")) && self.character_type != "Mage"
      errors.add(:virtues, "Only magi may take the Virtue 'Hermetic Magus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Inoffensive To Animals")) && self.character_type != "Mage" && !flaws.include?(allFlaws.find_by(name: "Magical Air"))
      errors.add(:virtues, "Only magi or individuals with the Flaw 'Magical Air' may take 'Inoffensive To Animals'")
    end

    if virtues.include?(allVirtues.find_by(name: "Knight")) && self.gender == "Female"
      errors.add(:virtues, "Only 'Male' characters may take the virtue 'Knight'")
    end

    if virtues.include?(allVirtues.find_by(name: "Magister in Artibus")) && self.gender == "Female"
      errors.add(:virtues, "Only 'Male' characters may take the virtue 'Magister in Artibus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Magister in Artibus")) && (virtues.include?(allVirtues.find_by(name: "Wealthy")) || flaws.include?(allFlaws.find_by(name: "Poor")) )
      errors.add(:virtues, "The 'Magister in Artibus' Virtue cannot be taken with the 'Wealthy' Virtue or 'Poor' Flaw")
    end

    if virtues.include?(allVirtues.find_by(name: "Major Magical Focus")) && virtues.include?(allVirtues.find_by(name: "Minor Magical Focus"))
      errors.add(:virtues, "Characters cannot have both 'Major Magical Focus' and 'Minor Magical Focus'")
    end

    if virtues.include?(allVirtues.find_by(name: "Mythic Blood")) && ! virtues.include?(allVirtues.find_by(name: "Minor Magical Focus"))
      errors.add(:virtues, "'Mythic Blood' grants the 'Minor Magical Focus' Virtue for free and must be taken")
    end

    if virtues.include?(allVirtues.find_by(name: "Priest")) && self.gender == "Female"
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

    if virtues.include?(allVirtues.find_by(name: "Student of (Realm)")) && virtues.include?(allVirtues.find_by(name: "Puissant (Ability)"))
      realm = self.virtue_associations.includes(:virtue).where(virtue_id: allVirtues.find_by(name: "Student of (Realm)"))
      puissant = self.virtue_associations.includes(:virtue).where(virtue_id: allVirtues.find_by(name: "Puissant (Ability)"))
      if (puissant.where(special_one: "Dominion Lore") != [] && realm.where(special_one: "Divine") != []) ||
         (puissant.where(special_one: "Infernal Lore") != [] && realm.where(special_one: "Infernal") != []) ||
         (puissant.where(special_one: "Magic Lore") != [] && realm.where(special_one: "Magic") != []) ||
         (puissant.where(special_one: "Faerie Lore") != [] && realm.where(special_one: "Faerie") != [])
           errors.add(:virtues, "Characters may not take 'Puissant (Ability)' for the same Lore Ability that aligns with their 'Student of (Realm)' Virtue")
      end
    end

    if virtues.include?(allVirtues.find_by(name: "Temporal Influence")) && self.character_type == "Grog"
      errors.add(:virtues, "Grogs may not take the Virtue 'Temporal Influence'")
    end

    if self.character_type == "Mage" && (virtues.include?(allVirtues.find_by(name: "Wealthy")) || flaws.include?(allFlaws.find_by(name: "Poor")) )
      errors.add(:virtues, "Magi may not take the 'Wealthy' Virtue or the 'Poor' Flaw")
    end

    if flaws.include?(allFlaws.find_by(name: "Blatant Gift")) && self.character_type != "Mage"
      errors.add(:flaws, "Only Magi may take the Flaw 'Blatant Gift'")
    end

    if flaws.include?(allFlaws.find_by(name: "Branded Criminal")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:flaws, "Characters with the 'Branded Criminal' Flaw may not take the 'Wealthy' Virtue")
    end

    if flaws.include?(allFlaws.find_by(name: "Incompatible Arts"))
      if flaws.include?(allFlaws.find_by(name: "Deficient Form"))
        df_special = self.flaw_associations.includes(:flaw).find_by(flaw_id: allFlaws.find_by(name: "Deficient Form").id).special_one
        flawAssociations.where(flaw_id: allFlaws.find_by(name: "Incompatible Arts").id).each do |fa|
          if fa.special_one[-2,2] == df_special || fa.special_two[-2,2] == df_special
            errors.add(:flaws, "Characters may not take the 'Incompatible Arts' Flaw for the same Form or Technique they have a 'Deficient' Flaw in")
          end
        end
      end
      if flaws.include?(allFlaws.find_by(name: "Deficient Technique"))
        dt_special = self.flaw_associations.includes(:flaw).find_by(flaw_id: allFlaws.find_by(name: "Deficient Technique").id).special_one
        flawAssociations.where(flaw_id: allFlaws.find_by(name: "Incompatible Arts").id).each do |fa|
          if fa.special_one[-2,2] == dt_special || fa.special_two[-2,2] == dt_special
            errors.add(:flaws, "Characters may not take the 'Incompatible Arts' Flaw for the same Form or Technique they have a 'Deficient' Flaw in")
          end
        end
      end
    end

    if flaws.include?(allFlaws.find_by(name: "Magical Air")) && self.character_type == "Mage"
      errors.add(:flaws, "Mages cannot take the Flaw 'Magical Air'")
    end

    if flaws.include?(allFlaws.find_by(name: "No Sense of Direction")) && virtues.include?(allVirtues.find_by(name: "Well-Traveled"))
      errors.add(:flaws, "The 'No Sense of Direction' Flaw cannot be combined with the 'Well-Traveled' Virtue")
    end

    if flaws.include?(allFlaws.find_by(name: "Offensive to Animals")) 
      if flaws.include?(allFlaws.find_by(name: "Magical Air"))
        errors.add(:flaws, "Characters may not have both the 'Offensive to Animals' and 'Magical Air' Flaws")
      end
      if self.character_type == "Mage" && ! virtues.include?(allVirtues.find_by(name: "Gentle Gift"))
        errors.add(:flaws, "Mages may only take the 'Offensive to Animals' Flaw if they also have the 'Gentle Gift' Virtue")
      end
    end

    if flaws.include?(allFlaws.find_by(name: "Outcast")) && virtues.include?(allVirtues.find_by(name: "Wealthy"))
      errors.add(:virtues, "Characters may not take the 'Outcast' Flaw and the 'Wealthy' Virtue")
    end

    if flaws.include?(allFlaws.find_by(name: "Outlaw Leader")) && self.character_type == "Grog"
      errors.add(:flaws, "Grogs may not take the 'Outlaw Leader' Flaw")
    end

    if virtues.where(virtue_type: "Hermetic") != [] && self.character_type != "Mage"
      errors.add(:virtues, "Only Mages may take Hermetic Virtues")
    end

    if virtues.where(major: true) != [] && self.character_type == "Grog"
      errors.add(:virtues, "Grogs may not have 'Major' Virtues")
    end

    if flaws.where(major: true) != [] && self.character_type == "Grog"
      errors.add(:flaws, "Grogs may not have 'Major' Flaws")
    end

    if flaws.where(flaw_type: "Hermetic") != [] && self.character_type != "Mage"
      errors.add(:flaws, "Only Mages may take Hermetic Flaws")
    end

    stats.each do | stat |
      if stat[1] > 5
        errors.add(:virtues, "Characters may not have a stat above +5")
      elsif stat[1] < -5
        errors.add(:flaws, "Characters may not have a stat below -5")
      elsif stat[1] > 3
        excess_stats = stat[1] - 3
        great_characteristics = virtueAssociations.where(virtue_id: (allVirtues.find_by(name: "Great (Characteristic)")), special_one: stat[0].to_s).count
        if great_characteristics != excess_stats
          errors.add(:virtues, "Mismatch 'Great (Characteristic)' and #{stat[0].to_s}")
        end
      elsif stat[1] < -3
        excess_stats = (stat[1] * -1) - 3
        poor_characteristics = flawAssociations.where(flaw_id: (allFlaws.find_by(name: "Poor (Characteristic)")), special_one: stat[0].to_s).count
        if poor_characteristics != excess_stats
          errors.add(:flaws, "Mismatch 'Poor (Characteristic)' and #{stat[0].to_s}")
        end
      end
    end


  end

end
