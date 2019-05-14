class ChangeAbilityExperienceToExperience < ActiveRecord::Migration[5.2]
  def change
    rename_column :ability_associations, :ability_experience, :experience
  end
end
