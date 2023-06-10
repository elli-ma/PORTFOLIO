import React from "react"
import TicTac from '../images/TicTac.jpg'
import Comment from '../images/Comment.jpg'
import Beauty from '../images/Beauty.jpg'
import Conquest from '../images/Conquest.jpg'
import Sultan from '../images/Sultan.jpg'
import { useTranslation } from 'react-i18next';
function Projects() {
    const { t } = useTranslation();
    return (
        <section id="portfolio" className="block__row">
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
                    <p className="item__text">Пример БЭМ верстки.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <a href="https://elli-ma.github.io/Conquest/" target="_blank"><img className="item__img" src={Conquest} alt="" /></a>
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Conquest/" target="_blank">Conquest</a></h4>
                    <p className="item__text">Пример БЭМ верстки.  </p>

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
            </div>
        </section >
    )
}

export default Projects;