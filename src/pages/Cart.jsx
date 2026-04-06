import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Cart = ({ isOpen, setIsOpen }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/home/product/${id}`);
    setIsOpen(false);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return toast.error("Your cart is empty!");
    }
    toast.success("Order placed! 🎉 (Demo)");
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed right-0 top-0 h-full w-full max-w-[400px] bg-[#0c0c0e] border-l border-zinc-800 z-[101] flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-[#CAFF00]" />
            <h2 className="text-xl font-bold text-white">Cart</h2>
            <span className="bg-[#CAFF00]/10 text-[#CAFF00] text-[10px] px-2 py-0.5 rounded-full">{cartItems.length} items</span>
          </div>
          <button onClick={() => setIsOpen(false)}><FiX size={24} className="text-zinc-500 hover:text-white" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center">
                <FiShoppingBag size={40} className="text-zinc-800" />
              </div>
              <p className="text-zinc-500 font-medium">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-zinc-900/40 border border-zinc-800 rounded-[1.5rem] p-4 flex gap-4">
                <div
                  className="w-20 h-20 bg-white rounded-xl p-2 shrink-0 cursor-pointer"
                  onClick={() => handleItemClick(item.id)}
                >
                  <img src={item.image} alt={item.name} className="max-h-full mx-auto object-contain" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div onClick={() => handleItemClick(item.id)} className="cursor-pointer">
                      <h3 className="text-white font-bold text-sm hover:text-[#CAFF00] transition-colors line-clamp-1">{item.name}</h3>
                      <p className="text-[#CAFF00] font-black mt-1">${item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-700 hover:text-red-500 transition-colors"><FiTrash2 size={16} /></button>
                  </div>

                  <div className="flex items-center border border-zinc-800 rounded-lg p-1 w-fit gap-3">
                    <button onClick={() => updateQuantity(item.id, 'minus')} className="text-zinc-500 hover:text-white"><FiMinus size={14} /></button>
                    <span className="text-white text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 'plus')} className="text-zinc-500 hover:text-white"><FiPlus size={14} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-zinc-800 space-y-4 bg-[#0c0c0e]">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 font-bold">Total</span>
            <span className="text-white font-black text-2xl">${totalPrice.toFixed(2)}</span>
          </div>
          
          <button
            onClick={handleCheckout}
            className="w-full bg-[#CAFF00] text-black py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(202,255,0,0.1)]"
          >
            Checkout <FiArrowRight strokeWidth={3} />
          </button>

          <button
            onClick={clearCart}
            className="w-full text-zinc-600 text-xs font-bold uppercase hover:text-zinc-400 transition-colors"
          >
            Clear cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;