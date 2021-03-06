import React from 'react';
import AnnotationIndexItemContainer from './annotation_index_item_container';

class ShowAnnotations extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="annotations-container">
                <div className="annotations-header">Prodigy Annotations</div>
                <ul>
                    {Object.values(this.props.annotations).map((annotation, index) => {
                        return(
                            <li key={`annotation-${index}`}>
                                <AnnotationIndexItemContainer
                                    index={index}
                                    annotation={annotation}
                                    trackId={this.props.trackId}
                                />
                            </li>
                    )})}
                </ul>
            </div>
        )
    }
}

export default ShowAnnotations;