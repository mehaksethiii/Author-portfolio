import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CurrentlyReading from './pages/CurrentlyReading';
import UpcomingBooks from './pages/UpcomingBooks';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Poetry from './pages/Poetry';
import FanCorner from './pages/FanCorner';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useEffect } from 'react';
import useThemeStore from './store/themeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/currently-reading" element={<CurrentlyReading />} />
            <Route path="/upcoming-books" element={<UpcomingBooks />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/community" element={<FanCorner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




