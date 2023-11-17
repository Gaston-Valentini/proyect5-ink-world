import style from "./Profile.module.css";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { convertDate } from "../../functions/convertDate";

export default function Profile() {
    const [user, setUser] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const token = jwtDecode(localStorage.getItem("token"));
            const res = await axios.get(
                `http://localhost:3000/user/getUser/${token.id}`
            );
            setUser(res.data.userFound);
        };

        getData();
    }, []);

    return (
        <div className={style.profile}>
            <div className={style.profileTitle}>
                Bienvenido a tu área personal!!
            </div>
            <div className={style.profileData}>
                <div className={style.profileDataActual}>
                    <div className={style.profileDataActualImage}>
                        <img src={user.image} />
                    </div>
                    <div className={style.profileDataActualName}>
                        {user.name} {user.surname}
                    </div>
                    <div className={style.profileDataActualEmail}>
                        {user.email}
                    </div>
                    <div className={style.profileDataActualPhone}>
                        {user.phone}
                    </div>
                    <div className={style.profileDataActualRole}>
                        {user.role}
                    </div>
                    <div className={style.profileDataActualStyle}>
                        {user.style}
                    </div>
                    <div className={style.profileDataActualDescription}>
                        {user.description}
                    </div>
                    <div className={style.profileDataActualCreated}>
                        Creó su cuenta: {convertDate(user.createdAt)}
                    </div>
                    <div className={style.profileDataActualUpdated}>
                        Ultima actialización: {convertDate(user.updatedAt)}
                    </div>
                </div>
                <div className={style.profileDataForm}>
                    <div className={style.profileDataRormTitle}>
                        Actualiza tus datos del perfil
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Nombre
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Nombre..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Apellido
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Apellido..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Email
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Nuevo email..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Contraseña
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Nueva contraseña..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Teléfono
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Teléfono..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Descripción
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Un breve resumen..."
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Foto de perfil
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="URL de tu foto de perfil"
                        />
                    </div>
                    <div className={style.profileDataFormSubmit}>Guardar</div>
                </div>
                <div className={style.profileDataAppointments}>
                    <div className={style.profileDataAppointmentsTitle}>
                        Tus citas
                    </div>
                    <div className={style.profileDataAppointmentsList}></div>
                </div>
            </div>
        </div>
    );
}
