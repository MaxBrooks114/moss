Rails.application.routes.draw do

  post "/api/v1/login", to: "api/v1/sessions#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  post "/api/v1/signup", to: "api/v1/users#create"


  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :users do
        resources :concerts do
        end
        resources :reviews
      end
      resources :concerts do
        resources :reviews
      end


  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
