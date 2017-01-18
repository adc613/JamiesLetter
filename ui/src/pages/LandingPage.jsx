import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <li>
        <li><Link to="/letter"> Letter </Link> </li>
        <li><Link to="/tree"> Tree </Link> </li>
      </li>
    );

  }
}


export default LandingPage;
