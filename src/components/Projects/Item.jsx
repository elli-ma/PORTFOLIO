import React from "react";

function Item() {
    return (
        <div className="d-flex flex-column w-40 gap-4">
            <div className=" p-3 mb-5 ">
                <a href="https://elli-ma.github.io/krestiki/">
                    <img className="w-100"  alt="" />
                </a>
            </div>
            <div className="">
                <a className="nav-link fw-light" href="https://github.com/elli-ma/krestiki">Tic Tac Toe</a>
                <p>"Крестики-нолики" - это интерактивный проект, реализованный на языках программирования JavaScript,
                    HTML и CSS. В рамках проекта я создала классическую игру, которую любят миллионы игроков по всему миру.
                    В проекте реализованы основные функциональности, проверка выигрышных комбинаций и отображение сообщений
                    о победе или ничьей. Также я добавил простой и интуитивно понятный дизайн, который делает игру приятной
                    для глаз и удобной для игры.
                </p>
            </div>
        </div>
    )
}



export default Item;