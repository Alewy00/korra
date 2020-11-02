# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                  api_user POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#             api_questions GET    /api/questions(.:format)                                                                 api/questions#index {:format=>:json}
#                           POST   /api/questions(.:format)                                                                 api/questions#create {:format=>:json}
#          new_api_question GET    /api/questions/new(.:format)                                                             api/questions#new {:format=>:json}
#         edit_api_question GET    /api/questions/:id/edit(.:format)                                                        api/questions#edit {:format=>:json}
#              api_question GET    /api/questions/:id(.:format)                                                             api/questions#show {:format=>:json}
#                           PATCH  /api/questions/:id(.:format)                                                             api/questions#update {:format=>:json}
#                           PUT    /api/questions/:id(.:format)                                                             api/questions#update {:format=>:json}
#                           DELETE /api/questions/:id(.:format)                                                             api/questions#destroy {:format=>:json}
#               api_answers GET    /api/answers(.:format)                                                                   api/answers#index {:format=>:json}
#                           POST   /api/answers(.:format)                                                                   api/answers#create {:format=>:json}
#            new_api_answer GET    /api/answers/new(.:format)                                                               api/answers#new {:format=>:json}
#           edit_api_answer GET    /api/answers/:id/edit(.:format)                                                          api/answers#edit {:format=>:json}
#                api_answer GET    /api/answers/:id(.:format)                                                               api/answers#show {:format=>:json}
#                           PATCH  /api/answers/:id(.:format)                                                               api/answers#update {:format=>:json}
#                           PUT    /api/answers/:id(.:format)                                                               api/answers#update {:format=>:json}
#                           DELETE /api/answers/:id(.:format)                                                               api/answers#destroy {:format=>:json}
#      api_question_answers GET    /api/questions/:question_id/answers(.:format)                                            api/answers#index {:format=>:json}
#                           POST   /api/questions/:question_id/answers(.:format)                                            api/answers#create {:format=>:json}
#                           GET    /api/questions(.:format)                                                                 api/questions#index {:format=>:json}
#                           POST   /api/questions(.:format)                                                                 api/questions#create {:format=>:json}
#                           GET    /api/questions/new(.:format)                                                             api/questions#new {:format=>:json}
#                           GET    /api/questions/:id/edit(.:format)                                                        api/questions#edit {:format=>:json}
#                           GET    /api/questions/:id(.:format)                                                             api/questions#show {:format=>:json}
#                           PATCH  /api/questions/:id(.:format)                                                             api/questions#update {:format=>:json}
#                           PUT    /api/questions/:id(.:format)                                                             api/questions#update {:format=>:json}
#                           DELETE /api/questions/:id(.:format)                                                             api/questions#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions
    resources :answers 
    resources :topics, only: [:create, :show, :index]
    resources :questions do
      resources :answers, only:[:index, :create] 
    end



  end
  root "static_pages#root"

end
