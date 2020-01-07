import React, { FC, ComponentClass } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Heading, Content, Link } from '../Text';
import Mail from '../../assets/icon/mail.svg';
import Phone from '../../assets/icon/phone.svg';
import LinkedIn from '../../assets/icon/linkedin.svg';
import Twitter from '../../assets/icon/twitter.svg';
import GitHub from '../../assets/icon/github.svg';
import Medium from '../../assets/icon/medium.svg';

export interface ContactItem {
  text: string;
  icon: ComponentClass;
  link: string;
}

const items: ContactItem[] = [
  {
    text: 'drew@drewloomer.com',
    icon: Mail,
    link: 'mailto:drew@drewloomer.com'
  },
  {
    text: '469 626 7214',
    icon: Phone,
    link: 'tel:4696267214'
  },
  {
    text: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/drewloomer/'
  },
  {
    text: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/drewloomer'
  },
  {
    text: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/drewloomer'
  },
  {
    text: 'Medium',
    icon: Medium,
    link: 'https://medium.com/@drewloomer'
  }
];

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

const UL = styled(Content)``;

const LI = styled.li`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const A = styled(Link)`
  align-items: center;
  display: flex;

  svg {
    height: 2rem;
    margin-right: 1rem;
    width: 2rem;
  }
`;

export interface ContactProps {
  className?: string;
}

export const Contact: FC<ContactProps> = props => (
  <Section {...props}>
    <Wrapper>
      <H2 as="h2">Contact me</H2>
      <P>Drop me a line, give me a call or find me around the web.</P>
      <UL as="ul">
        {items.map(({ link, text, icon: SVG }, i) => (
          <LI>
            <A href={link} target="_blank" rel="noopener">
              <SVG />
              {text}
            </A>
          </LI>
        ))}
      </UL>
    </Wrapper>
  </Section>
);

export default Contact;
