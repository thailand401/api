var feature = [
	{
		"idi": "add_image",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-image mif-2x",
		"name": "Image",
		"events": "addImage(this)",
		"unlock": true,
		"topsize": 290,
		"child":[
			{
				"idi": "image_list",
				"klass": "ico-btn-s group-text-tool-0 no-active",
				"icon": "icon icon-images",
				"name": "Gallery",
				"events": "imageList(this)",
				"unlock": true
			},
			{
				"idi": "image_zoomin",
				"klass": "ico-btn-s group-text-tool-1",
				"icon": "icon icon-plus",
				"name": "Zoom in",
				"events": "zoomIn(this)",
				"unlock": true
			},
			{
				"idi": "image_zoomout",
				"klass": "ico-btn-s group-text-tool-1",
				"icon": "icon icon-minus",
				"name": "Zoom out",
				"events": "zoomOut(this)",
				"unlock": true
			},
			{
				"idi": "image_vflip",
				"klass": "ico-btn-s group-text-tool-2 fixsize1",
				"icon": "mif-vertical-align-center mif-2x rotate90 fixline",
				"name": "Vertival Flip",
				"events": "vFlip(this)",
				"unlock": true
			},
			{
				"idi": "image_hflip",
				"klass": "ico-btn-s group-text-tool-2 fixsize1",
				"icon": "mif-vertical-align-center mif-2x fixline",
				"name": "Horizatal Flip",
				"events": "hFlip(this)",
				"unlock": true
			},
			{
				"idi": "image_effect",
				"klass": "ico-btn-s group-text-tool-0",
				"icon": "icon icon-sun",
				"name": "Image effect",
				"events": "effectImage(this)",
				"unlock": true
			},
			{
				"idi": "image_crop",
				"klass": "ico-btn-s group-text-tool-3",
				"icon": "icon icon-crop",
				"name": "Crop image",
				"events": "cropImage(this)",
				"unlock": true
			},
			{
				"idi": "object_delete",
				"klass": "ico-btn-s group-text-tool-3 no-active",
				"icon": "icon icon-cancel-circle",
				"name": "Delte",
				"events": "deleteObject(this)",
				"unlock": true
			}
		]
	},
	{
		"idi": "add_vector",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-florist mif-2x",
		"name": "Vector",
		"events": "addVector()",
		"unlock": true
	},
	{
		"idi": "add_effect",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-magic-wand mif-2x",
		"name": "Effect",
		"events": "addEffect(this)",
		"unlock": true
	},
	{
		"idi": "add_text",
		"klass": "ico-btn draw-tool",
		"icon": "shake icon icon-font-size",
		"name": "Text",
		"events": "addText(this)",
		"unlock": true,
		"topsize": 425,
		"child":[
			{
				"idi": "text_font",
				"klass": "ico-btn-s group-text-tool-0 no-active",
				"icon": "icon icon-font",
				"name": "Font family",
				"events": "fontSelect(this)",
				"unlock": true
			},
			{
				"idi": "text_size",
				"klass": "ico-btn-s group-text-tool-0 fixsize1 no-active",
				"icon": "icon text-fix",
				"name": "Font size",
				"init": "Initsize",
				"events": "fontSize(this)",
				"unlock": true
			},
			{
				"idi": "text_bold",
				"select": "text_bold",
				"remove": "bold",
				"klass": "ico-btn-s group-text-tool-1",
				"icon": "icon icon-bold",
				"name": "Bold",
				"events": "changeBold(this)",
				"unlock": true
			},
			{
				"idi": "text_italic",
				"select": "text_italic",
				"remove": "italic",
				"klass": "ico-btn-s group-text-tool-1",
				"icon": "icon icon-italic",
				"name": "Italic",
				"events": "changeItalic(this)",
				"unlock": true
			},
			{
				"idi": "text_underline",
				"select": "text_line",
				"remove": "underline",
				"klass": "ico-btn-s group-text-tool-1",
				"icon": "icon icon-underline",
				"name": "Underline",
				"events": "changeUnderline(this)",
				"unlock": true
			},
			{
				"idi": "align_left",
				"select": "text_align",
				"remove": "left center right",
				"klass": "ico-btn-s group-text-tool-2",
				"icon": "icon icon-paragraph-left",
				"name": "Align left",
				"events": "alignLeft(this)",
				"unlock": true
			},
			{
				"idi": "align_center",
				"select": "text_align",
				"remove": "left center right",
				"klass": "ico-btn-s group-text-tool-2",
				"icon": "icon icon-paragraph-center",
				"name": "Align center",
				"events": "alignCenter(this)",
				"unlock": true
			},
			{
				"idi": "align_right",
				"select": "text_align",
				"remove": "left center right",
				"klass": "ico-btn-s group-text-tool-2",
				"icon": "icon icon-paragraph-right",
				"name": "Align right",
				"events": "alignRight(this)",
				"unlock": true
			},
			{
				"idi": "text_pattern",
				"klass": "ico-btn-s group-text-tool-3 mif-wrap",
				"icon": "mif-palette mif-2x",
				"name": "New text",
				"events": "textPattern(this)",
				"unlock": true
			},
			{
				"idi": "object_color",
				"klass": "ico-btn-s group-text-tool-3 fixsize1 no-active gracolor",
				"icon": "icon text-fix",
				"name": "Color picker",
				"events": "objectColor(this)",
				"unlock": true
			},
			{
				"idi": "new_text",
				"klass": "ico-btn-s group-text-tool-3 no-active",
				"icon": "icon icon-plus",
				"name": "New text",
				"events": "newText(this)",
				"unlock": true
			},
			{
				"idi": "object_delete",
				"klass": "ico-btn-s group-text-tool-3 no-active",
				"icon": "icon icon-cancel-circle",
				"name": "Delte",
				"events": "deleteObject(this)",
				"unlock": true
			}
		]
	},
	{
		"idi": "add_shape",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-chart-pie mif-2x",
		"name": "Shape",
		"events": "addShape()",
		"unlock": true
	},
	{
		"idi": "create_Brush",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-pencil mif-2x",
		"name": "Brush",
		"events": "createBrush()",
		"unlock": true
	},
	{
		"idi": "create_layer",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-stack mif-2x",
		"name": "Layer",
		"events": "createLayer()",
		"unlock": true
	},
	{
		"idi": "save_design",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-cloud-upload mif-2x",
		"name": "Save",
		"events": "saveDesign()",
		"unlock": false
	},
	{
		"idi": "load_design",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-cloud-download mif-2x",
		"name": "Load",
		"events": "loadDesign()",
		"unlock": false
	}
]

var pattern = [
	{
		"name": "Pattern 1",
		"src": "img/pattern/pattern1.jpg"
	},
	{
		"name": "Pattern 2",
		"src": "img/pattern/pattern2.png"
	},
	{
		"name": "Pattern 2",
		"src": "img/pattern/pattern3.jpg"
	},
	{
		"name": "Pattern 1",
		"src": "img/pattern/pattern4.gif"
	},
	{
		"name": "Pattern 1",
		"src": "img/pattern/pattern5.jpg"
	}
]

var option = [
	{
		"id": "text_font_list",
		"type": "list",
		"parent": "text_font",
		"name": "Font name",
		"events": "applyFont",
		"size": "100-245",
		"list": [
			"Arial",
			"Inconsolata",
			"Pacifico",
			"Orbitron",
			"Exo",
			"Chewy",
			"Playball",
			"Tangerine",
			"Audiowide",
			"Niconne",
			"Frijole"
		]
	},
	{
		"id": "text_size_list",
		"type": "list",
		"parent": "text_size",
		"name": "Font size",
		"events": "applyFSize",
		"size": "100-245",
		"list": [
			10,
			12,
			14,
			16,
			18,
			24,
			36,
			48,
			56,
			72,
			99,
		]
	},
	{
		"id": "object_color_list",
		"type": "color",
		"parent": "object_color",
		"name": "Color Picker",
		"events": "applyColor",
		"size": "150-150",
		"list": [
			10,
			12,
			14,
			16,
			18,
			24,
			36,
			48,
			56,
			72,
			99,
		]
	},
]
/*
var feature = [
	{
		"idi": "add_image",
		"klass": "ico-btn draw-tool",
		"icon": "shake mif-image mif-2x",
		"name": "Image",
		"events": "addImage()"
	},
	{
		"idi": "add_vector",
		"klass": "ico-btn draw-tool",
		"icon": "mif-florist mif-2x",
		"name": "Vector",
		"events": "addVector()"
	},
	{
		"idi": "add_effect",
		"klass": "ico-btn draw-tool",
		"icon": "mif-magic-wand mif-2x",
		"name": "Effect",
		"events": "addEffect(this)"
	},
	{
		"idi": "add_text",
		"klass": "ico-btn draw-tool",
		"icon": "icon icon-font",
		"name": "Text",
		"events": "addText(this)"
	},
	{
		"idi": "add_shape",
		"klass": "ico-btn draw-tool",
		"icon": "mif-chart-pie mif-2x",
		"name": "Shape",
		"events": "addShape()"
	},
	{
		"idi": "create_Brush",
		"klass": "ico-btn draw-tool",
		"icon": "mif-pencil mif-2x",
		"name": "Brush",
		"events": "createBrush()"
	},
	{
		"idi": "create_layer",
		"klass": "ico-btn draw-tool",
		"icon": "mif-stack mif-2x",
		"name": "Layer",
		"events": "createLayer()"
	},
	{
		"idi": "save_design",
		"klass": "ico-btn draw-tool",
		"icon": "mif-cloud-upload mif-2x",
		"name": "Save",
		"events": "saveDesign()"
	},
	{
		"idi": "load_design",
		"klass": "ico-btn draw-tool",
		"icon": "mif-cloud-download mif-2x",
		"name": "Load",
		"events": "loadDesign()"
	}
]
*/