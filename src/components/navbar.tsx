"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, Plane } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Tour Packages" },
  { href: "#upcoming", label: "Upcoming Tours" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Plane className="h-8 w-8 text-primary group-hover:text-accent-gold transition-colors duration-300" />
          <span className={cn("text-xl font-bold tracking-tight transition-colors duration-300", 
            isScrolled ? "text-foreground" : "text-foreground sm:text-white"
          )}>
            Sreeswa <span className="text-primary group-hover:text-accent-gold">Travels</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                isScrolled ? "text-foreground/80" : "text-foreground/80 sm:text-white/90 sm:hover:text-white",
                pathname === link.href && "text-primary font-semibold after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="hidden sm:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger className={cn("lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", isScrolled ? "" : "sm:text-white")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left flex items-center gap-2 mb-8">
                 <Plane className="h-6 w-6 text-primary" />
                 Sreeswa Travels
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full rounded-full">Book Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
