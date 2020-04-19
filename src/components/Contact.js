import React from 'react';
import {connect} from 'react-redux';
import {createContact} from '../store/actions/contactActions';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name : '',
            last_name : ''
        }
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
        this.props.createContact(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Handle Submit ====>",this.state);
        this.props.createContact(this.state);
    }

    render() {
        //console.log("Current State ===>",this.state);
        return (
            <div>
                <h1>Contact page called.......</h1>
                <form id="contactform" method="post" onSubmit={this.handleSubmit}>
                    <table className="table" cellPadding="2" cellSpacing="2">
                        <tbody>
                        <tr>
                           <td>First Name</td>
                           <td><input type="text" className="form-control" name="first_name" id="first_name" onChange={this.handleChange}  /></td> 
                        </tr>
                        <tr>
                           <td>Last Name</td>
                           <td><input type="text" onChange={this.handleChange} className="form-control" name="last_name" id="last_name"  /></td> 
                        </tr>
                        <tr>
                            <td><input type="submit" name="submit" value="Submit" className="btn btn-primary" /></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createContact: (contact) => dispatch(createContact(contact)) 
    }
}
export default connect(null,mapDispatchToProps)(Contact);