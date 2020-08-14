import initStoryshots, { snapshotWithOptions } from "@storybook/addon-storyshots";
import { FormItemInputData } from "./components/stories/DocumentCreationForm.stories";
import path from "path";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

const createNodeMock = (element: any) => {
  const documentCreationFormComponents = 
    ['AddTags', 'LoreOrCredible', 'PlaceMarker', 'SelectArticleType', 'WriteArticle'];
  if (documentCreationFormComponents.includes(element.type)) {
    return FormItemInputData;
  }
  return null;
}

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),

  // This file is adapted from an official example, so despite the red underline below, I will leave
  // it for now. It appears to work without any errors.
  test: snapshotWithOptions({createNodeMock}),
});