var personNAME = "Eric";
console.log("uppercase :", personNAME.toUpperCase());
console.log("lowercase :", personNAME.toLowerCase());
console.log("tittle :", personNAME.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
