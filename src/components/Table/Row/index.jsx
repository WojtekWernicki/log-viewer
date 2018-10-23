import React, { Component } from 'react';
import format from 'date-fns/format';
import Enums from '../../../helpers/Enums';

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
        <div className="table__row--item" data-header="Type">{Enums.eventType[type]}</div>
        <div className="table__row--item" data-header="Description">
          {`${description.slice(0, 80)}...`}
          <span onClick={() => toggleModal()}>more details</span>
        </div>
        <div className="table__row--item" data-header="Date">{formatedDate}</div>
      </div>
    );
  }
}

export default Row;
