class CreateHeros < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |t|
      t.string :name
      t.float :winrate
      t.integer :team_id
      t.string :role

      t.timestamps
    end
  end
end
