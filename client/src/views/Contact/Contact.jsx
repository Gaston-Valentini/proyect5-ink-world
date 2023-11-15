import style from "./Contact.module.css";

import {
    AiFillInstagram,
    AiFillFacebook,
    AiOutlineTwitter,
} from "react-icons/ai";

export default function Contact() {
    return (
        <div className={style.contact}>
            <div className={style.contactContent}>
                <div className={style.contactTitles}>
                    <div className={style.contactTitlesTitle}>Contacto</div>
                    <div className={style.contactTitlesSubtitle}>
                        No dudes en escribirnos
                    </div>
                </div>
                <div className={style.contactData}>
                    <div className={style.contactDataInfo}>
                        <div className={style.contactDataInfoSection}>
                            <div className={style.contactDataInfoSectionTitle}>
                                Dirección
                            </div>
                            <div className={style.contactDataInfoSectionLinks}>
                                Godofredo Ros 9, 46006. Valencia
                            </div>
                        </div>
                        <div className={style.contactDataInfoSection}>
                            <div className={style.contactDataInfoSectionTitle}>
                                Datos de contacto
                            </div>
                            <div className={style.contactDataInfoSectionLinks}>
                                Teléfono: <span>623271806</span>
                                <br />
                                Email: <span>inkworld@gmail.com</span>
                            </div>
                        </div>
                        <div className={style.contactDataInfoSection}>
                            <div className={style.contactDataInfoSectionTitle}>
                                Horario
                            </div>
                            <div className={style.contactDataInfoSectionLinks}>
                                Lunes a Viernes:
                                <br />
                                <span>10:00 - 14:00 / 16:00 - 20:00</span>
                                <br />
                                Sábados:
                                <br />
                                <span>10:30 a 14:30</span>
                            </div>
                        </div>
                        <div className={style.contactDataInfoSection}>
                            <div className={style.contactDataInfoSectionTitle}>
                                Redes sociales
                            </div>
                            <div className={style.contactDataInfoSectionSocial}>
                                <a href="#">
                                    <AiFillInstagram
                                        className={
                                            style.contactDataInfoSectionSocialLink
                                        }
                                    />
                                </a>
                                <a href="#">
                                    <AiFillFacebook
                                        className={
                                            style.contactDataInfoSectionSocialLink
                                        }
                                    />
                                </a>
                                <a href="#">
                                    <AiOutlineTwitter
                                        className={
                                            style.contactDataInfoSectionSocialLink
                                        }
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.contactDataForm}>
                        <div className={style.contactDataFormTitle}>
                            Formulario de contacto
                        </div>
                        <div className={style.contactDataFormInputs}>
                            <div className={style.contactDataFormInputsSection}>
                                <div
                                    className={
                                        style.contactDataFormInputsSectionTitle
                                    }
                                >
                                    Nombre <span>*</span>
                                </div>
                                <input
                                    className={
                                        style.contactDataFormInputsSectionInput
                                    }
                                ></input>
                            </div>
                            <div className={style.contactDataFormInputsSection}>
                                <div
                                    className={
                                        style.contactDataFormInputsSectionTitle
                                    }
                                >
                                    Email <span>*</span>
                                </div>
                                <input
                                    className={
                                        style.contactDataFormInputsSectionInput
                                    }
                                ></input>
                            </div>
                            <div className={style.contactDataFormInputsSection}>
                                <div
                                    className={
                                        style.contactDataFormInputsSectionTitle
                                    }
                                >
                                    Asunto
                                </div>
                                <input
                                    className={
                                        style.contactDataFormInputsSectionInput
                                    }
                                ></input>
                            </div>
                            <div className={style.contactDataFormInputsSection}>
                                <div
                                    className={
                                        style.contactDataFormInputsSectionTitle
                                    }
                                >
                                    Mensaje
                                </div>
                                <textarea
                                    className={
                                        style.contactDataFormInputsSectionTextarea
                                    }
                                ></textarea>
                            </div>
                        </div>
                        <div className={style.contactDataFormSubmit}>
                            Enviar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
