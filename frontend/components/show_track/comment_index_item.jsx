import React from 'react';
import { deleteComment, receiveTrack } from '../../actions/track_actions';
import { fetchTrack } from '../../util/track_api_util';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleX = this.handleX.bind(this);
    }

    handleDelete(){
        const comment = this.props.comment;
        if(this.props.session.id == comment.author.id){
            console.log(comment.id);
            this.props.deleteComment(comment.id, comment.annotation.id, comment.annotation.track_id)
                .then(() => this.props.fetchTrack(this.props.trackId));
        };
    }

    handleX(){
        if(this.props.session.id == this.props.comment.author.id){
            return(
                <div className="comment-x" onClick={this.handleDelete}>X</div>
            )
        };
    }

    render() {
        const {author, body} = this.props.comment;

        return (
            <div className='comment-index-item'>
                <div className='comment-header'>
                    <div className='comment-author'>{author.username}</div>
                    {this.handleX()}
                </div>
                <div className='comment-body-container'>
                    <div className='comment-body'>{body}</div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;