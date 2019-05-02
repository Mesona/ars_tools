Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    
    
    resource :session, only: [:new, :create, :destroy]
  end
  
  root to: 'root#root'
end
