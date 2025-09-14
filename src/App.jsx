import React from 'react'
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import OurSpaces from './Components/OurSpaces';
import Why from './Components/Why';
import Facilities from './Components/Facilities';
import Gallery from './Components/Gallary';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import Helpcenter from './Components/Helpcenter';
import NewsSection from './Components/NewsSection';
import CalltoAction from './Components/CalltoAction';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <Intro />
        <OurSpaces />
        <Why />
        <Facilities />
        <Gallery />
        <Clients />
        <Testimonials />
        <Helpcenter />
        <NewsSection />
        <CalltoAction />
        <Footer />
    </div>
  )
}

export default App