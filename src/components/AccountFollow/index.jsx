import React from 'react'
import './accountFollow.css'
import { Avatar } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

const AccFollowCard = (props) => {
  return (
    <div className='acc-follow-card'>
      <div className="acc-detail">
       <Avatar src='https://bit.ly/broken-link' />
       <h3>@{props.username}</h3>
      </div>
        <Tooltip label="Follow">
          <i class="fa-solid fa-user-plus follow-icon"></i>
        </Tooltip>
    </div>
  )
}

export default AccFollowCard