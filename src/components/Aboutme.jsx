
import ImgMe from '../images/Photo1.jpg'
function Aboutme() {
    return (
        <div id="about-me" className="one">
            <section className="block rev">
                <div className="block_col">
                    <div>
                        <h1>I am ELLI</h1>
                        <p className="block__text">Я веб-разработчик из Санкт-Петербурга. В настоящее время я нахожусь в поиски работы. Готова работать в команде, учиться у своих коллег и принимать новые вызовы с энтузиазмом.
                            {/* <br/>Спасибо, что посетили мой сайт. Я надеюсь на возможность сотрудничества с вами в будущем! */}
                        </p>
                    </div>
                    <div className="lists">
                        <ul>
                            <li className="list__title">Phone:</li>
                            <li className="list__title">Email:</li>
                            <li className="list__title">Social:</li>
                        </ul>
                        <ul >
                            <li className="list__text">8-982-108-58-71</li>
                            <li className="list__text">elli9225@gmail.com</li>
                            <li className="list__text ">
                                <a className="icon__link" href="https://github.com/elli-ma"><i className="fa-brands fa-github"></i></a>
                                <a className="icon__link" href=""><i className="fa-brands fa-instagram"></i></a>
                             
                                {/* <a className="icon__link" href="mailto: elli9225@gmail.com"><i className="fa-regular fa-envelope"></i></a> */}
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <button class="block__button">Contact me</button>
                      <button class="block__button color2">Resume</button>  
                    </div>
                    {/* <a href="https://drive.google.com/file/d/14CmgPaCEVIK7V63VZyksIYh5oXl48N7W/view?usp=sharing"></a> */}
                </div>
                <div className="block_col_img">
                    <img className="photo" src={ImgMe} alt=""></img>
                    {/* <img className="" src={ImgMeS} alt=""></img> */}
                </div>

            </section >

        </div>
    )
}

export default Aboutme;






