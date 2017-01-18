import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Seed from '../components/tree/Seed';
import Tree from '../components/tree/FullTree';
import Leaves from '../components/tree/Leaves';


class TreePage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div id="tree">
        <div id="top-half" />
        <div id="bottom-half" />
        <Tree />
        <Leaves />

      </div>
    );

  }
}


export default TreePage;
