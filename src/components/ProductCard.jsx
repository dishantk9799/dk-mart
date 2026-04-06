import { FiStar, FiShoppingCart, FiCheck } from "react-icons/fi"; 
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart, cartItems } = useCart();
    const isInCart = cartItems.some(item => item.id === product.id);
    const handleCardClick = () => {
        navigate(`/home/product/${product.id}`);
    };

    return (
        <div onClick={handleCardClick} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col group transition-all hover:border-zinc-700 cursor-pointer">
            {/* Top Image */}
            <div className="bg-white h-56 p-8 relative flex items-center justify-center">
                <span className="absolute top-4 left-4 bg-zinc-500/80 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    {product.category}
                </span>
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Bottom Content */}
            <div className="p-5 flex flex-col flex-1 space-y-3">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{product.category}</p>
                <h3 className="text-white font-bold text-lg leading-tight line-clamp-1">{product.name}</h3>

                {/* Ratings */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FiStar
                            key={i}
                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-600'}`}
                        />
                    ))}
                    <span className="text-zinc-500 text-[10px] font-bold ml-1">({product.reviews})</span>
                </div>

                <div className="w-full h-[1px] bg-zinc-800 my-2"></div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#CAFF00] font-black text-2xl">${product.price}</span>
                    
                    {isInCart ? (
                        <button
                            onClick={(e) => e.stopPropagation()} 
                            className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 cursor-default"
                        >
                            <FiCheck strokeWidth={3} /> Added
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product);
                                toast.success("Added to cart 🛒");
                            }} 
                            className="bg-[#CAFF00] hover:brightness-110 transition-all text-black font-black text-xs px-4 py-2 rounded-xl flex items-center gap-2 active:scale-95"
                        >
                            <FiShoppingCart strokeWidth={3} /> Add
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;