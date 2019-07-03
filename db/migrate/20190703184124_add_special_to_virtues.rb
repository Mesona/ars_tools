class AddSpecialToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :special, :boolean, default: false
  end
end
