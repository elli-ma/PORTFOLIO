// import wave from '../images/wave.svg'
// import wave1 from '../images/wave1.svg'

//block1 block1--dark
//          block1__element 
//          block1__element 
//          block1__element block1__element--dark

// block1__element__myelement ?
// block1__elememt-item ?
import './Contact.scss'
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
    return (
          <section id="contact" className="block block-line">
            <div className="block__col3">
                <h2 className="block__title">{t("contact.title")}</h2>
            </div>
            <div className="col4">
                <ul className="col4__list">
                    <li><a className="icon__link" href="mailto:elli9225@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a></li>
                    <li><a className="icon__link" href="https://github.com/elli-ma" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                    <li><a className="icon__link" href="https://instagram.com/viraahmetzyanova?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a className="icon__link" href="tg://resolve?domain=ellivira" target="_blank"><i class="fa-brands fa-telegram" ></i></a></li>
                </ul>

            </div>
        </section >
    )
}
export default Contact;
