"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Globe } from "./globe";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Input } from "./ui/input";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-gold/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20">
                Premium Travel Experience..
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Explore the World <br />
                <span className="text-gradient">With Us</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Your journey begins here. Discover breathtaking destinations, exclusive packages, and create unforgettable memories with Sreeswa Travels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button size="lg" className="rounded-full px-8 bg-gradient-premium hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 glass-effect hover:bg-slate-100 dark:hover:bg-slate-800">
                View Packages
              </Button>
            </motion.div>

            {/* Quick Search */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 glass-card p-4 rounded-3xl flex flex-col sm:flex-row gap-4 items-center max-w-2xl"
            >
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border">
                <MapPin className="h-5 w-5 text-primary" />
                <Input placeholder="Where to?" className="border-0 bg-transparent focus-visible:ring-0 px-2 h-10 shadow-none" />
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border">
                <Calendar className="h-5 w-5 text-primary" />
                <Input placeholder="When?" className="border-0 bg-transparent focus-visible:ring-0 px-2 h-10 shadow-none" />
              </div>
              <Button size="icon" className="h-12 w-12 rounded-full bg-primary shrink-0">
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* 3D Globe Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50 mix-blend-screen" />
            <Globe />
            
            {/* Floating Elements (Mockups) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 right-10 glass-card p-3 rounded-2xl hidden md:flex items-center gap-3"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Happy Travelers</p>
                <p className="text-sm font-bold">50,000+</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
