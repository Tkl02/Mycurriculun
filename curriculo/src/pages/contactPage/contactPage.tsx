import { useState, type ChangeEvent } from 'react';
import './contactPage.css';
import emailImage from '../../assets/img/gmail-logo1.png';

function ContactPage() {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const wordCount = inputText.trim().split(/\s+/).length;

    if (wordCount <= 5000) {
      setText(inputText);
    }
  };

  return (
    <div className='bodyContact'>
      <div className='imageEmail'>
        <img src={emailImage} alt='Email' />
      </div>

      <div className='boxEmail'>
        <p>Nome Completo</p>
        <input type="text" />

        <p>Email</p>
        <input type="email" />

        <p>Mensagem</p>
        <textarea
          value={text}
          onChange={handleChange}
          className='custom-textarea'
          placeholder='Digite sua mensagem aqui...'
        />
        <div className='buttomContainer'>
        <button className='enviarButton'>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
