
import Sun from '../images/sun.svg';
import Moon from '../images/moon.svg';

function Nav(props) {
  const moon = props.view == '#fff6e5' ? Moon : Sun;
  return (
    <nav className="nav">
      <ul className="nav__lists">
        <li className="nav__item">
          <a className="nav__link" aria-current="page" href="#about-me">Hello</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" aria-current="page" href="#education">Education</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" aria-current="page" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" aria-current="page" href="#contact">Contact me</a>
        </li>
        {/* <li className="nav__item">
          <a className="nav__link"
            href="https://drive.google.com/file/d/14CmgPaCEVIK7V63VZyksIYh5oXl48N7W/view?usp=sharing">Resume</a>
        </li> */}
        {/* <li className="nav__item">
          <a className="nav__link" href="https://github.com/elli-ma">Github</a>
        </li> */}
        <li className="nav__button">
          <button className="nav__link nav__button" onClick={props.handleView} type="button"> <img src={moon} /> </button>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;

