import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      {/* Hero section  */}
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      {/* start section  */}
      <div className="bg-primary sm:px-16 px-6 flex justify-center items-start ">
        <div className="xl:max-w-[1280px] w-full">
            <Stats />
            <Business />
            < Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
