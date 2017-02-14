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
              We’ve been dating for over two years now and at every occasion you seem to come up with the most thoughtful gifts. I’ll never forget when you wrote me 20 individual letters for my birthday (yes I counted). Each letter had its own label ranging from “open when you want to buy me a gift, but don’t know what to get” to “open when you’ve had a bad day” I know you had to spend hours on making that gift.
            </p>
            <p>
              You had such high standards that I could see the disappointment when you only bought me slippers and “The Ghost in the Wires” for christmas. However I wear those slippers every day (in fact I’m wearing them now). Also “The Ghost in the Wires” was one of the most interesting books I’ve ever read; I read it in a week. You and I both know how much of an achievement that is for me. Even at your worst you manage to find great gifts.
            </p>
            <p>
              On the other hand whenever your birthday would come around I’d call my sister to ask her to pick out a gift for you. I was really proud of myself this year when I bought you a silly christmas card, but you pointed out that I didn’t even write personal message in the card (in hindsight that would have been a great idea). I know gift giving isn’t a competition but you’ve beaten me every time. For once I wanted to give you the gift that you deserve. I hope you enjoy the site and Happy Valentine's Day!
            </p>
            <p>
              Love,
            </p>
            <p>
              Adam
            </p>
            <br />
            <p>
              P.S. I haven’t shown it to anyone yet, it’s been killing me not being able to share my work, but I wanted you to be the first one to see it. Also, if you comment on any of my grammatical errors or run on sentences I’m taking the site down.
            </p>
            <div id="riddle">
              <h3>Answer the question below to continue</h3>
              <h4>{this.props.question}</h4>
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
