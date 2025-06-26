
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as CartIcon, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    if (state.items.length === 0) return;

    // Create order summary
    const orderDetails = state.items
      .map(item => `${item.product.name} x${item.quantity} - LKR ${(item.product.price * item.quantity).toLocaleString()}`)
      .join('\n');

    const message = `🛒 *ECO TOUCH - Product Order*

📋 *Order Details:*
${orderDetails}

💰 *Total Amount: LKR ${state.total.toLocaleString()}*

📞 Please confirm this order and provide delivery details.

Thank you for choosing ECO TOUCH! 🌿`;

    const whatsappUrl = `https://wa.me/94712888444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after checkout
    dispatch({ type: 'CLEAR_CART' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <motion.button
        className="fixed top-20 right-6 z-40 bg-eco-green text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CartIcon className="w-6 h-6" />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {state.items.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </motion.button>

      {/* Cart Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="relative bg-gray-800 rounded-eco p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="eco-text-h3 text-eco-white">Shopping Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-eco-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="text-center py-8">
                  <CartIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-3 p-3 bg-gray-700 rounded-eco">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-eco-white text-sm font-medium truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-eco-leaf text-sm">
                            LKR {item.product.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-gray-400 hover:text-eco-white"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-eco-white w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-eco-white"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-400 hover:text-red-300 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="eco-text-h4 text-eco-white">Total:</span>
                      <span className="eco-text-h4 text-eco-leaf">
                        LKR {state.total.toLocaleString()}
                      </span>
                    </div>
                    
                    <motion.button
                      className="w-full eco-btn-primary"
                      onClick={handleCheckout}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Checkout via WhatsApp
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShoppingCart;
