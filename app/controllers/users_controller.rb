class UsersController < ApplicationController
 
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
    @errors = flash[:errors]
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Account Created"
      redirect_to '/'
    else
      render 'users#index'
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :dob, :password, :confirm_password)
  end

  def check_db
    if User.exists?(email: params[:user][:email])
      true
    else
      false
    end
  end


end
