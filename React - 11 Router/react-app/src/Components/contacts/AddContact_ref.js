import React, { Component } from 'react'
/* REF & uncontrolled components
for when data is not in state, using props instead */
class AddContact extends Component {
    constructor (props) {
        super(props);
        
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }

    /* Submit  */
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name:this.nameInput.current.value,
            phone:this.phoneInput.current.value,
            email:this.emailInput.current.value
        }

        console.log(contact);
    }

    /* Mock props 
    default fields in form*/
    static defaultProps = {
        name:'Bob Dole',
        email:'email@email.com',
        phone: '777-777-7777'
    }

  render() {
      /* state to take in value */
      const {name,email,phone} = this.props;
    return (
      <div className="card mb-3">
        <div className ='card-header'>Add Contact</div>
        <div className='card-body'>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                    type='text'
                    name='name'
                    className='form-control form-control-lg'
                    placeholder='Enter Name..'
                    defaultValue={name}
                    ref={this.nameInput}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                    type='email'
                    name='email'
                    className='form-control form-control-lg'
                    placeholder='Enter email..'
                    defaultValue={email}
                    ref={this.emailInput}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input 
                    type='text'
                    name='phone'
                    className='form-control form-control-lg'
                    placeholder='Enter Phone..'
                    defaultValue={phone}
                    ref={this.phoneInput}
                    />
                </div>
            </form>
            <input 
            type='submit' 
            value='Add Contact' 
            className='btn btn-light btn-block'
            />
        </div>
      </div>
    )
  }
}

export default AddContact;
