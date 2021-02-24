class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.float :final_score
      t.float :venue_score
      t.float :sound_score
      t.float :performance_score
      t.float :set_score
      t.string :price
      t.text :write_up
      t.integer :user_id
      t.integer :concert_id


      t.timestamps
    end
  end
end
