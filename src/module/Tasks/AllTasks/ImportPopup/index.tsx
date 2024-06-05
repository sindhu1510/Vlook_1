import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import "./index.scss";
import SvgUpload from "../../../../assets/icons/SvgUpload";
import { Button } from "primereact/button";

type ImportPopupProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImportPopup: React.FC<ImportPopupProps> = ({ visible, setVisible }) => {
  const [value, setValue] = useState("");
  const toast: any = useRef<Toast>(null);

  const onUpload = (event: any) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded: " + event.files[0].name,
    });
  };

  return (
    <div>
      <Dialog
        header="Import File"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="grid import__popup__view">
          <div className="col-12 md:col-12 all__alighment__view">
            <div className="input__name">
              File Name<span className="star__text">*</span>
            </div>
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-inputtext input__data"
              placeholder="Tasks Excel"
            />
          </div>
          <div className="col-12 md:col-12 all__alighment__view">
            <Toast ref={toast} />
            <div className="input__name">
              Upload File<span className="star__text">*</span>
            </div>
            <div className=" mt-2 file__selector ">
              <FileUpload
              className="filee"
                mode="basic"
                name="demo[]"
                customUpload
                url="/api/upload" 
                accept="image/*" 
                maxFileSize={1000000} 
                onUpload={onUpload}
              />
              {/* <div className="icon__click__option">
                <SvgUpload />
                <div className="upload__caption my-2">Upload</div>
              </div> */}
            </div>
          </div>
          <div className='col-12 button__view__main'>
                        <div className='button__view' >
                            <Button className='button__style' label='Import' />
                        </div>
                    </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ImportPopup;
