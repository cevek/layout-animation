import * as React from 'react';
import * as ReactDom from 'react-dom';

export default class Animate extends React.Component<{
  children: JSX.Element;
}> {
  getSnapshotBeforeUpdate() {
    const node = ReactDom.findDOMNode(this) as HTMLElement;
    return node.getBoundingClientRect();
  }

  componentDidUpdate(prevProps: {}, prevState: {}, snapshot: ClientRect) {
    const node = ReactDom.findDOMNode(this) as HTMLElement;
    const newSnapshot = node.getBoundingClientRect();
    const shiftX = snapshot.left - newSnapshot.left;
    const shiftY = snapshot.top - newSnapshot.top;

    node.style.transition = '';
    node.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    setTimeout(() => {
      node.style.transition = 'all .3s';
      node.style.transform = ``;
    });
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
