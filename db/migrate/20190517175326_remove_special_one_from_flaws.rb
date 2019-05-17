class RemoveSpecialOneFromFlaws < ActiveRecord::Migration[5.2]
  def change
    remove_column :flaws, :special_one, :string
    remove_column :flaws, :special_two, :string
    remove_column :virtue_associations, :special, :string
    remove_column :flaw_associations, :special, :string
    add_column :virtue_associations, :special_one, :string
    add_column :virtue_associations, :special_two, :string
    add_column :flaw_associations, :special_one, :string
    add_column :flaw_associations, :special_two, :string
  end
end
