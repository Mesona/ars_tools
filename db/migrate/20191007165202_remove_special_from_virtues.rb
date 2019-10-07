class RemoveSpecialFromVirtues < ActiveRecord::Migration[5.2]
  def change
    remove_column :virtues, :special, :boolean
  end
end
