import React, { Component } from 'react';
import Row from './Row/';
import data from '../../assets/server-logs.json';

class Table extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          { data.sort((a, b) => new Date(a.date) < new Date(b.date)).slice(0, 15).map((row, i) => <Row key={i} {...row} />) }
        </tbody>
      </table>
    )
  }
}

export default Table;
