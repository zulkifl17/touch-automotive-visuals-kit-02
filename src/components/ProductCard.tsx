
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (product.inStock) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full bg-gray-800 border-gray-700 overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-eco-green text-white px-2 py-1 rounded text-xs font-semibold">
              Save LKR {product.originalPrice - product.price}
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-eco-white text-lg">{product.name}</CardTitle>
          <CardDescription className="text-gray-400 text-sm">
            {product.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-eco-leaf font-bold text-xl">
              LKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                LKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="space-y-1">
            <h4 className="text-eco-white text-sm font-medium">Features:</h4>
            <ul className="text-gray-400 text-xs space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-eco-leaf rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <motion.button
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-eco font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-eco-green hover:bg-eco-green/90 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            whileHover={product.inStock ? { scale: 1.02 } : {}}
            whileTap={product.inStock ? { scale: 0.98 } : {}}
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
