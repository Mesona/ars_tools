class CreateCharacterFlawsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :characters, :flaws do |t|
      t.index :character_id
      t.index :flaw_id
    end
  end
end
