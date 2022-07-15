class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :instructions, :minutes_to_complete
  belongs_to :user
  belongs_to :teacher
end
