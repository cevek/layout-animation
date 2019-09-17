import * as React from 'react';
import AnimateMount, { AnimateUnmount } from '../../lib/AnimateMount/AnimateMount';

export default function AppearDisappearAnimations() {
  const [clicked, click] = React.useState(false);
  const [unmountClicked, unmountClick] = React.useState(false);

  return (
    <React.Fragment>
      <h1>Mount Animations</h1>
      <button onClick={() => click(!clicked)}>click</button>
      {clicked ? (
        <AnimateMount key={1}>
          <h1>first</h1>
        </AnimateMount>
      ) : (
        <AnimateMount key={2}>
          <h1>second</h1>
        </AnimateMount>
      )}
      <h1>Unmount Animations</h1>
      <button onClick={() => unmountClick(!unmountClicked)}>click</button>
      <AnimateUnmount show={!unmountClicked}>
        <h1>first unmoumt</h1>
      </AnimateUnmount>
      <AnimateUnmount show={unmountClicked}>
        <h1>second unmount</h1>
      </AnimateUnmount>
    </React.Fragment>
  );
}
