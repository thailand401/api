Events = function(){
	this.isDropdown = false;
	this.firstClick = false;
	this.textToolbar = function(){

	}
	this.getValue = function(e){
		return $(e).attr("value");
	}
	this.setValue = function(e,v){
		$(e).attr("value", v);
		$("."+$(e).attr("select")).removeClass($(e).attr("remove"));
		$(e).addClass(v);
	}
	this.updateValue = function(e,v){
		$(e).html(v);
	}
	this.checkDropdown = function(){
		ev = this;
		$("#dropdown").hover(function(){
			ev.isDropdown = true;
		},function(){
			ev.isDropdown = false;
		})
		$("body").click(function(){
			if(ev.firstClick == false){
				if($("#dropdown").css("display")=="block"){
					$("#dropdown").fadeOut();
				}
			}else{
				ev.firstClick = false;
			}
		})
	}
	this.onSelectObect = function(e){
		if(e.type=="i-text"){
			this.setTextObject(e);
		}
	}
	//--------------------------Binding Object to UI---------------------------//
	this.setTextObject = function(e){
		console.log(e);
		this.resetText();
		$(".text_bold").addClass(e.fontWeight);
		$(".text_italic").addClass(e.fontStyle);
		$(".text_line").addClass(e.textDecoration);
		$("#align_"+e.textAlign).addClass(e.textAlign);
		$("#text_size").text(e.fontSize);
	}
	this.resetText = function(){
		$(".text_bold").removeClass("bold");
		$(".text_italic").removeClass("italic");
		$(".text_line").removeClass("underline");
		$(".text_align").removeClass("left").removeClass("center").removeClass("right");
		$("#text_size").text(12);
	}
}