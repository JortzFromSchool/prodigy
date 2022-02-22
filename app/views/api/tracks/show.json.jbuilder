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
                json.comments do
                    annotation.comments.each do |comment|
                        json.set! comment.id do
                            json.partial! 'api/comments/comment', comment: comment
                        end
                    end
                end
            end
        end
    end
end


