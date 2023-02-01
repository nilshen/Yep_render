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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
