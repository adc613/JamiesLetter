import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Router, Route, Link, browserHistory } from 'react-router';
import LandingPage from '../pages/LandingPage';
import LetterPage from '../pages/LetterPage';
import TreePage from '../pages/TreePage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LetterPage} />
        <Route path="/tree" component={TreePage} />
      </Router>
    );
  }
}


export default App;
