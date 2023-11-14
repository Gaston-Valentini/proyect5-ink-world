import style from "./TattooStyles.module.css";

import { Link } from "react-router-dom";

export default function TattooStyles() {
    return (
        <div className={style.tattooStyles}>
            <div className={style.tattooStylesTitle}>
                ¿Conoces los estilos de tatuaje?
            </div>
            <div className={style.tattooStylesCards}>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
                <Link
                    to={"/traditional"}
                    className={style.tattooStylesCardsCard}
                >
                    <div className={style.tattooStylesCardsCardName}>
                        TRADICIONAL
                    </div>
                </Link>
            </div>
        </div>
    );
}
