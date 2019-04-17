class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :characters, :type
    add_index :characters, :user_id
  end
end
