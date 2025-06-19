import { useState, type ChangeEvent } from 'react';
import './contactPage.css';
import emailImage from '../../assets/img/gmail-logo1.png';

function ContactPage() {
  const [inputText, setInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');
  const [emailText, setEmailText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 100) {
      setInputText(newValue);
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 2000) {
      setTextareaText(newValue);
    }
  };
  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 120) {
      setEmailText(newValue);
    }
  };

  return (
    <div className='bodyContact'>
      <div className='imageEmail'>
        <img src={emailImage} alt='Email' className='imageEmail' />
      </div>

      <div className='boxEmail'>
        <p>Nome Sobrenome</p>
        <input type="text" value={inputText} onChange={handleInputChange} />

        <p>Email</p>
        <input type="email" value={emailText} onChange={handleEmailChange} />

        <p>Mensagem</p>
        <textarea
          value={textareaText}
          onChange={handleTextareaChange}
          className='custom-textarea'
          placeholder='Digite sua mensagem aqui...'
        />
        <div className='containerCounterChar'>
          <p style={{color: '#393d3f', fontSize:14}}>
            Atual:{textareaText.length} Max:5000.
          </p>
        </div>
        <div className='buttomContainer'>
        <button className='enviarButton'>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
