import React from "react";
import { accCert, langOptions } from "../../utils/constants";
import { useState } from "react";
import CertContainer from "./CredentialsContainer";

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

  const toggleCertificate = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className="text-4xl md:text-[4rem] font-bold text-gray-400 dark:text-gray-500 absolute top-12 lg:top-[35rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
          CREDENTIALS
        </h1>

        <div className="font-sans bg-gradient-to-br from-[#f8f9ff] to-[#e8eeff] dark:from-[#0f0f2d] dark:to-[#171730] w-full min-h-screen text-gray-800 dark:text-gray-200 pt-24 pb-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0000c8] dark:text-blue-400">
                My Credentials
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Certifications and qualifications that showcase my skills and
                expertise
              </p>
            </div>

            <div className="mb-10">
              <label
                htmlFor="cert-category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Filter by category:
              </label>
              <select
                id="cert-category"
                name="cert-category"
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 w-full text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-md"
                onChange={onChangeCert}
                value={name}
              >
                {langOptions.map((lang) => (
                  <option
                    value={lang.langText}
                    key={lang.id}
                    className="text-sm md:text-base"
                  >
                    {lang.langText}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              {filteredCertificate().map((item, index) => (
                <CertContainer
                  item={item}
                  key={item.id}
                  isExpanded={show === index}
                  onToggle={() => toggleCertificate(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
