import style from "./Admin.module.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { isAuthenticated } from "../../functions/isAuthenticated";
import AdminRow from "../../components/AdminRow/AdminRow";

export default function Admin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const token = isAuthenticated()
        ? jwtDecode(localStorage.getItem("token"))
        : null;

    useEffect(() => {
        const fetchData = async () => {
            if (!isAuthenticated() || token.role !== "admin") {
                navigate("/login");
            } else {
                const res = await axios.get(
                    "http://localhost:3000/user/getAllUsers"
                );
                setUsers(res.data.users);
            }
        };

        fetchData();
    }, [navigate, token]);

    return (
        <div className={style.admin}>
            <div className={style.adminColumns}>
                <div className={style.adminColumnsName}>id</div>
                <div className={style.adminColumnsName}>name</div>
                <div className={style.adminColumnsName}>surname</div>
                <div className={style.adminColumnsName}>email</div>
                <div className={style.adminColumnsName}>password</div>
                <div className={style.adminColumnsName}>phone</div>
                <div className={style.adminColumnsName}>style</div>
                <div className={style.adminColumnsName}>role</div>
                <div className={style.adminColumnsName}>image</div>
                <div className={style.adminColumnsName}>createdAt</div>
                <div className={style.adminColumnsName}>updatedAt</div>
                <div className={style.adminColumnsName}>description</div>
            </div>
            <div className={style.adminRows}>
                {users.map((e) => (
                    <AdminRow key={e.id} user={e} />
                ))}
            </div>
        </div>
    );
}
