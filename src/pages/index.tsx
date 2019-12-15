import React from 'react';
import DefaultLayout from '../layouts/Default';
import { Masthead } from '../components/Masthead/Masthead';
import { Approach } from '../components/Approach/Approach';
import { Tools } from '../components/Tools/Tools';

export default () => (
  <DefaultLayout>
    <Masthead />
    <Approach />
    <Tools />
  </DefaultLayout>
);
