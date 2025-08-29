import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Newsletter from "./components/Newletter";
import TopBanner from "./components/TopBanner";
import ToolOfTheMonth from "./components/ToolOfTheMonth";
import TrendingBrands from "./components/TrendingBrands";
import Tools from "./components/Tools";
import TrendingAgencies from "./components/TrendingAgencies";
import Signup from "./components/Signup";
import FeaturedResources from "./components/FeaturedResources";
import FounderInterviews from "./components/FounderInterviews";
import FeaturedProductReviews from "./components/FeaturedProductReviews";
import FeaturedBreakdowns from "./components/FeaturedBreakdowns";
import CategoriesSection from "./components/CategoriesSection";
import FreeMemberSignUp from "./components/FreeMemberSignUp";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-yellow-100">
      <TopBanner />
      <Navbar />
      <MainSection />
      <Newsletter />
      <ToolOfTheMonth />
      <TrendingBrands />
      <Tools />
      <TrendingAgencies />
      <Signup />
      <FeaturedResources />
      <FounderInterviews />
      <FeaturedProductReviews />
      <FeaturedBreakdowns />
      <CategoriesSection />
      <FreeMemberSignUp />
      <Footer />
    </div>
  );
}

export default App;