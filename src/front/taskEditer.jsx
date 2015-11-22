import React from 'react';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class TaskEditer extends React.Component {
  constructor() {
    super();
    this.state = {tasks: []};
  }

  handleClickAdd(input) {
    this.setState({tasks: this.state.tasks.concat({taskName: input.taskName})})
  }

  render() {
    return (
      <div>
        <header><h1>TaskEditer</h1></header>
        <section>
          <InputComponent onClickAdd={this.handleClickAdd.bind(this)}/>
        </section>
        <section>
          <ListComponent tasks={this.state.tasks}/>
        </section>
      </div>
    );
  }
}

React.render(<TaskEditer/>, document.getElementById('task-editer'));
