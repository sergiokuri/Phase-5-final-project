class Recipe < ApplicationRecord

    validates :instructions, presence: true
    validates :instructions, length: {minimum: 5} 

    belongs_to :user
    belongs_to :teacher

    



end
