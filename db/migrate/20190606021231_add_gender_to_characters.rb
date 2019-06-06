class AddGenderToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :gender, :string
  end
end
