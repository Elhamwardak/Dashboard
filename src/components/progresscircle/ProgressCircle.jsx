import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MyComponent(props) {

  return (
    <div style={{ width: 150, height: 150 }} className='flex flex-col items-center justify-center'>
      <span className='text-center font-semibold mb-2 '>{props.label}</span>
      <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={buildStyles({
          pathColor: `rgb(10, 65, 159)`,
          textColor: 'rgb(10, 65, 159)',
        })}
      />
    </div>
  );
}

export default MyComponent;
