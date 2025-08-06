import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import HowProjectWork from "@/components/sections/HowProjectWork";
import Offer from "@/components/sections/Offer";
import RecentPostsSection from "@/components/sections/RecentPostsSection";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
        <Hero />
        <Offer />
        <RecentPostsSection />
        <Reviews />
        <HowProjectWork />
        <Contact />
    </>
  );
}
