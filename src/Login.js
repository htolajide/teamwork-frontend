import React, { Component } from 'react';
import './App.css';
import { Button, Form, Input,} from 'reactstrap';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        debugger;
        fetch('https://capstone-teamwork-api.herokuapp.com/api/v1/auth/signin', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status === 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
    render() {
        return (
            <div className="Form-content">
			<h1>User Login</h1>
				<Form>
                    <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                    <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                    <Button onClick={this.login} color="success" block>Login</Button>
                </Form>                   
            </div>
        );
    }
}
export default Login;