import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Stelios Alexandrakis from Laptop! <br/>
        Junior Web Developer <br/>
        Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of Javascript mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. 
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;