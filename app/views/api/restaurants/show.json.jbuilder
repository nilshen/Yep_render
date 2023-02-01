json.extract! @restaurant, :id, :name, :address, :city, :state, :zip_code, :phone_number, :category, :website, :price, :hours, :lat, :lng
json.photoUrls @restaurant.photos.map { |photo| url_for(photo) }

json.reviews @restaurant.reviews.map { |review| review }