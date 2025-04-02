"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart = () => {},
}: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <motion.div
      className="overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl font-medium mb-2">{product.name}</h3>

        <p className="text-lg font-semibold text-primary mb-2">
          ${product.price.toFixed(2)}
        </p>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <Button
          onClick={handleAddToCart}
          className="w-full transition-all duration-300 hover:bg-primary-700 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </Button>
      </div>
    </motion.div>
  );
}
