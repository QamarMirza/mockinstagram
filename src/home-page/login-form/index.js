import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Enter Token here.',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('An essay was submitted: ' + this.state.value);
    this.props.submitAction(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}