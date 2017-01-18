import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/tree';

class Leaves extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
  }

  createLeaf(leaf) {
    let style = leaf.get('style').toJS();
    return (
      <img
        style={style}
        className="leaf"
        src={"/static/imgs/" + leaf.get('leaf')}
      />
    );
  }

  render() {


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
