class FixAbilityColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :abilities, :unlearned_useable, :unlearned_usable
  end
end
