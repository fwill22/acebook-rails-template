module SessionsHelper

  def log_in(user)
    cookies.permanent[:remeber_token] = user.remeber_token
    self.current_user = user
  end

  def current_user(user)
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_remeber_token(cookies[:remeber_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def log_out
    cookies.delete(:remeber_token)
    @current_user = nil
  end

end
