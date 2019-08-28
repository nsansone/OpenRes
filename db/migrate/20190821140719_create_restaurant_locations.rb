class CreateRestaurantLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_locations do |t|
      t.integer :restaurant_id, null: false
      t.integer :location_id, null: false

      t.timestamps
    end
    add_index :restaurant_locations, :restaurant_id
    add_index :restaurant_locations, :location_id
  end
end
