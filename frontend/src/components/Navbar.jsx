import { Link } from 'react-router-dom';
import useThemeStore from '../store/themeStore';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Books', path: '/books' },
    { name: 'Poetry', path: '/poetry' },
    { name: 'Fan Corner', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-charcoal/10 dark:border-cream/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold tracking-wider">
              MEHAK SETHI
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-widest hover:text-burgundy dark:hover:text-dustyRose transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/books" className="px-6 py-2 bg-charcoal text-cream dark:bg-cream dark:text-charcoal rounded-none hover:bg-burgundy dark:hover:bg-dustyRose transition-colors font-medium">
              Explore Books
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-cream dark:bg-charcoal border-b border-charcoal/10 dark:border-cream/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium uppercase tracking-wider hover:text-burgundy dark:hover:text-dustyRose"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/books"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-2 text-base font-medium bg-charcoal text-cream dark:bg-cream dark:text-charcoal text-center"
            >
              Explore Books
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
