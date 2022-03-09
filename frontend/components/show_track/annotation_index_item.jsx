import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as FreeSolid from '@fortawesome/free-solid-svg-icons';
import * as FreeRegular from '@fortawesome/free-regular-svg-icons';
import ShowComments from './show_comments';
import CommentFormContainer from './comment_form_container';

class AnnotationIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpvote(){
        const upvotesArr = Object.values(this.props.annotation.upvotes);
        let upvoteExists = false;
        let upvoteValue = 0;
        let upvoteId = -1;
        for(let i = 0; i < upvotesArr.length; i++){
            if(this.props.session.id && upvotesArr[i].author.id == this.props.session.id){
                upvoteExists = true;
                upvoteValue = upvotesArr[i].value;
                upvoteId = upvotesArr[i].id;
            }
        };
        if(this.props.session.id && upvoteExists && upvoteValue > 0){
            // logged in, upvote already exists and is positive
            this.props.deleteUpvote(upvoteId, this.props.annotation.id, this.props.annotation.track.id)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
        else if(!upvoteExists && this.props.session.id){
            //logged in, upvote does not exist
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', 1);
            this.props.createUpvote(upvoteData)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
        else if(this.props.session.id && upvoteExists && upvoteValue < 0 && upvoteId >= 0){
            // logged in, upvote is a negative value and must be changed to positive
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', 1);
            this.props.updateUpvote(upvoteData, upvoteId)
                .then(() => this.props.fetchTrack(this.props.trackId));
        };
    }

    handleDownvote(){
        const upvotesArr = Object.values(this.props.annotation.upvotes);
        let upvoteExists = false;
        let upvoteValue = 0;
        let upvoteId = -1;
        for(let i = 0; i < upvotesArr.length; i++){
            if(this.props.session.id && upvotesArr[i].author.id == this.props.session.id){
                upvoteExists = true;
                upvoteValue = upvotesArr[i].value;
                upvoteId = upvotesArr[i].id;
            }
        };
        if(this.props.session.id && upvoteExists && upvoteValue < 0){
            // logged in, upvote already exists and is negative
            this.props.deleteUpvote(upvoteId, this.props.annotation.id, this.props.annotation.track.id)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
        if(!upvoteExists && this.props.session.id){
            //upvote does not exist and user is logged in
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', -1);
            this.props.createUpvote(upvoteData)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
        else if(this.props.session.id && upvoteExists && upvoteValue > 0 && upvoteId >= 0){
            //upvote is positive, must be changed to negative and user is logged in
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', -1);
            this.props.updateUpvote(upvoteData, upvoteId)
                .then(() => this.props.fetchTrack(this.props.trackId));
        };
    }

    upvotesCount(upvotes) {
        if(upvotes){
            const upvotesArr = Object.values(upvotes);
            let valuesSum = 0;
            for(let i = 0; i < upvotesArr.length; i++){
                valuesSum += upvotesArr[i].value
            }
            return valuesSum < 0 ? `-${valuesSum}` : `+${valuesSum}`;
        }
    }

    handleComments(comments) {
        if(comments){
            return <ShowComments comments={comments} trackId={this.props.trackId} annotationId={this.props.annotation.id}/>
        };
    }

    handleThumb(direction){
        const upvotesArr = Object.values(this.props.annotation.upvotes);
        let upvoteExists = false;
        let upvoteValue = 0;
        for(let i = 0; i < upvotesArr.length; i++){
            if(this.props.session.id && upvotesArr[i].author.id == this.props.session.id){
                upvoteExists = true;
                upvoteValue = upvotesArr[i].value;
            }
        };
        let thumbIcon = null;
        switch(direction){
            case "up":
                if(upvoteExists && upvoteValue > 0){
                    thumbIcon = <div className='annotation-upthumb-container'onClick={this.handleUpvote}>
                                    <FontAwesomeIcon icon={FreeSolid.faThumbsUp} />
                                </div>
                }
                else {
                    thumbIcon = <div className='annotation-upthumb-container'onClick={this.handleUpvote}>
                                    <FontAwesomeIcon icon={FreeRegular.faThumbsUp} />
                                </div>
                };
                break;
            case "down":
                if(upvoteExists && upvoteValue < 0){
                    thumbIcon = <div className='annotation-downthumb-container' onClick={this.handleDownvote}>
                                    <FontAwesomeIcon icon={FreeSolid.faThumbsDown} />
                                </div>
                } else {
                    thumbIcon = <div className='annotation-downthumb-container' onClick={this.handleDownvote}>
                                    <FontAwesomeIcon icon={FreeRegular.faThumbsDown} />
                                </div>
                };
                break;
        }
        return thumbIcon;
    }

    handleEdit() {
        if(this.props.session.id == this.props.annotation.author.id){
            return (
                <div className="annotation-index-edit" onClick={() => this.props.openEdit(this.props.annotation)}>edit</div>
            )
        }
    }

    handleX() {
        if(this.props.session.id == this.props.annotation.author.id){
            return(
                <div className="comment-x" onClick={this.handleDelete}>X</div>
            )
        };
    }

    handleDelete() {
        const annotation = this.props.annotation;
        if(this.props.session.id == annotation.author.id){
            this.props.deleteAnnotation(annotation.id, annotation.track.id)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
    }


    render() {
        const {author, annotation_string, annotation_body, upvotes, comments} = this.props.annotation;
        const index = this.props.index;

        return (
            <div className="annotation-index-item">
                <div className="annotation-index-info">
                    <div className="annotation-index-header">
                        <div className="annotation-index-title">Prodigy Annotation</div>
                        <div className="annotation-index-author">by {author.username}</div>
                        {this.handleEdit()}
                        {this.handleX()}
                    </div>
                    <div className="annotation-index-string-container">
                        <div className="annotation-index-string">"{annotation_string}"</div>
                    </div>
                    <div className="annotation-index-body">{annotation_body}</div>
                    <div className="annotation-upvotes-container" >
                        {this.handleThumb("up")}
                        <div className="annotation-index-upvote-count">{this.upvotesCount(upvotes)}</div>
                        {this.handleThumb("down")}
                    </div>
                    {this.handleComments(comments)}
                    <CommentFormContainer trackId={this.props.trackId} annotationId={this.props.annotation.id}/>
                </div>
            </div>
        )
    }
}

export default AnnotationIndexItem;