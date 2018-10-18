import React, { Component } from 'react';
import Enums from '../../../helpers/Enums';

class Row extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, type, date, description } = this.props;

    return (
      <tr>
        <td>{ Enums.eventType[type] }</td>
        <td>{ title }</td>
        <td>{ description }</td>
        <td>{ date }</td>
      </tr>
    );
  }
}

export default Row;
