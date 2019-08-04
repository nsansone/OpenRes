class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :restaurant_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :reviews, :restaurant_id, unique: true
    add_index :reviews, :author_id, unique: true
  end
end
