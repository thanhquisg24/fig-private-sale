import { SaleChart } from "./sale-chart";

export default function SalesSection() {
  return (
    <section className="inner-page">
      <div className="container values">
        <div className="row">
          <div className="col-md-8">
            {/* <div className="box token-release-chart">
              <img src="/static/img/values-1.png" className="img-fluid" alt="" />
              <h3>Ad cupiditate sed est odio</h3>
              <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
            </div> */}
            <div className="box token-release-chart">
              <SaleChart />
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box token-info-detail">
              {/* <img src="/static/img/values-2.png" className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3> */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">Start</span>
                    <span className="s-content">Feb-05-2023</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">End</span>
                    <span className="s-content">Feb-05-2036</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">Token</span>
                    <span className="s-content">0x2170ed08...f933f8</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">Locked</span>
                    <span className="s-content">1.000.000 FIG</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">Avaiable</span>
                    <span className="s-content">1.000.000 FIG</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span className="s-title">Claimed</span>
                    <span className="s-content">1.000.000 FIG</span>
                  </div>
                </li>
              </ul>

              <button type="button" className="btn btn-primary w-100 mt-4">
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
