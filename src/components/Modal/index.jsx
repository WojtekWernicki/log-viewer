import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    const body = document.body;
    body.style.setProperty('--overflow', this.props.isShown ? 'hidden' : 'unset')
  }

  componentDidUpdate() {
    const body = document.body;
    body.style.setProperty('--overflow', this.props.isShown ? 'hidden' : 'unset');
  }

  closeModal = (event) => {
    if (event.target.className === event.target.parentElement.className) {
      this.props.toggleModal();
    }
  }

  render() {
    const { isShown, toggleModal, modalContent, readOnly } = this.props;
    return (
      isShown ?
      <div className="modal__wrapper" onClick={e => this.closeModal(e)}>
        <div className="modal__wrapper">
          <div className="modal__container">
            <div className="modal__header">
              <span className="modal__close" onClick={() => toggleModal()}>&#10006;</span>
            </div>
            <div className="modal__content">
              <div className="row">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" defaultValue={modalContent.title} disabled={readOnly} />
              </div>
              <div className="row">
                <label htmlFor="type">Type</label>
                <input type="text" id="type" defaultValue={modalContent.type} disabled={readOnly} />
              </div>
              <div className="row">
                <label htmlFor="description">description</label>
                <input type="text" id="description" defaultValue={modalContent.description} disabled={readOnly} />
              </div>
              <div className="row">
                <label htmlFor="date">Date</label>
                <input type="text" id="date" defaultValue={modalContent.date} disabled={readOnly} />
              </div>
            </div>
          </div>
        </div>
      </div> :
      null
    )
  }
}

export default Modal;
