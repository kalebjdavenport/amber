import React from "react";
import PrimarySearch from "../components/PrimarySearch";
import PrimaryHeader from "../components/PrimaryHeader";
import DocumentsMap from "../components/DocumentsMap";
import ExampleDocuments from "../documents/ExampleDocuments";
import MainFooter from "../components/MainFooter";
import 'twin.macro'

/**
 * The Amber landing page.
 */
const HomeScreen = () => {
  return (
    <div tw="flex flex-col h-full w-full absolute">
      <PrimaryHeader />
      <DocumentsMap documents={ExampleDocuments} />
      <MainFooter />
    </div>
  );
};

export default HomeScreen;
