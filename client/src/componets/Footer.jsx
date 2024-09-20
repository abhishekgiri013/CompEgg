import React from 'react';
import { motion } from 'framer-motion';
import { footerVariants } from '../animations/variants'; 
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref: refFooter, inView: inViewFooter } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
        &copy; 2024 Competitive Programming Aggregator (CompEgg). All rights reserved.
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
  );
};

export default Footer;
