class ChangeCol < ActiveRecord::Migration[5.2]
  def change
   
    rename_column :reviews, :business_id, :restaurant_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
