
import { getSession } from 'next-auth/react';

import React from 'react';

import Welcome from '../components/welcome/welcome';

const index = () => {
  return <Welcome />
};


export default index;