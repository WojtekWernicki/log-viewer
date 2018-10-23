import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
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

  render() {
    const { options, value, title, multiple } = this.props;
    const { isOpened } = this.state;

    return (
      <div className="dropdown__wrapper">
        <div className="dropdown__header"
            onClick={ () => this.toggleList() }
            title={value}>
          <div className="dropdown__header--title">
            { `${title} ${Object.keys(value).length ? value.displayName : ''}` }
          </div>
          <div className="dropdown__header--toggle">
            { isOpened ? '↑' : '↓' }
          </div>
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
                      <input type="checkbox" id={option.value} value={option.value} />
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
