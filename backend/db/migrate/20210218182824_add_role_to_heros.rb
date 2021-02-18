class AddRoleToHeros < ActiveRecord::Migration[6.0]
  def change
    add_column :heros, :role, :string
  end
end
