import styled from '@emotion/styled';
import { motion} from 'framer-motion';
import imgHome from '../img/homeImg.jpg';

const StyledDivHome = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 70px;
  background-color: rgb(24, 28, 52);
`;

const styledMainHeader = {
  position: 'absolute',
  top: '30%',
  left: '200px',
  zIndex: 1,
  fontSize: '45px',
  fontWeight: 700,
  fontFamily: 'Montserrat',
  color: 'white',
  display: 'flex',
  overflow: 'hidden',
};

const StyledImgContainer = styled.div`
  overflow: hidden;
  border-radius: 5vh;
`;

const BackGround = styled.div`
  position: absolute;
  width: 920px;
  height: 700px;
  border-radius: 20vh;
  background: linear-gradient(306deg, white, white);
`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
};
const letterSpacingVariant = {
  hidden: {
    opacity: 0,
    x: 200,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    x: 2,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const lettersContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const HomePage = () => {
  const letters = Array.from('PhoneBook APP');
  return (
    <StyledDivHome>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <motion.div
          style={styledMainHeader}
          variants={lettersContainer}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, idx) => (
            <motion.span variants={letterSpacingVariant} key={idx}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <BackGround />
          <motion.div variants={cardVariants}>
            <StyledImgContainer>
              <img
                src={imgHome}
                alt="laptop&coffee"
                width="950"
                style={{ display: 'block' }}
              />
            </StyledImgContainer>
          </motion.div>
        </motion.div>
      </div>
    </StyledDivHome>
  );
};

export default HomePage;
