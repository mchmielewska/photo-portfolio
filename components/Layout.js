import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <main>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
