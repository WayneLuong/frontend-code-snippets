import React, {Component} from 'react';
import Title from './Title';

export default class Header extends Component {

    /* Constructors */
    constructor(){
        super()//must first line of constructor
        this.name = "Jen";
    }
    render() {

        return (
        <div>
            <h1>Header class</h1>
            <Title/>
            <p>This is a constructor {this.name}</p>
        </div>
        )}
}
