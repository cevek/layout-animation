import * as React from 'react';
import Animate from '../Animate/Animate';
import './style.css';

export default function Container() {
  const [state, setState] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: state ? 'column' : 'row' }}>
      <div
        className={'container ' + (state ? 'active' : '')}
        onClick={() => setState(!state)}
      >
        <div className="row">
          <Animate>
            <div className={`bar`}>plane</div>
          </Animate>
          <Animate>
            <div className={`bar`}>cellar</div>
          </Animate>
        </div>
        <div className="row">
          <Animate>
            <div className={`bar`}>wifi</div>
          </Animate>
          <Animate>
            <div className={`bar`}>bluetooth</div>
          </Animate>
        </div>
        <div
          className="row"
          style={{ opacity: state ? 1 : 0, transition: 'all 0.3s' }}
        >
          <Animate>
            <div className={`bar`}>airdrop</div>
          </Animate>
          <Animate>
            <div className={`bar`}>hotspot</div>
          </Animate>
        </div>
      </div>
    </div>
  );
}
