import { BackToTopButton } from "../backToTopButton/backToTopButton";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BackToTopButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
