import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({
  percent
}) => {
  return (
    <LinearProgress mode="determinate" value={percent} />
  );
}

export default ProgressBar;
