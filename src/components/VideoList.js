import React from 'react';
import VideoItem from './VideoItem';

// rather than write props you can reference the items inside the props immediately
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    console.log(video)
    return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
  });
  // therefore we dont need to write props.videos
  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;