import React from "react"
import wave from '../images/wave.svg'
import wave1 from '../images/wave1.svg' 
function Education() {
    return (
        <div id ="education" className="block">
            <div className="block_col3">
                <h2 className="block__title">Education</h2>
                {/* <p className="block__text">Junior Frontend Saint Petersburg</p> */}
                <div className='wave'>
                     {/* <img className='wave__img'src={wave} alt="" />
                     <img className='wave__img'src={wave1} alt="" /> */}
                </div>
            </div>

            <div className="col4">
                <div>
                    <h4 className="col4__title" >Chelyabinsk State Pedagogical University (ЮУрГГПУ) </h4>
                    <span>2009-2014</span>
                    <p className="col4__text">Профессиональное обучение
                        (Информатика, вычислительная техника и компьютерные технологии).</p>
                </div>

            </div>
        </div>
    )
}

export default Education;

