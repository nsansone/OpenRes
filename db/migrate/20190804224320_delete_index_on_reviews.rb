class DeleteIndexOnReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :restaurant_id
    remove_index :reviews, :author_id
  end
end
