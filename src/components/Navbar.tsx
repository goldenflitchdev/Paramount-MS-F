import { Link } from 'react-router-dom';
import { Factory } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-charcoal-900 border-b border-charcoal-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Factory className="h-8 w-8 text-burnt-500" />
            <span className="font-display font-bold text-xl text-white tracking-tight">
              PARAMOUNT <span className="text-silver-400 font-normal">METAL FURNITURES</span>
            </span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-silver-300 hover:text-burnt-500 font-medium transition-colors">
              Home
            </Link>
            <Link to="/catalog" className="text-silver-300 hover:text-burnt-500 font-medium transition-colors">
              Catalog & Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
