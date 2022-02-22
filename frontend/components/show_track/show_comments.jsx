import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';


class ShowComments extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="comments-container">
                <div className='comments-header'>Comments</div>
                <ul>
                    {Object.values(this.props.comments).map((comment, index) => {
                        return(
                                <li key={`comment-${comment.id}-${index}`}>
                                    <CommentIndexItemContainer
                                        index={index}
                                        comment={comment}
                                        trackId={this.props.trackId}
                                    />
                                </li> 
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ShowComments;