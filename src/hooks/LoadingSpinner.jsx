import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }}>
    <PuffLoader size={48} color={"#dddddd"} loading={true} />
  </div>
);

export default LoadingSpinner;
