import styleCSS from "./AdminRow.module.css";

import axios from "axios";
import { useState } from "react";

export default function AdminRow({ user }) {
    const { name, surname, email, phone, role } = user;

    const [userData, setUserData] = useState({
        name,
        surname,
        email,
        phone,
        role,
    });

    const onInput = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSave = async () => {
        const res = await axios.post(
            `http://localhost:3000/user/updateProfile/${id}`,
            userData
        );
    };

    const onDelete = async () => {
        const res = await axios.delete(
            `http://localhost:3000/user/deleteUser/${id}`
        );
        console.log(res);
    };

    return (
        <div className={styleCSS.row}>
            <input name="name" value={userData.name} onChange={onInput} />
            <input name="surname" value={userData.surname} onChange={onInput} />
            <input name="email" value={userData.email} onChange={onInput} />
            <input name="phone" value={userData.phone} onChange={onInput} />
            <input name="role" value={userData.role} onChange={onInput} />
            <div className={styleCSS.rowUpdate} onClick={onSave}>
                Guardar
            </div>
            <div className={styleCSS.rowDelete} onClick={onDelete}>
                Eliminar
            </div>
        </div>
    );
}
