import React from "react";
import { Hero } from "@/components/hero";
import { FeaturedCollection } from "@/components/featuredcollection";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// This would normally come from a database, but for now we'll use static data
const products = [
  {
    id: "1",
    name: "Red Passion Rose",
    price: 29.99,
    description:
      "A stunning deep red rose symbolizing passionate love and desire. Perfect for romantic occasions.",
    imageUrl:
      "https://images.unsplash.com/photo-1494336934272-f0efcedfc8d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Pink Elegance Bouquet",
    price: 49.99,
    description:
      "A delicate arrangement of soft pink roses that represent grace, joy, and gratitude.",
    imageUrl:
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "White Purity Rose",
    price: 24.99,
    description:
      "Symbolizing innocence and purity, these white roses make a perfect gift for weddings and new beginnings.",
    imageUrl:
      "https://images.unsplash.com/photo-1558989591-3a6a11ae23b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Yellow Sunshine Rose",
    price: 27.99,
    description:
      "Bright yellow roses that bring warmth and happiness, ideal for celebrating friendships and joy.",
    imageUrl:
      "https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-background px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Handcrafted with Love
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our roses are carefully cultivated by expert florists who have
                dedicated their lives to the art of rose growing. We use
                sustainable, eco-friendly practices to ensure that each rose is
                not only beautiful but also responsibly grown.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From classic red roses that speak of eternal love to unique
                varieties in stunning colors, our collection offers the perfect
                bloom for every occasion, sentiment, and season.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551977295-7edaa8f42ce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Rose cultivation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-5">
              <h3 className="font-serif text-xl mb-3 text-primary">
                Premium Quality
              </h3>
              <p className="text-muted-foreground text-sm">
                Each rose is inspected to ensure it meets our strict quality
                standards.
              </p>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl mb-3 text-primary">
                Sustainable Growing
              </h3>
              <p className="text-muted-foreground text-sm">
                We use eco-friendly practices that protect both our flowers and
                the environment.
              </p>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl mb-3 text-primary">
                Elegant Delivery
              </h3>
              <p className="text-muted-foreground text-sm">
                Your roses arrive beautifully packaged and in perfect condition,
                ready to impress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <div id="featured-collection">
        <FeaturedCollection products={products} />
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4 text-white">
                Elegance in Bloom
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Bringing beauty and joy through carefully cultivated roses since
                2010. Our mission is to make every occasion special with
                nature's most beautiful creation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>hello@eleganceinbloom.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>123 Botanical Gardens, Rose Avenue</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Care Instructions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>
              © {new Date().getFullYear()} Elegance in Bloom. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
