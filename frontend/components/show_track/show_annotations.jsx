import React from 'react';
import AnnotationIndexItem from './annotation_index_item';

class ShowAnnotations extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="annotations-container">
                <div className="annotations-header">Prodigy Annotations</div>
                <ul>
                    {this.props.annotations.map((annotation, index) => {
                        return(
                            <li key={`annotation-${index}`}>
                                <AnnotationIndexItem
                                    index={index}
                                    annotation={annotation}
                                />
                            </li>
                    )})}
                </ul>
            </div>
        )
    }
}

export default ShowAnnotations;