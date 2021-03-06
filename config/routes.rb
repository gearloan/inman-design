Rails.application.routes.draw do
  get 'design_explorations/recirculation'

  get 'design_explorations/guides'

  get 'design_explorations/new_stories_menu'

  get 'design_explorations/conf_guide'

  get 'design_explorations/list_article'

  get 'design_explorations/article_2'


  root 'style_guide#index'

  get 'style_guide/index'

  get '/standard-article' => 'style_guide#typography', as: 'article'

  get '/opinion-piece' => 'style_guide#opinion', as: 'opinion'

  get '/service-post' => 'style_guide#service', as: 'service'

  get '/interview' => 'style_guide#interview', as: 'interview'

  get '/right-rail-headline-list' => 'style_guide#rr_base', as: 'rr_base'

  get '/right-rail-email-signup' => 'style_guide#rr_email_signup', as: 'rr_email_signup'

  get '/default-recirculation' => 'style_guide#recirc_default', as: 'recirc_default'

  get 'style_guide/colors'

  get 'style_guide/imagery'

  get 'style_guide/logo'

  get 'style_guide/story'

  get 'style_guide/voice'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
