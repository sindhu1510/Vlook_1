import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./index.scss";
type ImportPopupProps = {
  visibleTwo: boolean;
  setVisibleTwo: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExportModal: React.FC<ImportPopupProps> = ({
  visibleTwo,
  setVisibleTwo,
}) => {
  const hideDialog = () => {
    setVisibleTwo(false);
  };
  return (
    <div>
      <Dialog
        visible={visibleTwo}
        style={{ width: "22vw" }}
        onHide={hideDialog}
        className="custom-modal"
        modal
        closable={false}
      >
        <div className="modal-content">
          <div className="text__do">Do you want to export this task?</div>
          <div className="button__view">
            <Button className="button__no" label="No" onClick={hideDialog} />
            <Button className="button__yes" label="Yes" onClick={hideDialog} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ExportModal;
