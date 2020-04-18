import React from 'react';
import axios from 'axios';
export default class BlogDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            details : []
        }
        const api_url = 'https://jsonplaceholder.typicode.com/users/'+this.state.id;
        axios(api_url).then(result => {
            this.setState({
                details: result.data
            },() => {
                //console.log("========",this.state.details);
            });
        });
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.details.name}</h1>
                <p>{this.state.details.username}</p>
            </div>
        )
    }
}