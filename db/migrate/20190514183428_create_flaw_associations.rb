class CreateFlawAssociations < ActiveRecord::Migration[5.2]
  def change
    create_table :flaw_associations do |t|
      t.integer :flaw_id
      t.integer :character_id
      t.string :special

      t.timestamps
    end
    add_index :flaw_associations, [:flaw_id, :character_id]
    add_index :flaw_associations, :character_id
  end
end
