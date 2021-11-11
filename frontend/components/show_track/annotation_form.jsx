import React from 'react';
import { withRouter } from 'react-router';

class AnnotationForm extends React.Component{
    constructor(props) {
        super(props);
        console.log(`annotation string = ${this.props.annotateString}`);
        console.log(`user id = ${this.props.session.id}`);
        console.log(`track id = ${this.props.trackId}`);
        this.state = {
            author_id: this.props.session.id,
            track_id: this.props.modal.trackId,
            annotation_string: this.props.modal.annotateString,
            annotation_body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('annotation[author_id]', this.state.author_id);
        formData.append('annotation[track_id]', this.state.track_id);
        formData.append('annotation[annotation_string', this.state.annotation_string);
        formData.append('annotation[annotation_body', this.state.annotation_body);
        this.props.createAnnotation(formData).then(this.props.closeModal);
    }

    render() {
        return (
            <div className="annotation-form-container">
                <form onSubmit={this.handleSubmit} className="annotation-form-box">
                    <span className="new-annotation-header">New Annotation</span>
                    <div onClick={this.props.closeModal} className="close-icon">X</div>
                    <div className="annotation-form-inputs">
                        <span className="annotation-string">{this.state.annotation_string}</span>
                        <div className="annotation-body-container">
                            <span className="annotation-body-info">Annotation</span>
                            <input type="textarea"
                                value={this.state.annotation_body}
                                onChange={this.update('annotation_body')}
                            />
                        </div>
                        <div className="annotation-form-submit-button">
                            <input type="submit" value="Create Annotation" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AnnotationForm;