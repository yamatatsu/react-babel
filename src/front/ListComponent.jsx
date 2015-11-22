import React from 'react';

export default class ListComponent extends React.Component {
  render() {
    return (
        <ul class="list">
          {this.props.tasks && this.props.tasks.map(task => {
            return (
              <li class="item">
                <div className="task-name">{task}</div>
              </li>
            )
          })}
        </ul>
    );
  }
}
