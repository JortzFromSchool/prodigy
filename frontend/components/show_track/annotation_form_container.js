import {connect} from 'react-redux';
import { createAnnotation } from "../../actions/track_actions";
import AnnotationForm from './annotation_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ session, ui }) => {
    return(
        {
        session,
        modal: ui.modal
        }
    )
};

const mapDispatchToProps = dispatch => ({
    createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);