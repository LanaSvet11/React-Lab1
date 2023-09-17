import React from "react";
import HelloWorld from "./components/HelloWorld/index.jsx"; // Importing HelloWorld from the correct path
import ColorChanger from "./components/ColorChanger/index.jsx"; // Import the ColorChanger component

function App() {
  return (
    <div className="App">
      <HelloWorld /> {/* Render the HelloWorld component */}
    </div>
  );
}

function MyApp() {
  return (
    <div className="MyApp">
      {/* Render the ColorChanger component */}
      <ColorChanger />
    </div>
  );
}

export { App, MyApp };
