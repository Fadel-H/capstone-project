Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/anime", to:"animes#show"
  post "/follow", to:"manga_anime_bridges#create"
  post "/sign-up", to:"users#create"
  put "/update", to: "users#update"
  delete "/delete", to: "users#delete"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
