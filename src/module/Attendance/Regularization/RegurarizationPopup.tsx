import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from "react";

type RegularizationProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegularizationPopup: React.FC<RegularizationProps> = ({
  visible,
  setVisible,
}) => {
    const [value, setValue] = useState('');
  return (
    <div>
      <Dialog
        header="Regularization Detail view"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="grid">
            <div className="col-12 ">
           <div className="status__view">
           <span className="status__text">Status :</span>
            <div className="approved__button">
            Approved
            </div>
           </div>
            </div>
            <div className="col-12 md:col-6 all__alighment__view">
                <div className="input__name">Request type<span className="star__text">*</span></div>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full p-inputtext input__data" />
            </div>
            <div className="col-12 md:col-6 all__alighment__view">
            <div className="input__name">Project<span className="star__text">*</span></div>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full p-inputtext input__data" />
            </div>
            <div className="col-12 all__alighment__view">
            <div className="input__name">To<span className="star__text">*</span></div>
                <div className="dropdown__datas">
                    <div className="ststus__data">Mitchell</div>
                    <div className="ststus__data__next">Francisco</div>
                </div>
            </div>
            <div className="col-12 all__alighment__view">
            <div className="input__name">Description<span className="star__text">*</span></div>
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="w-full p-inputtext input__data" />
   
            </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RegularizationPopup;
