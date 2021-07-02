import Header from "../Organs/Head";
import Footer from "../Organs/Foot";
import Extra from "../Organs/Extra";
const HomeLayout = () =>
function HomeLayout({children}) {
return (
  <>
<Header />
{children}
<Footer />
<Extra />
</>
);
}
export default HomeLayout;