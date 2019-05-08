import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';



class App extends Component {
  state = {
    users: JSON.parse(localStorage.getItem('items')),
    firstName: '',
    lastName: '',
    phone: '',
    age: ''
  }
  //input valid data and put to state
  handleChange = (e) =>{
  console.log("you are in App.js => handleChange") 
  this.setState ({
    [e.target.name]: e.target.value
  })
  } 

  //add user to localstorage and get item from there and update localstoeage with new datas
  handleSubmit = () => {
    let itemsFromLocalstorage = JSON.parse(localStorage.getItem('items'));
    console.log(itemsFromLocalstorage)
      const {firstName, lastName, phone, age} = this.state
    if (itemsFromLocalstorage) {
      localStorage.setItem('items', JSON.stringify([
        ...itemsFromLocalstorage, [firstName, lastName, phone, age]
      ]));
    } else {
      localStorage.setItem('items', JSON.stringify([
        [firstName, lastName, phone, age]
      ]));
    }
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
    });
    this.updateStateUsers();
  }

  //update state user from localstorage data
  updateStateUsers = () => {
    this.setState({
      users: JSON.parse(localStorage.getItem('items')),
    });
  }

  //delete from table user by index !== key
  toDeleteUser = (key) => {
    console.log(key)
    let itemsFromLocalstorage = JSON.parse(localStorage.getItem('items'));
    console.log(itemsFromLocalstorage)
    localStorage.setItem('items', JSON.stringify(itemsFromLocalstorage.filter((item,index) => index !== key)));
    this.updateStateUsers();
  }

  //sort table list from any column use compare js
  toSortByTableName = (key, sortValue) => {
    console.log(sortValue)
    console.log(key)
    let items = this.state.users;
    items.sort((a, b) => {
      //sort age from up to down and reverse
      if (key === 3) {
        return  sortValue ? a[key] - b[key] : b[key] - a[key]
      }
      if (a[key] > b[key]) {
        return sortValue ? 1 : -1;
      }
      if (a[key] < b[key]) {
        return sortValue ? -1 : 1;
      }
      return 0;
    });
    localStorage.setItem('items', JSON.stringify(items));
    this.updateStateUsers();
  }

  render() {
    const {firstName,lastName,phone,age,} = this.state
    return (
      <div className="App">
      <Form
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          age={age}
          handleSubmit={this.handleSubmit}
          handleValidValue={this.handleChange}
        />
        <Table
          users={this.state.users}
          onDeleteUser={this.toDeleteUser}
          onSortData={this.toSortByTableName}
        />
      </div>
    );
  }
}

export default App;
