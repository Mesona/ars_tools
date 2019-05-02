class AddSpecializationToAbilitiyAssociations < ActiveRecord::Migration[5.2]
  def change
    add_column :ability_associations, :specialization, :string
  end
end
