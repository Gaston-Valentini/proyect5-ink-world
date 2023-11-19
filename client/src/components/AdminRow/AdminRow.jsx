import styleCSS from "./AdminRow.module.css";

import axios from "axios";
import { useState } from "react";

export default function AdminRow({ user }) {
    const {
        id,
        name,
        surname,
        email,
        password,
        phone,
        style,
        role,
        image,
        createdAt,
        updatedAt,
        description,
    } = user;

    const [userData, setUserData] = useState({
        id,
        name,
        surname,
        email,
        password,
        phone,
        style,
        role,
        image,
        createdAt,
        updatedAt,
        description,
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
            <input name="id" value={userData.id} onChange={onInput} />
            <input name="name" value={userData.name} onChange={onInput} />
            <input name="surname" value={userData.surname} onChange={onInput} />
            <input name="email" value={userData.email} onChange={onInput} />
            <input
                name="password"
                value={userData.password}
                onChange={onInput}
            />
            <input name="phone" value={userData.phone} onChange={onInput} />
            <input name="style" value={userData.style} onChange={onInput} />
            <input name="role" value={userData.role} onChange={onInput} />
            <input name="image" value={userData.image} onChange={onInput} />
            <input
                name="createdAt"
                value={userData.createdAt}
                onChange={onInput}
            />
            <input
                name="updatedAt"
                value={userData.updatedAt}
                onChange={onInput}
            />
            <input
                name="description"
                value={userData.description}
                onChange={onInput}
            />
            <div className={styleCSS.rowUpdate} onClick={onSave}>
                Guardar
            </div>
            <div className={styleCSS.rowDelete} onClick={onDelete}>
                Eliminar
            </div>
        </div>
    );
}
