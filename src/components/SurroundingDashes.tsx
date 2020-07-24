import React, { ReactNode } from 'react';

import './SurroundingDashes.css';

/**
 * Parameters of SurroundingDashes.
 */
interface Params {
  child: ReactNode
}

/**
 * SurroundingDashes creates an unstyled div that wraps the given text with dashes. For example,
 * providing an innerText of "Hello World" would look something like "----Hello World----" except
 * that there are no spaces between the dashes which are present in the above ASCII dashes.
 */
export const SurroundingDashes = ({ child } : Params) => {
  return (
    <div className="SurroundingDashes">
      { child }
    </div>
  )
}