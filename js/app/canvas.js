Canvas = function (el) {
	this.id = el;
	jQuery("#"+el).append('<canvas id="c" ></canvas>');//backgroundColor: 'rgb(100,100,200)',
    this.canvas = new fabric.Canvas('c',{ height: jQuery("#"+el).height(), width: jQuery("#"+el).width() });

    this.canvas.on('object:selected', function(options) {
        events.onSelectObect(options.target);
    });
    this.canvas.on('selection:cleared', function(options) {
        events.resetText();
    });
    this.add = function (el) {
    	this.canvas.add(el);
    	this.canvas.renderAll();
        //alert("added new element");        
    };

    this.render = function (data) {
        this.canvas._objects = data;
        this.canvas.renderAll();       
    };
    this.refresh = function(){
        this.canvas.renderAll();   
    }
    this.getActiveObject = function () {
        return this.canvas.getActiveObject();
    }

    return this;
};