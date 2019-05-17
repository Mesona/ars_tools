class AddSpecialToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :special_one, :string
  end
end
