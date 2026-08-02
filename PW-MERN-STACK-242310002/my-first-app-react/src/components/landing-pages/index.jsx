import React from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/herosection";
import { FeaturedBooksSection } from "./components/featuressection";
import { CategoriesSection } from "./components/categoriessection";
import { TestimonSection } from "./components/testimonsection";
import { Footers } from "./components/footers";

export default function LandingPageSection() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedBooksSection />
      <CategoriesSection />
      <TestimonSection />
      <Footers />
    </div>
  );
}
