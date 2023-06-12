// import wave from '../images/wave.svg'
// import wave1 from '../images/wave1.svg'
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    return (
        <section className="block">
            <div className="block_col3">
                <h2 className="block__title" >{t("skills.title")}</h2>
                {/* <p className="block__text">Junior Frontend Saint Petersburg</p> */}
                <div className='wave'>
                    {/* <img className='wave__img' src={wave} alt="" /> */}
                </div>
            </div>
            <div className="col4">
                <div className="col4__item">
                    <h3 className="col4__title">{t("skills.item1")}</h3>
                    <p className="col4__text">HTML, SASS, Bootstrap, React, Javascript, Typescript.</p>
                </div>
                <div className="col4__item">
                    <h3 className="col4__title">Backend Development</h3>
                    <p id="education" className="col4__text">Nodejs, Express, C#, Docker.</p>
                </div>
                <div className="col4__item">
                    <h3 className="col4__title">{t("skills.item2")}</h3>
                    <p id="education" className="col4__text">Photoshop, Illustrator, Figma, CorelDRAW.</p>
                </div >

            </div>
        </section>
    );
}

export default Skills;




