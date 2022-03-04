import React from 'react';

class AnnotationUpdateForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.annotation;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateAnnotation({id: this.state.id, annotation: this.state}).then(this.props.closeModal);
    }

    render() {
        return (
            <div className="annotation-form-container">
                <form onSubmit={this.handleSubmit} className="annotation-form-box">
                    <div className="annotation-form-header">
                        <div className="new-annotation-title">Edit Annotation</div>
                        <div onClick={this.props.closeModal} className="close-icon">X</div>
                    </div>
                    <div className="annotation-form-inputs">
                        <span className="annotation-string">"{this.state.annotation_string}"</span>
                        <div className="annotation-body-container">
                            <span className="annotation-body-info">Prodigy Annotation:</span>
                            <div className="annotation-textarea-container">
                                <input type="textarea"
                                    value={this.state.annotation_body}
                                    onChange={this.update('annotation_body')}
                                />
                            </div>
                        </div>
                        <div className="annotation-form-submit-button">
                            <input type="submit" value="Update Annotation" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AnnotationUpdateForm;