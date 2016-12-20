import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  onClick() {

    console.log('click')
    let env = document.querySelectorAll('.env');
    let envelope = document.querySelector('.envelope');

    envelope.style.pointerEvents= 'none';

    let actions = [];
    for (let i = env.length - 1; i >= 0; i--) {
      env[i].classList.add("clicked");
    }

  }

  componentDidMount() p

    let contactDiv = document.getElementsByClassName('.contactdiv")[0];

  }

  render() {
    let message = '<div class="jletter"> <p>Hi Jmaie, hope you enjoy</p> <input value="hello" type="text">  </div>';
    let code = '<svg class="env" id="envelope" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 230" preserveaspectratio="none" height="100%" width="100%"> <defs> <filter id="left-right-shadow" x="0" y="0" width="200%" height="200%"> <feoffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feoffset> <fecolormatrix result="matrixOut" in="offOut" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></fecolormatrix> <fegaussianblur result="blurOut" in="matrixOut" stddeviation="2"></fegaussianblur> <feblend in="SourceGraphic" in2="blurOut" mode="normal"></feblend> </filter> <filter id="topsh" x="0" y="0" width="200%" height="200%"> <feoffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feoffset> <fecolormatrix result="matrixOut" in="offOut" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></fecolormatrix> <fegaussianblur result="blurOut" in="matrixOut" stddeviation="6"></fegaussianblur> <feblend in="SourceGraphic" in2="blurOut" mode="normal"></feblend> </filter> </defs> <g id="env"> <polygon id="left-right" filter="url(#left-right-shadow)" points="0,230 0,10 170,115 340,10 340,230 "></polygon> <path id="bottom" filter="url(#left-right-shadow)" d="M0,230h340v-10L178,102c-4.4-3.1-11.6-3.1-16,0L0,220L0,230"></path> </g> </svg> <div class="envelope-bg env"></div> <div class="triangle_top env"> <svg id="envelope_top" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 340 230" enable-background="new 0 0 340 230" xml:space="preserve" preserveaspectratio="none" height="100%" width="100%"> <path id="top" filter="url(#left-right-shadow)" d="M340,0H0v10l162,118c4.4,3.1,11.6,3.1,16,0L340,10V0"></path> </svg> </div> <div class="paper">' + message + '</div>';
    return (

      <div className="container">

      <div className="contactdiv">
      <div className="envelope">
              <div className="paper">
            <h3>Click Me</h3>
              </div>

      </div>

      <div className="paperbig">
          <span className="exit"><i className="fa fa-times"></i></span>

            <h3>Contact</h3>

            <p><i className="fa fa-envelope-o"></i> ginger@ginger.com</p>
            <p><i className="fa fa-github-alt"></i> littleginger</p>
            <p><i className="fa fa-codepen"></i> Littleginger</p>

            </div>
      <div className="envelopeback"><i className="fa fa-certificate fa-5x"></i></div>
      </div>
      </div>
    );
  }
}
$(".contactdiv").slideDown();
$(".contactdiv").addClass("fadeInUp");
$(".paper").addClass("paperup");
$(".envelope").addClass("wiggle");

  $(".envelope").click(function() {
      $(".paper").removeClass("paperup").addClass("fadeUp");
       $(".paperbig").addClass("fadeDown").removeClass("fadeUp");
              });

 $(".exit").click(function() {
    $(".paper").removeClass("fadeUp").addClass("fadeDown");              $(".paperbig").addClass("fadeUp").removeClass("fadeDown");;
              });

export default LandingPage;
