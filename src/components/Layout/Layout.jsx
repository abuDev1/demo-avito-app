import React from "react";

import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Logo } from "../Content/Logo/Logo";
import { Search } from "../Content/Search/Search";
import { Footer } from "../Footer/Footer";

import styles from "../Content/content.module.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Logo />
        <Search />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
