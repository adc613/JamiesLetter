import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Envelope extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    let state;

    let className = this.props.className;

    switch(this.props.open % 3) {
      case 0:
        state = "closed";
        break;
      case 1:
        state = "open";
        break;
      case 2:
        state = "full-open";
        break;
    }

    return (
      <div className={this.props.className}>
        <svg className="svg-envelope" onClick={this.props.clickHandler} viewBox="867 -200 1500 3000" version="1.1" >
          <desc>Created with Sketch.</desc>
          <defs>
              <rect id="path-1" x="0" y="0" width="554" height="380"></rect>
              <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="554" height="438" fill="white">
                  <use href="#path-1"></use>
              </mask>
          </defs>
          <g className={state} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(1320.000000, 32.000000)">
              <polygon id="Triangle-2" stroke="#979797" fill="#9B9B9B" transform="translate(308.000000, 286.500000) scale(1, -1) translate(-308.000000, -286.500000) " points="308 191 615 382 1 382"></polygon>
              <path d="M289.515706,185.087156 C299.7243,191.636123 316.27105,191.639106 326.484294,185.087156 L615,2.84217094e-14 L1,2.84217094e-14 L289.515706,185.087156 Z" id="flap-open" stroke="#979797" fill="#D8D8D8" transform="translate(308.000000, 95.000000) scale(-1, -1) translate(-308.000000, -95.000000) "></path>
              <g id="letter" transform="translate(27.000000, 114.000000)">
                  <use id="Letter" stroke="#979797" mask="url(#mask-2)" strokeWidth="2" fill="#FFFFFF" href="#path-1"></use>
                  <text id="letter-text" fontFamily="Roboto-Medium, Roboto" fontSize="24" fontWeight="400" fillOpacity="0.87" fill="#000000">
                      <tspan x="51" y="103">Dear Jamie,</tspan>
                      <tspan x="51" y="131"></tspan>
                      <tspan x="51" y="159">lorem  is simply dummy text of the printing </tspan>
                      <tspan x="51" y="187">and typesetting industry. Lorem Ipsum has </tspan>
                      <tspan x="51" y="215">been the industry’s standard dummy text </tspan>
                      <tspan x="51" y="243">ever since the 1500s, when an unknown </tspan>
                      <tspan x="51" y="271">printer took a galley of type and scrambled </tspan>
                      <tspan x="51" y="299">it to make a type specimen book. It has </tspan>
                      <tspan x="51" y="327">survived not only five </tspan>
                  </text>
              </g>
              <polygon id="Triangle-3" stroke="#979797" fill="#D8D8D8" transform="translate(168.000000, 387.000000) rotate(90.000000) translate(-168.000000, -387.000000) " points="168 219 363 555 -27 555"></polygon>
              <polygon id="Triangle-3-Copy" stroke="#979797" fill="#D8D8D8" transform="translate(447.000000, 386.000000) scale(-1, 1) rotate(90.000000) translate(-447.000000, -386.000000) " points="447 218 642 554 252 554"></polygon>
              <path d="M290.419645,364.228215 C300.129007,356.922474 315.877868,356.927646 325.580355,364.228215 L615,582 L1,582 L290.419645,364.228215 Z" id="bottom-triangle" stroke="#979797" fill="#D8D8D8"></path>
              <path d="M289.515706,185.087156 C299.7243,191.636123 316.27105,191.639106 326.484294,185.087156 L615,2.84217094e-14 L1,2.84217094e-14 L289.515706,185.087156 Z" id="flap-closed" stroke="#979797" fill="#D8D8D8" transform="translate(308.000000, 95.000000) scale(-1, -1) translate(-308.000000, -95.000000) "></path>
          </g>
        </svg>
      </div>
    );

  }
}


export default Envelope;
