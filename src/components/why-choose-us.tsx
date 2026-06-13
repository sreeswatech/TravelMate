"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, HeadphonesIcon, BadgeDollarSign, HeartHandshake, Map } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  { icon: ShieldCheck, title: "Safe Travel", desc: "Your safety is our top priority with vetted partners and full insurance." },
  { icon: BadgeDollarSign, title: "Best Prices", desc: "We guarantee the most competitive rates without compromising on quality." },
  { icon: Map, title: "Customized Packages", desc: "Tailor-made itineraries to suit your specific preferences and budget." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Round-the-clock assistance throughout your entire journey." },
  { icon: CheckCircle2, title: "Experienced Guides", desc: "Knowledgeable local experts to enhance your travel experience." },
  { icon: HeartHandshake, title: "Trusted Service", desc: "Over 15 years of excellence and thousands of happy travelers." },
];

const faqs = [
  {
    question: "How do I book a tour package?",
    answer: "You can book directly through our website by selecting a package and clicking 'Book Now', or you can contact our travel experts via phone or email for personalized assistance."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the package and time of cancellation. Generally, full refunds are available for cancellations made 30 days prior to departure. Please refer to our detailed terms and conditions for specific packages."
  },
  {
    question: "Do you provide visa assistance?",
    answer: "Yes, we provide comprehensive visa assistance for all international tours. Our dedicated team will guide you through the documentation process and handle the application on your behalf."
  },
  {
    question: "Is travel insurance included in the packages?",
    answer: "Basic travel insurance is included in most of our international packages. However, we highly recommend purchasing comprehensive coverage which can be added during the booking process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, bank transfers, UPI, and digital wallets. We also offer flexible EMI options for select tour packages."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Why Choose Us */}
          <div>
            <div className="mb-10">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                Our Benefits
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Sreeswa Travels?</h2>
              <p className="text-muted-foreground text-lg">
                We go above and beyond to ensure your travel experience is exceptional from start to finish.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div className="lg:pl-10">
            <div className="mb-10">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Find quick answers to common questions about our services and booking process.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl">
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0 mb-4 last:mb-0">
                    <AccordionTrigger className="text-left font-semibold text-lg bg-background hover:bg-slate-50 dark:hover:bg-slate-800/50 px-4 rounded-xl transition-all data-[state=open]:rounded-b-none data-[state=open]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4 pb-6 text-muted-foreground bg-background/50 rounded-b-xl leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
