
import ImgMe from '../images/Photo1.jpg'
import { useTranslation } from 'react-i18next';

function Aboutme() {
    const { t } = useTranslation();
    return (
        <div id="about-me" className="one">
            <section className="block rev">
                <div className="block_col">
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
                        <ul >
                            <li className="list__text">8-982-108-58-71</li>
                            <li className="list__text">elli9225@gmail.com</li>
                            <li className="list__text ">
                                <a className="icon__link" href="https://github.com/elli-ma"><i className="fa-brands fa-github"></i></a>
                                <a className="icon__link" href="https://instagram.com/viraahmetzyanova?igshid=NTc4MTIwNjQ2YQ=="><i className="fa-brands fa-instagram"></i></a>
                                <a className="icon__link" href=""><i class="fa-brands fa-linkedin"></i></a>
                                <a className="icon__link" href=""><i class="fa-brands fa-telegram"></i></a>
                                {/* <a className="icon__link" href="mailto: elli9225@gmail.com"><i className="fa-regular fa-envelope"></i></a> */}
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <a class="block__button" href="#contact">{t("aboutme.button1")}</a>
                        <a class="block__button color2" href="https://drive.google.com/file/d/14CmgPaCEVIK7V63VZyksIYh5oXl48N7W/view?usp=sharing" target="_blank">{t("aboutme.button2")}</a>
                    </div>
                    {/* <a href=""></a> */}
                </div>
                <div className="block_col_img">
                    <img className="photo" src={ImgMe} alt=""></img>
                    {/* <img className="" src={ImgMeS} alt=""></img> */}
                </div>

            </section >

        </div>
    )
}

export default Aboutme;






