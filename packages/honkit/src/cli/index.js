const buildEbook = require("./buildEbook");

module.exports = [
    require("./build"),
    require("./serve"),
    require("./parse"),
    require("./init"),
    buildEbook("pdf"),
    buildEbook("epub"),
    buildEbook("mobi"),
];
