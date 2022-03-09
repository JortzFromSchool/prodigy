# README

# Prodigy
 ...a Genius clone

Prodigy is a website that allows you to look at and annotate the lyrics of your favorite songs. Users can sign up or sign in to gain access to features, or use a Demo account. Users are also able to edit and delete their own annotations, as well as leave comments and upvote or downvote annotations.

[Prodigy Live Link](https://prodigy-genius.herokuapp.com/#/)

# Technologies
* Prodigy is built with Ruby on Rails
* Prodigy is built with React components and React-Redux bindings for component updating and extracting values.
* Prodigy uses AWS S3 storage for media files.

# Features
* Prodigy creates annotations by grabbing highlighted lyric text on the page. This is handled with a onMouseUp html attribute and an accompanying modal, assuming the user is signed in:

* onMouseUp ensures that the modal is only called when text is highlighted on the page.
```
<span className="show-lyrics" onMouseUp={this.handleHighlight}>{lyrics}</span>

handleHighlight () {
        const highlightedText = window.getSelection().toString();
        if(highlightedText){
            this.props.annotateForm(highlightedText, this.props.trackId);
        };
    }
```
When signed in, users can edit their own annotations and like and comment other annotations. Upvotes are toggleable using conditionalsÑ to load different icons
```
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
```



Users can comment on existing annotations using a form component with an updating state:
```
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
        this.props.createComment(formData)
            .then(() => this.props.fetchTrack(this.props.trackId));
    }
    ```
