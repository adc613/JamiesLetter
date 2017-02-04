import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/tree';
import Leaf from './Leaf';
import Memory from './Memory';


class Leaves extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.leafClickHandler = this.leafClickHandler.bind(this);
    this.memoryClickHandler = this.memoryClickHandler.bind(this);
  }

  componentDidMount() {
    setTimeout(this.props.actions.initDraw, 10000);
  }

  leafClickHandler(event) {
    let src = event.target.src;
    setTimeout(() => {
      this.props.actions.rememberAMemory(src);
    }, 3500);

    this.props.actions.removeLeaves();
  }

  memoryClickHandler(event) {
    event.preventDefault();
    this.props.actions.removeMemory();
    setTimeout(this.props.actions.initDraw, 1000);
  }

  doNothingClickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  createLeaf(leaf) {
    let style = leaf.get('style').toJS();
    let key = leaf.get('key');
    let className = leaf.get('className');
    return (
      <Leaf
        clickHandler={this.leafClickHandler}
        key={key}
        style={style}
        className={className}
        leaf={leaf.get('leaf')}
      />
    );
  }

  render() {

    let interval = 500;
    interval += Math.floor(Math.random() * 1000);
    if(this.props.draw && !this.leafOnQueue) {
      setTimeout(() => {
        this.leafOnQueue = false;
        this.props.actions.drawLeaf();
      }, interval);
      this.leafOnQueue = true;
    }
    if(this.props.displayMemory) {
      let src = "/static/imgs/" + this.props.memory.get('src');
      let description = this.props.memory.get('description');
      let id = this.props.memory.get('id');
      let className = this.props.memory.get('className');
      return (
        <Memory
          clickHandler={this.memoryClickHandler}
          falseClickHandler={this.doNothingClickHandler}
          id={id}
          src={src}
          description={description}
          className={className}
        />
      );
    }
    return (
      <div>
        {
          this.props.leaves.map( (leaf) =>
            this.createLeaf(leaf)
          )
        }
      </div>
    );

  }

}

function mapStateToProps(state) {

  return {
    leaves: state.tree.get('leaves'),
    draw: state.tree.get('draw'),
    displayMemory: state.tree.get('displayMemory'),
    memory: state.tree.get('memory'),
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Leaves);
