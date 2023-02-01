class AddLatLng < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lat, :decimal
    add_column :restaurants, :lng, :decimal
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
