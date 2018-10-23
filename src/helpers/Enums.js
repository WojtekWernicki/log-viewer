const Enums = {
  eventType: {
    1: 'Success',
    2: 'Info',
    3: 'Fail',
    4: 'Fatal'
  },
  columnsDropdownOptions: [{
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
  }],
  orderDropdownOptions: [{
    displayName: 'Ascending',
    value: 'asc'
  }, {
    displayName: 'Descending',
    value: 'desc'
  }],
  filterDropdownOptions: [{
    displayName: 'Success',
    value: 1
  }, {
    displayName: 'Info',
    value: 2
  }, {
    displayName: 'Fail',
    value: 3
  }, {
    displayName: 'Fatal',
    value: 4
  }]
};

export default Enums;
