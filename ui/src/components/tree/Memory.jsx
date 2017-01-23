import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    let id = this.props.id;

    console.log(this.props);
    return (
      <div id={this.props.id} className={this.props.className} onClick={this.props.clickHandler}>
        <div className="content" onClick={this.props.falseClickHandler}>
          <img src={this.props.src} id="memory-img" />
          <p>
            { this.props.description }
          </p>
        </div>
      </div>
    );

  }

}


export default Memory;
