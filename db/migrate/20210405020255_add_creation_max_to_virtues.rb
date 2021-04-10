class AddCreationMaxToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :creation_max, :int, default: 1
  end
end
