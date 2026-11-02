const emitter = require("../events/emitter");
const logFile = require("../helpers/logHelper");


emitter.on("page:success", () => {
    logFile("pageLoadSuccess", "File is Loaded");
});

emitter.on("page:fail", () => {
    logFile("pageLoadFail", "File is not Loaded");
})