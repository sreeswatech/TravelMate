"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        onClick={() => window.open("https://wa.me/15551234567", "_blank")}
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">WhatsApp Us</span>
      </Button>

      {/* AI Chat Assistant Toggle */}
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>
    </div>
  );
}
