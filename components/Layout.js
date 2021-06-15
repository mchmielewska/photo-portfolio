import Footer from './Footer';

import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <main>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
