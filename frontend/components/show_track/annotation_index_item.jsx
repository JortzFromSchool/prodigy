import React from 'react';

class AnnotationIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {author, annotation_string, annotation_body} = this.props.annotation;
        const index = this.props.index;

        return (
            <div className="annotation-index-item">
                <div className="annotation-info">
                    <span className="annotation-string">{annotation_string}</span>
                    <span className="annotation-body">{annotation_body}</span>
                    <span className="annotation-author">{author.username}</span>
                </div>
            </div>
        )
    }
}

export default AnnotationIndexItem;