import style from "./TattooArtistsCard.module.css";

export default function TattooArtist({name, surname, description, image, tattooStyle}) {
    return (
        <div className={style.tattooArtist}>
            <div className={style.tattooArtistData}>
                <div className={style.tattooArtistDataName}>{name} {surname}</div>
                <div className={style.tattooArtistDataStyle}>{tattooStyle}</div>
                <div className={style.tattooArtistDataText}>{description}</div>
            </div>
            <div className={style.tattooArtistImage}>
                <img src={image} />
            </div>
        </div>
    );
}
