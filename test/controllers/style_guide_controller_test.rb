require 'test_helper'

class StyleGuideControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get style_guide_index_url
    assert_response :success
  end

  test "should get typography" do
    get style_guide_typography_url
    assert_response :success
  end

  test "should get colors" do
    get style_guide_colors_url
    assert_response :success
  end

end
