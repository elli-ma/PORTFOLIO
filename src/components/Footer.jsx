import { useTranslation } from 'react-i18next';
function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <p> {t("footer.text")}<i class="fa-regular fa-heart"></i></p>
        </footer>
    )
}

export default Footer;
