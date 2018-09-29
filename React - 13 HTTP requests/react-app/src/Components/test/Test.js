import React, { Component } from 'react'

class test extends Component {
  state = {
    title:'',
    body:''
  };

  componentDidMount() {
    //fetch json api method
    fetch ('https://jsonplaceholder.typicode.com/posts/1')
    .then (response => response.json()) //map res to json
   // .then (data=>console.log(data));
    .then (data=>this.setState({
      title: data.title,
      body: data.body
    }));

    /* Axios method */
   /*  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({contacts:
        res.data})); //.data access the http data */
  }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>HTTP requests</h1>
        <p>Axios - http library</p><br/>

        {/* fetch and display api  */}
        <h1>{title}</h1>
        <h2>{body}</h2>

      </div>
    )
  }
}

export default test;