class CreateConcertsusers < ActiveRecord::Migration[6.0]
  def change
    create_table :concertsusers do |t|
      t.integer :user_id
      t.integer :concert_id

      t.timestamps
    end
  end
end
