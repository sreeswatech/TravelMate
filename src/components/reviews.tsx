"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Our trip to Dubai was absolutely magical! Sreeswa Travels handled everything from visas to hotel bookings flawlessly. The customized itinerary was perfect for our family.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The Swiss Alps adventure exceeded all expectations. The guides were professional, and the accommodations were top-notch. Highly recommend their services!",
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 4.8,
    text: "Booked our honeymoon to Bali through Sreeswa Travels. They arranged romantic dinners and private tours that made our trip unforgettable. Thank you!",
  },
  {
    id: 4,
    name: "James Wilson",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Excellent service and great attention to detail. The Kerala backwaters tour was incredibly peaceful and perfectly organized. Will definitely book again.",
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Travelers Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Read about the experiences of our happy customers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                  <div className="glass-card p-8 rounded-3xl h-full flex flex-col relative">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(review.rating) ? "text-accent-gold fill-accent-gold" : "text-muted"}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 text-lg leading-relaxed mb-8 flex-1 italic">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="h-14 w-14 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="font-bold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
