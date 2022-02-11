@tracks.each do |track|
  json.set! track.id do
    json.partial! 'track', track: track
    json.annotations track.annotations.each do |annotation|
        json.partial! 'api/annotations/annotation', annotation: annotation
    end
  end
end