class TeachersController < ApplicationController
    def index
        teacher = Teacher.all
        render json: teacher, status: :ok
    end
    

end
