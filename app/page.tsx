"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ReelSection from "@/components/ReelSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";

export default function Home() {
  const handleHeroClick = () => {
    console.log("Hero button clicked");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between">
      <ScrollAnimationSection />

      {/* Spacer to ensure scroll height for the absolute content */}
      <div className="h-[200vh] w-full pointer-events-none" />

      <div className="absolute top-0 w-full z-30">
        <div className="relative">
          <Hero
            headline="Cosplay is expensive."
            subtext="Co-Splay is the first platform built for cosplayers. Monetize your work, and connect with other cosplayers."
            buttonText="Join the waitlist"
            onButtonClick={handleHeroClick}
          />

          {/* Empty spacer for scroll animation */}
          <div className="h-[100vh] w-full" />

          <Section
            headline="Fund your next build"
            tag="Monetization"
            subtext="We give you the tools to earn from your fans through subscriptions, tips, and pay-per-view content. Turn this expensive hobby into a thriving career."
            hideImage={true}
            orientation="left"
          />

          <Section
            headline="Powerful Performance"
            tag="Speed"
            subtext="Built on the latest technology stack, ensuring lightning-fast load times and smooth interactions across all devices."
            imageSrc="/ipad_intro.webp"
            mobileImageSrc="/ipad_intro.webp" // Replace with mobile-specific image
            imageAlt="Performance"
            orientation="right"
          />
          <ReelSection />

          <Section
            headline="Global Reach"
            tag="Worldwide"
            subtext="Connect with audiences worldwide. Our platform is optimized for global scale, ensuring your message is heard everywhere."
            imageSrc="/explore.png"
            mobileImageSrc="/explore.png" // Replace with mobile-specific image
            imageAlt="Global Reach"
            orientation="left"
          />

          <Section
            headline="Global Reach"
            tag="Worldwide"
            subtext="Connect with audiences worldwide. Our platform is optimized for global scale, ensuring your message is heard everywhere."
            imageSrc="/explore.png"
            mobileImageSrc="/explore.png" // Replace with mobile-specific image
            imageAlt="Global Reach"
            orientation="left"
          />

        </div>
      </div>
    </main>
  );
}
