class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.text :lyrics, null: false
      t.text :description
      t.date :release_date
      t.integer :album_id, null: false
      t.integer :track_number
      t.integer :producer_id
      t.integer :views
      t.string :genre, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :tracks, :artist_id
    add_index :tracks, :title
  end
end
