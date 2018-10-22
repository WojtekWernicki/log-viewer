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
}]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnsDropdownValue: [],
      orderDropdownValue: []
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
        <Dropdown
          title={'Sort by:'}
          options={columnsDropdownOptions}
          value={columnsDropdownValue}
          onSelect={(value) => this.changeDropdownValue('columnsDropdownValue', value)}
        />
        <Table />
      </div>
    );
  }
}

export default App;
