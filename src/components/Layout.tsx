import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
