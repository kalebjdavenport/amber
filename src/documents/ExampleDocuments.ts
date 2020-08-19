import Document, {DocumentType} from './Document';

/**
 * An array of various example `Document`s
 */
export default [
  new Document(
    false,
    ["Food", "Culture"],
    DocumentType.WALKING_TOUR,
    {lat: 35.755277, lng: -83.971879},
    "Downtown Maryville",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+ 
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+ 
      "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "a",
  ),
  new Document(
    false,
    ["Education", "Culture"],
    DocumentType.ARCHIVE_WITH_LOCATION,
    {lat: 35.751676, lng: -83.963243},
    "Maryville College Origins",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+ 
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+ 
      "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "b",
  ),
  new Document(
    false,
    ["Nature"],
    DocumentType.ARCHIVE_WITH_REGION,
    {lat: 35.755277, lng: -83.971879}, // Doesn't need location
    "Greenway Trails",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+ 
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+ 
      "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "c",
  ),
  new Document(
    false,
    ["Education"],
    DocumentType.WALKING_TOUR,
    {lat: 35.748376, lng: -83.977834},
    "Beginning of Maryville High School",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+ 
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+ 
      "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "d",
  ),
  new Document(
    false,
    ["Nature", "Culture", "Education"],
    DocumentType.WALKING_TOUR,
    {lat: 35.723727, lng: -83.982902},
    "Pistol Creek Wetland Center",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"+ 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+ 
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+ 
      "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "e",
  ),
];