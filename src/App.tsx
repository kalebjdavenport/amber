import React from "react";
import "./App.css";
// import { Head } from "./components/Head";
import { Provider } from "react-redux";
import { reducer } from "./store/redux";
import { createStore } from "redux";

import HomeScreen from "./screens/HomeScreen";

// The initial state of our store when the app loads.
// Usually you would fetch this from a server

// We export the constructed redux store
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
