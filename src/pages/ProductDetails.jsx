import { FiArrowLeft, FiStar, FiShoppingCart, FiHeart, FiTruck, FiShield, FiRefreshCw, FiChevronLeft, FiChevronRight, FiMinus, FiPlus, FiCheck } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { cartItems, addToCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));
  const p = product;
  const itemInCart = cartItems.find(item => item.id === p?.id);
  const isInCart = !!itemInCart;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button
          onClick={() => navigate('/home/shop')}
          className="text-[#CAFF00] underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">

        <nav className="flex items-center gap-2 text-zinc-500 text-sm mb-8 font-medium">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-1" />
            <span>Back</span>
          </button>
          <span>/</span>
          <span
            className="hover:text-white cursor-pointer transition-colors"
            onClick={() => navigate('/home/shop')}
          >
            Products
          </span>
          <span>/</span>
          <span className="text-zinc-300">{p.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="bg-white rounded-[3rem] p-10 md:p-20 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-8 py-4">
            <div className="space-y-4">
    
              <span className="inline-block px-4 py-1 rounded-full border border-[#CAFF00]/40 text-[#CAFF00] text-xs font-bold bg-[#CAFF00]/5 uppercase tracking-widest">
                {p.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {p.name}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`fill-current ${i < Math.floor(p.rating) ? 'opacity-100' : 'opacity-30'}`}
                    />
                  ))}
                </div>
                <span className="text-zinc-300 font-bold">{p.rating}</span>
                <span className="text-zinc-500 font-medium text-sm">({p.reviews} reviews)</span>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-800 w-full"></div>

            {/* Price */}
            <div className="text-5xl md:text-6xl font-black text-[#CAFF00] tracking-tighter">
              ${p.price}
            </div>

            <div className="h-[1px] bg-zinc-800 w-full"></div>

            {/* Description */}
            <p className="text-zinc-400 text-base leading-relaxed max-w-md font-medium">
              {p.description}
            </p>

            <div className="space-y-4">
              {isInCart ? (
                <>
                  <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                    <span className="text-zinc-500 font-bold text-sm">In cart:</span>
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => updateQuantity(p.id, 'minus')}
                        className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                      >
                        <FiMinus />
                      </button>
                      <span className="text-2xl font-black text-white w-4 text-center">
                        {itemInCart.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(p.id, 'plus')}
                        className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 h-14 rounded-2xl font-black text-lg flex items-center justify-center gap-2 cursor-default">
                      <FiCheck className="text-xl" strokeWidth={3} /> Added to Cart
                    </div>
                    <button className="w-14 h-14 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400">
                      <FiHeart size={24} />
                    </button>
                  </div>
                </>
              ) : (
    
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => addToCart(p)}
                    className="flex-1 bg-[#CAFF00] text-black h-14 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    <FiShoppingCart strokeWidth={3} /> Add to Cart
                  </button>
                  <button className="w-14 h-14 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-red-500 transition-all">
                    <FiHeart size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center gap-1 group">
                <FiTruck className="text-[#CAFF00] mb-1" />
                <p className="text-white text-[10px] font-black uppercase">Free Delivery</p>
                <p className="text-zinc-600 text-[8px] font-bold">On orders $50+</p>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center gap-1">
                <FiShield className="text-[#CAFF00] mb-1" />
                <p className="text-white text-[10px] font-black uppercase">Secure Pay</p>
                <p className="text-zinc-600 text-[8px] font-bold">256-bit SSL</p>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center gap-1">
                <FiRefreshCw className="text-[#CAFF00] mb-1" />
                <p className="text-white text-[10px] font-black uppercase">Easy Returns</p>
                <p className="text-zinc-600 text-[8px] font-bold">30-day policy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 mt-16">
          <button
            onClick={() => navigate(`/home/product/${p.id - 1}`)}
            disabled={p.id <= 1}
            className="bg-zinc-900 border border-zinc-800 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <FiChevronLeft /> Previous
          </button>
          <button
            onClick={() => navigate(`/home/product/${p.id + 1}`)}
            disabled={p.id >= products.length}
            className="bg-[#CAFF00] text-black px-10 py-3 rounded-2xl font-black flex items-center gap-2 hover:brightness-110 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            Next <FiChevronRight strokeWidth={3} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;