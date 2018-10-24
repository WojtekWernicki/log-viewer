import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      selectedOptions: {}
    }
  }

  componentDidMount() {
    const { multiple, options } = this.props;

    if (multiple) {
      let values;
      options.forEach((option) => {
        values = {...values, [option.value]: false};
      });

      this.setState({
        selectedOptions: values
      });
    }
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened
    }));
  }

  chooseOption = (option) => {
    this.props.onSelect(option);
    this.toggleList();
  }

  toggleOption = (field) => {
    this.setState((prevState) => ({
      selectedOptions: {...prevState.selectedOptions, [field]: !prevState.selectedOptions[field]}
    }), () => {
      this.props.onSelect(this.state.selectedOptions);
    });
  }

  render() {
    const { options, value, title, multiple, readOnly, modal } = this.props;
    const { isOpened } = this.state;
    const dropdownClassName = `dropdown__wrapper ${modal ? 'dropdown__wrapper--modal' : ''} ${readOnly ? 'dropdown__wrapper--disabled' : ''}`;

    return (
      <div className={dropdownClassName}>
        <div className="dropdown__header"
            onClick={ () => !readOnly && this.toggleList() }
            title={value}>
          <div className="dropdown__header--title">
            { `${title}${!readOnly && Object.keys(value).length ? ` ${value.displayName ? value.displayName : ''}` : ''}` }
          </div>
          {
            !readOnly &&
            <div className="dropdown__header--toggle">
              { isOpened ? '↑' : '↓' }
            </div>
          }
        </div>
        {
          isOpened &&
            <ul className="dropdown__list">
            {
              options.map((option, i) => (
                <li className="dropdown__list--option"
                  key={i}
                  onClick={() => !multiple && this.chooseOption(option)}>
                  { multiple ?
                    <div className="dropdown__checkbox-wrapper">
                      <input type="checkbox"
                        id={option.value}
                        value={option.value}
                        onChange={() => this.toggleOption(option.value)} />
                      <label htmlFor={option.value}>{option.displayName}</label>
                    </div> :
                    option.displayName
                 }
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}

export default Dropdown;
