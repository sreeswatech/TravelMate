import { Hero } from "@/components/hero";
import { CompanyStats } from "@/components/company-stats";
import { Services } from "@/components/services";
import { TourPackages } from "@/components/tour-packages";
import { UpcomingTours } from "@/components/upcoming-tours";
import { PopularDestinations } from "@/components/popular-destinations";
import { Reviews } from "@/components/reviews";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyStats />
      <Services />
      <TourPackages />
      <UpcomingTours />
      <PopularDestinations />
      <Reviews />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
