class CreateAbilityAssociations < ActiveRecord::Migration[5.2]
  def change
    create_table :ability_associations do |t|
      t.integer :ability_id
      t.integer :character_id
      t.integer :ability_experience, :default => 0

      t.timestamps
    end
    add_index :ability_associations, [:ability_id, :character_id]
    add_index :ability_associations, :character_id
  end
end
