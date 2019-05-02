class CreateAbilities < ActiveRecord::Migration[5.2]
  def change
    create_table :abilities do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :book, null: false
      t.string :ability_type, null: false
      t.boolean :unlearned_useable
      t.boolean :unlearned_penalty

      t.timestamps
    end
    add_index :abilities, :book
    add_index :abilities, :ability_type
  end
end
