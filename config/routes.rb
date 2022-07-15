Rails.application.routes.draw do
  resources :teachers, only:[:index]
  resources :recipes, only:[:index, :create, :destroy]
  resources :users

  post "/login", to: "sessions#serg"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"  
  post "/recipes", to: "recipes#create"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
