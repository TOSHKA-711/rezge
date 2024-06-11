import React, { useState } from 'react';
import './style/ChatApp.css'; // Import the CSS file
import senderImg from "../imgs/man avatar.png";
import recImg from "../imgs/women avatar.png";

function ChatApp() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messageCounter, setMessageCounter] = useState(3); // Initial message counter

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
    setMessageCounter(0); // Reset message counter when chat is opened
  };

  const closeChat = (e) => {
    e.preventDefault();
    setChatOpen(false);
  };

  return (
    <div id="live-chat">
      <header className="clearfix" onClick={toggleChat}>
        <a href="#" className="chat-close" onClick={closeChat}>x</a>
        <h4>T0SHKA</h4>
        {isChatOpen && <span className="chat-message-counter">{messageCounter}</span>}
      </header>
      {isChatOpen && (
        <div className="chat">
          <div className="chat-history">
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          <div className='message'>
            <img src={senderImg}></img>
            <p>toooshka</p>
          </div>
          
          </div>
          {/* <p className="chat-feedback">Yazıyor..</p> */}
          <form >
            <fieldset>
              <input type="text" placeholder="type here" autoFocus />
              <input type="hidden" />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatApp;
