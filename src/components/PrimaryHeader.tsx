import React from 'react';
import tw from 'twin.macro';
import PrimarySearch from './PrimarySearch';
import styled from 'styled-components';

const headerStyles = 
  Object.assign(
    {}, 
    { fontFamily: 'Cinzel, serif', }, 
    tw`mr-2 my-0 ml-0 self-center`
  );

const standardBtnStyles = tw`
  mx-2 
  px-2 
  py-0 
  my-0 
  text-white 
  shadow 
  font-serif 
  font-bold 
  border-none
  outline-none
  cursor-pointer
  active:shadow-none
  whitespace-no-wrap`;

const PrimaryBtn = styled.button`
  background-color: #2E4E6A;
  ${standardBtnStyles}
`;

const SecondaryBtn = styled.button`
  background-color: #863A4D;
  ${standardBtnStyles}
`;

export const MainNavBackground = 
  tw.div`w-full p-2 bg-white shadow flex flex-row content-around box-border`;

/**
 * The logo (despite it being only text) of this app.
 */
export const AmberText = <h1 style={headerStyles}>Amber</h1>;

/**
 * The header to be used on pages that don't need a more specialized header. Contains a logo, search
 * bar (searches globally through all articles), "Your Articles", "New Walking Tour", "New Article",
 * and "Sign in".
 */
const PrimaryHeader = () => {
  return (
    <MainNavBackground>
      {AmberText}
      <PrimarySearch />
      <PrimaryBtn>Your Articles</PrimaryBtn>
      <PrimaryBtn>New Walking Tour</PrimaryBtn>
      <PrimaryBtn>New Article</PrimaryBtn>
      <SecondaryBtn>New Article</SecondaryBtn>
    </MainNavBackground>
  );
}

export default PrimaryHeader;