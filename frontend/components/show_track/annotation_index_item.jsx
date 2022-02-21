import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class AnnotationIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(){
        // console.log("handleUpvote");
        console.log(this.props.annotation);
        const upvotesArr = Object.values(this.props.annotation.upvotes);
        // console.log(upvotesArr);
        let upvoteExists = false;
        let upvoteValue = 0;
        let upvoteId = -1;
        for(let i = 0; i < upvotesArr.length; i++){
            if(this.props.session.id && upvotesArr[i].author.id == this.props.session.id){
                console.log("existing upvote found");
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
        // console.log(`upvoteExists = ${upvoteExists}`);
        else if(!upvoteExists && this.props.session.id){
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', 1);
            this.props.createUpvote(upvoteData)
                .then(() => this.props.fetchTrack(this.props.trackId));
        }
        else if(this.props.session.id && upvoteExists && upvoteValue < 0 && upvoteId >= 0){
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', 1);
            this.props.deleteUpvote(upvoteId, this.props.annotation.id, this.props.annotation.track.id)
                .then(() => this.props.createUpvote(upvoteData))
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
            //upvote is positive and user is logged in
            console.log("changing to downvote")
            const upvoteData = new FormData();
            upvoteData.append('upvote[author_id]', this.props.session.id);
            upvoteData.append('upvote[annotation_id]', this.props.annotation.id);
            upvoteData.append('upvote[value]', -1);
            this.props.deleteUpvote(upvoteId, this.props.annotation.id, this.props.annotation.track.id)
                .then(() => this.props.createUpvote(upvoteData))
                .then(() => this.props.fetchTrack(this.props.trackId));
        };
    }

    upvotesCount(upvotes) {
        const upvotesArr = Object.values(upvotes);
        let valuesSum = 0;
        for(let i = 0; i < upvotesArr.length; i++){
            valuesSum += upvotesArr[i].value
        }
        return valuesSum < 0 ? `-${valuesSum}` : `+${valuesSum}`;
    }

    render() {
        const {author, annotation_string, annotation_body, upvotes} = this.props.annotation;
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
                    <div className="annotation-upvotes-container" >
                        <div className='annotation-upthumb-container'onClick={this.handleUpvote}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="annotation-index-upvote-count">{this.upvotesCount(upvotes)}</div>
                        <div className='annotation-downthumb-container' onClick={this.handleDownvote}>
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnnotationIndexItem;