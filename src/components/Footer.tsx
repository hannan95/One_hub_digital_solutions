import  { Link } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-serif font-bold text-white">Onehub Solutions</span>
            </div>
            <p className="text-neutral-400 mt-4">
              Transforming brands through innovative meta advertising strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-emerald-500 transition-colors">Meta Advertising</li>
              <li className="hover:text-emerald-500 transition-colors">Social Media Management</li>
              <li className="hover:text-emerald-500 transition-colors">Content Strategy</li>
              <li className="hover:text-emerald-500 transition-colors">Brand Development</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span>info@onehubsolutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span>123 Digital Avenue, Tech City, TC 10101</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 pt-6 text-neutral-400 text-sm flex flex-col md:flex-row justify-between">
          <div>© 2023 Onehub Solutions. All rights reserved.</div>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-emerald-500 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  