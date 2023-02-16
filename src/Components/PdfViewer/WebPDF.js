import React, { useEffect, useRef } from "react";

function WebPDF({ htmlTemplate }) {
  const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
  };
  const removeScript = (scriptToremove) => {
    let allsuspects = document.getElementsByTagName("script");
    for (let i = allsuspects.length; i >= 0; i--) {
      if (
        allsuspects[i] &&
        allsuspects[i].getAttribute("src") !== null &&
        allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1
      ) {
        allsuspects[i].parentNode.removeChild(allsuspects[i]);
      }
    }
  };

  console.log("function WebPDF({htmlTemplate})");

  // componentDidMount with useEffect
  useEffect(() => {
    console.log("WebPDF.componentDidMount[Function]");
    appendScript(`${process.env.PUBLIC_URL}/external/pdfjs.js`);

    // componentWillUnmount with useEffect
    return () => {
      console.log("WebPDF.componentWillUnmount[Function]");
      removeScript(`${process.env.PUBLIC_URL}/external/pdfjs.js`);
    };
  }, []);

  // componentDidUpdate with useEffect
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log("WebPDF.componentDidUpdate[Function]");
    }
  });

  return (
    <div
      id="pdfjs_wrap"
      style={{ height: "100%" }}
      dangerouslySetInnerHTML={{ __html: htmlTemplate }}
    ></div>
  );
}

export default WebPDF;
