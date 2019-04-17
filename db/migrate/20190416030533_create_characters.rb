class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.string :abilities, null: false
      t.string :virtues, null: false
      t.string :flaws, null: false
      t.string :equipment


      t.timestamps
    end
    add_index :characters, :name
    add_index :characters, :type
  end
end
