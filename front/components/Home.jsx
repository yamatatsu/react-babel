import React from 'react';
import {Link} from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="person" >個人</Link></li>
        <li><Link to="group" >グループ</Link></li>
      </ul>
    </div>
  );
};
export default Home;
