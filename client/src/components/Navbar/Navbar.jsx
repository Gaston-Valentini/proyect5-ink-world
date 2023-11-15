import style from "./Navbar.module.css";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const toggle = useRef();

    const onMenu = () => {
        setIsNavbarVisible(!isNavbarVisible);
        toggle.current.classList.toggle(style.toggle);
    };

    return (
        <div className={style.navbar}>
            <div className={style.navbarLogo}>INK-WORLD</div>
            <div className={style.navbarButtons}>
                <div className={style.navbarButtonsLinks} ref={toggle}>
                    <Link to={""}>Inicio</Link>
                    <Link to={"gallery"}>Galería de Trabajos</Link>
                    <Link to={"advices"}>Consejos y Cuidados</Link>
                    <Link to={"tattoo-artists"}>Tatuadores</Link>
                    <Link to={"make-appointment"}>Pedir Cita</Link>
                    <Link to={"contact"}>Contacto</Link>
                </div>
                <div className={style.navbarButtonsMenus}>
                    <Link to={"profile"}>
                        <CgProfile
                            className={style.navbarButtonsMenusProfile}
                        />
                    </Link>
                    <RxHamburgerMenu
                        className={style.navbarButtonsMenusMenu}
                        onClick={onMenu}
                    />
                </div>
            </div>
        </div>
    );
}
