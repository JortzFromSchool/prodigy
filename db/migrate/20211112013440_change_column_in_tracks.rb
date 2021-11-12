class ChangeColumnInTracks < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :album_id, :string
    rename_column :tracks, :album_id, :album_name
  end
end
