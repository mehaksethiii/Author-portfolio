import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream dark:bg-black dark:text-cream/80 py-12 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-2">Mehak Sethi</h2>
            <p className="text-cream/60 italic font-serif">"Author • poetess • Storyteller"</p>
            <p className="mt-6 text-sm text-cream/40 max-w-sm">
              "She remembered who she was and the game changed!!!"
              <br/><br/>
              "One day, the girl with the books became the woman writing them!"
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-dustyRose">Navigation</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors">Books</Link></li>
              <li><Link to="/poetry" className="hover:text-white transition-colors">Poetry</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Reader Corner</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-dustyRose">Connect</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="https://share.google/WeKiJ3Y4hwpEdU0oq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Mehak Sethi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

