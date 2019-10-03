@abilities.each do |ability|
  json.set! ability.id do
    json.extract! ability, :name, :id
  end
end
