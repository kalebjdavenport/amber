import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import tw from 'twin.macro';

const StylizedCard = styled.div`
  background-color: ${theme.PASTEL_ORANGE};
  ${tw`shadow w-full p-2 m-2`}
`;

/**
 * A DocumentCard is a card on which the description of a document can sit. The DocumentCard itself
 * is just a stylized card with no content or placement of inner children.
 */
const DocumentCard = ({children}: {
  children?: React.ReactNode
}): JSX.Element => {
  return (
    <StylizedCard>
      {children}
    </StylizedCard>
  );
}

export default DocumentCard;