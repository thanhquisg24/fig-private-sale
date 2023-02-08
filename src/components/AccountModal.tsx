import { Button, Modal } from "react-bootstrap";

import Identicon from "./Identicon";
import { Link } from "react-router-dom";
import { useEthers } from "@usedapp/core";

type Props = {
  isOpen: any;
  onClose: any;
};

export default function AccountModal({ isOpen, onClose }: Props) {
  const { account, deactivate } = useEthers();

  function handleDeactivateAccount() {
    deactivate();
    onClose();
  }

  return (
    <Modal show={isOpen} onHide={onClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <span>Connected with MetaMask</span>
          <Button variant="outline" size="sm" onClick={() => handleDeactivateAccount()}>
            Change
          </Button>
        </div>

        <div>
          <Identicon />
          <span>{account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}</span>
        </div>
        <Button variant="link">
          {/* <CopyIcon mr={1} /> */}
          Copy Address
        </Button>
        <a href={`https://ropsten.etherscan.io/address/${account}`}>
          {/* <ExternalLinkIcon mr={1} /> */}
          View on Explorer
        </a>
      </Modal.Body>
    </Modal>
  );
}
