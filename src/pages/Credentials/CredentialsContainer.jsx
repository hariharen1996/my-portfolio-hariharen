import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "../../components/Loading";

const CredentialsContainer = ({ item, isExpanded, onToggle, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1d1d2e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{index + 1}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.issuer || "Professional Certification"}</p>
          </div>
        </div>
        <div className="flex items-center">
          {item.certLink && (
            <a
              href={item.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
              title="View certificate"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
          {isExpanded ? (
            <FaChevronUp className="text-gray-500 dark:text-gray-400" />
          ) : (
            <FaChevronDown className="text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </button>


      {isExpanded && (
        <div className="px-5 pb-5">
          {item.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-5">{item.description}</p>
          )}
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            {!item.imageURL || imageError ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="mb-4">
                  <Loading />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {imageError ? "Failed to load image" : "Loading certificate..."}
                </p>
              </div>
            ) : (
              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse rounded-full h-12 w-12 bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                )}
                <img
                  src={item.imageURL}
                  alt={item.title}
                  className={`w-full rounded-lg shadow-md ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </div>

          {(item.issueDate || item.expiryDate) && (
            <div className="flex flex-wrap gap-4 mt-4">
              {item.issueDate && (
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Issued:</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{item.issueDate}</span>
                </div>
              )}
              {item.expiryDate && (
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Expires:</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{item.expiryDate}</span>
                </div>
              )}
            </div>
          )}

          {item.certLink && (
            <div className="mt-5">
              <a
                href={item.certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <FaExternalLinkAlt className="mr-2" size={12} />
                Verify this certificate
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CredentialsContainer;