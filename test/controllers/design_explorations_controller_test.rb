require 'test_helper'

class DesignExplorationsControllerTest < ActionDispatch::IntegrationTest
  test "should get recirculation" do
    get design_explorations_recirculation_url
    assert_response :success
  end

  test "should get guides" do
    get design_explorations_guides_url
    assert_response :success
  end

end
