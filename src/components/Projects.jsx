import React from "react"
import TicTac from '../images/TicTac.jpg'
import Comment from '../images/Comment.jpg'
import Beauty from '../images/Beauty.jpg'
import Conquest from '../images/Conquest.jpg'
import Sultan from '../images/Sultan.jpg'

function Projects() {
    return (
        <section id="portfolio" className="block__row">
            <h2 className="block__title">Portfolio</h2>
            <div className="items" >


                <div className="item">
                    <div className="img__box">
                        <img className="item__img" src={Sultan} alt="" />
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/sultan/">Sultan</a></h4>
                    <p className="item__text">React,Typescript.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <img className="item__img" src={Beauty} alt="" />
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Beuty/">Beaty</a></h4>
                    <p className="item__text">Пример БЭМ верстки.</p>
                </div>
                <div className="item">
                    <div className="img__box">
                        <img className="item__img" src={Conquest} alt="" />
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/Conquest/">Conquest</a></h4>
                    <p className="item__text">Пример БЭМ верстки.  </p>

                </div>
                <div className="item">
                    <div className="img__box">
                        <img className="item__img" src={Comment} alt="" />
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/comments/">Comment</a></h4>
                    <p className="item__text">JavaScript,Bootstrap.</p>
                </div>


                <div className="item">
                    <div className="img__box">
                        <img className="item__img" src={TicTac} alt="" />
                    </div>
                    <h4 className="item__title"><a className="item__title" href="https://elli-ma.github.io/krestiki/">TicTac</a></h4>
                    <p className="item__text">JavaScript.</p>
                </div>
            </div>
        </section >
    )
}

export default Projects;