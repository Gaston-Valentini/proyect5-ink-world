import style from "./BannerOne.module.css";

export default function BannerOne() {
    return (
        <div className={style.bannerOne}>
            <div className={style.bannerOneData}>
                <div className={style.bannerOneDataTitle}>
                    LA EXPRESION DE TU ALMA...
                </div>
                <div className={style.bannerOneDataText}>
                    INK-WORLD es un estudio de tatuajes y piercing fundado en
                    2005 por Lorenzo Rossi, un artista con una pasión por el
                    arte y la tinta. Desde sus inicios, el estudio se ha
                    posicionado como un referente en la provincia de Mendoza
                    gracias a la calidad artística y técnica de sus trabajos.
                    <br />
                    <br />
                    El equipo de INK-WORLD está formado por artistas
                    experimentados en todo tipo de estilos, desde el más
                    tradicional al más moderno. Todos ellos comparten la misma
                    pasión por el arte y la dedicación a sus clientes.
                    <br />
                    <br />
                    Creemos que los tatuajes son una forma de expresión
                    personal. Por eso, nuestro objetivo es crear tatuajes únicos
                    y significativos que reflejen la individualidad de cada
                    cliente.
                    <br />
                    <br />
                    Si estás pensando en hacerte un tatuaje, te invitamos a
                    visitar nuestro estudio y conocer a nuestro equipo.
                    Estaremos encantados de ayudarte a crear el tatuaje perfecto
                    para ti.
                </div>
            </div>
        </div>
    );
}
