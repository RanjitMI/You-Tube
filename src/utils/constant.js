const GOOGLE_API = "AIzaSyDwXi2t-GZq5WHC_WMebb3E3XXnrzk8gss";

export const LIVE_CHAT_COUNT =25

export const YOUTUBE_VIDEOS_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key= " +
  GOOGLE_API;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";



  export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";

export const YOUTUBE_GET_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;