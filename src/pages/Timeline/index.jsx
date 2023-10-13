import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './timeline.css'
import Layout from '../../Layout'
import { Textarea, Avatar, Button } from '@chakra-ui/react'
import PostCard from '../../components/PostCard'
import axios from 'axios'
import { API_URL } from '../../helper'
import { Tooltip } from '@chakra-ui/react'

const Timeline = () => {
  const [caption, setCaption] = useState("")
  const [post, setPost] = useState([])
  const [date, setDate] = useState("")
  const [charCount, setCharCount] = useState(caption.length)

  const currentDate = new Date();

  const onShare = () => {
    console.log(caption);
    axios.post(`${API_URL}/post`, {
      caption,
      date
    })
    .then((res)=>{
      getPost()
      setCaption("")
      setCharCount(0)
      setDate("")
    }).catch((err)=>{
      console.log(err);
    })
  }

  const getPost = () => {
    axios.get(`${API_URL}/post?_sort=date&_order=desc`)
    .then((res)=>{
      setPost(res.data)
      setDate(`${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getPost()
  },[])

  const printContent = () => {
    return post.map((val,idx)=>{
      return (
        <PostCard username="@jasonhermawan" content={val.caption} date={val.date}/>
      )
    })
  }

  return (
    <Layout>
      <div id="timeline">
        <h1>Home</h1>
        <div id="head">
          <div className="add-post-form">
            <Avatar src='https://bit.ly/broken-link' />
            <Textarea maxLength={"150"} textColor={"white"} border={'none'} placeholder='What is happening?' onChange={(e)=>{setCaption(e.target.value); setCharCount(e.target.value.length)}} value={caption}/>
          </div>
          <div className="char-count">
            <p>{charCount}/150</p>
          </div>
          <div className="add-post-button">
            <div className="icon-container">
                <label htmlFor="input-image">
                  <Tooltip label="Upload Image">
                    <i class="fa-regular fa-image" style={{cursor:"pointer"}}></i>
                  </Tooltip>
                </label>
                <input type="file" accept='image/*' id='input-image' hidden/>
              <Tooltip label="Emoji">
                <i class="fa-regular fa-face-smile" style={{cursor:"pointer"}}></i>
              </Tooltip>
            </div>
            <Button colorScheme='blue' onClick={onShare}>Share</Button>
          </div>
        </div>
        <hr className='seperator' />
        <h1>Posts</h1>
        {printContent()}
      </div>
    </Layout>
  )
}

export default Timeline