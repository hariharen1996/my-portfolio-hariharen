import { Audio } from "react-loader-spinner";

const FallbackLoad = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1770c8] dark:bg-[#171730]">
      <Audio
        height="80"
        width="80"
        color="#fff"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
};

export default FallbackLoad;
