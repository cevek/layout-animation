import * as React from 'react';
import * as ReactDom from 'react-dom';

export default class AnimateLayoutPositionChange extends React.Component<{
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
    const widthScale = snapshot.width / newSnapshot.width;
    const heightScale = snapshot.height / newSnapshot.height;

    if (shiftX === 0 && shiftY === 0 && widthScale === 1 && heightScale === 1) {
      return;
    }

    node.style.transition = '';
    node.style.transformOrigin = 'left top';
    node.style.transform = `translate(${shiftX}px, ${shiftY}px) scaleX(${widthScale}) scaleY(${heightScale})`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        node.style.transition = 'transform .3s';
        node.style.transform = '';
      });
    });
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
