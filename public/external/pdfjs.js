window.onload = () => {
  console.log(`[window.onload()][Begin]`);

  const import_pdfjs = (publicPath) => {
    import(/* webpackIgnore: true */ "./pdfjs/web/viewer.js") // 상대경로
      .then((module) => {
        console.log(`[import() Succeeded] : ./pdfjs/web/viewer.js`);
        const _appOptions = PDFViewerApplicationOptions;
        _appOptions.set(
          "workerSrc",
          `${publicPath}/external/pdfjs/build/pdf.worker.js`
        ); // 절대경로
        _appOptions.set(
          "defaultUrl",
          `${publicPath}/external/pdfjs/web/compressed.tracemonkey-pldi-09.pdf`
        ); // 절대경로
      })
      .catch((err) => {
        console.log(`[import() Failed] : ${err.message}`);
      });
  };

  const publicPath = ``;
  import_pdfjs(publicPath);

  console.log(`[window.onload()][End]`);
};
