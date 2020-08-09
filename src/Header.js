import React from 'react'
import "./Header.css"

// Img
import logo from './logo.png';

// Lib
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          fontSize="large"
          className="header__icon"
        />
      </IconButton>
      <img
        src={logo}
        alt="Jiarong He"
        style={{
          width: 60,
          objectFit: 'contain'
        }}
      />
      <IconButton>
        <ForumIcon
          fontSize="large"
          className="header__icon"
        />
      </IconButton>
    </div>
  )
}

export default Header
