class CreateVirtueAssociations < ActiveRecord::Migration[5.2]
  def change
    create_table :virtue_associations do |t|
      t.integer :virtue_id
      t.integer :character_id
      t.string :special

      t.timestamps
    end
    add_index :virtue_associations, [:virtue_id, :character_id]
    add_index :virtue_associations, :character_id
  end
end
