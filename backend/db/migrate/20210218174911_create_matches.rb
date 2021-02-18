class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.string :winner
      t.float :winnerProbability

      t.timestamps
    end
  end
end
