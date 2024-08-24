import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./website-componets/header";
import Page1 from "./website-componets/page1";
import Page3 from "./website-componets/page3";
import Page4 from "./website-componets/page4";
import Page7 from "./website-componets/page7";
import Page8 from "./website-componets/page8";
import Page9 from "./website-componets/page9";
import Page10 from "./website-componets/page10";
import Page11 from "./website-componets/page11";
import Footer from "./website-componets/footer";
import ComingSoon from "./website-componets/comingsoon";
import ContactUs from "./website-componets/contactUs";
import Facilites from "./website-componets/facilites";
import FollowUS from './website-componets/followUS'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Page1 />
            <Page3 />
            <Page7 />
            <Page4 />
            <Page8 />
            <Page9 />
            <Page10 />
            <FollowUS/>
            <Page11 />
          </>
        } />
        <Route path="/memberarea" element={
          <>
            <ComingSoon />
          </>
        } />
        <Route path="/contactus" element={
          <>
            <ContactUs />
          </>
        } />
        <Route path="/blog" element={<ComingSoon />} />
        <Route path="/downloadapp" element={<ComingSoon />} />
        <Route path="/facilites" element={<Facilites />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
