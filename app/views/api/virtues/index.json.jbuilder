@virtues.each do |virtue|
  json.set! virtue.id do
    json.extract! virtue, :id, :name, :book, :virtue_type, :major, :free
  end
end

