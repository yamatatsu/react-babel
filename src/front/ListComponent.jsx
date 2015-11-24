import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li><div>{this.props.task.task_name}</div></li>;
  }
}

export default class ListComponent extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => <ListItem key={index} task={task}/>)}
      </ul>
    );
  }
}
