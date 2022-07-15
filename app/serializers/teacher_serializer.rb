class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_many :recipes
end
