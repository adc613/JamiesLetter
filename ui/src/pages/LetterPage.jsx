import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import EnvelopeContainer from '../components/EnvelopeContainer';
import Letter from '../components/Letter';
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
    setTimeout(this.props.actions.pageState, 1000);
  }

  render() {

    let letterClass;
    let envelopeClass;
    let displayLetter;
    switch (this.props.pageState % 4) {
      case 0:
        letterClass = "letter-offScreen";
        envelopeClass = "envelope";
        displayLetter = false;
        break;
      case 1:
        letterClass = "letter-offScreen";
        envelopeClass = "envelope-enter";
        displayLetter = true;
        break;
      case 2:
        letterClass = "letter-enter";
        envelopeClass = "envelope-exit";
        displayLetter = true;
        break;
    }

    if(this.props.pageState < 3) {
      return (

        <div>
          <Letter 
            className={letterClass}
            displayLetter={displayLetter}
          />
          <EnvelopeContainer
            className={envelopeClass}
          />
        </div>

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
