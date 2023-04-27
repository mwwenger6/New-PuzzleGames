import React from 'react';
import './Disc.css';

export const Disc = ({ size }) => {

  return (
    <div
      className={`disc disc-${size}`}>
    </div>
  );
};

export default Disc;
