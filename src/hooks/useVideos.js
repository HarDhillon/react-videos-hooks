import { useEffect, useState } from 'react';
import youtube from "../apis/youtube"

// creating custom hooks: 
//  If you give me "..." I will give you "..."
// if you give me a "default search" term I will give you "a list of videos, and a way to update the list"

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    search(defaultSearchTerm)
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items)
    }

    return [videos, search];
};

export default useVideos;
