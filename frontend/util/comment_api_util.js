export const createComment = commentForm => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: commentForm,
        contentType: false,
        processData: false
    })
);

export const deleteComment = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`
    })
);

export const updateComment = (commentForm, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${id}`,
        data: commentForm,
        contentType: false,
        processData: false
    })
);