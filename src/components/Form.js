import React, {Component} from 'react';
import InputComponent from './InputComponent';
import './Form.css';

class Form extends Component {
  state = {
    firstNameVerif: '',
    lastNameVerif: '',
    phoneVerif: '',
    ageVerif: ''
  }

  toCheckValidFirstName = (e) => {
    console.log(e.target.value)
    this.setState({
      firstNameVerif: /^[a-zA-Z]+$/.test(e.target.value)
    });
    console.log(e.target.value)
    this.props.handleValidValue(e);
  }
  toCheckValidLastName = (e) => {
    this.setState({
      lastNameVerif: /^[a-zA-Z]+$/.test(e.target.value)
    });
    this.props.handleValidValue(e);
  }
  toCheckValidPhone = (e) => {
    this.setState({
      phoneVerif: /^\+[0-9]{12}$/.test(e.target.value)
    });
    this.props.handleValidValue(e);
  }

  toCheckValidAge = (e) => {
    this.setState({
      ageVerif: e.target.value < 100 && /^\d+$/.test(e.target.value)
    });
    this.props.handleValidValue(e);
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      firstNameVerif: '',
      lastNameVerif: '',
      phoneVerif: '',
      ageVerif: ''
    });
    this.props.handleSubmit();
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      age,
    } = this.props;
    const {
      firstNameVerif,
      lastNameVerif,
      phoneVerif,
      ageVerif,
    } = this.state;

    const disableButton = !(firstNameVerif && lastNameVerif  && phoneVerif && ageVerif);
    const classNameButton = disableButton ? 'form-button-disabled' : 'form-button-active'
    const validFirstName = firstNameVerif === '' ? '' : firstNameVerif ? 'valid-form' : 'invalid-form';
    const validFirstNameLabel = firstNameVerif ? 'valid-form-label' : 'invalid-form-label';
    const validLastName = lastNameVerif === '' ? '' : lastNameVerif ? 'valid-form' : 'invalid-form';
    const validLastNameLabel = lastNameVerif ? 'valid-form-label' : 'invalid-form-label';
    const validPhone = phoneVerif === '' ? '' : phoneVerif ? 'valid-form' : 'invalid-form';
    const validPhoneLabel = phoneVerif ? 'valid-form-label' : 'invalid-form-label';
    const validAge = ageVerif === '' ? '' : ageVerif ? 'valid-form' : 'invalid-form';
    const validAgeLabel = ageVerif ? 'valid-form-label' : 'invalid-form-label';

    return (
      <div className="container-form">
        <div className="container-form__header">
          Add user
        </div>
        <div className="container-form__content">
          <form>
              <InputComponent
                type="text"
                onChangeValue={this.toCheckValidFirstName}
                name='firstName'
                placeholder="First Name"
                value={firstName}
                className={`form-group__input ${validFirstName}`}
                classNameLabel={`form-group__label ${validFirstNameLabel}`}
              />
              <InputComponent
                type="text"
                onChangeValue={this.toCheckValidLastName}
                placeholder="Last Name"
                name='lastName'
                value={lastName}
                className={`form-group__input ${validLastName}`}
                classNameLabel={`form-group__label ${validLastNameLabel}`}
              />
              <InputComponent
                type="text"
                onChangeValue={this.toCheckValidPhone}
                placeholder="Phone"
                name='phone'
                value={phone}
                className={`form-group__input ${validPhone}`}
                classNameLabel={`form-group__label ${validPhoneLabel}`}
              />
              <InputComponent
                type="number"
                onChangeValue={this.toCheckValidAge}
                placeholder="Age"
                name='age'
                value={age}
                className={`form-group__input ${validAge}`}
                classNameLabel={`form-group__label ${validAgeLabel}`}
              />
              <div className={classNameButton}>
                <input type="submit"
                  className="form-button-size"
                  value="Submit"
                  onClick={this.onHandleSubmit}
                  disabled={disableButton}
                />
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form
