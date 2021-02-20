class AddMatchIdToHeros < ActiveRecord::Migration[6.0]
  def change
    add_column :heros, :match_id, :string
  end
end
