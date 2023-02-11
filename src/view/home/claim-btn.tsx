import BtnSpinerSubmiting from "@components/offer-spinner-submit";
import { useEthers } from "@usedapp/core";
import React from "react";
import { notifyMessageSuccess, notifyMessageError, emitRefreshData } from "../../emiter/AppEmitter";
import { presenter } from "../../adapters/presenters/index";
import { useAppDispatch } from "../../hooks/useReduxToolKit";
import { getInfoRequest } from "@store/actions/user-action";

export default function ClaimBtn(props: { userId: number; avaiableAmount: number }) {
  const { userId, avaiableAmount } = props;
  const dispatch = useAppDispatch();
  const { account } = useEthers();
  const [submitState, setSubmitState] = React.useState({
    isSubmitting: false,
  });
  const updateSubmitState = React.useCallback((val: boolean) => {
    setSubmitState({
      isSubmitting: val,
    });
  }, []);

  const onHandleClaim = () => {
    if (account === undefined) {
      notifyMessageError("Please connect your wallet!");
      return;
    }
    if (avaiableAmount <= 0) {
      notifyMessageError("You have no available token to claim!");
      return;
    }
    if (account) {
      updateSubmitState(true);
      const payload = {
        userId,
        userAddress: account,
      };
      updateSubmitState(false);

      presenter.user
        .postUserClaimToken(payload)
        .then((result) => {
          console.log("🚀 ~ file: claim-btn.tsx:44 ~ .then ~ result", result);
          notifyMessageSuccess(result.tx);
          updateSubmitState(false);
          const userAction = getInfoRequest(userId);
          dispatch(userAction);
          emitRefreshData();
        })
        .catch((err) => {
          notifyMessageError(err.message);
          updateSubmitState(false);
        });
    }
  };

  return submitState.isSubmitting ? (
    <BtnSpinerSubmiting text="Claiming..." className="w-100 mt-4" variant="primary" />
  ) : (
    <button type="button" className="btn btn-primary w-100 mt-4" onClick={() => onHandleClaim()}>
      Claim
    </button>
  );
}
