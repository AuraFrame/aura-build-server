var cDash = require("./controllers/cDash");
var gOpt = require("./controllers/gOpt");

var oOptionsConfig = cDash.get("gOpt.if");
var oOptions = gOpt.initialize(oOptionsConfig);
