import React from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CertContainer = ({ item, showCert, setShowCert }) => {
  const handleShow = () => {
    setShowCert();
  };
  return (
    <div className="bg-[#171720] shadow-lg shadow-indigo-500/50 w-[90%] lg:w-[50%] p-2 m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-lg">{item.title}</h1>
        <button onClick={handleShow} className="cursor-pointer">
          {showCert ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </button>
      </div>
      {showCert && (
        <Link to={item?.certLink} target="_blank">
          <img
            src={item.imageURL}
            alt={item.title}
            className={`w-full object-cover my-5 ${
              item.certLink ? "cursor-pointer" : "cursor-default"
            }`}
          />
        </Link>
      )}
    </div>
  );
};

export default CertContainer;
