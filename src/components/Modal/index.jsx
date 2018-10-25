import React, { Component } from 'react';
import format from 'date-fns/format';
import Dropdown from '../Dropdown/';
import Enums from '../../helpers/Enums';
import isValid from 'date-fns/is_valid';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventType: Enums.filterDropdownOptions[0],
      title: '',
      date: '',
      description: '',
      type: '',
      formErrors: '',
      datePlaceholder: ''
    };
  }
  componentDidMount() {
    const body = document.body;
    body.style.setProperty('--overflow', this.props.isShown ? 'hidden' : 'unset');
    this.setState({
      datePlaceholder: format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    });
  }

  componentDidUpdate() {
    const body = document.body;
    body.style.setProperty('--overflow', this.props.isShown ? 'hidden' : 'unset');
  }

  closeModal = (event) => {
    if (event.target.className === event.target.parentElement.className) {
      this.setState({
        formErrors: ''
      });
      this.props.toggleModal();
    }
  }

  changeDropdownValue = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm = () => {
    const { title, type, date, description } = this.state;
    let errors = '';
    this.setState({
      formErrors: ''
    });

    if (!title) {
      errors += 'No title provided. ';
    }

    if (!type) {
      errors += 'No event type provided. ';
    }

    if (!isValid(new Date(date)) || !date) {
      errors += `No event data provided or it's in wrong format. `;
    }

    if (!description) {
      errors += 'No event description provided.';
    }

    if (errors.length) {
      this.setState({
        formErrors: errors
      });
      return;
    }

    this.props.handleSumbit({
      title,
      type: type.value,
      date: Date.parse(date) / 1000,
      description
    });
    this.setState({
      formErrors: ''
    });
    this.props.toggleModal();
  }

  render() {
    const { isShown, toggleModal, modalContent, readOnly } = this.props;
    const { type, title, date, description, formErrors, datePlaceholder } = this.state;
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
                <input
                  className="modal__row--value"
                  type="text"
                  id="title"
                  value={readOnly ? modalContent && modalContent.title : title}
                  disabled={readOnly}
                  onChange={this.handleChange}
                  placeholder="Title"
                />
              </div>
              <div className="modal__row">
                <label className="modal__row--label" htmlFor="type">Type</label>
                <Dropdown
                  title={readOnly ? Enums.eventType[modalContent && modalContent.type] : 'Event Type: ' }
                  options={Enums.filterDropdownOptions}
                  value={type}
                  onSelect={(value) => this.changeDropdownValue('type', value)}
                  readOnly={readOnly}
                  modal
                />
              </div>
              <div className="modal__row">
                <label className="modal__row--label" htmlFor="date">Date</label>
                <input
                  className="modal__row--value"
                  type="text"
                  id="date"
                  value={readOnly ? formatedDate : date}
                  disabled={readOnly}
                  onChange={this.handleChange}
                  placeholder={datePlaceholder} />
              </div>
              <div className="modal__row modal__row--textarea">
                  <label className="modal__row--label" htmlFor="description">Description</label>
                  <textarea
                    className="modal__row--value textarea"
                    id="description"
                    name="description"
                    value={readOnly ? modalContent && modalContent.description : description}
                    disabled={readOnly}
                    onChange={this.handleChange}
                    placeholder="Event description"
                  >
                  </textarea>
                </div>
              {
                formErrors &&
                <div className="modal__errors">
                  {formErrors}
                </div>
              }
              {
                !readOnly &&
                <button
                  className="button"
                  type="button"
                  onClick={this.validateForm}
                >
                  Add record
                </button>
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
