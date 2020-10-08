window.getDiagramSize = function () {
    var element = document.getElementById("canvas");
    var bounds = element.getBoundingClientRect();
    var size = {};
    size["X"] = bounds.left;
    size["Y"] = bounds.top;
    return size;
}