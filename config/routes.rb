Rails.application.routes.draw do
  resources :flights #, only: [:index, :show]
  resources :airports #, only: [:index, :show]
  resources :users #, only: [:show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
