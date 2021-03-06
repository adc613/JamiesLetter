import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Envelope from './Envelope';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/letter';



class EnvelopeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.actions.open();
  }

  render() {

    return (

      <Envelope 
        className={this.props.className}
        open={this.props.open}
        clickHandler={this.clickHandler}
      />

    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.letter.get('open'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(EnvelopeContainer);
