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
    setTimeout(this.props.actions.drawLeaf, 1000);
  }

  leafClickHandler(event) {
    console.log(event.target.src);
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

    setTimeout(this.props.actions.drawLeaf, 1000);
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
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Leaves);
