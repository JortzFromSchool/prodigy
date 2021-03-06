Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:index, :show]
    resources :annotations, only: [:show, :update, :create, :destroy]
    resources :upvotes, only: [:show, :create, :destroy, :update]
    resources :comments, only: [:show, :create, :destroy]
  end
  
  root "static_pages#root"
end
