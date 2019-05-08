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

  toSetForm = (e) => {
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
    const styleNameButton = disableButton ? 'form-button-disabled' : 'form-button-active'
    const styleFirstName = firstNameVerif === '' ? '' : firstNameVerif ? 'valid-form' : 'invalid-form';
    const styleFirstNameLabel = firstNameVerif ? 'valid-form-label' : 'invalid-form-label';
    const styleLastName = lastNameVerif === '' ? '' : lastNameVerif ? 'valid-form' : 'invalid-form';
    const styleLastNameLabel = lastNameVerif ? 'valid-form-label' : 'invalid-form-label';
    const stylePhone = phoneVerif === '' ? '' : phoneVerif ? 'valid-form' : 'invalid-form';
    const stylePhoneLabel = phoneVerif ? 'valid-form-label' : 'invalid-form-label';
    const styleAge = ageVerif === '' ? '' : ageVerif ? 'valid-form' : 'invalid-form';
    const styleAgeLabel = ageVerif ? 'valid-form-label' : 'invalid-form-label';

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
                className={`form-group__input ${styleFirstName}`}
                classNameLabel={`form-group__label ${styleFirstNameLabel}`}
              />
              <InputComponent
                type="text"
                onChangeValue={this.toCheckValidLastName}
                placeholder="Last Name"
                name='lastName'
                value={lastName}
                className={`form-group__input ${styleLastName}`}
                classNameLabel={`form-group__label ${styleLastNameLabel}`}
              />
              <InputComponent
                type="text"
                onChangeValue={this.toCheckValidPhone}
                placeholder="Phone +38"
                name='phone'
                value={phone}
                className={`form-group__input ${stylePhone}`}
                classNameLabel={`form-group__label ${stylePhoneLabel}`}
              />
              <InputComponent
                type="number"
                onChangeValue={this.toCheckValidAge}
                placeholder="Age"
                name='age'
                value={age}
                className={`form-group__input ${styleAge}`}
                classNameLabel={`form-group__label ${styleAgeLabel}`}
              />
              <div className={styleNameButton}>
                <input type="submit"
                  className="form-button-size"
                  value="Submit"
                  onClick={this.toSetForm}
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
