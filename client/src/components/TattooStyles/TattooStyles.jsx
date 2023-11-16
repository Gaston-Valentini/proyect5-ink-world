import style from "./TattooStyles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TattooStyles() {
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:3000/styles");
            setStyles(res.data.styles);
        };

        getData();
    }, []);

    return (
        <div className={style.tattooStyles}>
            <div className={style.tattooStylesTitle}>
                ¿Conoces los estilos de tatuaje?
            </div>
            <div className={style.tattooStylesCards}>
                {styles.map((e) => (
                    <Link
                        key={e.id}
                        to={`styles/${e.name}`}
                        className={style.tattooStylesCardsCard}
                    >
                        <div className={style.tattooStylesCardsCardName}>
                            {e.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
