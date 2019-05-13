class RemoveExtraFromFlaws < ActiveRecord::Migration[5.2]
  def change
    remove_column :flaws, :extra, :string
  end
end
