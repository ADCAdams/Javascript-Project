class HeroSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :role, :winrate
end
