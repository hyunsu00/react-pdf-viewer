import React, { useEffect, useState } from'react';
import "./App.css";

function App() {
  const [htmlStr, setHtmlStr] = useState();

  async function fetchHtml() {
    setHtmlStr(await (await fetch(`./external/pdfjs_template.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div className="App" style={{height:'100%'}} >
      <div id="pdfjs_wrap" style={{height:'100%'}}  dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
    </div>
  );
}

export default App;


