import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'

function ChatScreen() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(
    [
      {
        name: 'Ellen',
        image: '...',
        message: 'what up'
      },
      {
        name: 'Ellen 2',
        image: 'xxx',
        message: 'what up ?'
      },
      {
        message: 'what up ?'
      }
    ]
  )

  const handleSend = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    setMessages([...messages, { message: input }]);
    setInput('');
  }


  return (
    <div className="chatScreen">
      <p style={{
        textAlign: 'center'
      }}>YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {
        messages.map((message, key) => (

          message.name ?
            (
              <div
                className="chatScreen__message"
                key={key}
              >
                <Avatar
                  className="chatScreen__image"
                  alt={message.name}
                  src={message.image}
                />
                <p className="chatScreen__text">{message.message}</p>
              </div>
            )
            :
            (
              <div
                className="chatScreen__message"
                key={key}
              >
                <p className="chatScreen__textUser">{message.message}</p>
              </div>
            )

        ))
      }
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message.."
          />
          <button
            className="chatScreen__inputButton"
            onClick={(e) => handleSend(e)}
          >Send</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
