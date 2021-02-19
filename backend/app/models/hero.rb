class Hero < ApplicationRecord
    belongs_to :team, :match
end
