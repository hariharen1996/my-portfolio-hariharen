import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1770c8] dark:bg-[#171730]">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
