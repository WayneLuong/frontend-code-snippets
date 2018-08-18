import React, {Component} from 'react';

/* JSX can take in variables, functions, objects into html elements */
var name = 'Wayne';

/* object */
const user = {
    firstName:'Roy',
    lastName: 'Harper'
};
/* function !user and user */
function showUser(user) {
    if(user) {
        return user.firstName + ' ' + user.lastName;
    }
    return <p>Stranger</p>;
}

const element = <p>Hello {showUser(!user)}, {showUser(user)} and {name} from variable</p>

/* -------------Component-------------- */
class Module1 extends Component {
    render () {
        return <div className="Module1">{/* only one root div */}
            <h1>My Module1</h1>
            <p>{element}</p>
        </div>;
    }
}

export default Module1;