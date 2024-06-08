// LoadingSpinner.jsx
import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "black", }}>
    <PuffLoader size={48} color={"#dddddd"} loading={true} />
  </div>
);

export default LoadingSpinner;
