 let guestarr : string[] = ["janan","zain","saad","haris"];
 let haris : string = "haris"
console.log(`${haris} can not be invited to diner`);
 let jola : string = "Imran"
guestarr [guestarr.indexOf(haris)] = jola ; 
console.log(guestarr); 
guestarr.map((items) => console.log(`Dear ${items} , can be invite to diner`));
