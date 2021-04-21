class FixCharacterTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :characters, :type, :character_type
    rename_column :virtues, :type, :perk_type
  end
end
