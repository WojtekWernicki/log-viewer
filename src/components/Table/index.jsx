import React, { Component } from 'react';
import Row from './Row/';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  toggleModal = (data) => {
    this.props.toggleModal(data);
  }

  render() {
    const { columnSort, orderSort, toggleModal, selectedFilters, data } = this.props;

    // const sortedData = orderSort.value === 'asc'
    //   ? data.sort((a, b) => {
    //     if (['title', 'description'].includes(columnSort.value)) {
    //       return a[columnSort.value].toLowerCase() > b[columnSort.value].toLowerCase()
    //     }
    //     return a[columnSort.value] > b[columnSort.value];
    //   })
    //   : data.sort((a, b) => {
    //     if (['title', 'description'].includes(columnSort.value)) {
    //       return a[columnSort.value].toLowerCase() < b[columnSort.value].toLowerCase()
    //     }
    //     return a[columnSort.value] < b[columnSort.value];
    //   });
    const sortedData = orderSort.value === 'asc'
      ? data.sort((a, b) => a[columnSort.value].toString().toLowerCase() - b[columnSort.value].toString().toLowerCase())
      : data.sort((a, b) => b[columnSort.value].toString().toLowerCase() - a[columnSort.value].toString().toLowerCase());

    console.info({data, sortedData});

    const filteredData = selectedFilters.length ?
      sortedData.filter((data) => selectedFilters.includes(data.type)) :
      sortedData;

    return (
      <div className="table">
        <div className="table__row table__header">
          <div className="table__row--item table__header--item">Title</div>
          <div className="table__row--item table__header--item">Type</div>
          <div className="table__row--item table__header--item">Description</div>
          <div className="table__row--item table__header--item">Date</div>
          <div className="table__row--item table__header--item"></div>
        </div>
        { filteredData.map((row, i) => <Row key={i} {...row} toggleModal={() => this.toggleModal(row)} />) }
      </div>
    )
  }
}

export default Table;
