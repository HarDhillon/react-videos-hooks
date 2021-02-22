import axios from 'axios';

// client side key (MEANT to be public)
const KEY = AIzaSyBDhDde_vvMJDNTkRFAmhE7WNPifuR06Xs

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});