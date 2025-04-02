"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/productcard";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface FeaturedCollectionProps {
  products: Product[];
  title?: string;
  onAddToCart?: (product: Product) => void;
}

export function FeaturedCollection({
  products = [],
  title = "Our Featured Roses",
  onAddToCart = () => {},
}: FeaturedCollectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 px-4 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No featured roses available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
