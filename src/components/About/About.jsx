
import './About.scss'
import ImgMe from '../../assets/images/Photo.jpg'
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <div id="about-me" className="one">
            <section className="block block-rev">
                <div className="block__col">
                    <div>
                        <h1>{t("aboutme.title")}</h1>
                        <p className="block__text">  {t("aboutme.text")}</p>
                    </div>
                    <div className="lists">
                        <ul>
                            <li className="list__title">{t("aboutme.list.item1")}</li>
                            <li className="list__title">{t("aboutme.list.item2")}</li>
                            <li className="list__title">{t("aboutme.list.item3")}</li>
                        </ul>
                        <ul  >
                            <li className="list__text">+7(982)-108-58-71</li>
                            <li className="list__text">elli9225@gmail.com</li>
                            <li className="list__text">
                                <a className="icon__link" href="mailto: elli9225@gmail.com">
                                    <i className="fa-regular fa-envelope"></i>
                                </a>
                                <a className="icon__link" href="https://github.com/elli-ma" target="_blank">
                                    <i className="fa-brands fa-github" ></i>
                                </a>
                                <a className="icon__link" href="https://instagram.com/viraahmetzyanova?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a className="icon__link" href="tg://resolve?domain=ellivira" target="_blank">
                                    <i class="fa-brands fa-telegram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="skills" class="buttons">
                        <a class="block__button" href="#contact">{t("aboutme.button1")}</a>
                        <a class="block__button color2" href="https://drive.google.com/file/d/14CmgPaCEVIK7V63VZyksIYh5oXl48N7W/view?usp=sharing" target="_blank">{t("aboutme.button2")}</a>
                    </div>
                </div>
                <div className="block__img">
                    <img className="block__photo" src={ImgMe} alt="photo"></img>
                </div>
            </section >
        </div>
    )
}
export default About;






