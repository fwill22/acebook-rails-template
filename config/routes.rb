Rails.application.routes.draw do
  root "posts#index"
  
  resources :users do
  get '/signup', to: "users#index"
  # post '/signup', to: "users#create"
  
  end
  
  resources :posts do

  end

end
