import './Taskbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import iconBrasil from '../../assets/img/iconBrasil.png';
import iconUsa from '../../assets/img/iconUsa.png';


function Taskbar(){
    return (
        <div className="taskbarClass">
            <div className="iconlClass">
              <img src={logo} alt=""/>
            </div>
            <div className="linksClass">
                <nav>
                    <NavLink to="/Contact" end className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
                    <NavLink to="/Certification" end className={({ isActive }) => (isActive ? 'active' : '')}>Certificados</NavLink>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to="/Projects" end className={({ isActive }) => (isActive ? 'active' : '')}>Projetos</NavLink>
                    <NavLink to="/About" end className={({ isActive }) => (isActive ? 'active' : '')}>Sobre Mim</NavLink>
                </nav>
            </div>
            <div className="tranducaoClass">
                <img src={iconBrasil} alt=''/>
                <img src={iconUsa} alt=''/>
            </div>
        </div>
    )

}

export default Taskbar