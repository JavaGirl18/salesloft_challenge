class Api::PeopleController < Api::BaseController
  include HTTPParty

  def get_people
    base_url = "https://api.salesloft.com/v2/people.json?"

    auth_token =  = "Bearer #{ENV['SALESLOFT_APPLICATION_SECRET']}"
    headers = {Authorization: auth_token}
    response = HTTParty.get(url, headers: headers)
    render json: response
  end
end
