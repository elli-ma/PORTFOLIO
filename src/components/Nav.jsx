
import Sun from '../images/sun.svg';
import Moon from '../images/moon.svg';

function Nav(props) {
  const moon = props.view == 'white' ? Moon : Sun;
  return (
    <div>
      <nav className="p-y-1">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-grey fw-light" aria-current="page" href="#about-me">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-light"
              href="https://drive.google.com/file/d/1dAFQMGSI3hByr0uGizOSUYcSG8Pxclg0/view?usp=sharing">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-light" href="https://github.com/elli-ma">Github</a>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={props.handleView} type="button"> <img src={moon} /> </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

