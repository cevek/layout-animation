import * as React from 'react';
import AnimateMount from '../../lib/AnimateMount/AnimateMount';

export default function AppearDisappearAnimations() {
  const [clicked, click] = React.useState(false);

  return (
    <React.Fragment>
      <h1>0. Mount/Unmount Animations</h1>
      <button onClick={() => click(!clicked)}>click</button>
      <AnimateMount show={clicked}>
        <h1>first</h1>
      </AnimateMount>
      <AnimateMount show={!clicked}>
        <h1>second</h1>
      </AnimateMount>
    </React.Fragment>
  );
}
