class DesignExplorationsController < ApplicationController
  def recirculation
  end

  def guides
    render layout: 'fake-inman'
  end

  def new_stories_menu
    render layout: 'fake-inman'
  end

end
