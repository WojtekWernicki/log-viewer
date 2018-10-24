import React, { Component } from 'react';
import Table from '../Table/';
import Dropdown from '../Dropdown/';
import Modal from '../Modal/';
import Enums from '../../helpers/Enums';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnsDropdownValue: Enums.columnsDropdownOptions[3],
      orderDropdownValue: Enums.orderDropdownOptions[1],
      filterDropdownValue: {
        1: false,
        2: false,
        3: false,
        4: false
      },
      showModal: false,
      modalContent: null,
      readOnly: true
    }
  }

  changeDropdownValue = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  toggleModal = (data = null, readOnly = true) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      modalContent: data,
      readOnly
    }));
  }

  render() {
    const { columnsDropdownValue, orderDropdownValue, filterDropdownValue, showModal, modalContent, readOnly } = this.state;
    const selectedFilters = Object.keys(filterDropdownValue)
    .map((key) => ({
      type: key,
      isSelected: filterDropdownValue[key]
    }))
    .filter((option) => !!option.isSelected)
    .map((option) => +option.type);

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
            title={'Filter by event type'}
            options={Enums.filterDropdownOptions}
            value={filterDropdownValue}
            onSelect={(value) => this.changeDropdownValue('filterDropdownValue', value)}
            multiple
          />
        </div>
        <Table columnSort={columnsDropdownValue}
          orderSort={orderDropdownValue}
          toggleModal={this.toggleModal}
          selectedFilters={selectedFilters}
        />
        <Modal isShown={showModal}
          toggleModal={this.toggleModal}
          readOnly={readOnly}
          modalContent={modalContent} />
      </div>
    );
  }
}

export default App;
