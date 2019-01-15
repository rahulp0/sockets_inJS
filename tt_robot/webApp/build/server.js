"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var controllers_1 = require("./controllers");
var app = express.default();
var port = Number(process.env.PORT) || 3000;
app.use('/welcome', controllers_1.WelcomeController);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
