import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    return (
        <section className="block">
            <div className="block__col3">
                <h2 className="block__title" >{t("skills.title")}</h2>
            </div>
            <div className="col4">
                <div className="col4__item">
                    <h3 className="col4__title">{t("skills.item1")}</h3>
                    <p className="col4__text">HTML, SASS, Bootstrap, React, Javascript, Typescript.</p>
                </div>
                <div className="col4__item">
                    <h3 className="col4__title">Backend Development</h3>
                    <p id="education" className="col4__text">Nodejs.</p>
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




