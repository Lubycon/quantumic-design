import { useState } from 'react';
import Tooltip from '../../../components/Tooltip';
import { TooltipPosition } from '../../../components/Tooltip/types';
import { positions } from './data';

const TooltipButton = ({ children }: { children: TooltipPosition }) => {
  const [show, setShow] = useState(false);
  return (
    <Tooltip show={show} message="툴팁입니다." position={children}>
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </button>
    </Tooltip>
  );
};

export const Preview = () => {
  return (
    <div style={{ paddingTop: 40 }}>
      <Tooltip show={true} message="툴팁입니다.">
        <button>버튼입니다</button>
      </Tooltip>
    </div>
  );
};

export const Positions = () => {
  return (
    <ul style={{ padding: 100, margin: 0 }}>
      {positions.map((p) => (
        <li key={p} style={{ listStyle: 'none', marginBottom: 60 }}>
          <TooltipButton>{p}</TooltipButton>
        </li>
      ))}
    </ul>
  );
};

export const AbsolutePositionTest = () => {
  return (
    <div style={{ position: 'absolute', top: 500, left: 500 }}>
      <div style={{ position: 'relative' }}>
        <Tooltip show={true} message="툴팁입니다.">
          <button>버튼입니다</button>
        </Tooltip>
      </div>
    </div>
  );
};
