import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  heroVariants,
  featureVariants,
  howItWorksVariants,
  apiVariants,
  footerVariants,
} from '../animations/variants';

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
};

export const Home = () => {
  const [refHero, inViewHero] = useInView({ threshold: 0.5 });
  const [refFeatures, inViewFeatures] = useInView({ threshold: 0.5 });
  const [refHowItWorks, inViewHowItWorks] = useInView({ threshold: 0.5 });
  const [refAPI, inViewAPI] = useInView({ threshold: 0.5 });
  const [refFooter, inViewFooter] = useInView({ threshold: 0.5 });

  return (
    <div className="bg-[#1c1c1b] text-[#E0E0E0] font-sans">
      {/* Hero Section */}
      <motion.section
        ref={refHero}
        className="min-h-screen flex items-center justify-center px-12  bg-[#1c1c1b] text-center"
        variants={heroVariants.container}
        initial="hidden"
        animate={inViewHero ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <motion.div variants={heroVariants.content}>
          <motion.h1
            className="text-5xl font-bold text-[#f8c55d] mb-6"
            variants={heroVariants.title}
            transition={{ duration: 0.8 }}
          >
            Unify Your Competitive Programming Achievements in One Dashboard
          </motion.h1>
          <motion.p
            className="text-xl mb-6"
            variants={heroVariants.text}
            transition={{ duration: 0.8 }}
          >
            Track your progress across LeetCode, GeeksforGeeks, Codeforces, and HackerRank in real-time.
          </motion.p>
          <motion.button
            className="bg-[#f8c55d] text-[#1c1c1b] px-6 py-3 rounded-md hover:bg-[#f7d185]"
            variants={heroVariants.button}
            transition={{ duration: 0.8 }}
          >
            Track My Progress
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={refFeatures}
        className="py-20 px-12 mb-10 text-center bg-[#1c1c1b] "
        variants={featureVariants.container}
        initial="hidden"
        animate={inViewFeatures ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-[#E0E0E0]"
          variants={featureVariants.title}
          transition={{ duration: 0.8 }}
        >
          Why Choose Our Aggregator?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-[#121212] p-6 rounded-lg shadow-lg"
            variants={featureVariants.card}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/assets/leetcode-logo.png"
              alt="LeetCode"
              className="w-16 mx-auto mb-8 mt-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#f8c55d]">Multi-Platform Integration</h3>
            <p>Retrieve your data from top coding platforms and visualize them in one place.</p>
          </motion.div>
          <motion.div
            className="bg-[#121212] p-6 rounded-lg shadow-lg"
            variants={featureVariants.card}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="/assets/dashboard.png"
              alt="Dashboard"
              className="mx-auto mb-4 w-28"
            />
            <h3 className="text-2xl mb-3 font-semibold text-[#f8c55d]">Unified Dashboard</h3>
            <p>One easy-to-use dashboard to see all your solved problems, contest rankings, and badges.</p>
          </motion.div>
          <motion.div
            className="bg-[#121212] p-6 rounded-lg shadow-lg"
            variants={featureVariants.card}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src="/assets/real-time.png"
              alt="Real-Time Data"
              className="w-16 mt-4 mx-auto mb-4"
            />
            <h3 className="text-2xl mb-3 font-semibold text-[#f8c55d]">Real-Time Data Fetching</h3>
            <p>Always stay up-to-date with your latest competitive programming achievements.</p>
          </motion.div>
          <motion.div
            className="bg-[#121212] p-6 rounded-lg shadow-lg"
            variants={featureVariants.card}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src="/assets/responsive.png"
              alt="Responsive Design"
              className="w-16 mt-5 mx-auto mb-4"
            />
            <h3 className="text-2xl mb-3 font-semibold text-[#f8c55d]">Responsive Design</h3>
            <p>Access your dashboard anytime, anywhere – fully responsive across devices.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        ref={refHowItWorks}
        className="py-20 mb-10 bg-[#121212] text-center"
        variants={howItWorksVariants.container}
        initial="hidden"
        animate={inViewHowItWorks ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-[#E0E0E0]"
          variants={howItWorksVariants.title}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            className="text-center max-w-xs"
            variants={howItWorksVariants.step}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#f8c55d]">1. Input Your User IDs</h3>
            <p>Enter your IDs for LeetCode, GeeksforGeeks, Codeforces, and HackerRank.</p>
          </motion.div>
          <motion.div
            className="text-center max-w-xs"
            variants={howItWorksVariants.step}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-[#f8c55d]">2. Fetch Your Data</h3>
            <p>Our app retrieves your latest stats automatically.</p>
          </motion.div>
          <motion.div
            className="text-center max-w-xs"
            variants={howItWorksVariants.step}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#f8c55d]">3. View and Analyze</h3>
            <p>Visualize and analyze your progress with ease.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* API Integrations Section */}
      <motion.section
        ref={refAPI}
        className="py-20 px-12 text-center bg-[#1c1c1b]"
        variants={apiVariants.container}
        initial="hidden"
        animate={inViewAPI ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-[#E0E0E0]"
          variants={apiVariants.title}
          transition={{ duration: 0.8 }}
        >
          API Integrations
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.img
            src="/assets/leetcode-logo.png"
            alt="LeetCode Logo"
            className="h-16"
            variants={apiVariants.logo}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="/assets/geeksforgeeks-logo.png"
            alt="GeeksforGeeks Logo"
            className="h-16"
            variants={apiVariants.logo}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src="/assets/codeforces-logo.png"
            alt="Codeforces Logo"
            className="h-16"
            variants={apiVariants.logo}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src="/assets/hackerrank-logo.png"
            alt="HackerRank Logo"
            className="h-16"
            variants={apiVariants.logo}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
      </motion.section>




      {/* Footer Section */}
      <motion.footer
        ref={refFooter}
        className="py-8 bg-[#121212] text-center text-[#E0E0E0]"
        variants={footerVariants.container}
        initial="hidden"
        animate={inViewFooter ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-lg mb-4"
          variants={footerVariants.link}
          transition={{ duration: 0.5 }}
        >
          &copy; 2024 Competitive Programming Aggregator(CompEgg). All rights reserved.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          variants={footerVariants.link}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Home;
