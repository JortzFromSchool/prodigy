json.track do
    json.partial! 'api/tracks/track', track: @track
    json.annotations @track.annotations.each do |annotation|
      json.partial! 'api/annotations/annotation', annotation: annotation
    end
end

@track.annotations.each do |annotation|
    json.annotations do
        json.set! annotation.id do
            json.partial! 'api/annotations/annotation', annotation: annotation
            json.author annotation.author
        end
    end
end
