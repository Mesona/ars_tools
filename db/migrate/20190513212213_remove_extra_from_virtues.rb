class RemoveExtraFromVirtues < ActiveRecord::Migration[5.2]
  def change
    remove_column :virtues, :extra, :string
  end
end
