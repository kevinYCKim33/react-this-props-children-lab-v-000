//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedDecorations';

ReactDOM.render(
  <div>
    <Invitation>
    Hey, you should totally come to this awesome party I'm throwing!
    </Invitation>
    <ThemedParty theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedParty>
  </div>,
  document.getElementById('global')
);

//invitation.js
import React from 'react';

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <h3>{this.props.children} </h3>
      </div>
    )
  }
}

export default Invitation;

//ThemeDecorations.js
import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child=> {
      return React.cloneElement(child, {
        className: this.props.theme,
      })
    })
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    )
  }
}

export default ThemedDecorations;
