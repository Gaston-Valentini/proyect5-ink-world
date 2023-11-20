import style from "./Profile.module.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { convertDate } from "../../functions/convertDate";
import { validateField } from "../../validations/validateField";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { isAuthenticated } from "../../functions/isAuthenticated";

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [data, setData] = useState({});
    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
    });

    const token = isAuthenticated()
        ? jwtDecode(localStorage.getItem("token"))
        : null;

    useEffect(() => {
        const fetchData = async () => {
            if (!isAuthenticated()) {
                navigate("/login");
            } else {
                const res = await axios.get(
                    `http://localhost:3000/user/getUser/${token.id}`
                );
                setUser(res.data.userFound);

                if (token.role === "client") {
                    const res2 = await axios.get(
                        `http://localhost:3000/appointment/getMyAppointmentsClient/${token.id}`
                    );
                    setAppointments(res2.data.appointments);
                } else {
                    const res2 = await axios.get(
                        `http://localhost:3000/appointment/getMyAppointmentsTattooArtist/${token.id}`
                    );
                    setAppointments(res2.data.appointments);
                }
            }
        };

        fetchData();
    }, []);

    const onLogout = () => {
        localStorage.clear();
        navigate("login");
    };

    const onInput = (e) => {
        const { name, value } = e.target;

        const isValid = validateField(name, value);

        setData((estadoPrevio) => ({
            ...estadoPrevio,
            [name]: value,
        }));

        setError((errorPrevio) => ({
            ...errorPrevio,
            [name]: isValid === true ? "" : isValid,
        }));
    };

    const onSave = async () => {
        const haveErrors = Object.values(error).some((err) => err !== "");

        if (!haveErrors) {
            try {
                const res = await axios.post(
                    `http://localhost:3000/user/updateProfile/${token.id}`,
                    data
                );
                navigate("/");
            } catch (error) {
                console.log(error);
                setError((prevState) => ({
                    ...prevState,
                    email: error.response.data.message,
                }));
            }
        }
    };

    const onAdmin = () => {
        navigate("/admin");
    };

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
                    <div
                        className={style.profileDataActualLogout}
                        onClick={onLogout}
                    >
                        Cerrar Sesión
                    </div>
                    {token && token.role === "admin" && (
                        <div
                            className={style.profileDataActualLogout}
                            onClick={onAdmin}
                        >
                            Panel de admin
                        </div>
                    )}
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
                            maxLength={20}
                            type="text"
                            name="name"
                            onBlur={onInput}
                        />
                        <span className={style.profileDataFormSectionError}>
                            {error.name}
                        </span>
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Apellido
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Apellido..."
                            maxLength={20}
                            type="text"
                            name="surname"
                            onBlur={onInput}
                        />
                        <span className={style.profileDataFormSectionError}>
                            {error.surname}
                        </span>
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Email
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Nuevo email..."
                            maxLength={50}
                            type="email"
                            name="email"
                            onBlur={onInput}
                        />
                        <span className={style.profileDataFormSectionError}>
                            {error.email}
                        </span>
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Contraseña
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Nueva contraseña..."
                            maxLength={20}
                            type="password"
                            name="password"
                            onBlur={onInput}
                        />
                        <span className={style.profileDataFormSectionError}>
                            {error.password}
                        </span>
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Teléfono
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Teléfono..."
                            maxLength={9}
                            type="text"
                            name="phone"
                            onBlur={onInput}
                        />
                        <span className={style.profileDataFormSectionError}>
                            {error.phone}
                        </span>
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Descripción
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="Un breve resumen..."
                            maxLength={500}
                            type="text"
                            name="description"
                            onBlur={onInput}
                        />
                    </div>
                    <div className={style.profileDataFormSection}>
                        <div className={style.profileDataFormSectionTitle}>
                            Foto de perfil
                        </div>
                        <input
                            className={style.profileDataFormSectionInput}
                            placeholder="URL de tu foto de perfil"
                            maxLength={500}
                            type="text"
                            name="image"
                            onBlur={onInput}
                        />
                    </div>
                    <div
                        className={style.profileDataFormSubmit}
                        onClick={onSave}
                    >
                        Guardar
                    </div>
                </div>
                <div className={style.profileDataAppointments}>
                    <div className={style.profileDataAppointmentsTitle}>
                        Tus citas
                    </div>
                    <div className={style.profileDataAppointmentsList}>
                        {appointments.map((e) => (
                            <AppointmentCard key={e.id} data={e} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
