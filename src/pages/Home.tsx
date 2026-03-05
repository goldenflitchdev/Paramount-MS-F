import { ArrowRight, ShieldCheck, Factory, Settings, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero cover.jpg" 
            alt="Paramount Metal Furnitures Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 text-silver-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-burnt-500 animate-pulse"></span>
            Proudly Made in India
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Paramount Metal Furnitures: <br/>
            <span className="text-burnt-500">Precision Engineering in Steel.</span>
          </h1>
          <p className="text-xl text-silver-300 mb-10 max-w-2xl mx-auto font-light">
            India's premier manufacturer and wholesaler of industrial, office, and domestic steel furniture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog" className="inline-flex items-center justify-center gap-2 bg-burnt-600 hover:bg-burnt-500 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg shadow-burnt-500/20">
              View Full Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#powerhouse" className="inline-flex items-center justify-center gap-2 bg-charcoal-800 hover:bg-charcoal-700 text-white px-8 py-4 rounded-lg font-medium transition-all border border-charcoal-700">
              Our Infrastructure
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-burnt-500"></div>
                <span className="text-burnt-600 font-bold tracking-wider uppercase text-sm">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-6 leading-tight">
                A Legacy of Quality & Trust
              </h2>
              <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">
                Operating from our <strong className="text-charcoal-900">Gurugram Headquarters</strong>, Paramount Metal Furnitures brings over <strong className="text-burnt-600">20+ years of expertise</strong> to the Indian steel furniture market. We specialize in robust, aesthetically pleasing, and highly functional furniture for both domestic and office environments.
              </p>
              <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
                Our commitment to quality is reflected in every weld and every coat of paint, ensuring that our products stand the test of time while meeting the evolving needs of modern spaces.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-burnt-500 pl-5">
                  <div className="text-4xl font-display font-bold text-charcoal-900">20+</div>
                  <div className="text-sm text-charcoal-500 font-bold uppercase tracking-wider mt-2">Years Experience</div>
                </div>
                <div className="border-l-4 border-burnt-500 pl-5">
                  <div className="text-4xl font-display font-bold text-charcoal-900">100%</div>
                  <div className="text-sm text-charcoal-500 font-bold uppercase tracking-wider mt-2">In-House Mfg</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/welding-sparks/800/600" 
                  alt="Welding Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-charcoal-900 p-8 rounded-2xl text-white hidden md:block shadow-xl border border-charcoal-800">
                <ShieldCheck className="w-12 h-12 text-burnt-500 mb-4" />
                <div className="font-display font-bold text-xl">Premium Quality</div>
                <div className="text-silver-400 text-sm mt-2">Guaranteed Durability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Powerhouse */}
      <section id="powerhouse" className="py-24 bg-charcoal-900 text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-burnt-500"></div>
              <span className="text-burnt-500 font-bold tracking-wider uppercase text-sm">Infrastructure</span>
              <div className="h-px w-8 bg-burnt-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Manufacturing Powerhouse</h2>
            <p className="text-silver-400 text-lg font-light">
              Our state-of-the-art manufacturing units deliver scale, precision, and unmatched quality to serve the entire nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Nasik Card */}
            <div className="group bg-charcoal-800 rounded-3xl p-10 border border-charcoal-700 hover:border-burnt-500 transition-all duration-300 hover:shadow-2xl hover:shadow-burnt-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-charcoal-900 rounded-2xl flex items-center justify-center mb-8 border border-charcoal-700 group-hover:border-burnt-500/50 transition-colors">
                <Factory className="w-8 h-8 text-burnt-500" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-3">Nasik Factory</h3>
              <div className="inline-block px-3 py-1 bg-charcoal-900 text-burnt-500 font-bold rounded-md mb-6 uppercase tracking-wider text-xs border border-charcoal-700">Manufacturing Unit 1</div>
              <p className="text-silver-400 text-lg leading-relaxed">
                Equipped with advanced precision spot welding technology and automated powder coating lines. This facility is dedicated to producing our premium domestic cabinets and Italian series with flawless finishes.
              </p>
            </div>

            {/* Pune Card */}
            <div className="group bg-charcoal-800 rounded-3xl p-10 border border-charcoal-700 hover:border-burnt-500 transition-all duration-300 hover:shadow-2xl hover:shadow-burnt-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-charcoal-900 rounded-2xl flex items-center justify-center mb-8 border border-charcoal-700 group-hover:border-burnt-500/50 transition-colors">
                <Settings className="w-8 h-8 text-burnt-500" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-3">Pune Factory</h3>
              <div className="inline-block px-3 py-1 bg-charcoal-900 text-burnt-500 font-bold rounded-md mb-6 uppercase tracking-wider text-xs border border-charcoal-700">Manufacturing Unit 2</div>
              <p className="text-silver-400 text-lg leading-relaxed">
                Our heavy-duty facility specializing in industrial racks, office tables, and large-scale storage solutions. Built to handle massive volume while maintaining strict quality control standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-silver-300/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-burnt-500"></div>
                <span className="text-burnt-600 font-bold tracking-wider uppercase text-sm">Our Catalog</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">Featured Categories</h2>
            </div>
            <Link to="/catalog" className="inline-flex items-center gap-2 text-burnt-600 font-bold hover:text-burnt-700 transition-colors group">
              View All Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Domestic Cabinets', img: '/images/Cabinet_with_Locker_Drawer.png', desc: 'Premium wardrobes with lockers and mirrors.' },
              { title: 'Office Cabinets', img: '/images/Glass_Door_Cabinet.png', desc: 'Storewells, filing cabinets, and glass door units.' },
              { title: 'Italian Series', img: '/images/Italian_Cabinet.png', desc: 'Modern aesthetics with Italian hinges and shoe drawers.' },
              { title: 'Office Tables', img: '/images/Executive_Table.png', desc: 'Executive and single tables with Nova Pan tops.' }
            ].map((category, idx) => (
              <Link to="/catalog" key={idx} className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-silver-300/50 hover:shadow-xl hover:border-burnt-500/30 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative bg-white p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors z-10"></div>
                  <img 
                    src={category.img} 
                    alt={category.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/${idx + 100}/600/800`;
                      e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2 group-hover:text-burnt-600 transition-colors">{category.title}</h3>
                  <p className="text-charcoal-600 text-sm">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
