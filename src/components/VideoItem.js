import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="ui relaxed divided list">
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  )

};

export default VideoItem;