// 초기화에 필요한 변수를 생성합니다. ( 2015-02-17 오후 01:52 )
var parsed_options;

// parsed_options 변수에 Object 개체를 대입합니다. ( 2015-02-17 오후 01:56 )
parsed_options = new (function(){
    // oThis 변수가 this를 가리키도록 정의합니다. ( 2015-02-17 오후 01:58 )
    var oThis = this;
    this.opt = {};

    function ArrayIndexOf(array, data){
        for(var i = 0, j = array.length; i < j; i++){
            if (array[i].match(data) != null)
                return i;
        }
        return -1;
    }

    // Initialize 함수는 패러미터로 전달받은 Object를 바탕으로 CA를 파싱합니다. ( 2015-02-17 오후 02:44 )
    // [Object] opts - 필요한 패러미터의 옵션을 전달받습니다.
    //                              arguments와 options 2가지의 루트키가 존재해야 하며, 그 안에는 또 다른 Object 개체가 필요합니다.
    this.initialize = function(opts){
        var argv = process.argv.slice(2); // process.argv는 명령문 모두를 출력하므로, 1, 2번째 값은 삭제합니다.
        var data = {}; // 반환할 값이 담길 변수를 미리 선언합니다.

        for(var x in opts.options){
            var d; data[x] = "";
            d = ArrayIndexOf(argv, new RegExp("--" + opts.options[x][1] + "=(.*)", "g"));
            if(d != -1){ data[x] = argv[d].replace("--" + opts.options[x][1] + "=", ""); continue; }
            d = ArrayIndexOf(argv, new RegExp("-" + opts.options[x][0] + "$", "g"));
            if(d != -1){ data[x] = argv[d + 1]; continue; }
        }
        oThis.opt = data;

        return oThis;
    };
});

module.exports = parsed_options;
