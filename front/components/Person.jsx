import React from 'react';
import {Link} from 'react-router';

const Person = () => {
  return (
    <div>
      <h2>個人</h2>
      <ul>
        <li><Link to="home">Home</Link></li>
      </ul>
    </div>
  );
};
export default Person;
