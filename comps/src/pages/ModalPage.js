import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClick}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClick} actionBar={actionBar}>
      <p>Here is some important information that I'd like you to reviwe</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isVisible && modal}
    </div>
  );
}

export default ModalPage;
