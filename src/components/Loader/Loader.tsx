import { ProgressBar } from "react-loader-spinner";
import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#f51e4d"
        barColor="#f51e4d"
      />
    </LoaderStyled>
  );
};

export default Loader;
