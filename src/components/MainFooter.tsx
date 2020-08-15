import React from 'react';
import 'twin.macro';

/**
 * The primary footer for the website.
 */
const MainFooter = (): JSX.Element => {
  return (
    <div tw="w-full flex flex-row p-4 box-border">
      <div>
        Made by <a href="https://github.com/garrrettt">Garrett Smith</a>
        —
        <a href="https://github.com/TheEarlyNerd/amber">Open Source Code Available Here</a>
      </div>
      <div tw="flex-grow"></div>
      <div>
        <a href="#">About Amber</a>
      </div>
    </div>
  );
}

export default MainFooter;