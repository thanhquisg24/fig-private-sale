import { useEtherBalance, useEthers } from "@usedapp/core";

import { Button } from "react-bootstrap";
import Identicon from "./Identicon";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Button className="btn-connect-wallet getstarted scrollto" onClick={handleOpenModal}>
      <span className="text-white me-2">
        {account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
      </span>
      <Identicon />
    </Button>
  ) : (
    <Button onClick={() => handleConnectWallet()} className="btn-connect-wallet getstarted scrollto">
      Connect to a wallet
    </Button>
  );
}
