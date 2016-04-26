import React from 'react';
import {reject} from 'underscore';
import request from 'superagent';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <a href="/person" >個人</a>
        <br/>
        <a href="/group" >グループ</a>
      </div>
    );
  }
}

React.render(<Main/>, document.getElementById('react-root'));
