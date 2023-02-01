# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  address      :string
#  category     :string
#  city         :string
#  hours        :string
#  lat          :decimal(, )
#  lng          :decimal(, )
#  name         :string           not null
#  phone_number :string
#  price        :string
#  state        :string
#  website      :string
#  zip_code     :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_restaurants_on_category  (category)
#  index_restaurants_on_name      (name) UNIQUE
#
class Restaurant < ApplicationRecord
    validates :name, :address, presence: true, uniqueness: true
    validates :city, :state, :zip_code, :phone_number, :category, :lat, :lng, presence: true

    has_many_attached :photos 

    has_many :reviews, 
    foreign_key: "restaurant_id",
    class_name: "Review"
end
