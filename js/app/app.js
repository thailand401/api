App = function () {

    this.addImage = function (e) {
		jQuery(".topbar_inside").hide();
		jQuery("#"+jQuery(e).attr("id")+"_bar").show();
		jQuery("#"+jQuery(e).attr("id")+"_bar").parent().fadeIn();
		jQuery("#"+jQuery(e).attr("id")+"_bbar").show();
    };
    this.addText = function(e){
		jQuery(".topbar_inside").hide();
		jQuery("#"+jQuery(e).attr("id")+"_bar").show();
		jQuery("#"+jQuery(e).attr("id")+"_bar").parent().fadeIn();
		jQuery("#"+jQuery(e).attr("id")+"_bbar").show();
    };
    this.changeText = function(name, e){
		obj = view.getActiveObject();
		if(obj == null) return;
		eval('obj.'+name+'='+'"'+e+'";');
		view.refresh();
    };
    this.newText = function(e){
	    cell = model.create({
	    		type : "i-text",
				text : 'New text',
				left: jQuery("#board").width()/2,
			    top: jQuery("#board").height()/2,
			    fontFamily: 'arial',
			    fill: '#333',
			});
	    view.add(cell);
    };
    return this;
};