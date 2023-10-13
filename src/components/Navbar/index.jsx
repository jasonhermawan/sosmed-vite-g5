import React from 'react'
import Logo from '../../assets/LOGO Z.png'
import './navbar.css'
import {AiFillHome, AiOutlineEllipsis} from 'react-icons/ai'
import { Textarea, Avatar, Button } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div id="navbar">
      <div id="menu-container">
        <div id="logo-menu">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-menu">
          <i class="fa-solid fa-house"></i>
          <h3>Home</h3>
        </div>
        <div className="nav-menu">
         <i class="fa-solid fa-bell"></i>
          <h3>Notification</h3>
        </div>
        <div className="nav-menu">
          <i class="fa-solid fa-envelope"></i>
          <h3>Message</h3>
        </div>
        <div className="nav-menu">
          <i class="fa-solid fa-user"></i>
          <h3>Profile</h3>
        </div>
        <Button onClick={onOpen} w={"100%"} colorScheme='blue'>Post</Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"} >
          <ModalOverlay bgColor={"rgba(128, 128, 128, 0.13)"} />
          <ModalContent bgColor={"black"}>
            <ModalHeader color={"white"}>Add Post</ModalHeader>
            <ModalCloseButton color={"white"}/>
            <ModalBody>
              <div className="add-post-form">
                <Avatar src='https://bit.ly/broken-link' />
                <Textarea maxLength={"150"} textColor={"white"} border={'none'} placeholder='What is happening?'/>
              </div>
              <div className="char-count">
                <p>0/150</p>
              </div>
              <hr className='seperator' />
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
                <div className="button-share">
                  <Button colorScheme='blue'>Share</Button>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
      <div id="profile-menu">
        <Avatar src='https://bit.ly/broken-link' />
        <div className="profile-name">
          <h3>Jason H</h3>
          <p>@jasonhermawan</p>
        </div>
        <AiOutlineEllipsis size={32} />
      </div>
    </div>
  )
}

export default Navbar