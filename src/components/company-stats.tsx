"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ end, duration = 2, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center p-6">
      <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </h3>
      <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
}

export function CompanyStats() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          <AnimatedCounter end={15} suffix="+" label="Years Experience" />
          <AnimatedCounter end={50} suffix="k+" label="Travelers Served" />
          <AnimatedCounter end={120} suffix="+" label="Destinations" />
          <AnimatedCounter end={24} suffix="/7" label="Support" />
        </div>
      </div>
    </section>
  );
}
