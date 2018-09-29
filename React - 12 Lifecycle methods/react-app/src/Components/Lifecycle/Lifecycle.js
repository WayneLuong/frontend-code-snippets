import React, { Component } from 'react'

class Lifecycle extends Component {
state = {
    test:'test'
};

    componentDidMount(){
        /* Fires after the component mounts */
        console.log('componentDidMount...');
    }

    componentWillMount(){
        /* Fires before the component mounts */
        console.log('componentWillMount...');
    }

    componentDidUpdate(){
        /* Fires after a component updates/rerenders e.g. on ADD/DELETE/UPDATE */
        console.log('componentDidUpdate...');
    }

    componentWillUpdate(){
        /* Fires before a component updates/rerenders e.g. on ADD/DELETE/UPDATE */
        console.log('componentWillUpdate...');
    }

    /* Depreciated */
    componentWillReceiveProps(nextProps, nextState){
        /* Fires a component recieves new props */
        console.log('componentWillReceiveProps...');
    }

    /* Updated */
    static getDerivedStateFromProps (nextProps, PrevState){
        //return null; //needs to return state or null
        return {
            test:'something'
        }
    }

    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log('getSnapshotBeforeUpdate...');
    }

  render() {
    return (
      <div>
        <h1>Lifecycle Methods</h1>
      </div>
    )
  }
}


export default Lifecycle;