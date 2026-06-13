"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your journey? Reach out to us and our travel experts will help you plan the perfect trip.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Office Address</h3>
                <p className="text-muted-foreground">123 Travel Avenue, City Center, Business District, 10001</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Address</h3>
                <p className="text-muted-foreground">hello@sreeswatravels.com<br/>support@sreeswatravels.com</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 glass-card p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Destination Inquiry" className="bg-background/50 h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your travel plans..." 
                  className="bg-background/50 min-h-[150px] resize-none" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-medium shadow-md">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
