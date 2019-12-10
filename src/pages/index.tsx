import React from 'react';
import DefaultLayout from '../layouts/Default';
import { Masthead } from '../components/Masthead';
import { Approach } from '../components/Approach';
import { Tools } from '../components/Tools';

export default () => (
  <DefaultLayout>
    <Masthead />
    <Approach />
    <Tools />
  </DefaultLayout>
);
