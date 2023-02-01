@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :restaurant_id, :rating, :body, :created_at, :updated_at
        json.username review.user.username
    end
end