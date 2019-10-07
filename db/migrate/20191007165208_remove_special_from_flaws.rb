class RemoveSpecialFromFlaws < ActiveRecord::Migration[5.2]
  def change
    remove_column :flaws, :special, :boolean
  end
end
