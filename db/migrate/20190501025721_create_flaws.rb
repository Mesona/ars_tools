class CreateFlaws < ActiveRecord::Migration[5.2]
  def change
    create_table :flaws do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :book, null: false
      t.string :perk_type, null: false
      t.boolean :major

      t.timestamps
    end
    add_index :flaws, :book
    add_index :flaws, :perk_type
    add_index :flaws, :major
  end
end
