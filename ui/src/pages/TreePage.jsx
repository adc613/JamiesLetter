import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Seed from '../components/tree/Seed';
import Tree from '../components/tree/FullTree';


class TreePage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div id="tree">
        <Tree />
      </div>
    );

  }
}


export default TreePage;
