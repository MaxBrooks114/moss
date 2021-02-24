class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name
  has_many :reviews

 end
