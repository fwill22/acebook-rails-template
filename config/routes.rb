Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/show'
  get 'sessions/create'
  get 'sessions/destroy'
  root "posts#index"
  
  resources :users do
  get '/users', to: "users#index"
  post '/users', to: "users#index"
  end


  
  resources :posts do

  end

end
