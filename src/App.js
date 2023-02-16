import "./App.css";
import WebPDF from "./Components/PdfViewer/WebPDF";
import React, { useEffect, useRef } from "react";

function App() {
  // componentDidMount with useEffect
  useEffect(() => {
    console.log("App.componentDidMount[Function]");
    // componentWillUnmount with useEffect
    return () => {
      console.log("App.componentWillUnmount[Function]");
    };
  }, []);
  // componentDidUpdate with useEffect
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log("App.componentDidUpdate[Function]");
    }
  });

  return (
    <>
      {console.log(`App.render[Function] : Begin`)}
      <div className="App" style={{ height: "100%" }}>
        <WebPDF />
      </div>
      {console.log(`App.render[Function] : End`)}
    </>
  );
}

export default App;
