import React from 'react'
import "./Header.css"

// Img
import logo from './logo.png';

// Lib
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";

const Header = ({
  backButton
}) => {

  const history = useHistory();

  return (
    <div className="header">

      {
        backButton ?
          <IconButton
            onClick={() => history.replace(backButton)}
          >
            <ArrowBackIosIcon
              fontSize="large"
              className="header__icon"
            />
          </IconButton>
          :
          <IconButton>
            <PersonIcon
              fontSize="large"
              className="header__icon"
            />
          </IconButton>
      }

      <Link to="/">
        <img
          src={logo}
          alt="Jiarong He"
          style={{
            width: 60,
            objectFit: 'contain'
          }}
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon
            fontSize="large"
            className="header__icon"
          />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
