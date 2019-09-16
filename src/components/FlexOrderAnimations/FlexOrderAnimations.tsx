import * as React from 'react';
import AnimateLayoutPositionChange from '../../lib/AnimateLayoutPositionChange/AnimateLayoutPositionChange';
import './style';

export default function FlexOrderAnimations() {
  const [clicked, click] = React.useState(false);

  return (
    <React.Fragment>
      <h1>3. Flex Order/Direction Animation</h1>
      <button onClick={() => click(!clicked)}>click</button>
      <div
        className="circleContainer"
        style={{ flexDirection: clicked ? 'column' : 'row' }}
      >
        <AnimateLayoutPositionChange>
          <div className="circle" style={{ order: clicked ? 1 : 0 }}>
            order: {clicked ? 1 : 0}
          </div>
        </AnimateLayoutPositionChange>
        <AnimateLayoutPositionChange>
          <div className="circle" style={{ order: clicked ? 0 : 1 }}>
            order: {clicked ? 0 : 1}
          </div>
        </AnimateLayoutPositionChange>
      </div>
    </React.Fragment>
  );
}
