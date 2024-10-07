import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from "../componets/Footer"; // Corrected the import path
import { containerVariants, cardVariants, textVariants } from '../animations/variants';

const AboutUs = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="p-12 text-[#E0E0E0] max-w-7xl mx-auto rounded-lg shadow-2xl bg-[#1c1c1b]"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-16 text-[#f7d185] tracking-wide"
          variants={textVariants}
        >
          Meet the Team
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Gayatri Kadam Section */}
          <motion.div
            className="flex-1 bg-[#121212] p-8 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex flex-col items-center">
              <motion.img
                src="p3.webp"
                alt="Portrait of Gayatri Kadam, Web Developer"
                className="w-48 h-48 rounded-full border-4 border-[#f7d185] object-cover shadow-md mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.h2
                className="text-3xl font-bold text-[#f7d185] mb-4"
                variants={textVariants}
              >
                Gayatri Kadam
              </motion.h2>
              <motion.p
                className="text-base mb-4 leading-relaxed"
                variants={textVariants}
              >
                As a Web developer, I am passionate about building innovative web applications. My focus is on creating user-centric experiences with a strong background in modern web technologies.
              </motion.p>
              <motion.p
                className="text-base mb-4 leading-relaxed italic"
                variants={textVariants}
              >
                Fun Fact: Football is my escape and my passion!
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {["JavaScript", "React", "Express.js", "Node.js", "MongoDB"].map(skill => (
                  <motion.span
                    key={skill}
                    className="bg-[#f7d185] text-black font-semibold py-2 px-4 rounded-full text-sm shadow-md"
                    variants={textVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/gayatrik26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7d185] hover:text-[#FF6384] transition-colors duration-300 text-3xl"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i> {/* GitHub Icon */}
                </a>
                <a
                  href="https://www.linkedin.com/in/gayatri-k-2a9831204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7d185] hover:text-[#FF6384] transition-colors duration-300 text-3xl"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Abhishek Giri Section */}
          <motion.div
            className="flex-1 bg-[#121212] p-8 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex flex-col items-center">
              <motion.img
                src="p1.webp" 
                alt="Portrait of Abhishek Giri, Backend Developer"
                className="w-48 h-48 rounded-full border-4 border-[#f7d185] object-cover shadow-md mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.h2
                className="text-3xl font-bold text-[#f7d185] mb-4"
                variants={textVariants}
              >
                Abhishek Giri
              </motion.h2>
              <motion.p
                className="text-base mb-4 leading-relaxed"
                variants={textVariants}
              >
                I specialize in backend development and enjoy crafting efficient, scalable systems. My goal is to build robust applications that enhance user experiences and drive technology forward.
              </motion.p>
              <motion.p
                className="text-base mb-4 leading-relaxed italic"
                variants={textVariants}
              >
                Fun Fact: I enjoy playing chess and solving puzzles in my free time!
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {["JavaScript", "Node.js", "Express", "MongoDB", "React"].map(skill => (
                  <motion.span
                    key={skill}
                    className="bg-[#f7d185] text-black font-semibold py-2 px-4 rounded-full text-sm shadow-md"
                    variants={textVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/abhishekgiri013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7d185] hover:text-[#FF6384] transition-colors duration-300 text-3xl"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i> {/* GitHub Icon */}
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishekgiri013/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7d185] hover:text-[#FF6384] transition-colors duration-300 text-3xl"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="text-center mt-12">
          <motion.p
            className="text-lg leading-relaxed mb-4 text-[#E0E0E0]"
            variants={textVariants}
          >
            Feel free to reach out for collaboration or inquiries!
          </motion.p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutUs;
