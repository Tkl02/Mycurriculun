import './Footer.css'
import github from '../../assets/img/github1.png'
import linkedin from '../../assets/img/linkedin1.png'
import email from '../../assets/img/gmail-logo1.png'
import instagram from '../../assets/img/instagram1.png'

function Footer() {
    return(
        <div className='footerClass'>
            <div className='direitosClass'>
                <p style={{color: 'white'}}>@ 2025 - Leonardo Faustino - All Rights Reserved</p>    
            </div>
            <div className='socialmediaClass'>
                <a href='https://github.com/tkl02'><img src={github} alt=''/></a>
                <a href='https://www.linkedin.com/in/leonardo-faustino-77581633a/'><img src={linkedin} alt=''/></a>
                <a href='mailto:leonardo.faustino.sec@gmail.com'><img src={email} alt=''/></a>
                <a href='https://www.instagram.com/leonardo.faustin0/'><img src={instagram} alt=''/></a>
            </div>
        </div>
    )
}

export default Footer;