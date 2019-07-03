class AddSpecialToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :special, :boolean, default: false
  end
end
