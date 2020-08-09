import React from 'react'
import "./Header.css"

// Img
import logo from './logo.png';

// Lib
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
  return (
    <div className="header">
      <PersonIcon />
      <img 
        src={logo}
        alt="logo"
        style={{
          width: 60
        }}
      />
      <ForumIcon />
    </div>
  )
}

export default Header
