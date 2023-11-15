import style from "./Login.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { validateField } from "../../validations/validateField";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
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
                const res = await axios.post(
                    "http://localhost:3000/auth/login",
                    data
                );

                if (
                    res.data.message ===
                    "No existe un usuario registrado con ese correo electrónico."
                ) {
                    setError((prevState) => ({
                        ...prevState,
                        email: res.data.message,
                    }));
                } else if (res.data.message === "Contraseña incorrecta.") {
                    setError((prevState) => ({
                        ...prevState,
                        password: res.data.message,
                    }));
                }
                if (res.data.success) {
                    navigate("/profile");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={style.login}>
            <div className={style.loginLogo}>
                <img src={Logo} />
            </div>
            <div className={style.loginForm}>
                <div className={style.loginFormTitle}>
                    Inicia tu cuenta de
                    <br /> INK-WORLD!!
                </div>
                <div className={style.loginFormData}>
                    <div className={style.loginFormDataSection}>
                        <div className={style.loginFormDataSectionTitle}>
                            Email
                        </div>
                        <input
                            className={style.loginFormDataSectionInput}
                            placeholder="Email..."
                            maxLength={50}
                            name="email"
                            type="email"
                            onBlur={onInput}
                        ></input>
                        <span className={style.registerFormDataSectionError}>
                            {error.email}
                        </span>
                    </div>
                    <div className={style.loginFormDataSection}>
                        <div className={style.loginFormDataSectionTitle}>
                            Contraseña
                        </div>
                        <input
                            className={style.loginFormDataSectionInput}
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
                </div>
                <div className={style.loginFormButtons}>
                    <div
                        className={style.loginFormButtonsSubmit}
                        onClick={onSubmit}
                    >
                        Registrarse
                    </div>
                    <div className={style.loginFormButtonsRedirect}>
                        ¿Aún no tienes una cuenta? <Link>Registrate</Link>.
                    </div>
                </div>
            </div>
        </div>
    );
}
