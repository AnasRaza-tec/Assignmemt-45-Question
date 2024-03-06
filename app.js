var guestarr = ["janan", "zain", "saad", "haris"];
var haris = ("haris");
var jola = ("jola");
guestarr[guestarr.indexOf(haris)] = jola;
//console.log(guestarr);
//guestarr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peples.`));
// Part Tow
var newone = ("inram");
guestarr.unshift(newone);
//console.log(guestarr);
var secondone = ("arman");
var middleIndex = guestarr.length / 2;
guestarr.splice(middleIndex, 0, secondone);
//console.log(guestarr);
guestarr.push("anas");
console.log(guestarr);
//guestarr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peples.`));
