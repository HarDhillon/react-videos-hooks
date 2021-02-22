import React from 'react';

const VideoList = (props) => {
  // props.videos to access list
  return <div>{props.videos.length}</div>
};

export default VideoList;