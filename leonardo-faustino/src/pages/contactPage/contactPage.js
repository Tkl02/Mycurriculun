import './contactPage.css'
import emailImage from '../../assets/img/gmail-logo1.png'

function contactPage (){
    return (
        <div className='bodyContact'>
            <div className='imageEmail'>
                <img src={emailImage} alt='' />
            </div>

            <div className='boxEmail'>
            <p>Nome Completo</p>
            <input></input>

            <p>Email</p>
            <input></input>

            <p>Menssagem</p>
            <input></input>


            </div>
        </div>
    )
}

export default contactPage;