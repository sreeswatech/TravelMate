"use client";

import { useState, useEffect } from "react";
import { CalendarDays, Plane, Users } from "lucide-react";
import { Button } from "./ui/button";

interface CountdownProps {
  targetDate: string;
}

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-primary">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground uppercase">Days</span>
      </div>
      <span className="text-xl font-bold text-border">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-primary">{timeLeft.hours}</span>
        <span className="text-xs text-muted-foreground uppercase">Hours</span>
      </div>
      <span className="text-xl font-bold text-border">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-primary">{timeLeft.minutes}</span>
        <span className="text-xs text-muted-foreground uppercase">Mins</span>
      </div>
      <span className="text-xl font-bold text-border">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-primary">{timeLeft.seconds}</span>
        <span className="text-xs text-muted-foreground uppercase">Secs</span>
      </div>
    </div>
  );
}

const upcomingTours = [
  {
    id: 1,
    destination: "Northern Lights Explorer, Iceland",
    date: "2026-11-15T00:00:00",
    returnDate: "Nov 22, 2026",
    seatsLeft: 4,
    price: "$3,499",
  },
  {
    id: 2,
    destination: "Cherry Blossom Tour, Japan",
    date: "2027-03-20T00:00:00",
    returnDate: "Apr 02, 2027",
    seatsLeft: 12,
    price: "$2,899",
  },
  {
    id: 3,
    destination: "African Safari Adventure, Kenya",
    date: "2026-08-10T00:00:00",
    returnDate: "Aug 20, 2026",
    seatsLeft: 8,
    price: "$4,199",
  }
];

export function UpcomingTours() {
  return (
    <section id="upcoming" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-900/30 rounded-l-[100px] -z-10 hidden lg:block" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Don't Miss Out
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Upcoming Tour Dates</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Secure your spot on our highly anticipated upcoming tours. Limited seats available for these exclusive experiences.
            </p>
            <div className="hidden lg:block">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View All Schedule
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {upcomingTours.map((tour, index) => (
              <div 
                key={tour.id} 
                className="glass-card p-6 rounded-3xl border shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start justify-between group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tour.destination}
                  </h3>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>{new Date(tour.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>-</span>
                      <span>{tour.returnDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-accent-gold font-medium bg-accent-gold/10 px-2 py-0.5 rounded">
                      <Users className="h-4 w-4" />
                      <span>Only {tour.seatsLeft} seats left</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Countdown targetDate={tour.date} />
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center gap-4 min-w-[120px] pt-4 md:pt-0 border-t md:border-t-0 border-border md:pl-6 md:border-l">
                  <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground">Price per person</p>
                    <p className="text-2xl font-bold text-foreground">{tour.price}</p>
                  </div>
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white shadow-md">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:hidden flex justify-center mt-8">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
