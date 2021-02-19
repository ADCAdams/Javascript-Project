class HeroSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :role, :winrate
  belongs_to :match
end
