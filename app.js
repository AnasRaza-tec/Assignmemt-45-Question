var guest = ["janan", "zain", "saad", "hair"];
var newguest = ("jola");
var notattandguest = ("saad");
guest.unshift("imran", "arman");
guest[4] = newguest;
console.log("mr ".concat(notattandguest, " sorry you not attend diner "));
console.log("Sorry i am invited 2 people.");
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("Assamualikum ".concat(remove_guest, " do you not invited"));
}
for (var R = 0; R < guest.length; R++) {
    console.log("Assalamualikum " + guest[R] + " you will be invite to wedding.\n\nThank You\n");
}
guest.splice(0, 2);
console.log(guest);
