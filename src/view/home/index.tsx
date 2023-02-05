/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

export default function HomeView() {
  return (
    <>
      <Header />

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs pt-4">
          <div className="container">
            <h2>Private Sales</h2>
          </div>
        </section>
        {/* End Breadcrumbs */}
        <section className="inner-page">
          <div className="container">
            <p>Example inner page template</p>
          </div>
        </section>
        <section className="inner-page section-even-bg">
          <div className="container">
            <p>Example inner page template</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
