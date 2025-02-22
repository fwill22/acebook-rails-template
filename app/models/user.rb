class User < ApplicationRecord

  attr_accessor :remember_token

  before_save { |user| user.email = email.downcase }
  # before_save :create_remember_token
  has_one_attached :avatar
  has_many :posts
  # has_many :comments
  # has_many :likes

  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
  format: { with: VALID_EMAIL_REGEX }, 
  uniqueness: { case_sensitive: false }

  has_secure_password
  validates :password_confirmation, presence: true, length: { minimum: 6 }, allow_nil: true

  
  # DEFAULT_AVATAR = "default_avatar.png" -- ADD IMAGE FILE TO ASSETS FOLDER

  
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  def create_remember_token
    self.remember_token = User.new_token
    update_attribute(:remember_digest, self.remember_token)
  end

  def authenticated?(remember_token)
    return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  def forget
    update_attribute(:remember_digest, nil)
  end

  
end
