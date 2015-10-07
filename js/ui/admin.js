var curholder;
jQuery(document).ready(function(){
	jQuery(window).resize();
	loadLayout();
	loadFeature();
	jQuery( ".ico-btn.true" ).draggable({ revert: true, helper: "clone" });
	jQuery( ".holder" ).droppable({
		drop: function( event, ui ) {
			jQuery(this).html("");
			id = parseInt(jQuery(ui.draggable).attr('data'));
			jQuery(this).append('<div id="'+feature[id].idi+'" class="'+feature[id].klass+' '+feature[id].unlock+'" onclick="'+feature[id].events+'"><span class="'+feature[id].icon+'"></span><a>'+feature[id].name+'</a></div>');
			jQuery(this).attr("data",feature[id].idi);
			//console.log(feature[id]);
		}
	});
	jQuery( ".holder" ).mousedown(function(e){
		if( e.button == 2 ) { 
	    	$(".submenu").css({top: e.pageY, left: e.pageX});
	    	$(".submenu").fadeIn();
	    	curholder = this;
	    } 
	})
	//Pattern loading -------------------------------
	for(var i=0; i<pattern.length; i++){
		if(i==0)
			jQuery("#add_text_bbar").append('<div class="item fleft btn-first"><img src="'+pattern[i].src+'" /></div>');
		else
			jQuery("#add_text_bbar").append('<div class="item fleft"><img src="'+pattern[i].src+'" /></div>');
	}
})
function loadFeature(){
	jQuery("#feature").html("");
	for(var i=0; i<feature.length; i++){
		jQuery("#feature").append('<div data="'+i+'" id="'+feature[i].idi+'" class="'+feature[i].klass+' '+feature[i].unlock+'"><span class="'+feature[i].icon+'"></span><a>'+feature[i].name+'</a></div>');
	}
	jQuery( ".ico-btn.true" ).draggable({ revert: true, helper: "clone" });
}
function addText(e){
	jQuery(".topbar_inside").hide();
	jQuery("#"+jQuery(e).attr("id")+"_bar").show();
	jQuery("#"+jQuery(e).attr("id")+"_bar").parent().fadeIn();
	jQuery("#"+jQuery(e).attr("id")+"_bbar").show();
}
function addEffect(e){
	jQuery(".topbar_inside").hide();
	jQuery("#"+jQuery(e).attr("id")+"_bar").show();
	jQuery("#"+jQuery(e).attr("id")+"_bar").parent().fadeIn();
}
function saveLayout(){
	var left_data = [];
	jQuery(".leftcol .holder .ico-btn.true").each(function(){
		left_data.push({
			id: jQuery(this).attr("id")
		})
	})
	var right_data = [];
	jQuery(".rightcol .holder .ico-btn.true").each(function(){
		right_data.push({
			id: jQuery(this).attr("id")
		})
	})
	alert("save?");
	layout = {
		left: left_data,
		right: right_data
	}
	$.get("savelayout.php",{data:JSON.stringify(layout)}, function(res){
		alert(res);
	})
}
function loadLayout(){
	var id;
	for(var l=0; l<layout.left.length;l++){
		for(var i=0; i<feature.length; i++){
			if(feature[i].idi == layout.left[l].id)
			{ 
				feature[i].unlock = false;
				jQuery(".leftcol .holder").eq(l).append('<div id="'+feature[i].idi+'" class="'+feature[i].klass+'" onclick="'+feature[i].events+'"><span class="'+feature[i].icon+'"></span><a>'+feature[i].name+'</a></div>');
				jQuery(".leftcol .holder").eq(l).attr("data",feature[i].idi);
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
function deleteFunc(e){
	for(var i=0; i<feature.length; i++){
		if( feature[i].idi == jQuery(curholder).attr("data") )
		{ 
			feature[i].unlock = true;
			jQuery(curholder).html("");
			loadFeature();
			break;
		}
	}
	exit(e);
}
function exit(e){
	jQuery(e).parent().hide();
}

//------------------------------------Window resize
jQuery(window).resize(function() {
	var height = jQuery(".main").height();
	var width = jQuery(".main").width();
	resizeDesigner(width, height);
});
function resizeDesigner(w, h){
	if(w>h || w<=h){
		if(w<480){
			jQuery(".main").addClass("mobile");
			jQuery(".main").removeClass("desktop");
			jQuery(".leftcol").css("width",50);
			jQuery(".rightcol").css("width",50);
			jQuery(".maincol").css("width",w-101);
		} else if(w<768){
			jQuery(".main").addClass("mobile");
			jQuery(".main").removeClass("desktop");
			jQuery(".leftcol").css("width",50);
			jQuery(".rightcol").css("width",50);
			jQuery(".maincol").css("width",w-101);
		} else if(w<1366){
			jQuery(".main").removeClass("mobile");
			jQuery(".main").addClass("desktop");
			jQuery(".leftcol").css("width",100);
			jQuery(".rightcol").css("width",100);
			jQuery(".maincol").css("width",w-201);
		} else{
			jQuery(".main").removeClass("mobile");
			jQuery(".main").addClass("desktop");
			jQuery(".leftcol").css("width",100);
			jQuery(".rightcol").css("width",100);
			jQuery(".maincol").css("width",w-201);
		}
	}
}