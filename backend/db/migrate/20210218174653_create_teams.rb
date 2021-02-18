class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.integer :teamWinrate
      t.boolean :radiantSide

      t.timestamps
    end
  end
end
