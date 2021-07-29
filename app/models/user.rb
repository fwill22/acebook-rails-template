class User < ApplicationRecord
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
  validates :confirm_password, presence: true, length: { minimum: 6 }, allow_nil: true

  # DEFAULT_AVATAR = "default_avatar.png" -- ADD IMAGE FILE TO ASSETS FOLDER

  private
    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
