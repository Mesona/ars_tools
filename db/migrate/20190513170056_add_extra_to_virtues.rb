class AddExtraToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :extra, :string
  end
end
