import { FiArrowRight, FiPackage, FiTrendingUp, FiStar, FiTag } from "react-icons/fi";
import { Link } from 'react-router';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { AuthUser } from '../context/UserContext';

const StatCard = ({ icon: Icon, value, label, subtext, iconColor }) => (
  <div className="bg-[#09090b]/50 border border-zinc-800 p-6 rounded-[2rem] flex items-center gap-5 transition-all hover:border-zinc-700">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5`}>
      <Icon className={`text-xl ${iconColor}`} />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{value}</h3>
      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">{label}</p>
      <p className="text-white/20 text-[10px] mt-0.5">{subtext}</p>
    </div>
  </div>
);

const HomeInfo = () => {
  const { products } = useProducts();
  const { cartItems, totalPrice } = useCart();
  const { logginedUser } = AuthUser();

  const totalProducts = products.length;
  const uniqueCategories = [...new Set(products.map(p => p.category))].length;
  const topRatedCount = products.filter(p => Number(p.rating) >= 4.5).length;
  const formattedCartValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 space-y-8">

      {/* HERO SECTION */}
      <div className="relative w-full bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-[#CAFF00] font-bold text-xs tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
              Good Afternoon <span className="text-base">👋</span>
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Welcome back, <br />
              {/* Name */}
              <span className="text-[#CAFF00] capitalize">
                {logginedUser?.name || 'Guest'}!
              </span>
            </h1>
            <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed mb-10">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/home/shop" className="bg-[#CAFF00] text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-[0_0_30px_rgba(202,255,0,0.15)]">
                Shop Now <FiArrowRight strokeWidth={3} />
              </Link>
              <Link to="/home/shop" className="bg-transparent text-white/80 border border-zinc-700 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all">
                View All Products
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="bg-[#CAFF00]/10 border border-[#CAFF00]/20 p-6 rounded-3xl text-center lg:text-left min-w-[200px]">
              {/* DYNAMIC PRODUCT COUNT */}
              <h4 className="text-3xl font-black text-[#CAFF00]">{totalProducts}+</h4>
              <p className="text-[#CAFF00]/60 text-xs font-bold">Products Available</p>
            </div>
            <div className="bg-transparent border border-zinc-700 p-6 rounded-3xl text-center lg:text-left">
              <h4 className="text-2xl font-black text-white">Free</h4>
              <p className="text-white/30 text-[10px] font-bold">Delivery on $999+</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={FiPackage}
          value={cartItems.length}
          label="Cart Items"
          subtext="In your bag"
          iconColor="text-yellow-500"
        />
        <StatCard
          icon={FiTrendingUp}
          value={formattedCartValue}
          label="Cart Value"
          subtext="Ready to checkout"
          iconColor="text-blue-500"
        />
        <StatCard
          icon={FiStar}
          value={topRatedCount}
          label="Top Products"
          subtext="Highly rated (4.5+)"
          iconColor="text-orange-400"
        />
        <StatCard
          icon={FiTag}
          value={uniqueCategories}
          label="Categories"
          subtext="To explore"
          iconColor="text-purple-500"
        />
      </div>
    </div>
  );
};

export default HomeInfo;