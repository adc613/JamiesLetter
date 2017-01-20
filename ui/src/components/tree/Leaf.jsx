import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Leaf extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    let src = "/static/imgs/" + this.props.leaf;
    let className = "leaf " + (this.props.className || "");
    return (
      <img
        onClick={this.props.clickHandler}
        style={this.props.style}
        className={className}
        src={src}
      />

    );

  }
}


export default Leaf;
