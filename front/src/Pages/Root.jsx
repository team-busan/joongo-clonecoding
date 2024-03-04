import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
