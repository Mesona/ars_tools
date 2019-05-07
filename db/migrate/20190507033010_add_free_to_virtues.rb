class AddFreeToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :free, :boolean, :default => false
  end
end
