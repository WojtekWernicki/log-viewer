import React, { Component } from 'react';
import Row from './Row/';
import data from '../../assets/server-logs.json';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columnSort, orderSort } = this.props;

    const sortedData = orderSort.value === 'asc'
      ? data.sort((a, b) => a[columnSort.value] > b[columnSort.value])
      : data.sort((a, b) => a[columnSort.value] < b[columnSort.value]);

    return (
      <div className="table">
        <div className="table__row table__header">
          <div className="table__row--item table__header--item">Title</div>
          <div className="table__row--item table__header--item">Type</div>
          <div className="table__row--item table__header--item">Description</div>
          <div className="table__row--item table__header--item">Date</div>
        </div>
        { sortedData.slice(0, 15).map((row, i) => <Row key={i} {...row} />) }
      </div>
    )
  }
}

export default Table;
