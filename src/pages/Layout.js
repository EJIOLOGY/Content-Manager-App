import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ActiveResource from "components/ActiveResource";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ActiveResource />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
