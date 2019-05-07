import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  state = {
    firstNameSort: true,
    lastNameSort: true,
    phoneSort: true,
    ageSort: true,
  }

  handleUsersSort = (field) => {
    let sortValue;

    switch (field) {
      case 'firstName':
        sortValue = this.state.firstNameSort;
        this.props.onSort(0, sortValue);
        this.setState({
          firstNameSort: !sortValue
        });
        break;
      case 'lastName':
        sortValue = this.state.lastNameSort;
        this.props.onSort(1, sortValue);
        this.setState({
          lastNameSort: !sortValue
        });
        break;
      case 'phone':
        sortValue = this.state.phoneSort;
        this.props.onSort(2, sortValue);
        this.setState({
          phoneSort: !sortValue
        });
        break;
      case 'age':
        sortValue = this.state.ageSort;
        this.props.onSort(3, sortValue);
        this.setState({
          ageSort: !sortValue
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { users } = this.props

    return (
      <div className="container-table">
        <div className="container-table__header">
          list of users
        </div>
        <div className="container-table__content">
          <table className="col-4">
            <tbody>
              <tr className="container-table__content-item">
                <th className="first-name">
                  First Name
                  <span className="arrow-icon" onClick={() => this.handleUsersSort('firstName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="last-name">
                  Last Name
                  <span className="arrow-icon" onClick={() => this.handleUsersSort('lastName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="phone">
                  Phone
                  <span className="arrow-icon" onClick={() => this.handleUsersSort('phone')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="age">
                  Age
                  <span className="arrow-icon" onClick={() => this.handleUsersSort('age')}>
                  &#x21D5;
                  </span>
                </th>
              </tr>
              {users && users.map((user, index) => {
                  return(
                    <tr className="container-table__content-item" key={index}>
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
                      <th className="cross-icon" onClick={() => this.props.onRemoveUser(index)} >
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
