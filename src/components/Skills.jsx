import wave from '../images/wave.svg'
import wave1 from '../images/wave1.svg'


function Skills() {
    return (
        <section id="skills" className="block">
            <div className="block_col3">
                <h2 className="block__title" >Skills</h2>
                {/* <p className="block__text">Junior Frontend Saint Petersburg</p> */}
                <div className='wave'>
                    {/* <img className='wave__img' src={wave} alt="" /> */}
                </div>
            </div>
            <div className="col4">
                <div className="col4__item">
                    <h3 className="col4__title">Frontend Development</h3>
                    <p className="col4__text">HTML, CSS, SASS, Bootstrap, React, Javascript, Node.js, Typescript.</p>
                </div>
                <div className="col4__item">
                    <h3 className="col4__title">Design</h3>
                    <p className="col4__text">Photoshop, Illustrator, CorelDRAW.</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;




