class Post < ApplicationRecord
  has_one :user
  has_many_attached :images
end
