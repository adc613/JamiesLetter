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
        <div className="content" >
          <img src={this.props.src} id="memory-img" onClick={this.props.falseClickHandler}/>
          <p onClick={this.props.falseClickHandler}>
            { this.props.description }
          </p>
        </div>
      </div>
    );

  }

}


export default Memory;
