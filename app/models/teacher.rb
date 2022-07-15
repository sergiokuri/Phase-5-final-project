class Teacher < ApplicationRecord
    has_many :recipes, dependent: :destroy

end
