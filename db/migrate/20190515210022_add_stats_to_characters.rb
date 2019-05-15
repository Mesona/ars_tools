class AddStatsToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :intelligence, :string
    add_column :characters, :perception, :string
    add_column :characters, :strength, :string
    add_column :characters, :stamina, :string
    add_column :characters, :presence, :string
    add_column :characters, :communication, :string
    add_column :characters, :dexterity, :string
    add_column :characters, :quickness, :string
    add_column :characters, :age, :string
    add_column :characters, :appearant_age, :string
    add_index :characters, :age
  end
end
