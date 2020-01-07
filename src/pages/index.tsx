import React from 'react';
import DefaultLayout from '../layouts/Default';
import { Masthead } from '../components/Masthead/Masthead';
import { Approach } from '../components/Approach/Approach';
import { Tools } from '../components/Tools/Tools';
import AboutMe from '../components/AboutMe/AboutMe';
import Brands from '../components/Brands/Brands';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';

export default () => (
  <DefaultLayout>
    <Masthead />
    <Approach />
    <Tools />
    <AboutMe />
    <Brands />
    <Resume />
    <Contact />
  </DefaultLayout>
);
