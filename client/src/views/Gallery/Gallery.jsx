import style from "./Gallery.module.css";

import GalleryCard from "../../components/GalleryCard/GalleryCard";

export default function Gallery() {
    const gallery = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={style.gallery}>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>TATUAJES</div>
                <div className={style.gallerySectionCards}>
                    {gallery.map((e) => (
                        <GalleryCard />
                    ))}
                </div>
            </div>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>PIERCINGS</div>
                <div className={style.gallerySectionCards}>
                    {gallery.map((e) => (
                        <GalleryCard />
                    ))}
                </div>
            </div>
            <div className={style.gallerySection}>
                <div className={style.gallerySectionTitle}>
                    ELIMINACION LASER
                </div>
                <div className={style.gallerySectionCards}>
                    {gallery.map((e) => (
                        <GalleryCard />
                    ))}
                </div>
            </div>
        </div>
    );
}
