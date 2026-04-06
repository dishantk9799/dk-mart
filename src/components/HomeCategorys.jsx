import { FiArrowRight, FiStar, FiZap, FiShield, FiTag, FiShoppingBag } from "react-icons/fi";
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router';

const HomeCategorys = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/home/shop?category=${categoryName}`);
  };

  const categories = [
    { name: "Electronics", icon: "💻" },
    { name: "Clothing", icon: "🥼" },
    { name: "Furniture", icon: "🚪" },
    { name: "Home", icon: "🏠" },
    { name: "Sports", icon: "🏏" },
    { name: "Accessories", icon: "🕶️" },
  ].map(cat => ({
    ...cat,
    count: products.filter(p => p.category === cat.name).length
  }));

  const topRatedProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const newArrivals = [...products].reverse().slice(0, 5);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-20 space-y-20">

      {/* CATEGORY SECTION */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
          <Link to="/home/shop" className="text-[#CAFF00] text-sm font-bold flex items-center gap-1 hover:underline">
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.name)}
              className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-[1.02] hover:border-zinc-700 transition-all"
            >
              <span className="text-4xl mb-4 transition-all">{cat.icon}</span>
              <h3 className="text-zinc-200 font-bold text-lg">{cat.name}</h3>
              <p className="text-zinc-500 text-sm font-medium">{cat.count} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP RATED & NEW ARRIVALS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Top Rated List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-200 flex items-center gap-2">
              <FiStar className="text-orange-400 fill-orange-400" /> Top Rated
            </h2>
            <Link to="/home/shop" className="text-[#CAFF00] text-xs font-bold hover:underline">See all →</Link>
          </div>
          <div className="space-y-4">
            {topRatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/home/product/${item.id}`)} 
                className="flex items-center justify-between p-3 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-all group cursor-pointer hover:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold truncate w-32 md:w-48 group-hover:text-[#CAFF00] transition-colors">{item.name}</p>
                    <span className="text-[#CAFF00] font-black text-lg">${item.price}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="w-10 h-10 flex items-center justify-center bg-[#CAFF00]/10 rounded-xl text-[#CAFF00] hover:bg-[#CAFF00] hover:text-black transition-all"
                >
                  <FiShoppingBag />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-200 flex items-center gap-2">
              <FiZap className="text-[#CAFF00] fill-[#CAFF00]" /> New Arrivals
            </h2>
            <Link to="/home/shop" className="text-[#CAFF00] text-xs font-bold hover:underline">See all →</Link>
          </div>
          <div className="space-y-4">
            {newArrivals.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/home/product/${item.id}`)}
                className="flex items-center justify-between p-3 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-all group cursor-pointer hover:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold truncate w-32 md:w-48 group-hover:text-[#CAFF00] transition-colors">{item.name}</p>
                    <span className="text-[#CAFF00] font-black text-lg">${item.price}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="w-10 h-10 flex items-center justify-center bg-[#CAFF00]/10 rounded-xl text-[#CAFF00] hover:bg-[#CAFF00] hover:text-black transition-all"
                >
                  <FiShoppingBag />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#CAFF00]/10">
            <FiZap className="text-[#CAFF00] text-xl" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Fast Delivery</h4>
            <p className="text-white/30 text-xs">Same-day on select items</p>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/10">
            <FiShield className="text-blue-500 text-xl" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Secure Payments</h4>
            <p className="text-white/30 text-xs">100% encrypted checkout</p>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-500/10">
            <FiTag className="text-emerald-500 text-xl" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Best Prices</h4>
            <p className="text-white/30 text-xs">Price-match guarantee</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeCategorys;