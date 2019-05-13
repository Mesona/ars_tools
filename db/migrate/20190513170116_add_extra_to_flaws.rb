class AddExtraToFlaws < ActiveRecord::Migration[5.2]
  def change
    add_column :flaws, :extra, :string
  end
end
