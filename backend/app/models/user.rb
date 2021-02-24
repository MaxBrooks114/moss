class User < ApplicationRecord
  has_secure_password
  has_many :concertsusers
  has_many :concerts, through: :concertsusers
  has_many :reviews

  validates :name, :username, presence: true
  validates :username, uniqueness: true
end
