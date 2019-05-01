class CreateCharacterVirtuesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :characters, :virtues do |t|
      t.index :character_id
      t.index :virtue_id
    end
  end
end
