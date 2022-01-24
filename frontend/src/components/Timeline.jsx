import styled from 'styled-components';
import TimeCard from './TimeCard';
import { motion } from 'framer-motion';
import { timeline } from '../utils/constants';
import ViewPortHeading from './Heading';

const Timeline = () => {
  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <ViewPortHeading text="Timeline" />
      {/* <TimeCard timeline={timeline} /> */}
      <TimeCard timeline={timeline} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin-bottom: 4rem;
`;

export default Timeline;
