import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/tree';
import Leaf from './Leaf';

class Leaves extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.leafClickHandler = this.leafClickHandler.bind(this);
  }

  componentDidMount() {
    setTimeout(this.props.actions.initDraw, 1000);
    //setTimeout(this.props.actions.initDraw, 10000);
  }

  leafClickHandler(event) {
    let src = event.target.src;
    console.log(src);
    setTimeout(() => {
      console.log(src);
      this.props.actions.rememberAMemory(src);
    }, 4000);

    this.props.actions.removeLeaves();
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

    if(this.props.draw) {
      setTimeout(this.props.actions.drawLeaf, 1000);
    }
    if(this.props.displayMemory) {
      let src = "/static/imgs/" + this.props.memory.get('src');
      return (
        <div id="memory">
          <img src={src} id="memory-img" />
          <p>
            { this.props.memory.get('description') }
          </p>
        </div>
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
