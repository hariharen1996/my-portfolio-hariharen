import React from "react";
import Navbar from "./Navbar";
import { accCert, langOptions } from "../utils/constants";
import { useState } from "react";
import CertContainer from "../pages/CertContainer";

const Certificates = () => {
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

  console.log(filteredCertificate());

  return (
    <div>
      <Navbar />
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className="text-2xl my-3 md:text-3xl text-center underline">
          Certificates
        </h1>
        <div className="flex justify-center items-center my-5">
          <select
            name="lang"
            id="lang"
            className="bg-gray-900 w-full mx-2 md:w-96 text-white p-2 border rounded-md"
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

export default Certificates;
