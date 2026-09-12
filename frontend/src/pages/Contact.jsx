import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'General Message',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('http://localhost:5000/api/messages', formData);
      setStatus('success');
      setFormData({ name: '', email: '', reason: 'General Message', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-24 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl font-serif mb-6">Write to Me</h1>
          <p className="text-charcoal/70 dark:text-cream/70 mb-8 leading-relaxed">
            Whether you want to share your thoughts on my books, request a collaboration, or just say hello—I'd love to hear from you. 
          </p>
          <div className="space-y-6 text-sm tracking-widest uppercase">
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Email</h3>
              <a href="mailto:sethiimehak21@gmail.com" className="text-lg hover:text-burgundy dark:hover:text-dustyRose transition-colors uppercase tracking-wider">
                sethiimehak21@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-charcoal/40 dark:text-cream/40 mb-1">Social</span>
              <a href="https://share.google/WeKiJ3Y4hwpEdU0oq" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy dark:hover:text-dustyRose transition-colors">Instagram</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[var(--color-dark-brown)] p-8 shadow-sm border border-charcoal/5 dark:border-cream/5 space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-b border-charcoal/20 dark:border-cream/20 bg-transparent focus:outline-none focus:border-charcoal dark:focus:border-cream transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-b border-charcoal/20 dark:border-cream/20 bg-transparent focus:outline-none focus:border-charcoal dark:focus:border-cream transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Reason</label>
              <select 
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-3 border-b border-charcoal/20 dark:border-cream/20 bg-transparent focus:outline-none focus:border-charcoal dark:focus:border-cream transition-colors appearance-none cursor-pointer"
              >
                <option value="General Message" className="bg-cream dark:bg-charcoal text-charcoal dark:text-cream">General Message</option>
                <option value="Book Feedback" className="bg-cream dark:bg-charcoal text-charcoal dark:text-cream">Book Feedback</option>
                <option value="Collaboration Request" className="bg-cream dark:bg-charcoal text-charcoal dark:text-cream">Collaboration Request</option>
                <option value="Fan Message" className="bg-cream dark:bg-charcoal text-charcoal dark:text-cream">Fan Message</option>
                <option value="PDF Purchase Request" className="bg-cream dark:bg-charcoal text-charcoal dark:text-cream">PDF Purchase Request</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Message</label>
              <textarea 
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border-b border-charcoal/20 dark:border-cream/20 bg-transparent focus:outline-none focus:border-charcoal dark:focus:border-cream transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full py-4 bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:bg-burgundy dark:hover:bg-dustyRose transition-colors tracking-widest uppercase text-sm font-medium disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center text-sm text-green-700 dark:text-green-400 mt-4"
              >
                Your message has been sent successfully.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center text-sm text-red-700 dark:text-red-400 mt-4"
              >
                Error sending message.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
