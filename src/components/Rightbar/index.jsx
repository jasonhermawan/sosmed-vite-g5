import React, { useEffect, useState } from 'react'
import './rightbar.css'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import AccFollowCard from '../AccountFollow'
import axios from 'axios'
import { API_URL } from '../../helper'

const Rightbar = () => {
  const [account, setAccount] = useState([])

  const getAccount = () => {
    axios.get(`${API_URL}/account`)
    .then((res)=>{
      setAccount(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getAccount()
    console.log(account);
  },[])

  const printCard = () => {
    return account.map((val,idx)=>{
      return <AccFollowCard username={val.username} />
    })
  }

  return (
    <div id='rightbar'>
      <div className="input">
        <input type="text" placeholder='Search' className='search-bar'/>
      </div>
      <div className="to-follow">
        <h3>Account to Follow</h3>
        {printCard()}
      </div>
    </div>
  )
}

export default Rightbar