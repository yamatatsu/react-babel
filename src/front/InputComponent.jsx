import React from 'react';

export default class InputComponent extends React.Component {

  constructor() {
    super()
    this.state = {taskName: ''}
  }

  componentDidMount() {
    this.refs.taskName.getDOMNode().focus();
  }

  handleChangeTaskName(e) {
    this.setState({taskName: e.target.value})
  }

  handleClickAdd() {
    this.props.onClickAdd({taskName: this.state.taskName.trim()});
    this.setState({taskName: ''});
    this.refs.taskName.getDOMNode().focus();
  }

  render() {
    return (
      <div>
        <input type="text" name="taskName" ref="taskName" onChange={this.handleChangeTaskName.bind(this)} value={this.state.taskName}/>
        <button name="add" onClick={this.handleClickAdd.bind(this)}>追加</button>
      </div>
    );
  }
}
