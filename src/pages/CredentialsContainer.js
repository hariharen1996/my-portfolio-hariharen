import React from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";

const CredentialsContainer = ({ item, showCert, setShowCert }) => {
  const handleShow = () => {
    setShowCert();
  };
  return (
    <div className="bg-white dark:bg-[#171720] shadow-lg shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-xl w-[90%] lg:w-[50%] p-2 m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-lg text-black dark:text-white">
          {item.title}
        </h1>
        <button
          onClick={handleShow}
          className="cursor-pointer text-black dark:text-white"
        >
          {showCert ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </button>
      </div>
      {showCert && (
        <div>
          {!item.imageURL ? (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          ) : (
            <img
              src={item.imageURL}
              alt={item.title}
              className="w-full object-cover my-5"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CredentialsContainer;
