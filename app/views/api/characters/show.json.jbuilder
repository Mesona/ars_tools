json.extract! @character, :id, :character_type, :name, :intelligence, :perception, :strength, :stamina, :presence, :communication, :dexterity, :quickness, :age, :appearant_age
json.user_id @character.user_id
json.key @character.id

json.ability_associations @character.ability_associations.each do |ability_association|
  json.extract! ability_association, :id, :specialization
  json.ability_name ability_association.ability_name
  json.ability_description ability_association.ability_description
  json.experience ability_association.exp
end

json.virtue_associations @character.virtue_associations.each do |virtue_association|
  json.virtue_id virtue_association.virtue.id
  json.virtue_name virtue_association.virtue.name
  json.special_one virtue_association.special_one
  json.special_two virtue_association.special_two
end
