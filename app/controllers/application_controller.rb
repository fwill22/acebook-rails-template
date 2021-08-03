class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return @current_user if @current_user.present?
    
    if user_id = session[:user_id]
      @current_user ||= User.find_by(id: user_id)
    else
      user_id = cookies.signed[:user_id]
      user = User.find_by(id: user_id)
      @current_user
    end
  end

end
