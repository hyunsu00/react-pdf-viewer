import React, { useEffect, useState } from "react";
import "./App.css";
import WebPDF from "./Components/PdfViewer/WebPDF";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <WebPDF />
    </div>
  );
}

// function App() {
//   const [htmlStr, setHtmlStr] = useState();

//   async function fetchHtml() {
//     const htmlStr = await (
//       await fetch(`${process.env.PUBLIC_URL}/external/pdfjs_template.html`)
//     ).text();
//     setHtmlStr(htmlStr);
//   }
//   useEffect(() => {
//     fetchHtml();
//   }, []);

//   return (
//     <div className="App" style={{ height: "100%" }}>
//       <div
//         id="pdfjs_wrap"
//         style={{ height: "100%" }}
//         dangerouslySetInnerHTML={{ __html: htmlStr }}
//       ></div>
//     </div>
//   );
// }

export default App;
