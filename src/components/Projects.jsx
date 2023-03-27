import React from "react"
import ToDo from '../images/5.jpg'
import TicTac from '../images/6.jpg'


function Projects() {
    return (
        <section className="projects pad2">
            <h2 className="py-4">Projects</h2>

            <a className="nav-link fw-semibold p-3 text-center fs-3" href="https://elli-ma.github.io/to-do-list/">To Do List</a>
            <img className="img-fluid border" src={ToDo} alt="To Do List"></img>


            <a className="nav-link fw-semibold p-3 text-center fs-3" href="https://elli-ma.github.io/krestiki/">Tic Tac Toe</a>
            <img className="img-fluid border" src={TicTac} alt="Tic Tac Toe"></img>
        </section>
    )
}



export default Projects;