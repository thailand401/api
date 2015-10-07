Cell = function (type) {
    if(type=="fabric"){
        return {
            create : function(options){
                if(options.type == "i-text"){
                    return new fabric.IText(
                        options.text , options
                    );
                }
            }
        }
    }else{
        return null;
    }
};