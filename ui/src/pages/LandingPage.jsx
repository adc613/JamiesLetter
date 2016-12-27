import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import EnvelopeContainer from '../components/EnvelopeContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/letter';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setTimeout(this.props.actions.pageState, 100);
    setTimeout(this.props.actions.pageState, 2000);
    setTimeout(this.props.actions.pageState, 3000);
    setTimeout(this.props.actions.pageState, 4000);
  }

  render() {

    let envelopeClass;
    switch (this.props.pageState % 3) {
      case 0:
        envelopeClass = "envelope";
        break;
      case 1:
        envelopeClass = "envelope-enter";
        break;
      case 2:
        envelopeClass = "envelope-exit";
        break;
    }

    if(this.props.pageState < 3) {
      return (

        <EnvelopeContainer
          className={envelopeClass}
        />

      );
    } else {
      return (
        <EnvelopeContainer
          className={envelopeClass}
        />
      );
    }
  }
}


function mapStateToProps(state) {
  return {
    pageState: state.letter.get('pageState'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
