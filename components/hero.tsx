"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function Hero({
  title = "Exquisite Roses for Every Occasion",
  subtitle = "Hand-picked, premium quality roses cultivated with care and delivered with elegance. Our roses are grown using sustainable practices to ensure both beauty and environmental responsibility.",
  ctaText = "Shop Now",
  ctaLink = "#featured-collection",
  backgroundImage = "https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 container mx-auto">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {subtitle}
          </p>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg font-medium rounded-md group"
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
