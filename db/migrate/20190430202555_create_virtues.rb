class CreateVirtues < ActiveRecord::Migration[5.2]
  def change
    create_table :virtues do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :book, null: false
      t.string :type, null: false
      t.boolean :major

      t.timestamps
    end
    add_index :virtues, :book
    add_index :virtues, :type
    add_index :virtues, :major
  end
end
