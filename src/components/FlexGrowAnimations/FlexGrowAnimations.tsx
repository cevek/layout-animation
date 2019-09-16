import * as React from 'react';
import AnimateLayoutPositionChange from '../../lib/AnimateLayoutPositionChange/AnimateLayoutPositionChange';
import './style';

export default function FlexGrowAnimations() {
  const [index, setIndex] = React.useState(0);

  return (
    <React.Fragment>
      <h1>1. FlexGrow animations</h1>
      <div className="topButtons">
        <button onClick={() => setIndex(0)}>0</button>
        <button onClick={() => setIndex(1)}>1</button>
        <button onClick={() => setIndex(2)}>2</button>
      </div>
      <div className="colorsContainer">
        <FlexContainer color="pink" index={index === 0 ? 4 : 1} />
        <FlexContainer color="lightGreen" index={index === 1 ? 4 : 1} />
        <FlexContainer color="steelblue" index={index === 2 ? 4 : 1} />
      </div>
    </React.Fragment>
  );
}

function FlexContainer(props: { index: number; color: string }) {
  return (
    <AnimateLayoutPositionChange>
      <div
        className="flexContainer"
        style={{
          backgroundColor: props.color,
          flex: props.index,
        }}
      >
        flex: {props.index}
      </div>
    </AnimateLayoutPositionChange>
  );
}
