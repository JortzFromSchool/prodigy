export const createComment = commentForm => (
    $.ajax({
        method: 'POST',
        url: 'api/upvotes',
        data: commentForm,
        contentType: false,
        processData: false
    })
)