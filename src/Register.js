import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { select } from 'react-select';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      lastName: '',
	  firstName: '',
      jobRole: '',
      email: '',
      password: '',
	  gender: '',
      department: ''
    }
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this);
    this.department = this.department.bind(this);
	this.jobRole = this.jobRole.bind(this);
	this.gender = this.gender.bind(this);
    this.register = this.register.bind(this);
  }
  email(event) {
    this.setState({ email: event.target.value })
  }
  department(event) {
    this.setState({ department: event.target.value })
  }
  password(event) {
    this.setState({ password: event.target.value })
  }
  jobRole(event) {
    this.setState({ jobRole: event.target.value })
  }
  firstName(event) {
    this.setState({ firstName: event.target.value })
  }
  lastName(event) {
    this.setState({ lastName: event.target.value })
  }
  gender(event) {
    this.setState({ gender: event.target.value })
  }
  register(event) {
    fetch('https://capstone-teamwork-api.herokuapp.com/api/v1/auth/create-user', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
		lastName: this.state.lastName,
        password: this.state.password,
        email: this.state.email,
		gender: this.state.gender,
        jobRole: this.state.jobRole,
        department: this.state.department
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status === 'Success')
                this.props.history.push("/Dashboard");
        else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
	  .catch((error) => { console.log(error)})
  }
  render() {
    return (
      <div className="Form-content">
        <Form>
			<h1>Register User</h1>
            <Input type="text"  onChange={this.firstName} placeholder="FirstName" />
			<Input type="text"  onChange={this.lastName} placeholder="LastName" />
            <Input type="text"  onChange={this.email} placeholder="Email" />
            <Input type="password"  onChange={this.password} placeholder="Password" />
            <Input type="text"  onChange={this.jobRole} placeholder="JobRole" />
            <Input type="text"  onChange={this.department} placeholder="Department" />
			<select onSubmit={this.gender} >
				<option>Select Gender</option>
				<option value="Male" >Male</option>
				<option value="Female" >Female</option>
			</select>
            <Button  onClick={this.register}  color="success" block>Create Account</Button>
        </Form>        
      </div>
    );
  }
}
export default Register;