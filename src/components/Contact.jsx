import wave from '../images/wave.svg'
import wave1 from '../images/wave1.svg'
function Contact() {
    return (
        <section id="contact" className="block">
            <div className="block_col3">
                <h2 className="block__title">Contact</h2>
                {/* <p className="block__text">Junior Frontend Saint Petersburg</p> */}
                {/* <div className='wave'>
                     <img className='wave__img'src={wave} alt="" />
                     <img className='wave__img'src={wave1} alt="" />
                </div> */}
            </div>
            <form className="form" action="">
                <div className="form__one">
                    <div className="form__mail">
                        <input className="form__text" type="text" placeholder="Name" required />
                        <input className="form__text" type="text" placeholder="E-mail" required />
                    </div>
                    <div className='area'>
                        < textarea class="form__area" placeholder="Message" required=""></textarea>
                    </div>
                </div>
                <button className="form__button">Send message</button>
            </form>
            {/* <a className="" href="mailto: elli9225@gmail.com">elli9225@gmail.com</a> */}
        </section>
    )
}

export default Contact;
