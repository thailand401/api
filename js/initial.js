var control = new App();
var view = new Canvas("board");
var model = new Model();
var events = new Events();
addText = function(e){
	control.addText(e);
}
addImage = function(e){
	control.addImage(e);
}
fontSelect = function(e){
	jQuery(".list_1").hide();
	jQuery("#dropdown").css({
		top: jQuery(e).position().top+30,
		left: jQuery(e).position().left+80,
		width: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-w"),
		height: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-h"),
	})
	jQuery("#"+jQuery(e).attr("id")+"_list").show();
	jQuery("#dropdown").fadeIn();
	events.firstClick = true;
}
fontSize = function(e){
	jQuery(".list_1").hide();
	jQuery("#dropdown").css({
		top: jQuery(e).position().top+30,
		left: jQuery(e).position().left+80,
		width: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-w"),
		height: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-h"),
	})
	jQuery("#"+jQuery(e).attr("id")+"_list").show();
	jQuery("#dropdown").fadeIn();
	events.firstClick = true;
}
objectColor = function(e){
	jQuery(".list_1").hide();
	jQuery("#dropdown").css({
		top: jQuery(e).position().top+30,
		left: jQuery(e).position().left+80,
		width: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-w"),
		height: jQuery("#"+jQuery(e).attr("id")+"_list").attr("data-h"),
	})
	jQuery("#"+jQuery(e).attr("id")+"_list").show();
	jQuery("#dropdown").fadeIn();
	events.firstClick = true;
}
applyFont = function(e){
	v = events.getValue(e);
	control.changeText("fontFamily", v);
	setTimeout(function(){
        view.refresh();
    },500);
}
applyFSize = function(e){
	v = events.getValue(e);
	control.changeText("fontSize", v);
	events.updateValue(e,v);
}
changeBold = function(e){
	v = events.getValue(e);
	if(v=="") v = "bold"; else v = "";
	control.changeText("fontWeight", v);
	events.setValue(e,v);
}
changeItalic = function(e){
	v = events.getValue(e);
	if(v=="") v = "italic"; else v = "";
	control.changeText("fontStyle", v);
	events.setValue(e,v);
}
changeUnderline = function(e){
	v = events.getValue(e);
	if(v=="") v = "underline"; else v = "";//textDecoration: "line-through"
	control.changeText("textDecoration", v);
	events.setValue(e,v);
}
alignLeft = function(e){
	control.changeText("textAlign", "left");
	events.setValue(e,"left");
}
alignCenter = function(e){
	control.changeText("textAlign", "center");
	events.setValue(e,"center");
}
alignRight = function(e){
	control.changeText("textAlign", "right");
	events.setValue(e,"right");
}
textPattern = function(e){
	
}
newText = function(e){
	control.newText();
}
//----------------------------------------------Initial-------------------------------------------
Initsize = function(e){
	e.html("12");
}

//--------------------------------------------Load data from Json------------------------------------------
InitialEvent = function(){
	events.checkDropdown();
}
loadLayout = function(){
	var id;
	for(var l=0; l<layout.left.length;l++){
		for(var i=0; i<feature.length; i++){
			if(feature[i].idi == layout.left[l].id)
			{ 
				feature[i].unlock = false;
				jQuery(".leftcol .holder").eq(l).append('<div id="'+feature[i].idi+'" class="'+feature[i].klass+'" onclick="'+feature[i].events+'"><span class="'+feature[i].icon+'"></span><a>'+feature[i].name+'</a></div>');
				jQuery(".leftcol .holder").eq(l).attr("data",feature[i].idi);
				if(feature[i].child!=undefined){
					jQuery(".topbar_bg").append('<div id="'+feature[i].idi+'_bar" class="topbar_inside" style="width:'+feature[i].topsize+'px;display:none;"></div>');
					for(var j=0;j<feature[i].child.length;j++){
						if(j==0) fsbuton = "btn-first ";
						else fsbuton = "";
						jQuery("#"+feature[i].idi+"_bar").append('<div id="'+feature[i].child[j].idi+'" select="'+feature[i].child[j].select+'" remove="'+feature[i].child[j].remove+'" value="" class="'+feature[i].child[j].klass+' fleft '+fsbuton+feature[i].child[j].select+'" onclick="'+feature[i].child[j].events+'"><span class="'+feature[i].child[j].icon+'"></span></div>');
						if(feature[i].child[j].init!=undefined)
							eval(feature[i].child[j].init+'('+'jQuery("#'+feature[i].child[j].idi+'")'+')');
					}
				}
				break;
			}
		}
		
	}
	for(var l=0; l<layout.right.length;l++){
		for(var i=0; i<feature.length; i++){
			if(feature[i].idi == layout.right[l].id)
			{ 
				feature[i].unlock = false;
				jQuery(".rightcol .holder").eq(l).append('<div id="'+feature[i].idi+'" class="'+feature[i].klass+'" onclick="'+feature[i].events+'"><span class="'+feature[i].icon+'"></span><a>'+feature[i].name+'</a></div>');
				jQuery(".rightcol .holder").eq(l).attr("data",feature[i].idi);
				break;
			}
		}
	}
}
loadOption = function(){
	for(var i=0; i<option.length; i++){
		size = option[i].size.split('-');
		if(option[i].type=="list"){
			jQuery("#dropdown").append('<div data-h="'+size[1]+'" data-w="'+size[0]+'" id="'+option[i].id+'" class="list_1"><h4>'+option[i].name+'</h4><ul callback="'+option[i].events+'" parent="'+option[i].parent+'"></ul></div>');
			for (var j = 0; j < option[i].list.length; j++) {
				jQuery("#"+option[i].id+" ul").append('<li class="line'+(j%2)+'">'+option[i].list[j]+'</li>');
			};
		}
		else if(option[i].type=="color"){
			jQuery("#dropdown").append('<div data-h="'+size[1]+'" data-w="'+size[0]+'" id="'+option[i].id+'" class="list_1 color_picker" style="width:'+size[0]+'px;height:'+size[1]+'px;"><h4>'+option[i].name+'</h4></div>');
			createPicker(option[i].id, 6, function(){});
		}
		//eval(option[i].events);
	}
	jQuery("#dropdown .list_1 ul li").click(function(){
		pr = jQuery(this).parent().attr("parent");
		cb = jQuery(this).parent().attr("callback");
		jQuery("#"+pr).attr("value", jQuery(this).text() );
		eval(cb+'('+'jQuery("#'+pr+'")'+')');
		jQuery(this).parent().parent().parent().hide();
	})
}
createPicker = function(selector, size, callback){
	colortmp = ["#F3B200","#77B900","#2572EB","#AD103C","#2E1700","#4E0000","#4E0038","#2D004E","#1F0068","#001E4E","#004D60","#004A00","#15992A","#E56C19","#B81B1B","#B81B6C","#691BB8","#1B58B8","#569CE3","#00AAAA","#83BA1F","#D39D09","#E064B7","#00A3A3","#FE7C22"];
	padding = 2;
	e = jQuery("#"+selector);
	cwidth = (e.width()/size)-2*padding;
	for(var i=0;i<colortmp.length;i++){
		e.append('<div class="shake item" style="width:'+cwidth+'px; height:'+cwidth+'px; margin:'+padding+'px; background-color:'+colortmp[i]+'"></div>')
	}
}