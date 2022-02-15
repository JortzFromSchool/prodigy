json.track do
    json.partial! 'api/tracks/track', track: @track
    json.annotations do
        @track.annotations.each do |annotation|
            json.set! annotation.id do
                json.partial! 'api/annotations/annotation', annotation: annotation
                json.upvotes do
                    annotation.upvotes.each do |upvote|
                        json.set! upvote.id do
                            json.partial! 'api/upvotes/upvote', upvote: upvote
                        end
                    end
                end
            end
        end
    end
end


