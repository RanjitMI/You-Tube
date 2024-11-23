import React from 'react'

const VideoCards = ({info}) => {
// console.log(info,'Hello')

    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img alt="thumbnail" src={thumbnails?.medium?.url} className='rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div> 
  )
}

export default VideoCards