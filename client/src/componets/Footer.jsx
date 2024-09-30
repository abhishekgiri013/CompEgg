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
      className="py-8 sm:py-6 bg-[#121212] text-center text-[#E0E0E0]"
      variants={footerVariants.container}
      initial="hidden"
      animate={inViewFooter ? 'visible' : 'hidden'}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="text-lg sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-3"
        variants={footerVariants.link}
        transition={{ duration: 0.5 }}
      >
        &copy; 2024 Competitive Programming Aggregator (CompEgg).
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 space-y-3 items-center"
        variants={footerVariants.link}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#" className="text-lg sm:text-base lg:text-lg hover:underline">Privacy Policy</a>
        <a href="#" className="text-lg sm:text-base lg:text-lg hover:underline">Terms of Service</a>
        <a href="#" className="text-lg sm:text-base lg:text-lg hover:underline">Contact Us</a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
