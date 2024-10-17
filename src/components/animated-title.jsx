import { motion } from 'framer-motion';

const AnimatedTitle = () => (
  <motion.div
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 5,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    }}
    style={{
      background: 'linear-gradient(90deg, rgb(250, 116, 174) 0%, rgb(84, 161, 248) 50%, rgb(250, 116, 174) 100%)',
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
      fontFamily: 'Cabinet Grotesk, sans-serif',
      fontSize: '70px',
      fontWeight: '900',
    }}
    className='text-center'
  >
    Front-End Web Developer
  </motion.div>
);

export default AnimatedTitle
