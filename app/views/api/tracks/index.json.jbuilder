@tracks.each do |track|
  json.set! track.id do
    json.partial! 'track', track: track
    json.annotations do
      track.annotations.each do |annotation|
        json.set! annotation.id do
          json.partial! 'api/annotations/annotation', annotation: annotation
          
        end
      end
    end
  end
end