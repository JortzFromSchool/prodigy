import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AnnotationFormContainer from "../show_track/annotation_form_container";
import AnnotationUpdateFormContainer from '../show_track/annotation_update_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case 'annotate':
      component = <AnnotationFormContainer annotationString={modal.annotateString} trackId={modal.trackId}/>;
      break;
    case 'annotation-update':
      component = <AnnotationUpdateFormContainer annotation={modal.annotation} />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);