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
                <div className="annotation-index-info">
                    <div className="annotation-index-header">
                        <div className="annotation-index-title">Prodigy Annotation</div>
                        <div className="annotation-index-author">by {author.username}</div>
                    </div>
                    <div className="annotation-index-string-container">
                        <div className="annotation-index-string">"{annotation_string}"</div>
                    </div>
                    <div className="annotation-index-body">{annotation_body}</div>
                </div>
            </div>
        )
    }
}

export default AnnotationIndexItem;