export const fetchAnnotations = data => (
    $.ajax({
        method: 'GET',
        url: 'api/annotations',
        data
    })
);

export const fetchAnnotation = id => (
    $.ajax({
        method: 'GET',
        url: `api/annotations/${id}`
    })
);

export const createAnnotation = annotationForm => (
    $.ajax({
        method: 'POST',
        url: 'api/annotations',
        data: annotationForm,
        contentType: false,
        processData: false
    })
);

export const updateAnnotation = annotation => (
    $.ajax({
        method: 'PATCH',
        url: `api/annotations/${annotation.id}`,
        data: annotation
    })
)

export const deleteAnnotation = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/annotations/${id}`
    })
);