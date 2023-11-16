import style from "./TattooStyle.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TattooStyle() {
    const [styleName, setStyleName] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:3000/styles/${name}`);
            setStyleName(res.data.style);
        };
        getData();
    }, []);

    return (
        <div className={style.tattooStyle}>
            <div className={style.container}>
                <div className={style.containerTitle}>{styleName.name}</div>
                <div className={style.containerText}>
                    <div className={style.containerImage}>
                        <img src={styleName.image} />
                    </div>
                    {styleName.text}
                </div>
            </div>
        </div>
    );
}
