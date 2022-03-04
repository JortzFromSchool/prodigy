import {connect} from 'react-redux';
import { updateAnnotation} from '../../actions/track_actions';
import AnnotationUpdateForm from "./annotation_update_form";
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    annotation:  ownProps.annotation,
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    updateAnnotation: annotation => dispatch(updateAnnotation(annotation)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationUpdateForm);