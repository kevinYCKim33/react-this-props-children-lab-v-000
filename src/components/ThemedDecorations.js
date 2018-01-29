import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <h3 className="heaven">{child}</h3>
      )
    })
    return (
      <div>{childrenWithWrapperDiv}</div>
    )
  }
}

export default ThemedDecorations;
