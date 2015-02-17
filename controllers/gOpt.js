// 초기화에 필요한 변수를 생성합니다. ( 2015-02-17 오후 01:52 )
var get-options;
var parsed-options;
var __matches = null;

// 축약함수를 정의합니다. ( 2015-02-17 오후 01:53 )
// Object 형식의 변수에 __hasProp을 사용합니다.
var  __hasProp = {}.hasOwnProperty;

// parsed-options 변수에 Object 개체를 대입합니다. ( 2015-02-17 오후 01:56 )
parsed-options = (function(){
    // oThis 변수가 this를 가리키도록 정의합니다. ( 2015-02-17 오후 01:58 )
    var oThis = this;

    // ParsedOption이라는 함수를 정의합니다. ( 2015-02-17 오후 01:58 )
    // 각 패러미터들은 parsed-options에 저장됩니다.
    // [Array] args - Command Arguments를 모두 파싱한 뒤, 그 값을 전달받습니다.
    // [Object] options - CA에서 옵션 내용을 모두 파싱한 뒤, 그 값을 전달받습니다.
    function ParsedOption(args, options){
        oThis.argv = args;
        oThis.option = options;
    }
});
