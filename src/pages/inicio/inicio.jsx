import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import AboutSection from '../../components/AboutSection/AboutSection';
import "./Inicio.css";
import MissionSection from "../../components/MissionSection/MissionSection";
import PurposeSection from "../../components/PurposeSection/PurposeSection";



const Inicio = () => {
   return (
       <main className="flex overflow-hidden flex-col pt-2.5 font-bold text-black bg-white">
         <Header />
        <Banner/>
         <section
           className="flex mt-4 w-full min-h-[600px] max-md:max-w-full"
           aria-label="Hero section"
         />
          <AboutSection />
         <MissionSection />
   
         <PurposeSection />
   
         <Footer />
       </main>
     );
};

export default Inicio;