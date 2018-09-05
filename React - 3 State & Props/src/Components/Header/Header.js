import React, {Component} from 'react';
import Title from './Title';


/* Class component  */
export default class Header extends Component {
    render() {
        //props from App class
        console.log(this.props);
        return (
        <div>
            <h1>Header class</h1>
            <h4>{this.props.branding}</h4>
            <Title title={this.props.title}/>
        </div>
        )}
}

/* Functional Component - e.g. navbars */

/* const Header = () => {
    return(
        <div>
            <h1>Header class</h1>
        </div>
    );
};

export default Header;
 */