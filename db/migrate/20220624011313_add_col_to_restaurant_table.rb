class AddColToRestaurantTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :address, :string
    add_column :restaurants, :city, :string
    add_column :restaurants, :state, :string
    add_column :restaurants, :zip_code, :string
    add_column :restaurants, :phone_number, :string
    add_column :restaurants, :category, :string
    add_column :restaurants, :website, :string
    add_column :restaurants, :price, :string
    add_column :restaurants, :hours, :string
    add_index :restaurants, :category
    #Ex:- add_index("admin_users", "username")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
