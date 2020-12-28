/* -----------------------------------------------------------------
	This file holds the functions that control the content
	in text editors, as well as functions that control iframes
	----------------------------------------------------------------- */

/* -----------------------------------------------------------------
	open height of iframe to content (remove scrolling on view side)
	----------------------------------------------------------------- */
function iframeResize() {
	var iFrames;
	var iFrames = $('iframe');

	console.log(iFrames.length);

	for (var i = 0, j = iFrames.length; i < j; i++) {
		iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';
		iFrames[i].style.width = '100%';
	}

	iFrames.load(function() {
		this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
	});
}

/* -----------------------------------------------------------------
	build full kendo editor
	----------------------------------------------------------------- */
function kendoFullEditor(element,font) {

	// attempt to clean string on load (can be multiples)
	$(element).each(function() {
		var text = $(this).val();
		var text = text.replace(/k-paste-container/g,'');
		$(this).val(text);
	});

	// set default font
	if (font == 'serif') {
		$editorDefaultFont = 'Lora';
	} else {
		$editorDefaultFont = 'Open Sans';
	}

	// instantiate editor
	var editor = $(element).kendoEditor({
		resizable: {
			content: true,
			toolbar: false,
			min: 400
		},
		messages: {
            fontNameInherit: '(Select Font)',
            fontSizeInherit: '(Select Font Size)',
            insertHtml : 'Insert Merge Field'
        },
        immutables: true,
		encoded: false,
		pasteCleanup: {
			all: false,
			css: false,
			keepNewLines: false,
			msAllFormatting: true,
			msConvertLists: true,
			msTags: true,
			none: false,
			span: false,
			custom: function(html) {
				//attempt to strip out more word garbage
				var cleanedHTML = html.replace(/<\/?w:sdt[^>]*>/g, "");
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[ \n\r\t]*<\/[^>]+>/g, '');
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[&nbsp;]*<\/[^>]+>/g,'');
				var cleanedHTML = cleanedHTML.replace(/k-paste-container/g,''); // this is a bug when pasting from Google Docs
				var cleanedHTML = cleanedHTML.replace(/<img[^>]*>/g, "");
                return cleanedHTML;
			}
		},
		paste: function(e) {
			setTimeout(function() {
				var editor = $(element).data("kendoEditor");
				var range = editor.createRange();
				range.selectNodeContents(editor.body);
				editor.selectRange(range);
				editor.exec("fontName", { value: $editorDefaultFont });
			},1000);
		},
		tools: [
			{
				name: "fontName",
				items: [
					{
						text: "Abril Fatface",
						value: "Abril Fatface"
					},{
						text: "Arvo",
						value: "Arvo"
					},{
						text: "Butterfly Kids",
						value: "Butterfly Kids"
					},{
						text: "Dancing Script",
						value: "Dancing Script"
					},{
						text: "Great Vibes",
						value: "Great Vibes"
					},{
						text: "Grand Hotel",
						value: "Grand Hotel"
					},{
						text: "Lora",
						value: "Lora"
					},{
						text: "Open Sans",
						value: "Open Sans"
					},{
						text: "Poiret One",
						value: "Poiret One"
					}
				]
			},
			"fontSize",
			"formatting",
			{
				name: "foreColor",
				palette: "basic"
			},
			{
				name: "backColor",
				palette: "basic"
			},
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"indent",
			"outdent",
			"justifyLeft",
			"justifyCenter",
			"justifyRight",
			"justifyFull",
			"insertUnorderedList",
			"insertOrderedList",
			"createLink",
			"unlink",
			"subscript",
            "superscript",
            "tableWizard",
            "createTable",
            "addRowAbove",
            "addRowBelow",
            "addColumnLeft",
            "addColumnRight",
            "deleteRow",
            "deleteColumn",
			{
				name: "customToolRule",
				tooltip: "Insert horizontal line",
				exec: function(e) {
					var editor = $(this).data("kendoEditor");
					editor.exec("inserthtml", { value: "<hr />" });
				}
            },
            /*{ name: "insertHtml",
              items: [
                  { text: "First Name", value: "&nbsp;<span contenteditable=false><b><< FIRST_NAME >></b></span>&nbsp;" },
                  { text: "Last Name", value: "&nbsp;<span contenteditable=false><b><< LAST_NAME >></b></span>&nbsp;" },
                  { text: "Company", value: "&nbsp;<span contenteditable=false><b><< COMPANY_NAME >></b></span>&nbsp;" },
                  { text: "Address", value: "&nbsp;<span contenteditable=false><b><< ADDRESS >></b></span>&nbsp;" }
              ]
            },*/
            "viewHtml",
            "cleanFormatting"
		]
	});

	// Setup editor iframe with all fonts, styles it needs
	$(editor.data("kendoEditor").body)
	.prevAll("head")
	.append("<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Lora:400,700' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Dancing+Script' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>")
	.append("<link href='https://fonts.googleapis.com/css?family=Butterfly+Kids' rel='stylesheet' type='text/css'>")
	.append("<link href='https://d1vpukrd9uvxxk.cloudfront.net/includes/bootstrap-for-pdf-output/bootstrap.min.css' rel='stylesheet' type='text/css'>")
	.append("<style>html,body{font-family:'"+$editorDefaultFont+"';font-size:small;}b,strong{font-weight:700;}h1,h2,h3{font-weight:300;}</style>");
}

/* -----------------------------------------------------------------
	build light kendo editor
	----------------------------------------------------------------- */
function kendoLightEditor(element,font) {

	// set default font
	if (font == 'serif') {
		$editorDefaultFont = 'Lora';
	} else {
		$editorDefaultFont = 'Open Sans';
	}

	// instantiate editor
	var editor = $(element).kendoEditor({
		resizable: {
			content: true,
			toolbar: false,
			min: 400
		},
		messages: {
            fontNameInherit: '(Select Font)',
            fontSizeInherit: '(Select Font Size)',
            insertHtml : 'Insert Merge Field'
        },
        immutables: true,
		encoded: false,
		pasteCleanup: {
			all: true,
			custom: function(html) {
				//attempt to strip out more word garbage
				var cleanedHTML = html.replace(/<\/?w:sdt[^>]*>/g, "");
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[ \n\r\t]*<\/[^>]+>/g, '');
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[&nbsp;]*<\/[^>]+>/g,'');
				var cleanedHTML = cleanedHTML.replace(/k-paste-container/g,''); // this is a bug when pasting from Google Docs
				var cleanedHTML = cleanedHTML.replace(/<img[^>]*>/g, "");
                return cleanedHTML;
			}
		},
		paste: function(e) {
			setTimeout(function() {
				var editor = $(element).data("kendoEditor");
				var range = editor.createRange();
				range.selectNodeContents(editor.body);
				editor.selectRange(range);
				editor.exec("fontName", { value: $editorDefaultFont });
			},1000);
		},
		tools: [

			"bold",
			"italic",
			"underline",
			"indent",
			"outdent",
			"justifyLeft",
			"justifyCenter",
			"justifyRight",
			"justifyFull",
			"insertUnorderedList",
			"insertOrderedList",
			"createLink",
			"unlink",
			"viewHtml"
		]
	});

	// Setup editor iframe with all fonts, styles it needs
	$(editor.data("kendoEditor").body)
	.prevAll("head")
	.append("<link href='https://d1vpukrd9uvxxk.cloudfront.net/includes/bootstrap-for-pdf-output/bootstrap.min.css' rel='stylesheet' type='text/css'>")
	.append("<style>html,body{font-family:'"+$editorDefaultFont+"';font-size:small;</style>")
}

/* -----------------------------------------------------------------
	build exteranl kendo editor
	----------------------------------------------------------------- */
function kendoExternalEditor(element) {

	// set default font
	$editorDefaultFont = 'Open Sans';

	// instantiate editor
	var editor = $(element).kendoEditor({
		resizable: {
			content: true,
			toolbar: false,
			min: 400
		},
		messages: {
            fontNameInherit: '(Select Font)',
            fontSizeInherit: '(Select Font Size)',
            insertHtml : 'Insert Merge Field'
        },
        immutables: true,
		encoded: false,
		pasteCleanup: {
			all: true,
			custom: function(html) {
				//attempt to strip out more word garbage
				var cleanedHTML = html.replace(/<\/?w:sdt[^>]*>/g, "");
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[ \n\r\t]*<\/[^>]+>/g, '');
				var cleanedHTML = cleanedHTML.replace(/<[^\/>]+>[&nbsp;]*<\/[^>]+>/g,'');
				var cleanedHTML = cleanedHTML.replace(/k-paste-container/g,''); // this is a bug when pasting from Google Docs
				var cleanedHTML = cleanedHTML.replace(/<img[^>]*>/g, "");
                return cleanedHTML;
			}
		},
		paste: function(e) {
			setTimeout(function() {
				var editor = $(element).data("kendoEditor");
				var range = editor.createRange();
				range.selectNodeContents(editor.body);
				editor.selectRange(range);
				editor.exec("fontName", { value: $editorDefaultFont });
			},1000);
		},
		tools: [

			"bold",
			"italic",
			"underline",
			"indent",
			"outdent",
			"justifyLeft",
			"justifyCenter",
			"justifyRight",
			"justifyFull",
			"insertUnorderedList",
			"insertOrderedList",
			"createLink",
			"unlink",
			"viewHtml"
		]
	});

	// Setup editor iframe with all fonts, styles it needs
	$(editor.data("kendoEditor").body)
	.prevAll("head")
	.append("<link href='https://d1vpukrd9uvxxk.cloudfront.net/includes/bootstrap-for-pdf-output/bootstrap.min.css' rel='stylesheet' type='text/css'>")
	.append("<style>html,body{font-family:'"+$editorDefaultFont+"';font-size:small;</style>")
}