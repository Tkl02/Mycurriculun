import './Footer.css'
import github from '../../assets/img/github1.png'
import linkedin from '../../assets/img/linkedin1.png'
import email from '../../assets/img/gmail-logo1.png'
import instagram from '../../assets/img/instagram1.png'

function Footer() {
    return(
        <div className='footerClass'>
            <div className='direitosClass'>
                <p>@ 2025 - Leonardo Faustino - All Rights Reserved</p>    
            </div>
            <div className='socialmediaClass'>
                <img src={github} alt=''/>
                <img src={linkedin} alt=''/>
                <img src={email} alt=''/>
                <img src={instagram} alt=''/>
            </div>
        </div>
    )
}

export default Footer;