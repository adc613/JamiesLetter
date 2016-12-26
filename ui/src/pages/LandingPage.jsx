import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import EnvelopeContainer from '../components/EnvelopeContainer';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (

      <EnvelopeContainer />

    );
  }
}


export default LandingPage;
