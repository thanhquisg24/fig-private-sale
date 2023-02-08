import { Button, Modal } from "react-bootstrap";

import Identicon from "./Identicon";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-between">
          <b>Connected with MetaMask</b>
          <Button variant="outline-danger" size="sm" onClick={() => handleDeactivateAccount()}>
            <i className="fa-solid fa-power-off"></i> Disconnect wallet
          </Button>
        </div>

        <div className="d-flex flex-row p-2">
          <Identicon />
          <span className="ms-2">
            {account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
          </span>
        </div>

        <div className="d-flex flex-row p-2">
          <CopyToClipboard text={account || ""}>
            <Button variant="link">
              <i className="fa-solid fa-copy fa-lg"></i> Copy Address
            </Button>
          </CopyToClipboard>
          <Button variant="link">
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i> View on Explorer
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
