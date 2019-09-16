import * as React from 'react';
import AnimateLayoutPositionChange from '../../lib/AnimateLayoutPositionChange/AnimateLayoutPositionChange';
import './style';

export default function HeightWidthAnimations() {
  const [clicked, click] = React.useState(false);

  return (
    <React.Fragment>
      <h1>2. Width/height/margin animations </h1>
      <button onClick={() => click(!clicked)}>click</button>
      <div
        style={{
          position: 'relative',
          width: `${clicked ? 150 : 80}px`,
          height: `${clicked ? 150 : 80}px`,
          marginTop: `${clicked ? 50 : 10}px`,
          marginLeft: `${clicked ? 50 : 10}px`,
          backgroundColor: 'yellow',
          transition: 'all 0.3s',
        }}
      >
        <AnimateLayoutPositionChange>
          <div
            style={{
              backgroundColor: 'black',
              position: 'absolute',
              width: clicked ? '10px' : '20px',
              height: clicked ? '10px' : '20px',
              top: clicked ? '40px' : '4px',
              left: clicked ? '60px' : '4px',
            }}
          />
        </AnimateLayoutPositionChange>
        <AnimateLayoutPositionChange>
          <div
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: clicked ? '10px' : '20px',
              height: clicked ? '10px' : '20px',
              top: clicked ? '40px' : '4px',
              right: clicked ? '60px' : '4px',
            }}
          />
        </AnimateLayoutPositionChange>
      </div>
    </React.Fragment>
  );
}
