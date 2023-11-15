import style from "./Gallery.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "../../components/GalleryCard/GalleryCard";

export default function Gallery() {
    const [gallery, setGallery] = useState([]);

    const [tattoos, setTattoos] = useState([]);
    const [piercings, setPiercings] = useState([]);
    const [lasers, setLasers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/gallery")
            .then((res) => {
                setGallery(res.data.gallery);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const updatedTattoos = [];
        const updatedPiercings = [];
        const updatedLasers = [];

        gallery.forEach((e) => {
            switch (e.style) {
                case "piercing":
                    updatedPiercings.push(e);
                    break;
                case "laser":
                    updatedLasers.push(e);
                    break;
                default:
                    updatedTattoos.push(e);
                    break;
            }
        });

        setTattoos(updatedTattoos);
        setPiercings(updatedPiercings);
        setLasers(updatedLasers);
    }, [gallery]);

    return (
        <div className={style.gallery}>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>TATUAJES</div>
                <div className={style.gallerySectionCards}>
                    {tattoos.map((e) => (
                        <GalleryCard
                            key={e.id}
                            tattooArtistId={e.tattooArtistId}
                            image={e.image}
                            tattooStyle={e.style}
                        />
                    ))}
                </div>
            </div>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>PIERCINGS</div>
                <div className={style.gallerySectionCards}>
                    {piercings.map((e) => (
                        <GalleryCard
                            key={e.id}
                            tattooArtistId={e.tattooArtistId}
                            image={e.image}
                            tattooStyle={e.style}
                        />
                    ))}
                </div>
            </div>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>
                    ELIMINACION LASER
                </div>
                <div className={style.gallerySectionCards}>
                    {lasers.map((e) => (
                        <GalleryCard
                            key={e.id}
                            tattooArtistId={e.tattooArtistId}
                            image={e.image}
                            tattooStyle={e.style}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
