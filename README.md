# Amber — Front-end
Amber is a service that helps historic groups digitize local history. We believe that there are
interesting stories to find just about anywhere, and we want to help people discover them. 

## Why the name?
Fossils are often preserved in Amber for millions of years. In the same spirit, we want local
history to be preserved so that everyone can enjoy and learn about the places they travel to!

# Documentation
This project uses yarn for package management. To install all packages that Amber depends on, run
`yarn install`. 

The following relevant yarn scripts are included in the `package.json` among a few others:
1. `yarn start`: Allows you to open the Amber website. Should open
   [http://localhost:3000/](http://localhost:3000/) 
2. `yarn test`: Runs all the tests including unit tests and snapshot tests. Snapshot tests keep
   track of if any components have changed visually since the last time you changed them. If they
   have, the snapshot tests will fail for the component that has changed visually. Read more about
   these types of tests at the Storybook tutorial linked below.
3. `yarn storybook`: this command will build and open storybook in your  browser (navigate to
   [http://localhost:9009](http://localhost:9009) if it doesn't automatically popup). Storybook is
   a service that visually organizes components and allows visual testing where it will notify you
   if a component has changed since the last time you looked at it to make sure it still looks like
   what you intend for it to look like. It is powerful to use and relatively simple to learn using
   the official tutorials linked here: [Official
   Tutorial](https://www.learnstorybook.com/intro-to-storybook).

## Storybook
This project uses Storybook for visual documentation of all components and their states. To run
storybook, run `yarn storybook`. 

Storybook is a service that visually organizes components and allows visual testing where it will
notify you if a component has changed since the last time you looked at it to make sure it still
looks like what you intend for it to look like. It is powerful to use and relatively simple to learn
using the official tutorials linked here: [Official
Tutorial](https://www.learnstorybook.com/intro-to-storybook)

## Styling
This project uses TailwindCSS ([documentation](https://tailwindcss.com/docs/)) for styling. 
Specifically, this project makes use of the `twin.macro` library that enables using Tailwind with
[Styled Components](https://styled-components.com/). The below example illustrates how to style an
object with Styled Components and how to use Tailwindclasses with your components.

```javascript
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Note that you could change div to any other HTML element.
const SampleDiv = styled.div`
  background-color: "blue"; // This line uses plain CSS
  ${tw`w-full shadow bg-black`} // This line applies 3 Tailwind CSS classes to our SampleDiv
`;

const MyDiv = () => <SampleDiv />;
```

Alternatively, you can add your Tailwind classes inline shown below. Note that you should *not* use
the style prop with twin.macro as it limits the functionality of twin.macro including not being able
to use CSS selectors such as focus or hover.

```javascript
// **Important** - the package 'twin.macro' must be imported for the tw prop to work, even though 
// this won't display any warnings without the import
const MyDiv = () => <input tw="w-full shadow bg-black" />;
```

Lastly, if you want to use both normal styles and Tailwind classes inline in the same prop, you can
do it using the `css` prop as shown below. 

```javascript
const MyDiv = () => <input css={[tw`w-full shadow bg-black`, {background-color: "blue"}]} />;
```

See more about twin.macro here:
[https://github.com/ben-rogerson/twin.macro](https://github.com/ben-rogerson/twin.macro).
Specifically take note of the section "How it Works" and how usage of tw is ultimately compiled
to normal CSS so you can use it anywhere you'd use normal CSS like in the style prop of an HTML
element (as shown above). 

## Backend
This front-end connects to the Amber backend via a JSON API, documented at this [GitHub
link](https://github.com/garrrettt/Amber-backend/). Amber-backend is currently private but will soon
be public. Until then, make sure you have access to the repo.

## Code Style and General Precautions
If you contribute to Amber, here are some guidelines you should try to follow:
1. 100 character limit for readability
2. No TODOs committed to master
3. No API keys or secret keys in anywhere except for .env files.