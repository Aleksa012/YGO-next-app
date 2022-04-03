import React, { Fragment } from "react";
import classes from "./Layout.module.css";

import Header from "./Header";
import Image from "next/image";
import backgroundImg from "../public/ygh-background.jpg";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <div className={classes.background}>
        <Image src={backgroundImg} layout="fill" />
      </div>
      <div className={classes.content}>{props.children}</div>
    </Fragment>
  );
}

export default Layout;
