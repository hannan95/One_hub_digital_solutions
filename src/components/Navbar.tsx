import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Layers className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-serif font-bold text-neutral-800">Onehub Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/about" className="text-neutral-700 hover:text-emerald-600 transition-colors">About</Link>
            <Link to="/services" className="text-neutral-700 hover:text-emerald-600 transition-colors">Services</Link>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block text-neutral-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/about" className="block text-neutral-700 hover:text-emerald-600 transition-colors">About</Link>
            <Link to="/services" className="block text-neutral-700 hover:text-emerald-600 transition-colors">Services</Link>
            <Link to="/contact" className="btn btn-primary w-full">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
  