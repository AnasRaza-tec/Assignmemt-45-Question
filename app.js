var guestarr = ["janan", "zain", "saad", "haris"];
var haris = "haris";
console.log("".concat(haris, " can not be invited to diner"));
var jola = "Imran";
guestarr[guestarr.indexOf(haris)] = jola;
console.log(guestarr);
guestarr.map(function (items) { return console.log("Dear ".concat(items, " , can be invite to diner")); });
