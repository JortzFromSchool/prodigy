export const createUpvote = upvoteForm => (
    $.ajax({
        method: 'POST',
        url: 'api/upvotes',
        data: upvoteForm,
        contentType: false,
        processData: false
    })
);

export const deleteUpvote = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/upvotes/${id}`
    })
);

export const updateUpvote = (upvoteForm, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/upvotes/${id}`,
        data: upvoteForm,
        contentType: false,
        processData: false
    })
);