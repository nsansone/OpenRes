Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :create, :show]
    resources :reviews, only: [:create]
    resources :reservations, only: [:create, :destroy, :show, :update, :index]
  end

  root "static_pages#root"
end
