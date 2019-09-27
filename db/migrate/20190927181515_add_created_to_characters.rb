class AddCreatedToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :created, :boolean, :default => false
  end
end
