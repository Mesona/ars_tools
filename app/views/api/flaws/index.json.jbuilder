@flaws.each do |flaw|
  json.set! flaw.id do
    json.extract! flaw, :id, :name, :book, :perk_type, :major
  end
end

