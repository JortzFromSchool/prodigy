export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, annotateString, trackId) => ({
    type: OPEN_MODAL,
    modal,
    annotateString,
    trackId
  }
);

export const openEditModal = (modal, annotation) => ({
  type: OPEN_MODAL,
  modal,
  annotation
});

export const openLogInModal = (modal) => ({
  type: OPEN_MODAL,
  modal: "login"
});

export const closeModal = () => (
  {
    type: CLOSE_MODAL
  }
);