import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/letter';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    console.log(this.props);
    if(this.props.displayLetter) {
      return (
        <div className={this.props.className}>
          <div id="free-letter">
            <h1> Hi Jamie </h1>
            <p>
              Dear Jamie,
            </p>
            <p> 
              lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            </p>
          </div>
        </div>
      );

    } else {
      return (<div></div>);
    }
  }
}


export default Letter;
