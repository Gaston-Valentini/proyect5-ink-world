import style from "./GalleryCard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GalleryCard({ tattooArtistId, image, tattooStyle }) {
    const [tattooArtist, setTattooArtist] = useState({});
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/user/getUser/${tattooArtistId}`);
                setTattooArtist(res);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    const setData = () => {
        if (tattooArtist.data && tattooArtist.data.userFound) {
            setName(tattooArtist.data.userFound.name);
            setSurname(tattooArtist.data.userFound.surname);
        }
    };

    useEffect(() => {
        setData();
    }, [tattooArtist]);

    return (
        <div className={style.galleryCard}>
            <div className={style.galleryCardImage}>
                <img src={image} alt="Tatuaje" />
            </div>
            <div className={style.galleryCardData}>
                <div className={style.galleryCardDataTattooArtist}>
                    {name} {surname}
                </div>
                <div className={style.galleryCardDataStyle}>{tattooStyle}</div>
            </div>
        </div>
    );
}
