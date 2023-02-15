window.onload = () => {
	import(/* webpackIgnore: true */ './external/pdfjs/web/viewer.js').then(()=> {
		const _appOptions = PDFViewerApplicationOptions;
		_appOptions.set("workerSrc", `external/pdfjs/build/pdf.worker.js`);
		_appOptions.set("defaultUrl", `external/pdfjs/web/compressed.tracemonkey-pldi-09.pdf`);
	});
};

