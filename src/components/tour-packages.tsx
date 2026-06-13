"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, Users, MapPin, Coffee, Car, Plane, Hotel } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const categories = ["All", "Domestic", "International", "Adventure", "Family", "Honeymoon"];

const packages = [
  {
    id: 1,
    title: "Dubai Luxury Escape",
    category: "International",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    rating: 4.9,
    reviews: 128,
    facilities: ["Flight", "Hotel", "Sightseeing", "Meals"],
  },
  {
    id: 2,
    title: "Bali Honeymoon Special",
    category: "Honeymoon",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    duration: "7 Days / 6 Nights",
    price: "$899",
    rating: 4.8,
    reviews: 96,
    facilities: ["Hotel", "Transfers", "Sightseeing", "Meals"],
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    duration: "6 Days / 5 Nights",
    price: "$2,199",
    rating: 5.0,
    reviews: 64,
    facilities: ["Flight", "Hotel", "Ski Pass", "Meals"],
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
    duration: "4 Days / 3 Nights",
    price: "$399",
    rating: 4.7,
    reviews: 210,
    facilities: ["Houseboat", "Transfers", "Meals"],
  },
  {
    id: 5,
    title: "Singapore Family Fun",
    category: "Family",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800",
    duration: "5 Days / 4 Nights",
    price: "$1,099",
    rating: 4.8,
    reviews: 156,
    facilities: ["Flight", "Hotel", "Attractions", "Meals"],
  },
  {
    id: 6,
    title: "Kashmir Paradise",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
    duration: "6 Days / 5 Nights",
    price: "$599",
    rating: 4.9,
    reviews: 182,
    facilities: ["Hotel", "Transfers", "Sightseeing", "Meals"],
  }
];

export function TourPackages() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPackages = packages.filter(
    (pkg) => activeCategory === "All" || pkg.category === activeCategory
  );

  return (
    <section id="packages" className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Top Destinations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our most popular travel packages, carefully crafted to give you the best experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-primary" : "bg-white dark:bg-slate-900"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={pkg.id}
                className="group bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary/90 hover:bg-primary backdrop-blur-sm text-white border-0">
                      {pkg.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                    <Star className="h-3.5 w-3.5 text-accent-gold fill-accent-gold" />
                    {pkg.rating} <span className="text-muted-foreground text-xs">({pkg.reviews})</span>
                  </div>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{pkg.title.split(" ")[0]}</span>
                    <span className="mx-1">•</span>
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-6 mt-auto">
                    {pkg.facilities.map((fac, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                        {fac === "Flight" && <Plane className="h-3 w-3" />}
                        {fac === "Hotel" && <Hotel className="h-3 w-3" />}
                        {fac === "Meals" && <Coffee className="h-3 w-3" />}
                        {fac === "Transfers" && <Car className="h-3 w-3" />}
                        {fac === "Sightseeing" && <MapPin className="h-3 w-3" />}
                        {fac}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-foreground">{pkg.price}</p>
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 shadow-md hover:shadow-lg transition-all">
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
