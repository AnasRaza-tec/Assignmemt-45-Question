let guest : string [] = ["janan", "zain", "saad", "hair"];
let newguest : string = ("jola");
let notattandguest : string = ("saad");
guest.unshift("imran", "arman");
guest[4]= newguest;
console.log(`mr ${notattandguest} sorry you not attend diner `);
console.log("Sorry i am invited 2 people.")
while(guest.length>2){
let remove_guest = guest.pop()
console.log(`Assamualikum ${ remove_guest } do you not invited`);   
}
for (let R=0; R<guest.length; R++){
console.log ("Assalamualikum " + guest[R] + " you will be invite to wedding.\n\nThank You\n")    
}
guest.splice(0,2);
console.log(guest);