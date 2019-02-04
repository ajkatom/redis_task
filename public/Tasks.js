import React, { Component } from 'react';
import axios from 'axios';

export default class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    axios
      .get('/api/tasks')
      .then(res => res.data)
      .then(tasks => this.setState({ tasks }))
      .catch(console.error);
  }
  render() {
    const { tasks } = this.state;
    return (
      <div>
        <ul>
          {tasks.map(task => {
            <li key={task}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}
