import React from 'react';
import {Link} from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="shopList" >店舗一覧</Link></li>
        <li><Link to="group" >グループ</Link></li>
      </ul>
    </div>
  );
};
export default Home;
