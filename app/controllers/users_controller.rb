class UsersController < ApplicationController

  # skip_before_action :require_login, only: [:new, :create]
 
  def show
    @user = User.find(params[:id])
    # @posts = @users.posts.order(created_at: :desc)
  end

  def new
    @user = User.new
    @errors = flash[:errors]
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Account Created"
    else
      flash[:error] = "Please create an account"
      render 'users#index'
    end
  end

  def update
    if current_user.authenticate(user_params[:password])
      current_user.update(user_params)
      log_in current_user
        flash[:success] = 'Profile has been updated'
        redirect_to "/users/#{current_user.id}"
    else
      redirect_to "/users/#{current_user.id}/edit"
    end
  end

  # def user_posts
  #   @posts = current_user.posts.order(created_at: :desc)
  # end


  private
  def user_params
    params.require(:user).permit(:name,
                                 :email,
                                 :dob,
                                 :password,
                                 :confirm_password)
  end

  def check_db
    if User.exists?(email: params[:user][:email])
      true
    else
      false
    end
  end


end
