import './App.css'
import myImage from './assets/img/myImages.jpg'

function App() {
    return(
        <div className='homePagaClass'>
            <div className='homeImg'>
                <img src={myImage} alt="MyImage"/>
            </div>
            <div className='homeText'>
                <h1>
                   <span style={{ color: '#ffffff' }}> Leonardo</span>
                   <span style={{color: '#00f2ff'}}> Faustino</span>
                </h1>
                <p style={{color: 'white'}}>Sou estudante de Ciências da Computação no Instituto Federal Goiano, com uma paixão por tecnologia que começou desde cedo. Atualmente, concentro meus estudos e projetos na área de Segurança da Informação, com ênfase em hacking ético e testes de intrusão (pentests).<br/><br/>
                Além disso, tenho interesse em áreas como Inteligência Artificial, desenvolvimento de jogos e criação de softwares, buscando sempre expandir meus conhecimentos e habilidades. No entanto, meu foco principal permanece na segurança digital, onde pretendo construir minha carreira e contribuir para a proteção de sistemas e dados.
                </p>
            </div>

        </div>
    )
}

export default App