import React , {Component} from 'react'

import { Consumer } from '../../context';

import axios from 'axios';

import { Link } from 'react-router-dom';
 
class Contact extends Component{

    state = {
        showContactInfo: false
    };


    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo});
    }

    onDeleteClick = async (id, dispatch) => { 
        try{
            await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        }catch(e){}
        dispatch({type:'DELETE_CONTACT', payload: id})
    }
    render(){

        const {id, name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;
        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card card-body mb-3'>
                            <h4>{name} <i 
                            style = {{ cursor: 'pointer'}}
                            onClick={this.onShowClick}
                            className="fas fa-sort-down"></i>
                            <i className="fas fa-times"
                            onClick={this.onDeleteClick.bind(this, id, dispatch)}
                            style = {{ cursor: 'pointer', float: 'right', color: 'red'}}></i>
                            <Link to={ `contact/edit/${id}`}>
                                <i 
                                    style = {{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}
                                    className="fas fa-pencil-alt"></i>
                            </Link>
                            </h4>
                            {showContactInfo ? (
                            <ul className='list-group'>
                                <li className='list-group-item'>Email: {email}</li>
                                <li className='list-group-item'>Phone: {phone}</li>
                            </ul>): null
                            }
                            
                        </div>
                    )
                }}
            </Consumer>


            
        );
    }
}

export default Contact;