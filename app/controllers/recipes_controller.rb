class RecipesController < ApplicationController
 
def index
    recipes = Recipe.all
    render json: recipes, status: :ok
end

def create
    user = User.find_by(id: session[:user_id])
    recipe = user.recipes.create(recipe_params)
    
    # recipe = user.recipes.create(recipe_params)
    render json: recipe, status: :created

end 

def destroy
    recipe = Recipe.find_by(id:params[:id])
    recipe.destroy
end 



 

private 
    def recipe_params
        params.permit(:instructions, :minutes_to_complete, :teacher_id )
        
    end 


end
