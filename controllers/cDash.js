// cDash를 사용하기 위한 라이브러리를 참조합니다. ( 2015-02-17 오후 02:08 )
var fs = require("./cDash/cFileSystem");

var cDash = (function(ef){
    this.get = function(conf_url){
        var data = ef.readFile("configs/" + conf_url);
        if(data !== null)
            return ef.JSON(data);
        else
            return {};
    }
})(fs);
