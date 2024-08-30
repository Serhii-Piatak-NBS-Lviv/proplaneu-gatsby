import * as React from "react"
import { Link } from "gatsby";

import * as styles from "./header.module.scss";
import  logo from "../../images/logo.png";

const Header = ({ siteTitle }) => (
  <header className={styles.header}>    
    <Link to="/"  className={styles.link}>
      <img src={logo} alt={"Purina logo"} className={styles.logo} />
    </Link>
  </header>
)

export default Header
