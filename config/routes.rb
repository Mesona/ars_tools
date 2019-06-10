Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :characters, only: [:index]
    end
    
    resource :session, only: [:new, :create, :destroy]
    resources :characters, except: [:index]
  end
  
  root to: 'root#root'
end
