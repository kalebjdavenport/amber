import React from 'react';

import { SurroundingDashes } from '../SurroundingDashes';

export default {
  component: SurroundingDashes,
  title: 'SurroundingDashes',
}

export const Default = () => <SurroundingDashes child={[<h1>Hello World!</h1>]} />