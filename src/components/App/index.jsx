import React, { Component } from 'react';
import Table from '../Table/';
import Dropdown from '../Dropdown/';
import Modal from '../Modal/';
import Enums from '../../helpers/Enums';
import serverLogs from '../../assets/server-logs.json';

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
      readOnly: true,
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(JSON.stringify(serverLogs))
    });
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

  handleSubmit = (data) => {
    const newData = this.state.data;
    newData.push(data);
    this.setState({
      data: newData
    });
  }

  render() {
    const {
      columnsDropdownValue, orderDropdownValue, filterDropdownValue, showModal, modalContent, readOnly, data
    } = this.state;
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
          <button
            className="button"
            type="button"
            onClick={() => this.toggleModal(null, false)}
          >
            Add record
          </button>
        </div>
        <Table columnSort={columnsDropdownValue}
          orderSort={orderDropdownValue}
          toggleModal={this.toggleModal}
          selectedFilters={selectedFilters}
          data={data}
        />
        <Modal isShown={showModal}
          toggleModal={this.toggleModal}
          readOnly={readOnly}
          modalContent={modalContent}
          handleSumbit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
