import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/letter';
import { Link } from 'react-router';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let className = '';
    if(this.props.disabled) {
      className = 'btn-disabled';
    }


    if(this.props.displayLetter) {
      return (
        <div className={this.props.className}>
          <div id="free-letter">
            <h1>Dear Jamie,</h1>
            <p>
              Insert sappy love letter that I'm too insecure to promote publically. If you're name is Jamie I can show you how to see the orignal letter.
            </p>
            <p>
              Love,
            </p>
            <p>
              Adam
            </p>
            <br />
            <div id="riddle">
              <h3>Answer the question below to continue</h3>
              <h4>{this.props.question}</h4>
              <h4>Hint the answer is: {this.props.actualAnswer}</h4>
              <form onSubmit={this.props.submitHandler}>
                <input
                  onChange={this.props.inputChangeHandler}
                  type="text"
                  placeholder="Write answer here"
                  value={this.props.answer}
                />
                <br />
                <button type="submit" className={className}> Submit </button>
              </form>
            </div>
          </div>
        </div>
      );

    } else {
      return (<div></div>);
    }
  }
}


export default Letter;
