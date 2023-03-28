import styled from '@emotion/styled';
import { motion} from 'framer-motion';
import { useWindowSize } from 'react-use';
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

const StyledMainHeader = styled.div`
  position: absolute;
  width:100%;
  top: ${({width})=>(width >=768 ? '30%': width >=480 ? '18%':'15%')};
  left: ${({width})=>(width >=768 ? '45px': width >=480 ? '35px':'40px')};
  z-index: 1;
  font-size: ${({width})=>(width >=768 ? '45px': width >=480 ? '35px':'22px')};
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  display: flex;
  overflow: hidden;
`;

const StyledImgContainer = styled.div`
  overflow: hidden;
  border-radius: 5vh;
`;

const BackGround = styled.div`
  position: absolute;
  margin:0 auto;
  width: ${({width})=>(width >=768 ? '970px': width >=480 ? '630px':'320px')};
  height: ${({width})=>(width >=768 ? '600px':width>=480 ?'480px':'230px')};
  border-radius: 20vh;
  background: linear-gradient(306deg, white, white);
`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 10,
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
  const {width} = useWindowSize();
  return (
    <StyledDivHome>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledMainHeader
          as={motion.div}
          variants={lettersContainer}
          initial="hidden"
          animate="visible"
          width={width}
        >
          {letters.map((letter, idx) => (
            <motion.span variants={letterSpacingVariant} key={idx}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </StyledMainHeader>
        <motion.div
        style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <BackGround width={width}/>
          <motion.div variants={cardVariants}>
            <StyledImgContainer width={width}>
              <img
                src={imgHome}
                alt="laptop&coffee"
                width={width>=768 ? '950px': width>=480 ?'620px':'320'}
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
