import React from 'react';
import request from 'superagent';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class TaskEditer extends React.Component {
  constructor() {
    super();
    this.state = {tasks: [], inputTaskName: ''};
  }

  componentDidMount() {
    request
      .get('/api/tasks/')
      .send({ name: 'Manny', species: 'cat' })
      .set('Accept', 'application/json')
      .end((err, res) => {
        this.setState({tasks: res.body.tasks});
      });
  }

  handleClickAdd() {
    this.setState({
      tasks: this.state.tasks.concat({taskName: this.state.inputTaskName.trim()}),
      inputTaskName: ''
    })
  }

  handleChangeTaskName(input) {
    this.setState({inputTaskName: input.taskName})
  }

  render() {
    return (
      <div>
        <header><h1>TaskEditer</h1></header>
        <section>
          <InputComponent
            inputTaskName={this.state.inputTaskName}
            onClickAdd={this.handleClickAdd.bind(this)}
            onChangeTaskName={this.handleChangeTaskName.bind(this)} />
        </section>
        <section>
          <ListComponent tasks={this.state.tasks}/>
        </section>
      </div>
    );
  }
}

React.render(<TaskEditer/>, document.getElementById('task-editer'));
