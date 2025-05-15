import logo from '../../assets/img/logo.png';
import iconBrasil from '../../assets/img/iconBrasil.png';
import iconUsa from '../../assets/img/iconUsa.png';

function Taskbar(){
    return (
        <div className="taskbarClass" id="taskbarId">
            <div className="iconlClass" id="iconlId">
              <img src={logo} alt=""/>
            </div>
            <div className="linksClass" id="linksId">
                <h2>Contato</h2>
                <h2>Certificados</h2>
                <h2>Home</h2>
                <h2>Projetos</h2>
                <h2>Sobre Mim</h2>
            </div>
            <div className="tranducaoClass" id="traducaoId">
                <img src={iconBrasil} alt=''/>
                <img src={iconUsa} alt=''/>
            </div>
        </div>
    )

}

export default Taskbar