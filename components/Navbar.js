import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <img
            src="/images/logo.svg"
            className={styles.navbarimg}
            loading="lazy"
          />
        </a>
      </Link>
      <ul className={styles.navbarList}>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Model S
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Model 3
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Model X
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Model Y
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Solar Roof
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Solar Panels
          </a>
        </li>
      </ul>
      <div className={styles.menu}>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Shop
          </a>
        </li>
        <li className={styles.items}>
          <a className={styles.itemLink} href="#">
            Account
          </a>
        </li>
        <li className={styles.items} onClick={showSidebar}>
          Menu
        </li>
      </div>

      <div className={sidebar ? "side-menu active" : "side-menu"}>
        {/* <CloseIcon onClick={showSidebar} className='close-icon' /> */}
        <ul className="sidebarNav">
          {Sidebar.map((item, index) => {
            return (
              <li key={index} className="sidebar-item">
                <Link className="sidebar-link" href={item.path}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
