import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  state = { 
    sortByFistName: false,
    sortByLastName: false,
    sortByPhone: false,
    sortByAge: false,
  }

  toSortByName = (byName) => {
    let sortValue;
    switch (byName) {
      case 'firstName':
        sortValue = this.state.sortByFistName;
        console.log(sortValue)
        this.props.onSortData(0, sortValue);
        this.setState({
          sortByFistName: !sortValue
        });
        break;
      case 'lastName':
        sortValue = this.state.sortByLastName;
        this.props.onSortData(1, sortValue);
        this.setState({
          sortByLastName: !sortValue
        });
        break;
      case 'phone':
        sortValue = this.state.sortByPhone;
        this.props.onSortData(2, sortValue);
        this.setState({
          sortByPhone: !sortValue
        });
        break;
      case 'age':
        sortValue = this.state.sortByAge;
        this.props.onSortData(3, sortValue);
        this.setState({
          sortByAge: !sortValue
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { users } = this.props
    return (
      <div className="container">
        <div className="container__header">
          list of users
        </div>
        <div className="container__content">
          <table className="col-4">
            <tbody>
              <tr className="container__content-item">
                <th className="first-name">
                  First Name
                  <span className="arrow-icon" onClick={() => this.toSortByName('firstName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="last-name">
                  Last Name
                  <span className="arrow-icon" onClick={() => this.toSortByName('lastName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="phone">
                  Phone
                  <span className="arrow-icon" onClick={() => this.toSortByName('phone')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="age">
                  Age
                  <span className="arrow-icon" onClick={() => this.toSortByName('age')}>
                  &#x21D5;
                  </span>
                </th>
              </tr>
              {users && users.map((user, index) => {
                  return(
                    <tr className="container__content-item" key={index}>
                      <th className="first-name">
                        {user[0]}
                      </th>
                      <th className="last-name">
                        {user[1]}
                      </th>
                      <th className="phone">
                        {user[2]}
                      </th>
                      <th className="age">
                        {user[3]}
                      </th>
                      <th className="cross-icon" onClick={() => this.props.onDeleteUser(index)} >
                        delete
                      </th>
                    </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
