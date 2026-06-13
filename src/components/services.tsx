"use client";

import { motion } from "framer-motion";
import { 
  Map, 
  Globe2, 
  Heart, 
  Users, 
  Mountain, 
  Bus, 
  Building2, 
  Hotel, 
  PlaneTakeoff, 
  FileText 
} from "lucide-react";

const services = [
  { icon: Map, title: "Domestic Tours", desc: "Explore the hidden gems and popular spots within the country." },
  { icon: Globe2, title: "International Tours", desc: "Discover new cultures and breathtaking landscapes worldwide." },
  { icon: Heart, title: "Honeymoon Packages", desc: "Romantic getaways crafted for your perfect start together." },
  { icon: Users, title: "Family Trips", desc: "Fun-filled vacations designed for all age groups." },
  { icon: Mountain, title: "Adventure Tours", desc: "Thrilling experiences for the adrenaline junkies." },
  { icon: Bus, title: "Group Tours", desc: "Travel with like-minded people and make new friends." },
  { icon: Building2, title: "Corporate Tours", desc: "Professional MICE and team-building outings." },
  { icon: Hotel, title: "Hotel Bookings", desc: "Comfortable stays at the best prices guaranteed." },
  { icon: PlaneTakeoff, title: "Flight Tickets", desc: "Hassle-free flight bookings for domestic and international travel." },
  { icon: FileText, title: "Visa Assistance", desc: "Expert guidance for smooth and quick visa processing." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end travel solutions to ensure your journey is seamless, comfortable, and memorable.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
