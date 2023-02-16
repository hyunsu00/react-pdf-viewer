import "./App.css";
import WebPDF from "./Components/PdfViewer/WebPDF";
import React, { useState, useEffect, useRef } from "react";

function App() {
  console.log(`[function App()]`);

  const [htmlStr, setHtmlStr] = useState();
  async function fetchHtml() {
    const _htmlStr = await (
      await fetch(`${process.env.PUBLIC_URL}/external/pdfjs_template.html`)
    ).text();
    console.log(`[App.fetchHtml] : _htmlStr = 설정됨`);

    setHtmlStr(_htmlStr);
  }

  // componentDidMount with useEffect
  useEffect(() => {
    console.log("App.componentDidMount[Function]");

    fetchHtml();

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
        {htmlStr && (<WebPDF htmlTemplate = {htmlStr}/>)}
      </div>
      {console.log(`App.render[Function] : End`)}
    </>
  );
}

export default App;
