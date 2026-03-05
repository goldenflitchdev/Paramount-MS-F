import { useState } from 'react';
import { products, categories, Category } from '../data/products';
import { Filter, Send, Search, Ruler, ShieldCheck } from 'lucide-react';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.modelNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-charcoal-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-burnt-500"></div>
            <span className="text-burnt-500 font-bold tracking-wider uppercase text-sm">Our Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">Digital Catalog</h1>
          <p className="text-silver-400 text-lg max-w-2xl font-light">
            Explore our comprehensive range of precision-engineered steel furniture. From domestic cabinets to heavy-duty office storage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters & Search */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              
              {/* Search */}
              <div>
                <label className="block text-sm font-bold text-charcoal-900 mb-3 uppercase tracking-wider">Search</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search by name or model..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10"
                  />
                  <Search className="w-5 h-5 text-silver-500 absolute left-3 top-3.5" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-silver-300">
                  <Filter className="w-5 h-5 text-charcoal-900" />
                  <h2 className="font-display font-bold text-lg text-charcoal-900">Categories</h2>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === 'All' 
                        ? 'bg-burnt-500 text-white shadow-md shadow-burnt-500/20' 
                        : 'text-charcoal-700 hover:bg-silver-300/30'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === cat 
                          ? 'bg-burnt-500 text-white shadow-md shadow-burnt-500/20' 
                          : 'text-charcoal-700 hover:bg-silver-300/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="mb-6 text-sm font-medium text-charcoal-500">
              Showing {filteredProducts.length} products
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-silver-300/10 rounded-3xl border border-silver-300/50">
                <Search className="w-12 h-12 text-silver-400 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">No products found</h3>
                <p className="text-charcoal-600">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="group bg-white border border-silver-300 rounded-3xl overflow-hidden hover:shadow-xl hover:border-burnt-500/30 transition-all duration-300 flex flex-col"
                  >
                    <div className="aspect-[4/5] bg-white overflow-hidden relative p-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors z-10"></div>
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = `https://picsum.photos/seed/${product.id}/600/800`;
                          e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50";
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs font-bold text-burnt-600 mb-3 tracking-wider uppercase bg-burnt-500/10 inline-block px-2 py-1 rounded-md self-start">{product.category}</div>
                      <h3 className="font-display font-bold text-xl text-charcoal-900 mb-1">{product.name}</h3>
                      <div className="text-sm text-charcoal-500 mb-6 font-mono">{product.modelNo}</div>
                      
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="mt-auto w-full py-3 bg-charcoal-900 text-white rounded-xl font-medium text-sm hover:bg-burnt-600 transition-colors shadow-md"
                      >
                        View Specs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wholesale Inquiry Form Section */}
      <section className="bg-charcoal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-burnt-500/10 mb-6">
                <Send className="w-8 h-8 text-burnt-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">Wholesale Inquiry</h2>
              <p className="text-charcoal-600 text-lg">Partner with us for bulk orders. Operating from our <strong>Gurugram Headquarters</strong>, with state-of-the-art manufacturing facilities in <strong>Nasik</strong> and <strong>Pune</strong>, we are equipped to handle any scale. Fill out the form below and our sales team will contact you within 24 hours.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wider">Company Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10" placeholder="Acme Furniture Ltd." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wider">City</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10" placeholder="Mumbai" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wider">Quantity Required</label>
                  <input type="number" className="w-full px-5 py-4 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10" placeholder="e.g. 50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wider">Product of Interest</label>
                <select className="w-full px-5 py-4 rounded-xl border border-silver-300 focus:ring-2 focus:ring-burnt-500 focus:border-burnt-500 outline-none transition-all bg-silver-300/10 appearance-none">
                  <option value="">Select a product category...</option>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  <option value="Custom">Custom Manufacturing</option>
                </select>
              </div>
              
              <button className="w-full bg-burnt-600 hover:bg-burnt-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-burnt-500/30 mt-8 text-lg">
                Submit Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Product Specs Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">
            
            <div className="w-full md:w-2/5 bg-white relative p-8 flex items-center justify-center">
              <img 
                src={selectedProduct.imageUrl} 
                alt={selectedProduct.name} 
                className="w-full h-full object-contain min-h-[300px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${selectedProduct.id}/600/800`;
                  e.currentTarget.className = "w-full h-full object-cover min-h-[300px] opacity-50";
                }}
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-burnt-600 uppercase tracking-wider">
                {selectedProduct.category}
              </div>
            </div>
            
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-2">{selectedProduct.name}</h2>
              <div className="text-charcoal-500 font-mono mb-8 pb-6 border-b border-silver-300 text-lg">{selectedProduct.modelNo}</div>
              
              <div className="mb-8">
                <p className="text-charcoal-700 leading-relaxed text-lg">{selectedProduct.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {/* Dimensions */}
                <div className="bg-silver-300/10 p-6 rounded-2xl border border-silver-300/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Ruler className="w-6 h-6 text-burnt-500" />
                    <h4 className="font-display font-bold text-charcoal-900 text-lg">Dimensions</h4>
                  </div>
                  <ul className="space-y-3">
                    {selectedProduct.sizes.map((size, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-charcoal-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-burnt-500 mt-2 shrink-0"></span>
                        <span className="font-mono">{size}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material & Finish */}
                <div className="bg-silver-300/10 p-6 rounded-2xl border border-silver-300/50">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-burnt-500" />
                    <h4 className="font-display font-bold text-charcoal-900 text-lg">Material & Finish</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt-500 mt-2 shrink-0"></span>
                      <span>High-Grade Steel</span>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt-500 mt-2 shrink-0"></span>
                      <span>Precision Spot Welding</span>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt-500 mt-2 shrink-0"></span>
                      <span>Oven Baked Powder Coating</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-6 flex gap-4">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-4 border-2 border-charcoal-200 text-charcoal-900 rounded-xl font-bold hover:bg-silver-300/20 transition-colors"
                >
                  Close Specs
                </button>
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}
                  className="flex-1 py-4 bg-burnt-600 text-white rounded-xl font-bold hover:bg-burnt-500 transition-colors shadow-lg shadow-burnt-500/20"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
