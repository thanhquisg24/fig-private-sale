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
            <header className="section-header">
              <p>Claim History</p>
            </header>
            <div className="row">
              <div className="col-md-12">
                <table className="table claim-history">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Txn Hash</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Form</th>
                      <th scope="col">To</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0xd06d...1807fa1</td>
                      <td>1000.000 FIG</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>Feb-05-2023 10:14:44 AM +UTC</td>
                    </tr>
                    <tr>
                      <td>0xd06d...1807fa1</td>
                      <td>9.729 FIG</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>Feb-05-2023 10:14:44 AM +UTC</td>
                    </tr>
                    <tr>
                      <td>0xd06d...1807fa1</td>
                      <td>652.900 FIG</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>0x2170ed08...f933f8</td>
                      <td>Feb-05-2023 10:14:44 AM +UTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
