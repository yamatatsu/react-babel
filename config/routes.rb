Rails.application.routes.draw do
  root to: 'top#index'
  get "*any" => "top#index"
end
