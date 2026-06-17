import { motion } from 'framer-motion';
import { Button } from '../components/ui';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-4"
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="text-5xl sm:text-7xl font-bold text-gray-900 mb-4 leading-tight"
      >
        Your Name
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.35}
        className="text-xl text-gray-500 mb-8 max-w-xl"
      >
        A passionate full-stack developer building elegant, performant web experiences.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Button size="lg" as="a" href="#projects">
          View Projects
        </Button>
        <Button size="lg" variant="outline" as="a" href="#contact">
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
}
