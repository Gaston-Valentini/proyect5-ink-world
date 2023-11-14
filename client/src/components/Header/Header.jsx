import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} />
            </div>
        </div>
    );
}
