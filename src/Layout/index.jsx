import React from 'react'
import Navbar from '../components/Navbar'
import './layout.css'
import Rightbar from '../components/Rightbar'

const Layout = (props) => {
  return (
    <div id="layout">
      <Navbar />
      <div id="content">
        {props.children}
      </div>
      <Rightbar />
    </div>
  )
}

export default Layout