import Header from "../common/Header";
import Footer from "../common/Footer";
import Extra from "../common/Optional";

type LayoutProps = {
  children: React.ReactNode;
};

export const WEBSITE_HOST_URL = 'https://www.quacthemes.ml';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
  <>
<Header />
{children}
<Footer />
<Extra />
</>
);
}
export default Layout;