import style from "./Register.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Logo from "../../assets/images/logo.png";
import { validateField } from "../../validations/validateField";

export default function Register() {
    const navigate = useNavigate();

    const [isTattooArtist, setIsTattooArtist] = useState(false);

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        role: "client",
    });

    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
    });

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

    const onSubmit = async () => {
        const haveErrors = Object.values(error).some((err) => err !== "");
        const canSubmit = Object.values(data).some((value) => value === "");

        if (!haveErrors && !canSubmit) {
            try {
                const role = isTattooArtist ? "tattooArtist" : "client";
                const res = await axios.post(
                    "http://localhost:3000/auth/register",
                    {
                        ...data,
                        role,
                    }
                );
                navigate("/login");
            } catch (error) {
                console.log(error);
                setError((prevState) => ({
                    ...prevState,
                    email: error.response.data.message,
                }));
            }
        }
    };

    return (
        <div className={style.register}>
            <div className={style.registerLogo}>
                <img src={Logo} />
            </div>
            <div className={style.registerForm}>
                <div className={style.registerFormTitle}>
                    Crea tu cuenta de
                    <br /> INK-WORLD!!
                </div>
                <div className={style.registerFormData}>
                    <div className={style.registerFormDataSection}>
                        <div className={style.registerFormDataSectionTitle}>
                            Nombre
                        </div>
                        <input
                            className={style.registerFormDataSectionInput}
                            placeholder="Nombre..."
                            maxLength={20}
                            type="text"
                            name="name"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.name}
                        </span>
                    </div>
                    <div className={style.registerFormDataSection}>
                        <div className={style.registerFormDataSectionTitle}>
                            Apellido
                        </div>
                        <input
                            className={style.registerFormDataSectionInput}
                            placeholder="Apellido..."
                            maxLength={20}
                            type="text"
                            name="surname"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.surname}
                        </span>
                    </div>
                    <div className={style.registerFormDataSection}>
                        <div className={style.registerFormDataSectionTitle}>
                            Correo
                        </div>
                        <input
                            className={style.registerFormDataSectionInput}
                            placeholder="Email..."
                            maxLength={50}
                            type="email"
                            name="email"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.email}
                        </span>
                    </div>
                    <div className={style.registerFormDataSection}>
                        <div className={style.registerFormDataSectionTitle}>
                            Contraseña
                        </div>
                        <input
                            className={style.registerFormDataSectionInput}
                            placeholder="Contraseña..."
                            maxLength={50}
                            type="password"
                            name="password"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.password}
                        </span>
                    </div>
                    <div className={style.registerFormDataSection}>
                        <div className={style.registerFormDataSectionTitle}>
                            Teléfono
                        </div>
                        <input
                            className={style.registerFormDataSectionInput}
                            placeholder="Teléfono..."
                            maxLength={9}
                            type="tel"
                            name="phone"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.phone}
                        </span>
                    </div>
                    <div className={style.registerFormDataCheckbox}>
                        <input
                            type="checkbox"
                            checked={isTattooArtist}
                            onChange={() => setIsTattooArtist((prev) => !prev)}
                        />
                        <span>Quiero registrarme como tatuador</span>
                    </div>
                </div>
                <div className={style.registerFormButtons}>
                    <div
                        className={style.registerFormButtonsSubmit}
                        onClick={onSubmit}
                    >
                        Registrarse
                    </div>
                    <div className={style.registerFormButtonsRedirect}>
                        ¿Ya tienes una cuenta?
                        <Link to={"/login"}> Inicia Sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
