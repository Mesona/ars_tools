class AddStatsToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :intelligence, :integer, default: 0
    add_column :characters, :perception, :integer, default: 0
    add_column :characters, :strength, :integer, default: 0
    add_column :characters, :stamina, :integer, default: 0
    add_column :characters, :presence, :integer, default: 0
    add_column :characters, :communication, :integer, default: 0
    add_column :characters, :dexterity, :integer, default: 0
    add_column :characters, :quickness, :integer, default: 0
    add_column :characters, :age, :integer, default: 0
    add_column :characters, :appearant_age, :integer, default: 0
    add_index :characters, :age
  end
end
