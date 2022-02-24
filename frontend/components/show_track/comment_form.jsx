import React from 'react';

class CommentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.session.id,
            annotation_id: this.props.annotationId,
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment[author_id]', this.state.author_id);
        formData.append('comment[annotation_id]', this.state.annotation_id);
        formData.append('comment[body]', this.state.body);
        console.log(`authorId = ${this.state.author_id}`);
        console.log(`annotationId = ${this.state.annotation_id}`);
        console.log(`body = ${this.state.body}`);
        this.props.createComment(formData)
            .then(() => this.props.fetchTrack(this.props.trackId));
    }

    render() {
        return (
            <div className='comment-form-container'>
                <form onSubmit={this.handleSubmit} className='comment-form'>
                    <div className='comment-form-header'>
                        <div className='new-comment-title'>Post a Comment</div>
                    </div>
                    <div className='comment-body-container'>
                        <input type='textarea'
                            value={this.state.body}
                            onChange={this.update('body')}
                            className='comment-body-input'
                        />
                    </div>
                    <div className='comment-form-submit-button-container'>
                        <input type="submit" value="Create Comment" className='comment-form-submit-button'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;