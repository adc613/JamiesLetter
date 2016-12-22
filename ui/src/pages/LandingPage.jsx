import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (

      <svg version="1.1">
        <rect fill="#DDDDDD" stroke-width="1" width="614" height="391" rx="4"></rect>
      </svg>

    );
  }
}

export default LandingPage;
