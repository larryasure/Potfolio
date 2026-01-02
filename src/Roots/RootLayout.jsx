import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer/>
    </>
  );
}
