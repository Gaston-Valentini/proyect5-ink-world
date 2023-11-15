import style from "./GalleryCard.module.css";

export default function GalleryCard() {
    return (
        <div className={style.galleryCard}>
            <div className={style.galleryCardImage}>
                <img src="https://i.pinimg.com/736x/97/a7/ea/97a7ea923519380effaab431ca5db09c.jpg" />
            </div>
            <div className={style.galleryCardData}>
                <div className={style.galleryCardDataTattooArtist}>
                    Valentin Rossi
                </div>
                <div className={style.galleryCardDataStyle}>NEOTRADICIONAL</div>
            </div>
        </div>
    );
}
