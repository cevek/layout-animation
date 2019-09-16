import * as React from 'react';
import FlexGrowAnimations from '../FlexGrowAnimations/FlexGrowAnimations';
import HeightWidthAnimations from '../HeightWidthAnimations/HeightWidthAnimations';
import FlexOrderAnimations from '../FlexOrderAnimations/FlexOrderAnimations';
import AppearDisappearAnimations from '../AppearDisappearAnimations/AppearDisappearAnimations';
import './style';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="appearDisappearAnimations">
          <AppearDisappearAnimations />
        </div>
        <div className="flexAnimations">
          <FlexGrowAnimations />
        </div>
        <div className="heightWidthAnimations">
          <HeightWidthAnimations />
        </div>
        <div className="flexOrderAnimations">
          <FlexOrderAnimations />
        </div>
      </div>
    );
  }
}
