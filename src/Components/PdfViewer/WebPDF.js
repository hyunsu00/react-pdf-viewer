import React, { useEffect, useState, useRef } from "react";

function WebPDF() {
  const [htmlStr, setHtmlStr] = useState();
  async function fetchHtml() {
    const _htmlStr = await (
      await fetch(`${process.env.PUBLIC_URL}/external/pdfjs_template.html`)
    ).text();
    console.log(`[WebPDF.fetchHtml] : _htmlStr = 설정됨`);

    setHtmlStr(_htmlStr);
  }

  // componentDidMount with useEffect
  useEffect(() => {
    console.log("WebPDF.componentDidMount[Function]");

    fetchHtml();

    // componentWillUnmount with useEffect
    return () => {
      console.log("WebPDF.componentWillUnmount[Function]");
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
    <>
      {!htmlStr && console.log(`WebPDF.render[Function] : htmlStr = 없음`)}
      {htmlStr && console.log(`WebPDF.render[Function] : htmlStr = 설정됨`)}
      {htmlStr && (
        <div
          id="pdfjs_wrap"
          style={{ height: "100%" }}
          dangerouslySetInnerHTML={{ __html: htmlStr }}
        ></div>
      )}
    </>
  );
}

export default WebPDF;
