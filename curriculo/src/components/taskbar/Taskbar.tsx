import './Taskbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import iconBrasil from '../../assets/img/iconBrasil.png';
import { useEffect, useRef } from 'react';
//import iconUsa from '../../assets/img/iconUsa.png';

function Taskbar() {
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const nav = navRef.current;
        if (nav) {
            // Faz o scroll horizontal iniciar no centro
            nav.scrollLeft = (nav.scrollWidth - nav.clientWidth) / 2;
        }
    }, []);

    return (
        <div className="taskbarClass">
            <NavLink to='/Login' style={{margin:'0'}}><div className="iconlClass">
                <img src={logo} alt="" />
            </div></NavLink>
            <div className="linksClass">
                <nav ref={navRef}>
                    <NavLink to="/Contact" end className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
                    <NavLink to="/Certification" end className={({ isActive }) => (isActive ? 'active' : '')}>Certificados</NavLink>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to="/Projects" end className={({ isActive }) => (isActive ? 'active' : '')}>Projetos</NavLink>
                    <NavLink to="/About" end className={({ isActive }) => (isActive ? 'active' : '')}>Sobre Mim</NavLink>
                </nav>
            </div>
                <img src={iconBrasil} alt='' id='tradImage'/>
                {/* <img src={iconUsa} alt='' /> */}
        </div>
    )

}

export default Taskbar