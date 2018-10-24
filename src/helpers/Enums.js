const Enums = {
  eventType: {
    1: 'Success',
    2: 'Info',
    3: 'Fatal',
    4: 'Fail'
  },
  eventIcons: {
    1: 'check',
    2: 'info',
    3: 'exclamation',
    4: 'ban'
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
    displayName: 'Fatal',
    value: 3
  }, {
    displayName: 'Fail',
    value: 4
  }]
};

export default Enums;
