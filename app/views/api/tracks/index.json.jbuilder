@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :title, :artist_id, :views
  end
end