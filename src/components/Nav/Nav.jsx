import './Nav.scss'
import Sun from '../../assets/images/sun.svg';
import Moon from '../../assets/images/moon.svg';
import Word from '../../assets/images//word.svg'

import { useTranslation } from 'react-i18next';

function Nav(props) {
  const { t } = useTranslation();
  const moon = props.view === '#fff6e5' ? Moon : Sun;
  const language = props.language;

  return (
    <nav className="nav">
      <ul className="nav__lists">
        <ul className='nav__one'>
          <li className="nav__item">
            <a className="nav__link" aria-current="page" href="#about-me">{t("nav.item1")}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" aria-current="page" href="#skills">{t("nav.item2")}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" aria-current="page" href="#education">{t("nav.item3")}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" aria-current="page" href="#portfolio">{t("nav.item4")}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" aria-current="page" href="#contact">{t("nav.item5")}</a>
          </li>
        </ul>
        <ul className='nav__two'>
          <li className="nav__buttons">
            <button className="nav__button" onClick={() => props.changeLanguage(language)} type="button"><img src={Word} /></button>
            <button className="nav__button word" onClick={props.handleView} type="button"> <img src={moon} /> </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
export default Nav;

