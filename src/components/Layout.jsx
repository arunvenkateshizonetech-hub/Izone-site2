import Footer from '@/components/Footer';
import ScrollToTopButton from './ScrollToTopButton';
import Navbar from './Navbar';
import CursorRings from '@/components/ui/Rings';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { pageTransition } from '@/lib/animations';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <ScrollToTopButton />
      <CursorRings />
      <Footer />
    </div>
  );
};

export default Layout;

