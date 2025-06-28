import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer";
import RecentPostsSection from "@/components/sections/RecentPostsSection";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Offer />
        <RecentPostsSection />
        <Reviews />
    </>
  );
}
