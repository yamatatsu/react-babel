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
      .set('Accept', 'application/json')
      .end((err, res) => {
        this.setState({tasks: res.body.tasks});
      });
  }

  handleClickAdd() {
    request
      .post('/api/tasks/')
      .send({task_name: this.state.inputTaskName.trim()})
      // .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        this.setState({
          tasks: this.state.tasks.concat({task_name: res.body.task_name.trim()}),
          inputTaskName: ''
        });
      });
  }

  handleChangeTaskName(input) {
    this.setState({inputTaskName: input.task_name})
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
