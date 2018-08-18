import React, {Component} from 'react';

/* -------------Component-------------- */
class Project extends Component {
    render () {
        console.log(this.props);/* shows object from App.js */
        return <div className="Project">
            <h1>My Project</h1>
        </div>;
    }
}

export default Project;