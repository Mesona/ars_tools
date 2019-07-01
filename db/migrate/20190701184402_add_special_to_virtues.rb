class AddSpecialToVirtues < ActiveRecord::Migration[5.2]
  def change
    add_column :virtues, :special_one, :string
    add_column :virtues, :special_two, :string
  end
end
