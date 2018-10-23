import React, { Component } from 'react';
import Table from '../Table/';
import Dropdown from '../Dropdown/';
import Enums from '../../helpers/Enums';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnsDropdownValue: Enums.columnsDropdownOptions[3],
      orderDropdownValue: Enums.orderDropdownOptions[1]
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
            options={Enums.columnsDropdownOptions}
            value={columnsDropdownValue}
            onSelect={(value) => this.changeDropdownValue('columnsDropdownValue', value)}
          />
          <Dropdown
            title={'Sorting order:'}
            options={Enums.orderDropdownOptions}
            value={orderDropdownValue}
            onSelect={(value) => this.changeDropdownValue('orderDropdownValue', value)}
          />
          <Dropdown
            title={'Display only:'}
            options={Enums.columnsDropdownOptions}
            value={[]}
            onSelect={(value) => this.changeDropdownValue('orderDropdownValue', value)}
            multiple
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
