class AddSpecialsToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :special_one, :string
    add_column :flaws, :special_two, :string
  end
end
