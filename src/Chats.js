import React from 'react'

import Chat from './Chat';

function Chats(props) {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="10 yeats up"
        timestamp="41 seconds ago"
        profilePic=".."
      />
      <Chat
        name="Mark 2"
        message="20 yeats up"
        timestamp="42 seconds ago"
        profilePic=".."
      />
      <Chat
        name="Mark 3"
        message="30 yeats up"
        timestamp="43 seconds ago"
        profilePic=".."
      />
      <Chat
        name="Mark 4"
        message="40 yeats up"
        timestamp="44 seconds ago"
        profilePic=".."
      />
    </div>
  )
}


export default Chats

