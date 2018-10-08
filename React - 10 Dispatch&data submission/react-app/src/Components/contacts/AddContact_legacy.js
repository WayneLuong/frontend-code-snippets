import React, { Component } from 'react'
import {Consumer} from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
    /* EMPTY STATE */
    state = {
        name:'',
        email:'',
        phone:''
    }

    /* onChange event and submit  */
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);

        //pulling data from state
        const {name, email, phone} = this.state;

        //New updated contact
        const newContact = {
            /*e.g. name:name, same key and value */
            id:uuid(),
            name,
            email,
            phone
        }

        dispatch({type:'ADD_CONTACT', payload:newContact});
        
        //Clear state
        this.setState({
            name:'',
            email:'',
            phone:''
        })
    };

    onChange = (e) => {
        this.setState({ [e.target.name]:e.target.value});
    };

  render() {
      /* state to take in value */
      const {name,email,phone} = this.state;

      return (
          <Consumer>
              {value => {
                  const {dispatch} = value;
                  return(
                    <div className="card mb-3">
                    <div className ='card-header'>Add Contact</div>
                    <div className='card-body'>
                        <form onSubmit={this.onSubmit.bind(
                            this, dispatch)}>
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input 
                                type='text'
                                name='name'
                                className='form-control form-control-lg'
                                placeholder='Enter Name..'
                                value={name}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                type='email'
                                name='email'
                                className='form-control form-control-lg'
                                placeholder='Enter email..'
                                value={email}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone</label>
                                <input 
                                type='text'
                                name='phone'
                                className='form-control form-control-lg'
                                placeholder='Enter Phone..'
                                value={phone}
                                onChange={this.onChange}
                                />
                            </div>
                            <input 
                        type='submit' 
                        value='Add Contact' 
                        className='btn btn-light btn-block'
                        />
                        </form>
                        
                    </div>
                  </div>
                  )
              }}
          </Consumer>
      )  
  }
}

export default AddContact;
