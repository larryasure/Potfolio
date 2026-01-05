import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer/>
    </>
  );
}