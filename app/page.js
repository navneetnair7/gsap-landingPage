"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      //code inside will run automatically on unmount to cleanup animation code
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true), //loaderfinish to true once timeline is complete
      });
      setTimeline(tl);
    });
    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
};

export default Home;
