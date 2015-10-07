jQuery(window).resize(function() {
	var height = jQuery(".main").height();
	var width = jQuery(".main").width();
	resizeDesigner(width, height);
});
function resizeDesigner(w, h){
	var fwidth = 0;
	if(w>h || w<=h){
		if(w<480){
			jQuery(".main").addClass("mobile");
			jQuery(".main").removeClass("desktop");
			jQuery(".leftcol").css("width",50);
			jQuery(".rightcol").css("width",50);
			fwidth = w-101;
		} else if(w<768){
			jQuery(".main").addClass("mobile");
			jQuery(".main").removeClass("desktop");
			jQuery(".leftcol").css("width",50);
			jQuery(".rightcol").css("width",50);
;
			fwidth = w-101;
		} else if(w<1366){
			jQuery(".main").removeClass("mobile");
			jQuery(".main").addClass("desktop");
			jQuery(".leftcol").css("width",100);
			jQuery(".rightcol").css("width",100);
			fwidth = w-201;
		} else{
			jQuery(".main").removeClass("mobile");
			jQuery(".main").addClass("desktop");
			jQuery(".leftcol").css("width",100);
			jQuery(".rightcol").css("width",100);
			fwidth = w-201;
		}
	}

	jQuery(".maincol").css("width",fwidth);
	jQuery("#board").css("width",fwidth);
	jQuery("#board").css("height", jQuery(".maincol").height() - jQuery(".topbar").height());
	if(view.canvas!=undefined){
		view.canvas.setWidth(fwidth);
		view.canvas.setHeight(jQuery(".maincol").height() - jQuery(".topbar").height());
	}
}
jQuery(document).ready(function(){
	for(var i=0; i<pattern.length; i++){
		if(i==0)
			jQuery("#add_text_bbar").append('<div class="item fleft btn-first"><img src="'+pattern[i].src+'" /></div>');
		else
			jQuery("#add_text_bbar").append('<div class="item fleft"><img src="'+pattern[i].src+'" /></div>');
	}
})
