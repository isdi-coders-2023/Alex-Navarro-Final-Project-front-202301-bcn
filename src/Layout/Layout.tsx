import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useAppSelector } from "../store/hooks";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  return (
    <>
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
