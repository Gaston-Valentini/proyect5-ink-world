import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./AppointmentCard.module.css";
import { convertDate } from "../../functions/convertDate";

export default function AppointmentCard(props) {
    const navigate = useNavigate();
    const [client, seClient] = useState("");
    const [tattooArtist, setTattooArtist] = useState("");

    const onCancel = async () => {
        const res = await axios.delete(
            `http://localhost:3000/appointment/cancelAppointment/${props.data.id}`
        );
        navigate("");
    };

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `http://localhost:3000/user/getUser/${props.data.tattooArtistId}`
            );
            setTattooArtist(res.data.userFound);
            const res2 = await axios.get(
                `http://localhost:3000/user/getUser/${props.data.clientId}`
            );
            seClient(res2.data.userFound);
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
                    Tatuador: {tattooArtist.name} {tattooArtist.surname}
                </div>
                <div className={style.cardDataText}>
                    Cliente: {client.name} {client.surname}
                </div>
            </div>
            <div className={style.cardDataCancel} onClick={onCancel}>
                Cancelar
            </div>
        </div>
    );
}
