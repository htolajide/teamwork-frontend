import React, { Component } from 'react';
import './App.css';
import { Button, Form, Input,} from 'reactstrap';
class Article extends Component {
    constructor() {
        super();
        this.state = {
            Title: '',
            Article: ''
        }
        this.Title = this.Title.bind(this);
        this.Article = this.Article.bind(this);
        this.create = this.create.bind(this);
    }
    Title(event) {
        this.setState({ Title: event.target.value })
    }
    Article(event) {
        this.setState({ Article: event.target.value })
    }
    create(event) {
        debugger;
        fetch('https://capstone-teamwork-api.herokuapp.com/api/v1/articles', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.Title,
                article: this.state.Article
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status === 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            }).catch( (error) => {console.log(error)})
    }
    render() {
        return (
            <div className="Form-content">
			<h1>Post Article</h1>
				<Form>
                    <Input type="text" onChange={this.Title} placeholder="Enter Title" />
                    <textarea type="text"  cols="30" rows="7" onChange={this.Article} placeholder="Write Article " />
                    <Button onClick={this.create} color="success" block>Post Article</Button>
                </Form>                   
            </div>
        );
    }
}
export default Article;