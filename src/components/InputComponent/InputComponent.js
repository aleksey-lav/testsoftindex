import React, {Component} from 'react';

class InputComponent extends Component {

  //input data form and transfer these to validation
  handleChangeInput = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    this.props.onChangeValue(e);
  }

  render() {
    const { value, type, placeholder, className, classNameLabel, name} = this.props;

    return (
      <>
        <div className="form-group">
          <label className={classNameLabel}>
            {value && placeholder }
          </label>
          <div className={className}>
            <input
              type={type}
              name={name}
              onChange={this.handleChangeInput}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
      </>
    );
  }
}

export default InputComponent
