json.extract! @character, :id, :character_type, :name, :intelligence, :perception, :strength, :stamina, :presence, :communication, :dexterity, :quickness, :age, :appearant_age
json.user_id @character.user_id
json.key @character.id

json.set! "abilities" do
  @character.ability_associations.each do |ability_association|
    ability = ability_association.ability
    json.set! ability.id do
      json.ability_name ability_association.ability_name
      json.ability_description ability_association.ability_description
      json.experience ability_association.exp
      json.specialization ability_association.specialization
    end
  end
end

json.set! "virtues" do
  @character.virtue_associations.each do |virtue_association|
    virtue = virtue_association.virtue
    json.set! virtue.id do
      json.name virtue.name
      json.special_one virtue_association.special_one
      json.special_two virtue_association.special_two
    end
  end
end
