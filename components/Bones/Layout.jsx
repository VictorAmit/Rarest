import React from "react";
import Header from "../Organs/Head";
import Footer from "../Organs/Foot";
import Extra from "../Organs/Extra";

export default function Layout({children}) {
return (
<>
<Header />
{children}
<Footer />
<Extra />
</>
);
}