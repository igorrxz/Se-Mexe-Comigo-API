import React, { useState } from 'react';
import './UserChat.css';
import userImage from '../../../assets/foto-usuario.png';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const [userFotos, setUserFotos] = useState({
    user: userImage,
  });

  const handleFileChange = (event, name) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserFotos((prevState) => ({
          ...prevState,
          [name]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (name) => {
    document.getElementById(`fileInput-${name}`).click();
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message-wrapper">
            <img
              id="imagem"
              src={userFotos.user}
              alt="Foto"
              className="user-image"
              onClick={() => handleImageClick('user')}
            />
            <div className={`message ${message.sender}`}>
              {message.text}
            </div>
            <input
              type="file"
              id="fileInput-user"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'user')}
            />
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mensagem"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;

