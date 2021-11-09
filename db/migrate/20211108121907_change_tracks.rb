class ChangeTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :album_url, :string
  end
end
