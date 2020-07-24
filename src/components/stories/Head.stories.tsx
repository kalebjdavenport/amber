import React from 'react';

import { Head } from '../Head';

export default {
  component: Head,
  title: 'Head',
}

export const Sticky = () => <Head title="I'm a title!" isSticky={true} />
export const NotSticky = () => <Head title="I'm a title!" isSticky={false} />