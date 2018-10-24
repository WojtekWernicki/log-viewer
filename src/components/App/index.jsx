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
    const { columnsDropdownValue, orderDropdownValue, showModal, modalContent, readOnly } = this.state;
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
            options={Enums.filterDropdownOptions}
            value={[]}
            onSelect={(value) => this.changeDropdownValue('orderDropdownValue', value)}
            multiple
          />
        </div>
        <Table columnSort={columnsDropdownValue}
          orderSort={orderDropdownValue}
          toggleModal={this.toggleModal}
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
