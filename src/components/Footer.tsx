import { Factory, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-silver-400 py-16 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Factory className="h-8 w-8 text-burnt-500" />
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                PARAMOUNT
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Leading Indian iron & steel furniture manufacturer and wholesaler. We engineer durable, high-quality solutions for domestic, office, and industrial spaces with precision spot welding and premium powder coating.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-burnt-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-500"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-burnt-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-500"></span>
                  Digital Catalog & Inquiries
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Headquarters</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-burnt-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block mb-1">Gurugram HQ</strong>
                  Sector 34, Industrial Area,<br />
                  Gurugram, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-burnt-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-burnt-500 shrink-0" />
                <span>sales@paramountmetal.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>&copy; {new Date().getFullYear()} Paramount Metal Furnitures. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Manufacturing Units: Nasik & Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
