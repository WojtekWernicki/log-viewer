import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfo, faExclamation, faBan } from '@fortawesome/fontawesome-free-solid'
import format from 'date-fns/format';
import Enums from '../../../helpers/Enums';

fontawesome.library.add(faCheck, faInfo, faExclamation, faBan);

class Row extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, type, date, description, toggleModal } = this.props;
    const formatedDate = format(date * 1000, 'DD MMM YYYY HH:mm:ss');

    return (
      <div className="table__row">
        <div className="table__row--item" data-header="Title">{title}</div>
        <div className="table__row--item" data-header="Type">
          <span>
            <FontAwesomeIcon icon={Enums.eventIcons[type]} fixedWidth />
            {Enums.eventType[type]}
          </span>
        </div>
        <div className="table__row--item" data-header="Description">
          {`${description.slice(0, 80)}...`}
        </div>
        <div className="table__row--item" data-header="Date">{formatedDate}</div>
        <div className="table__row--item">
          <button className="button button--small" onClick={() => toggleModal()}>More details</button>
        </div>
      </div>
    );
  }
}

export default Row;
