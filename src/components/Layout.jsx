import { useMatch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const isHome = useMatch("/");

  return (
    <>
      <Header displayHomeCTA={!isHome} />
      <main className="mb-10 mt-10">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
