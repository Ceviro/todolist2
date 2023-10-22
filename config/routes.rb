Rails.application.routes.draw do
  resources :todos do
    member do
      patch :toggle_check
    end
  end

  root 'todos#index'
end
