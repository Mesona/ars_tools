class AddSpecialTwoToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :special_two, :string
  end
end
