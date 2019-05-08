import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  state = { 
    sortByFistName: false,
    sortByLastName: false,
    sortByPhone: false,
    sortByAge: false,
  }

  //sort by name and key submit
  toSortByName = (byName) => {
    let flag;
    switch (byName) {
      case 'firstName':
        flag = this.state.sortByFistName;
        console.log(flag)
        this.props.onSortData(0, flag);
        this.setState({
          sortByFistName: !flag
        });
        break;
      case 'lastName':
        flag = this.state.sortByLastName;
        this.props.onSortData(1, flag);
        this.setState({
          sortByLastName: !flag
        });
        break;
      case 'phone':
        flag = this.state.sortByPhone;
        this.props.onSortData(2, flag);
        this.setState({
          sortByPhone: !flag
        });
        break;
      case 'age':
        flag = this.state.sortByAge;
        this.props.onSortData(3, flag);
        this.setState({
          sortByAge: !flag
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
        softindex list
        </div>
        <div className="container__content">
          <table>
            <tbody>
              <tr className="container__content-item">
                <th className="first-name">
                  First Name
                  <span className="arrow-sort-icon" onClick={() => this.toSortByName('firstName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="last-name">
                  Last Name
                  <span className="arrow-sort-icon" onClick={() => this.toSortByName('lastName')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="phone">
                  Phone
                  <span className="arrow-sort-icon" onClick={() => this.toSortByName('phone')}>
                  &#x21D5;
                  </span>
                </th>
                <th className="age">
                  Age
                  <span className="arrow-sort-icon" onClick={() => this.toSortByName('age')}>
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
                      <th className="delete-text-icon" onClick={() => this.props.onDeleteUser(index)} >
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
