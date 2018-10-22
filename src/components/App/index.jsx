import React, { Component } from 'react';
import Table from '../Table/';
import Dropdown from '../Dropdown/';

const columnsDropdownOptions = [{
  displayName: 'Title',
  value: 'title'
}, {
  displayName: 'Type',
  value: 'type'
}, {
  displayName: 'Description',
  value: 'description'
}, {
  displayName: 'Date',
  value: 'date'
}];

const orderDropdownOptions = [{
  displayName: 'Ascending',
  value: 'asc'
}, {
  displayName: 'Descending',
  value: 'desc'
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnsDropdownValue: columnsDropdownOptions[3],
      orderDropdownValue: orderDropdownOptions[1]
    }
  }

  changeDropdownValue = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { columnsDropdownValue, orderDropdownValue } = this.state;
    return (
      <div className="wrapper">
        <div className="dropdown__container">
          <Dropdown
            title={'Sort by:'}
            options={columnsDropdownOptions}
            value={columnsDropdownValue}
            onSelect={(value) => this.changeDropdownValue('columnsDropdownValue', value)}
          />
          <Dropdown
            title={'Sorting order:'}
            options={orderDropdownOptions}
            value={orderDropdownValue}
            onSelect={(value) => this.changeDropdownValue('orderDropdownValue', value)}
          />
        </div>
        <Table columnSort={columnsDropdownValue}
          orderSort={orderDropdownValue}
        />
      </div>
    );
  }
}

export default App;
