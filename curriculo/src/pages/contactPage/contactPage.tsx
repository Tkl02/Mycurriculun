import { useState, type ChangeEvent } from 'react';
import './contactPage.css';
import emailImage from '../../assets/img/gmail-logo1.png';
import emailjs from '@emailjs/browser'

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

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(inputText === '' || textareaText === '' || emailText ===''){
      alert("Todos os campos são obrigatorios!!")
      return
    }

    const emailParams = {
      name: inputText,
      email: emailText,
      message: textareaText,
    }

    emailjs.send("service_4cbphys", "template_u9ad9ar", emailParams, "lJ43v-24Zd-QcU09b")
    .then(() => {
      console.log("email enviado com sucesso")
    })

  }

  return (
    <form className='bodyContact' onSubmit={handleFormSubmit}>
  <div className='imageEmail'>
    <img src={emailImage} alt='Email' className='imageEmail' />
  </div>

  <div className='boxEmail'>
    <label htmlFor='nameInput'>Nome Sobrenome</label>
    <input
      id='nameInput'
      type='text'
      value={inputText}
      onChange={handleInputChange}
    />

    <label htmlFor='emailInput'>Email</label>
    <input
      id='emailInput'
      type='email'
      value={emailText}
      onChange={handleEmailChange}
    />

    <label htmlFor='messageTextarea'>Mensagem</label>
    <textarea
      id='messageTextarea'
      value={textareaText}
      onChange={handleTextareaChange}
      className='custom-textarea'
      placeholder='Digite sua mensagem aqui...'
      maxLength={2000}
    />

    <div className='containerCounterChar'>
      <p style={{ color: '#393d3f', fontSize: 14 }}>
        Atual:{textareaText.length} Max:2000.
      </p>
    </div>

    <div className='buttomContainer'>
      <button type='submit' className='enviarButton'>Enviar</button>
    </div>
  </div>
</form>
  );
}

export default ContactPage;
