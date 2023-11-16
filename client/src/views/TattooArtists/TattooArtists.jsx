import style from "./TattooArtists.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TattooArtistsCard from "../../components/TattooArtistsCard/TattooArtistsCard";

export default function TattooArtists() {
    const [tattooArtists, setTattooArtists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/user/getTattooArtists");
                setTattooArtists(res.data.tattooArtists);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    return (
        <div className={style.tattooArtists}>
            {tattooArtists.map((tattooArtist) => (
                <TattooArtistsCard
                    key={tattooArtist.id}
                    name={tattooArtist.name}
                    surname={tattooArtist.surname}
                    description={tattooArtist.description}
                    image={tattooArtist.image}
                    tattooStyle={tattooArtist.style}
                />
            ))}
        </div>
    );
}