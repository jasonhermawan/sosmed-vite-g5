import React from 'react'
import './postcard.css'
import { Avatar, Tooltip } from '@chakra-ui/react'


const PostCard = (props) => {
  return (
    <div className='post-card'>
      <div className="account-detail">
        <Avatar src='https://bit.ly/broken-link' />
        <h3 style={{cursor:"pointer"}}>{props.username}</h3>
        <p className='post-date'>{props.date}</p>
      </div>
      <div className="post-content">
        <p>{props.content}</p>
      </div>
      <div className="icon-container">
        <Tooltip label="Like">
          <i class="fa-regular fa-heart" style={{cursor:"pointer"}}></i>
        </Tooltip>
        <Tooltip label="Comment">
          <i class="fa-regular fa-comment" style={{cursor:"pointer"}}></i>
        </Tooltip>
        <Tooltip label="Share">
          <i class="fa-solid fa-arrow-up-right-from-square" style={{cursor:"pointer"}}></i>
        </Tooltip>
      </div>
    </div>
  )
}

export default PostCard