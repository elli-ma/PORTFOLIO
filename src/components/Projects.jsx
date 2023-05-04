import React from "react"
import TicTac from '../images/TicTac.jpg'
import Comment from '../images/Comment.jpg'
import Beauty from '../images/Beauty.jpg'
import Conquest from '../images/Conquest.jpg'
import Sultan from '../images/Sultan.jpg'


function Projects() {
    return (
        <section className="projects pad2">
            <h2 className="py-4">Projects</h2>
            <div className="d-flex flex-column gap-5">


                <div className="d-flex justify-content-between  gap-4">
                    <div className="w-40 p-3 mb-5 bg-body-tertiary rounded">
                        <a href="https://elli-ma.github.io/krestiki/">
                            <img className="w-100 " src={TicTac} alt="" />
                        </a>
                    </div>
                    <div className="w-60">
                        <a className="nav-link fw-light" href="https://github.com/elli-ma/krestiki">Tic Tac Toe</a>
                        <p>"Крестики-нолики" - это интерактивный проект, реализованный на языках программирования JavaScript,
                            HTML и CSS. В рамках проекта я создала классическую игру, которую любят миллионы игроков по всему миру.
                            В проекте реализованы основные функциональности, проверка выигрышных комбинаций и отображение сообщений
                            о победе или ничьей. Также я добавил простой и интуитивно понятный дизайн, который делает игру приятной
                            для глаз и удобной для игры.
                        </p>
                    </div>
                </div>



                <div className="d-flex justify-content-between  gap-4">
                    <div className="w-40 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <a href="https://elli-ma.github.io/comments/">
                            <img className="w-100 " src={Comment} alt="" />
                        </a>
                    </div>
                    <div className="w-60">
                        <a className="nav-link  fw-light" href="https://github.com/elli-ma/comments">Comment</a>
                        <p>Проект блока комментариев на JS, HTML и Bootstrap - это интерактивный компонент, который позволяет пользователям оставлять свои комментарии.
                            Он разработан с использованием Bootstrap-фреймворка для удобной и эффективной настройки внешнего вида.
                            Проект включает в себя форму для ввода нового комментария и контейнер, который отображает все комментарии,
                            уже добавленные на страницу. Каждый комментарий содержит поля для имени автора, даты и текста комментария.
                        </p>
                    </div>
                </div>


                <div className="d-flex justify-content-between  gap-4">
                    <div className="w-40  p-3 mb-5 bg-body-tertiary rounded">
                        <a href="https://elli-ma.github.io/Conquest/">
                            <img className="w-100 " src={Conquest} alt="" />
                        </a>
                        <a href="https://elli-ma.github.io/Beuty/">
                            <img className="w-100 " src={Beauty} alt="" />
                        </a>
                    </div>


                    <div className="w-60">
                        <a className="nav-link  fw-light" href="https://github.com/elli-ma/Conquest">Conquest</a>
                        <a className="nav-link  fw-light" href="https://github.com/elli-ma/Beuty">Beauty</a>
                        <p>
                            Эти две страиницы пример верстки с использованием
                            БЭМ-технологию в сочетании с SCSS, чтобы организовать
                            CSS-стили и создать легко поддерживаемый и расширяемый код.
                        </p>
                    </div>
                </div>

                <div className="d-flex justify-content-between gap-4">
                    <div className="w-40 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <a href="https://elli-ma.github.io/sultan/">
                            <img  className="w-100" src={Sultan} alt="" />
                        </a>
                    </div>

                    <div className="w-60">
                        <a className="nav-link  fw-light" href="https://github.com/elli-ma/sultan">Sultan</a>

                        <p>
                            Этот проект является магазином, написанным на React с использованием TypeScript и Vite.
                            Мы использовали Redux для управления состоянием приложения. Vite был выбран мной как быстрый и эффективный
                            инструмент для сборки и разработки проекта. Я также создала адаптивный дизайн, который корректно отображается на различных устройствах.
                            В результате я создала красивый и функциональный магазин,
                            который позволяет пользователям просматривать продукты, добавлять их в корзину, оформлять заказы.
                        </p>
                    </div>
                </div>
            </div>



        </section>
    )
}



export default Projects;