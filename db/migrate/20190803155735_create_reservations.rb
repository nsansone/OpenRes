class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.date :date, null: false 
      t.time :time, null: false
      t.integer :party_size, null: false
      
      t.timestamps
    end
  end
end
