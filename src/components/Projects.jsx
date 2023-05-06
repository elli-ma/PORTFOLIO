import React from "react"
import TicTac from '../images/TicTac.jpg'
import Comment from '../images/Comment.jpg'
import Beauty from '../images/Beauty.jpg'
import Conquest from '../images/Conquest.jpg'
import Sultan from '../images/Sultan.jpg'

function Projects() {
    return (
        <section className="projects pad2 my-4 py-5">
            <div>
                <h2 className="my-4 pb-3 fw-bolder">Projects</h2>

                <div className="row row-cols-1 row-cols-md-3 g-5">
                    <div className="col">
                        <div className="card h-100">
                            <a className="card-header" href="https://elli-ma.github.io/krestiki/">
                                <img src={TicTac} className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://github.com/elli-ma/krestiki">
                                    <h4 className="card-title text-center">TicTac</h4>
                                </a>
                                <p className="card-text fs-6 lh-base text-center">Крестики-нолики" - это интерактивный проект, реализованный на языке программирования JavaScript. 
                                В рамках проекта я создала классическую игру, которую любят миллионы игроков по всему миру.
                                    В проекте реализованы основные функциональности, проверка выигрышных комбинаций и отображение сообщений
                                    о победе или ничьей. Также я добавил простой и интуитивно понятный дизайн, который делает игру приятной
                                    для глаз и удобной для игры.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <a className="card-header" href="https://elli-ma.github.io/comments/">
                                <img src={Comment} className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://github.com/elli-ma/comments">
                                    <h4 className="card-title text-center">Comment</h4>
                                </a>
                                <p className="card-text fs-6 lh-base text-center">Проект блока комментариев на JS, HTML и Bootstrap - это интерактивный компонент, который позволяет пользователям оставлять свои комментарии.
                                    Он разработан с использованием Bootstrap-фреймворка для удобной и эффективной настройки внешнего вида.
                                    Проект включает в себя форму для ввода нового комментария и контейнер, который отображает все комментарии,
                                    уже добавленные на страницу. Каждый комментарий содержит поля для имени автора, даты и текста комментария.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <a className="card-header" href="https://elli-ma.github.io/Conquest/">
                                <img src={Conquest} className="card-img-top" alt="..." />
                            </a>

                            <div className="card-body">
                                <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://github.com/elli-ma/Conquest">
                                    <h4 className="card-title text-center">Conquest</h4>
                                </a>

                                <p className="card-text fs-6 lh-base text-center">Пример верстки с использованием
                                    БЭМ-технологию в сочетании с SCSS, чтобы организовать
                                    CSS-стили и создать легко поддерживаемый и расширяемый код.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <a className="card-header" href="https://elli-ma.github.io/Beuty/">
                                <img src={Beauty} className="card-img-top" alt="..." />
                            </a>

                            <div className="card-body">
                                <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://github.com/elli-ma/Beuty">
                                    <h4 className="card-title text-center">Beauty</h4>
                                </a>

                                <p className="card-text fs-6 lh-base text-center">Пример верстки с использованием
                                    БЭМ-технологию в сочетании с SCSS, чтобы организовать
                                    CSS-стили и создать легко поддерживаемый и расширяемый код.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <a className="card-header" href="https://elli-ma.github.io/sultan/">
                                <img src={Sultan} className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://github.com/elli-ma/sultan">
                                    <h4 className="card-title text-center">Sultan</h4>
                                </a>
                                <p className="card-text fs-6 lh-base text-center">Этот проект является магазином, написанным на React с использованием TypeScript и Vite.
                                    Я использовала Redux для управления состоянием приложения. Vite был выбран мной как быстрый и эффективный
                                    инструмент для сборки и разработки проекта. Я также создала адаптивный дизайн, который корректно отображается на различных устройствах.
                                    В результате я создала красивый и функциональный магазин,
                                    который позволяет пользователям просматривать продукты, добавлять их в корзину, оформлять заказы.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;