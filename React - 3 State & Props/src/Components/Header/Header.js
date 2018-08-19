import React, {Component} from 'react';
import Title from './Title';

export default class Header extends Component {


    render() {
        //props from App class
        console.log(this.props);
        return (
        <div>
            <h1>Header class</h1>
            <Title title={this.props.title}/>
        </div>
        )}
}
