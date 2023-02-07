import MoneyComponent from "@components/MoneyComponent";
import { useAppSelector } from "@hooks/useReduxToolKit";
import { getTokenSelector, getUserSelector } from "@store/selector";
import { formatStandartDate } from "@utils/date-format";
import { formatShortTx } from "@utils/text-format";

export default function BoxTokenDetail() {
  const userInfo = useAppSelector(getUserSelector);
  const { userData } = userInfo;
  const tokenInfo = useAppSelector(getTokenSelector);
  const { tokenInfoData } = tokenInfo;
  // const dispatch = useAppDispatch();

  return (
    <div className="box token-info-detail">
      {/* <img src="/static/img/values-2.png" className="img-fluid" alt="" />
  <h3>Voluptatem voluptatum alias</h3> */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">Start</span>
            <span className="s-content">{userData ? formatStandartDate(userData.startDate) : "-----"}</span>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">End</span>
            <span className="s-content">{userData ? formatStandartDate(userData.endDate) : "-----"}</span>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">Token</span>
            <span className="s-content">
              {tokenInfoData ? (
                <a href={tokenInfoData.tokenScanUrl} target="_blank" rel="noreferrer">
                  {formatShortTx(tokenInfoData.tokenAddress)}
                </a>
              ) : (
                "-----"
              )}
            </span>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">Locked</span>
            <span className="s-content">
              {userData ? <MoneyComponent numValue={userData.locked} /> : "-----"}{" "}
              {tokenInfoData ? tokenInfoData.tokenSymbol : "--"}
            </span>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">Avaiable</span>
            <span className="s-content">
              {userData ? <MoneyComponent numValue={userData.avaiable} /> : "-----"}{" "}
              {tokenInfoData ? tokenInfoData.tokenSymbol : "--"}
            </span>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <span className="s-title">Claimed</span>
            <span className="s-content">
              {userData ? <MoneyComponent numValue={userData.claimed} /> : "-----"}{" "}
              {tokenInfoData ? tokenInfoData.tokenSymbol : "--"}
            </span>
          </div>
        </li>
      </ul>

      <button type="button" className="btn btn-primary w-100 mt-4">
        Claim
      </button>
    </div>
  );
}
