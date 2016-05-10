import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

const ShopList = ({shops}) => {
  return (
    <div>
      <h2>店舗一覧</h2>
      <Link to="home">Home</Link>
      <ul>
        {
          shops.list.map((shop, i) => <li key={i}>{shop}</li>)
        }
      </ul>
    </div>
  );
}

ShopList.propTypes = {
  shops: PropTypes.object,
};

export default connect(
  state => {
    return { shops: state.shops.toJS() }
  }
)(ShopList);
