import style from "./GalleryCard.module.css";

export default function GalleryCard({ tattooArtistId, image, tattooStyle }) {
    return (
        <div className={style.galleryCard}>
            <div className={style.galleryCardImage}>
                <img src={image} />
            </div>
            <div className={style.galleryCardData}>
                <div className={style.galleryCardDataTattooArtist}>
                    Valentin Rossi
                </div>
                <div className={style.galleryCardDataStyle}>{tattooStyle}</div>
            </div>
        </div>
    );
}
