class SessionsController < ApplicationController

  skip_before_action :require_login, only: [:new, :create]

  def new
    render '/users/index'
  end

  def show
    if current_user.nil?
      redirect_to '/path/to/users'
    end
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session] [:remember_me] == '1' ? remember(user) : forget(user)
      redirect_to '/', notice: "Welcome, #{user.name}"
    else
      redirect_to '/users', notice: "Invalid email/password combination"
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to "/users", notice: "Logged out"
  end
  
end
