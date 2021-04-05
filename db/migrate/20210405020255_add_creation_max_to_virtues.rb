class AddCreationMaxToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :creation_max, :int
  end
end
