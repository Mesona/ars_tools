class AddCreationMaxToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :creation_max, :int, default: 1
  end
end
