import React from "react";
import "./Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <main className="container-fluid">{props.children}</main>
    </>
  );
};

export default Layout;
