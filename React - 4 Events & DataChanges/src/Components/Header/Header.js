import React, {Component} from 'react';
import Title from './Title';

export default class Header extends Component {
    /* Targets the event and runs changeTitle whenever input is detected */
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
  
    render() {
        //working passed function
        this.props.test();
        return (
        <div>
            <h1 >Header class</h1>
            <Title title={this.props.title}/>
            {/* Onchange function with default value of props.title */}
            <input onChange={this.handleChange.bind(this)} value={this.props.title}/>
        </div>
        )}
}
