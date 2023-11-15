import style from "./Welcome.module.css";

import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className={style.welcome}>
            <div className={style.welcomeBox}>
                <div className={style.welcomeTitle}>
                    BIENVENIDOS A INK-WORLD
                </div>
                <div className={style.welcomeSubtitle}>
                    Un lugar donde inmortalizamos tus ideas...
                </div>
                <div className={style.welcomeText}>
                    En <Link to={""}>INK-WORLD</Link>, creemos que los tatuajes
                    son una forma de expresión personal. Por eso, nos
                    comprometemos a crear tatuajes que sean únicos y
                    significativos para cada cliente.
                    <br />
                    <br />
                    Nuestro equipo de{" "}
                    <Link to={"tattoo-artists"}>tatuadores</Link> experimentados
                    está formado por artistas de todos los estilos, desde el
                    realismo hasta el arte tradicional. Trabajamos con usted
                    para crear un tatuaje que refleje su individualidad y sus
                    valores.
                    <br />
                    <br />
                    En nuestra sección de{" "}
                    <Link to={"advices"}>consejos y cuidados</Link>, encontrará
                    información sobre cómo prepararse para su tatuaje, cómo
                    cuidarlo después y cómo evitar complicaciones.
                    <br />
                    <br />
                    Nuestra <Link to={"gallery"}>galería de trabajos</Link> es
                    una excelente manera de ver nuestros estilos y habilidades.
                    Aquí encontrará una amplia variedad de tatuajes, desde
                    pequeños tatuajes minimalistas hasta tatuajes grandes y
                    detallados.
                    <br />
                    <br />
                    Si está listo para hacerse un tatuaje, puede{" "}
                    <Link to={"make-appointment"}>pedir cita</Link> pedir cita
                    en línea o ponerse en
                    <Link to={"contact"}> contacto</Link> con nosotros vía mail
                    o por llamada telefónica.
                </div>
                <div className={style.welcomeButton}></div>
            </div>
        </div>
    );
}
