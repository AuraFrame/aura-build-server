// cFileSystem은 Node.js의 기본 라이브러리인 fs의 확장 솔루션 입니다.
// 본 라이브러리를 재배포 하시려면, 아우라 프레임워크( http://www.auraframe.ml/ )에 문의해 주세요.

// 기본 라이브러리인 fs를 참조합니다. ( 2015-02-17 오후 02:12 )
var fs = require("fs");

var cFileSystem = (function(ef){
    // 일반 텍스트 파일을 읽어내는 함수입니다. ( 2015-02-17 오후 02:17 )
    this.readFile = function(url){
        // 파일의 존재여부를 확인합니다.
        if(ef.existsSync(url) == true)
            return ef.readFileSync(url); // 파일이 존재한다면, readFileSync함수를 사용하여 파일을 읽고, 그 값을 반환합니다.
        else
            return null; // 파일이 존재하지 않을경우, null을 반환합니다.
    };

    // 데이터를 읽어들여 Object 형식이나 String 형식으로 반환합니다.
    this.JSON = function(data){
        if(typeof data === "object") // data의 형식이 Object일 경우, encode한 값을 반환합니다.
            return JSON.stringify(data);
        else if(typeof data === "string") // data의 형식이 String일 경우, deconde한 값을 반환합니다.
            return JSON.parse(data);
    }
})(fs);

module.exports = cFileSystem;
