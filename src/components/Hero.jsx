import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import { styles } from "../styles";
import { headContentAnimation } from "../utils/motion";
import { portrait } from "../assets";

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid #854ce6;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: #854ce6;
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 6px;
  color: #f2f3f4;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Portrait = styled(motion.div)`
  padding-right: 5rem;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 1rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  height: 100vh;
`;

const SecondDiv = styled.div`
  grid-column: 2 / 8;
  grid-row: 2 / 2;

  display: flex;
  justify-content: center; /* Align content to the right */
  align-items: center; /* Vertically center content */
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile */
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
  }
`;

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Container>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Tomer Gal</span>
            </h1>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: [
                      "a Team Leader",
                      "an Investor",
                      "a Climber",
                      "a Software Engineer",
                      "Ambitious",
                      "a Mentor",
                      "an Option Trader",
                      "a Salsa Dancer",
                      "Passionate",
                      "a Software Architect",
                      "a Paraglider",
                      "a Blog Writer",
                      "Sensitive",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
          </div>
        </div>
        <SecondDiv>
          <Portrait {...headContentAnimation}>
            <Tilt>
              <Img src={portrait} alt="Tomer Gal" />
            </Tilt>
          </Portrait>
          <p className={`${styles.heroSubText} text-white-100`}>
            "Ambition is the path to success.
            <br className="sm:block hidden" /> Persistence is the vehicle you
            arrive in."
          </p>
        </SecondDiv>
      </Container>
    </section>
  );
};

export default Hero;
