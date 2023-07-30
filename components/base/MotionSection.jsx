import { motion } from 'framer-motion';

function MotionSection(props) {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    />
  );
}

export default MotionSection;
