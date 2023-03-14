import { ProgressBar } from "react-loader-spinner";

const Loader = (): JSX.Element => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#f51e4d"
      barColor="#f51e4d"
    />
  );
};

export default Loader;
