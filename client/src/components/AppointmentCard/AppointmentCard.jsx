import { useEffect, useState } from "react";
import axios from "axios";
import style from "./AppointmentCard.module.css";
import { convertDate } from "../../functions/convertDate";

export default function AppointmentCard(props) {
    const [tattooArtist, setTattooArtist] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `http://localhost:3000/user/getUser/${props.data.tattooArtistId}`
            );
            setTattooArtist(res.data.userFound);
        };
        getData();
    }, []);

    return (
        <div className={style.card}>
            <div className={style.cardData}>
                <div className={style.cardDataText}>{props.data.name}</div>
                <div className={style.cardDataText}>
                    {props.data.description}
                </div>
                <div className={style.cardDataText}>
                    {convertDate(props.data.date)}
                </div>
                <div className={style.cardDataText}>{props.data.type}</div>
                <div className={style.cardDataText}>{props.data.style}</div>
                <div className={style.cardDataText}>
                    Tatuador: {tattooArtist.name}
                </div>
            </div>
            <div className={style.cardDataCancel}>Cancelar</div>
        </div>
    );
}
