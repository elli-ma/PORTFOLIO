import wave from '../images/wave.svg'
import wave1 from '../images/wave1.svg'
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="block __line">
            <div className="block_col3">
                <h2 className="block__title">{t("contact.title")}</h2>
                {/* <p className="block__text">Junior Frontend Saint Petersburg</p> */}
                {/* <div className='wave'>
                     <img className='wave__img'src={wave} alt="" />
                     <img className='wave__img'src={wave1} alt="" />
                </div> */}

            </div>
            {/* <form className="form" action="">
                <div className="form__one">
                    <div className="form__mail">
                        <input className="form__text" type="text" placeholder={t("contact.name")} required />
                        <input className="form__text" type="text" placeholder={t("contact.mail")} required />
                    </div>
                    <div className='area'>
                        < textarea class="form__area" placeholder={t("contact.message")} required=""></textarea>
                    </div>
                </div>
                <button className="form__button">{t("contact.button")}</button>
            </form> */}
            {/* <a className="" href="mailto: elli9225@gmail.com">elli9225@gmail.com</a> */}
            <div className="col4">
                <ul className="col4__list">
                    <li><a className="icon__link" href="https://github.com/elli-ma"><i className="fa-brands fa-github"></i></a></li>
                    <li><a className="icon__link" href="https://instagram.com/viraahmetzyanova?igshid=NTc4MTIwNjQ2YQ=="><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a className="icon__link" href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a className="icon__link" href=""><i class="fa-brands fa-telegram"></i></a></li>
                    {/* <a className="icon__link" href="mailto: elli9225@gmail.com"><i className="fa-regular fa-envelope"></i></a> */}
                </ul>
            </div>


        </section >
    )
}

export default Contact;
