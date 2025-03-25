import React from "react";
import { accCert, langOptions } from "../utils/constants";
import { useState } from "react";
import CertContainer from "../pages/CredentialsContainer";

const Credentials = () => {
  const [show, setShow] = useState(0);
  const [names, setNames] = useState(langOptions[0].langText);

  const onChangeCert = (e) => {
    setNames(e.target.value);
  };

  const filteredCertificate = () => {
    const certData = accCert.filter((item) => item.certName === names);
    if (names === "ALL") {
      return accCert;
    } else {
      return certData;
    }
  };

  return (
    <div>
      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className="text-4xl md:text-[4rem] font-bold text-gray-400 dark:text-gray-500 absolute top-12 lg:top-[35rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
          CREDENTIALS
        </h1>
        <div className="flex justify-center items-center my-5">
          <select
            name="lang"
            id="lang"
            className="bg-white dark:bg-gray-900 w-full mx-2 md:w-96 text-black dark:text-white p-2 border rounded-md"
            onChange={onChangeCert}
            value={names}
          >
            {langOptions.map((lang) => (
              <option
                value={lang.langText}
                key={lang.id}
                className="text-sm md:text-lg"
              >
                {lang.langText}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full items-center">
          {filteredCertificate().map((item, index) => (
            <CertContainer
              item={item}
              key={item.id}
              showCert={show === index ? true : false}
              setShowCert={() => setShow(index === show ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
