import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";
import Layout from "../../Layout/Layout";

const App = () => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
};

export default App;
