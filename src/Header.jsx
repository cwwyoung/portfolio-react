import { useState } from "react";

function Header() {
  const [header, setHeader] = useState(false);
  const headerBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", headerBackground);
  return (
    <>
      <div className={header ? "header active" : "header"} id="about">
        <h1>calvin young</h1>

        <nav>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <br />
    </>
  );
}

export default Header;
