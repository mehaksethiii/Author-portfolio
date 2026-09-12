import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-serif mb-6 text-charcoal/20 dark:text-cream/20">404</h1>
        <h2 className="text-3xl font-serif mb-4">A Missing Page</h2>
        <p className="text-charcoal/60 dark:text-cream/60 mb-8 max-w-md mx-auto italic font-serif">
          "The page you're looking for seems to have wandered into another story."
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 border border-charcoal dark:border-cream hover:bg-charcoal hover:text-cream dark:hover:bg-cream dark:hover:text-charcoal transition-colors uppercase tracking-widest text-sm"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
