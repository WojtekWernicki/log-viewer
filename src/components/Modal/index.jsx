import React, { Component } from 'react';
import format from 'date-fns/format';
import Dropdown from '../Dropdown/';
import Enums from '../../helpers/Enums';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
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

  changeDropdownValue = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { isShown, toggleModal, modalContent, readOnly } = this.props;
    const formatedDate = modalContent ? format(modalContent.date * 1000, 'DD MMM YYYY HH:mm:ss') : '';

    return (
      isShown ?
      <div className="modal__wrapper" onClick={e => this.closeModal(e)}>
        <div className="modal__wrapper">
          <div className="modal__container">
            <div className="modal__header">
              <span className="modal__close" onClick={() => toggleModal()}>&#10006;</span>
            </div>
            <div className="modal__content">
              <div className="modal__row">
                <label className="modal__row--label" htmlFor="title">Title</label>
                <input className="modal__row--value" type="text" id="title" defaultValue={modalContent.title} disabled={readOnly} />
              </div>
              <div className="modal__row">
                <label className="modal__row--label" htmlFor="type">Type</label>
                <Dropdown
                  title={readOnly ? Enums.eventType[modalContent.type] : 'Event Type' }
                  options={Enums.filterDropdownOptions}
                  value={[]}
                  onSelect={(value) => this.changeDropdownValue('orderDropdownValue', value)}
                  readOnly={readOnly}
                  modal
                />
              </div>
              <div className="modal__row">
                <label className="modal__row--label" htmlFor="date">Date</label>
                <input className="modal__row--value" type="text" id="date" defaultValue={formatedDate} disabled={readOnly} />
              </div>
              {
                readOnly &&
                <div className="modal__row modal__row--textarea">
                  <label className="modal__row--label" htmlFor="description">Description</label>
                  <textarea className="modal__row--value textarea" id="description" name="description" value={modalContent.description} disabled></textarea>
                </div>
              }
            </div>
          </div>
        </div>
      </div> :
      null
    )
  }
}

export default Modal;
