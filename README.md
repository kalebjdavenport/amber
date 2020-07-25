# Amber -- Front-end
Amber is a service that helps historic groups digitize local history. We believe that there are
interesting stories to find just about anywhere, and we want to help people discover them. 

## Why the name?
Fossils are often preserved in Amber for millions of years. In the same spirit, we want local
history to be preserved so that everyone can enjoy and learn about the places they travel to!

# Documentation
This project uses yarn for package management. To install all packages that Amber depends on, run
`yarn install`. 

The following yarn scripts are included in the `package.json`:
1. `yarn start`: Allows you to open the Amber website. Should open
   [http://localhost:3000/](http://localhost:3000/) 
2. `yarn build`: Same as above except that this command outputs static files representing the
   current state of Amber.
3. `yarn test`: Runs all the tests including unit tests and snapshot tests. Snapshot tests keep
   track of if any components have changed visually since the last time you changed them. If they
   have, the snapshot tests will fail for the component that has changed visually. Read more about
   these types of tests at the Storybook tutorial linked below.
4. `yarn eject`: This command isn't currently relevant to Amber. See [this StackOverflow
   post](https://stackoverflow.com/questions/48308936/what-does-this-react-scripts-eject-command-do)
   for clarification about this command.
5. `yarn storybook`: this command will build and open storybook in your  browser (navigate to
   [http://localhost:9009](http://localhost:9009) if it doesn't automatically popup). Storybook is
   a service that visually organizes components and allows visual testing where it will notify you
   if a component has changed since the last time you looked at it to make sure it still looks like
   what you intend for it to look like. It is powerful to use and relatively simple to learn using
   the official tutorials linked here: [Official
   Tutorial](https://www.learnstorybook.com/intro-to-storybook).
6. `yarn build-storybook`: this command is the equivalent of `yarn storybook` except that it outputs
   static files instead of maintaining a dynamic connection.

## Storybook
This project uses Storybook for visual documentation of all components and their states. To run
storybook, run `yarn storybook`. 

Storybook is a service that visually organizes components and allows visual testing where it will
notify you if a component has changed since the last time you looked at it to make sure it still
looks like what you intend for it to look like. It is powerful to use and relatively simple to learn
using the official tutorials linked here: [Official
Tutorial](https://www.learnstorybook.com/intro-to-storybook)

## Styling
This project uses TailwindCSS for styling. Specifically, this project makes use of the `twin.macro`
library that enables using Tailwind with [Styled Components](https://styled-components.com/). The
below example illustrates how to style an object with Styled Components and how to use Tailwind
classes with your components.

```
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Note that you could change div to any other HTML element.
const SampleDiv = styled.div`
  background-color: "blue"; // This line uses plain CSS
  ${tw`w-full shadow bg-black`} // This line applies 3 Tailwind CSS classes to our SampleDiv
`;

const MyDiv = () => {
  return (
    <SampleDiv />
  );
}

export default MyDiv;
```

See more about Styled Components at the link above. There are other ways to style elements such as
styling a custom component instead of styling a vanilla HTML element.

## Backend
This front-end connects to the Amber backend via a JSON API, documented at this [GitHub
link](https://github.com/garrrettt/Amber-backend/). Amber-backend is currently private but will soon
be public. Until then, make sure you have access to the repo.