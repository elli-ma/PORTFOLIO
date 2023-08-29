import './Projects.scss'
import Lichi from '../../assets/images/LICHI.jpg'
import Color from '../../assets/images/Color.jpg'
import Shop from '../../assets/images/Bag.jpg'
import Yandex from '../../assets/images/Yandex.jpg'
import TicTac from '../../assets/images/TicTac.jpg'
import Comment from '../../assets/images/Comment.jpg'
import Beauty from '../../assets/images/Beauty.jpg'
import Conquest from '../../assets/images/Conquest.jpg'
import Sultan from '../../assets/images/Sultan.jpg'
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
    return (
        <section  className="block block__row">
            <h2 className="block__title">{t("portfolio.title")}</h2>
            <div className="items" >
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/sultan/" target="_blank"><img className="item__img" src={Sultan} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/sultan/" target="_blank">Sultan</a></h4>
                    <p className="item__text">React,Typescript.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/Beuty/" target="_blank"><img className="item__img" src={Beauty} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Beuty/" target="_blank">Beaty</a></h4>
                    <p className="item__text">BEM-layout.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/Conquest/" target="_blank"><img className="item__img" src={Conquest} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Conquest/" target="_blank">Conquest</a></h4>
                    <p className="item__text">BEM-layout.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/comments/" target="_blank"><img className="item__img" src={Comment} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/comments/" target="_blank">Comment</a></h4>
                    <p className="item__text">JavaScript,Bootstrap.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/krestiki/" target="_blank"><img className="item__img" src={TicTac} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/krestiki/" target="_blank">TicTac</a></h4>
                    <p className="item__text">JavaScript.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/Yandex/" target="_blank"><img className="item__img" src={Yandex} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Yandex/" target="_blank">Yandex</a></h4>
                    <p className="item__text">Tailwind CSS-layout.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/Color_matching/" target="_blank"><img className="item__img" src={Color} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Color_matching/" target="_blank">Color</a></h4>
                    <p className="item__text">JavaScript.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/SHOP/" target="_blank"><img className="item__img" src={Shop} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/SHOP/" target="_blank">Shop</a></h4>
                    <p className="item__text">HTML, SCSS, JavaScript.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://github.com/elli-ma/LICHI" target="_blank"><img className="item__img" src={Lichi} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://github.com/elli-ma/LICHI" target="_blank">Lichi</a></h4>
                    <p className="item__text">Next, Typescript.</p>
                </div>

            </div>
        </section >
    )
}

export default Projects;