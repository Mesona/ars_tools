@characters.each do |character|
  json.set! character.id do
    json.merge! character.attributes
    json.extract! character, :id, :character_type, :name, :intelligence, :perception, :strength, :stamina, :presence, :communication, :dexterity, :quickness, :age, :appearant_age, :abilities, :ability_associations
  end
end

# TODO
# Break line into smaller lines when proven works
# Possibly add abilities to extract as well, but that's later
