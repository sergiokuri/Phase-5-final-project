class UsersController < ApplicationController

   

    def show
        current_user = User.find_by(id:session[:user_id])
        render json: current_user
    end 
   
    def create 
    user = User.create(user_params)

        if user.valid? 
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: user.errors.full_messages}, status: :unproccesable_entity
         end
end  

def destroy
    user = User.find_by(id:params[:id])
    user.destroy  
end 


    private 
        def user_params 
            params.permit(:username, :password, :password_confirmation)

        end 

end
