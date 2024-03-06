let guestarr : string[] = ["janan", "zain", "saad","haris"];
let haris :string = ("haris");
let jola :string = ("jola");
guestarr [guestarr.indexOf(haris)] = jola ;
//console.log(guestarr);
//guestarr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peples.`));
// Part Tow
let newone : string = ("inram");
guestarr.unshift(newone);
//console.log(guestarr);
let secondone : string = ("arman");
let middleIndex = guestarr.length/2;
guestarr.splice (middleIndex,0,secondone );
//console.log(guestarr);
guestarr.push("anas");
//console.log(guestarr);
guestarr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peples.`));