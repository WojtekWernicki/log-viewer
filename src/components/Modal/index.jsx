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
    const { children, isShown, toggleModal } = this.props;
    return (
      isShown ?
      <div className="modal__wrapper" onClick={e => this.closeModal(e)}>
        <div className="modal__wrapper">
          <div className="modal__container">
            <div className="modal__header">
              <span className="modal__close" onClick={() => toggleModal()}>&#10006;</span>
            </div>
            <div className="modal__content">
              {children}
            </div>
          </div>
        </div>
      </div> :
      null
    )
  }
}

export default Modal;
