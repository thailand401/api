Model = function () {
    var id = 0;
    var list = [];
    var cell = Cell("fabric");
    this.create = function (options) {
        options["id"] = id;
        id++;
        tmp = cell.create(options);
        list.push(tmp);
        return tmp;
    };
    this.get = function (){
        return list;
    }
    return this;
};