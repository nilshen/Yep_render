Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :show, :update, :destroy]
    end
    
  end


  root "static_pages#root"
end


# Prefix Verb   URI Pattern                                                                              Controller#Action
# api_user POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
# api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
#          DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#          POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
# api_restaurant_reviews GET    /api/restaurants/:restaurant_id/reviews(.:format)                                        api/reviews#index {:format=>:json}
#          POST   /api/restaurants/:restaurant_id/reviews(.:format)                                        api/reviews#create {:format=>:json}
# api_restaurant_review GET    /api/restaurants/:restaurant_id/reviews/:id(.:format)                                    api/reviews#show {:format=>:json}
#          PATCH  /api/restaurants/:restaurant_id/reviews/:id(.:format)                                    api/reviews#update {:format=>:json}
#          PUT    /api/restaurants/:restaurant_id/reviews/:id(.:format)                                    api/reviews#update {:format=>:json}
#          DELETE /api/restaurants/:restaurant_id/reviews/:id(.:format)                                    api/reviews#destroy {:format=>:json}