import style from "./MakeAppointment.module.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MakeAppointment() {
    const navigate = useNavigate();
    const [tattooArtists, setTattooArtists] = useState([]);
    const [tattooStyles, setTattooStyles] = useState([]);
    const [fields, setFields] = useState({
        tattooArtist: "",
        name: "",
        description: "",
        date: "",
        type: "",
        style: "",
    });

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                "http://localhost:3000/user/getTattooArtists"
            );
            const res2 = await axios.get("http://localhost:3000/styles");
            setTattooArtists(res.data.tattooArtists);
            setTattooStyles(res2.data.styles);
        };

        getData();
    }, []);

    const onInput = (e) => {
        setFields((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async () => {
        const canSubmit = Object.values(fields).some((value) => value === "");

        if (!canSubmit) {
            try {
                axios.post(
                    "http://localhost:3000/appointment/makeAppointment",
                    fields
                );
                navigate("/profile");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={style.makeAppointment}>
            <div className={style.title}>Agenda una cita</div>
            <div className={style.form}>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>
                        Selecciona tu tauador
                    </div>
                    <select
                        className={style.formSectionInput}
                        name={"tattooArtist"}
                        onBlur={onInput}
                    >
                        <option hidden>Selecciona un tatuador</option>
                        {tattooArtists.map((e) => (
                            <option key={e.id}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>
                        ¿Como llamarás a tu tatuaje?
                    </div>
                    <input
                        className={style.formSectionInput}
                        name="name"
                        onBlur={onInput}
                    />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>
                        Danos una breve descripción
                    </div>
                    <textarea
                        className={style.formSectionInput}
                        name="description"
                        onBlur={onInput}
                    />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>
                        Selecciona una fecha
                    </div>
                    <input
                        type={"date"}
                        className={style.formSectionInput}
                        name="date"
                        onBlur={onInput}
                    />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>Trabajo</div>
                    <select
                        className={style.formSectionInput}
                        name="type"
                        onBlur={onInput}
                    >
                        <option hidden>Seleciona un trabajo</option>
                        <option>Tatuaje</option>
                        <option>Piercing</option>
                        <option>Eliminación láser</option>
                    </select>
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>Estilo</div>
                    <select
                        className={style.formSectionInput}
                        name={"style"}
                        onBlur={onInput}
                    >
                        <option hidden>Selecciona un estilo</option>
                        {tattooStyles.map((e) => (
                            <option key={e.id}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className={style.formSubmit} onClick={onSubmit}>
                    Pedir Cita
                </div>
            </div>
        </div>
    );
}
