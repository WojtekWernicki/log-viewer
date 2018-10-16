import React, { Component } from 'react';

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
      </table>
    )
  }
}

export default Table;
