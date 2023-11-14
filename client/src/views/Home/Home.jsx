import style from "./Home.module.css";

import Header from "../../components/Header/Header.jsx";
import Welcome from "../../components/Welcome/Welcome.jsx";
import BannerOne from "../../components/BannerOne/BannerOne.jsx";
import TattooStyles from "../../components/TattooStyles/TattooStyles.jsx";

export default function Home() {
    return (
        <div className={style.home}>
            <Header />
            <Welcome />
            <BannerOne />
            <TattooStyles />
        </div>
    );
}
