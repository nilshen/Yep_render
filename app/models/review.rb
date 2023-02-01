# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :string
#  rating        :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_reviews_on_restaurant_id  (restaurant_id)
#  index_reviews_on_user_id        (user_id)
#
class Review < ApplicationRecord
    validates :user_id, :restaurant_id, :rating, presence: true
    validates :rating, presence: true, inclusion: { in: (1..5)}

    belongs_to :user, class_name: "User", foreign_key: "user_id"
    belongs_to :restaurant, class_name: "Restaurant", foreign_key: "restaurant_id"
end
