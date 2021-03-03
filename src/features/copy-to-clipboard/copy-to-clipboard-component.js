import React, { useRef } from "react";
import CustomInput from "../../common/components/custom-input/custom-input";
import "./copy-to-clipboard.scss";

const CopyToClipboard = () => {
  const inputRef = useRef();
  const paramDisplayRef = useRef();
  const urlParams = new URLSearchParams(window.location.search);
  const handleCopytoClipBoardClik = (element) => {
    const currentElement = element.current;
    currentElement.select();

    document.execCommand("copy");
  };
  return (
    <div className="copy-to-clipboard-container">
      <section className="copy-to-clipboard">
        <div className="row">
          <CustomInput
            inputRef={inputRef}
            label={"Enter any text"}
            type={"text"}
          />
          <button onClick={() => handleCopytoClipBoardClik(inputRef)}>
            <i className="fa fa-clipboard" aria-hidden="true"></i>
            Copy text to clipboard
          </button>
        </div>
        <div className="row">
          <CustomInput
            inputRef={paramDisplayRef}
            label={"Q Param"}
            type={"text"}
            value={urlParams.get("q") || ""}
            onChange={() => {}}
          />
          <button onClick={() => handleCopytoClipBoardClik(paramDisplayRef)}>
            <i className="fa fa-clipboard" aria-hidden="true"></i>
            Copy Q Param
          </button>
        </div>
      </section>
    </div>
  );
};

export default CopyToClipboard;
