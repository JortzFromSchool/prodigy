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
            annotation.upvotes.each do |upvote|
                json.upvotes do
                    json.set! upvote.id do
                        json.partial! 'api/upvotes/upvote', upvote: upvote
                    end
                end
            end
        end
    end
end
