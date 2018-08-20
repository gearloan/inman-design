Rails.application.routes.draw do
  get 'design_explorations/recirculation'

  get 'design_explorations/guides'

  get 'design_explorations/new_stories_menu'

  root 'style_guide#index'

  get 'style_guide/index'

  get 'style_guide/typography'

  get 'style_guide/colors'

  get 'style_guide/imagery'

  get 'style_guide/logo'

  get 'style_guide/story'

  get 'style_guide/voice'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
