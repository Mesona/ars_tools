class RemoveUnlearnedPenlatyFromAbilties < ActiveRecord::Migration[5.2]
  def change
    remove_column :abilities, :unlearned_penalty, :boolean
  end
end
