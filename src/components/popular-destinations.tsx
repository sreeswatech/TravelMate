"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    tours: 15,
    height: "h-64",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    tours: 24,
    height: "h-96",
  },
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    tours: 8,
    height: "h-80",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    tours: 12,
    height: "h-72",
  },
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
    tours: 30,
    height: "h-96",
  },
  {
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
    tours: 18,
    height: "h-64",
  },
];

export function PopularDestinations() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Explore The World
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Popular Destinations</h2>
          <p className="text-muted-foreground text-lg">
            Discover the most sought-after travel destinations loved by our customers around the globe.
          </p>
        </div>

        {/* Masonry Layout using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group rounded-3xl overflow-hidden break-inside-avoid ${dest.height} block`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.tours} Tour Packages</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/90 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
