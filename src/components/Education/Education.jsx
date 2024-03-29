import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    return (
        <div className="block">
            <div className="block_col3">
                <h2 className="block__title">{t("education.title")}</h2>
            </div>
            <div className="col4">
                <div>
                    <h4 className="col4__title" >{t("education.name")}</h4>
                    <span>2009-2014</span>
                    <p id="portfolio" className="col4__text">{t("education.text")}</p>
                </div>

            </div>
        </div>
    )
}
export default Education;

