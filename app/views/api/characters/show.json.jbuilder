json.extract! @character, :id, :character_type, :name, :intelligence, :perception, :strength, :stamina, :presence, :communication, :dexterity, :quickness, :age, :appearant_age
json.user_id @character.user_id
json.key @character.id

@character.ability_associations.each do |ability_association|
  json.set! ability_association.id do
    json.key ability_association.id
    json.extract! ability_association, :id, :experience, :specialization
    json.ability_name ability_association.ability_name
    json.ability_description ability_association.ability_description
  end
end