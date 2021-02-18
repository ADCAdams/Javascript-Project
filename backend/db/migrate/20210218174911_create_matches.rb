class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.string :winner
      t.integer :winnerProbability

      t.timestamps
    end
  end
end
