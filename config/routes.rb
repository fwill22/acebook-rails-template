Rails.application.routes.draw do
  resources :users do
  get '/signup', to: "users#index"
  # post '/signup', to: "users#create"
  
  end
  
  resources :posts do

  end

end
